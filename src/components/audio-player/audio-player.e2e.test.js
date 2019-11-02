import React from 'react';
import {configure, shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import questions from '../../mocks/questions';
import AudioPlayer from './audio-player.jsx';

configure({adapter: new Adapter()});

describe(`Проверка <AudioPlayer>`, () => {
  const question = 0;
  const currentQuestion = questions[question];
  const src = currentQuestion.answers[0].src;
  const handleClick = jest.fn();

  const audioPlayer = shallow(<AudioPlayer
    src = {src}
    isPlaying = {false}
    onPlayButtonClick = {handleClick}
  />
  );

  const btn = audioPlayer.find(`track__button`);

  it(`при нажатии на кнопку «Воспроизведение» у компонента изменится состояние на «воспроизведение»`, () => {
    btn.simulate(`click`);
    expect(audioPlayer.state().isPlaying).toEqual(true);
  });

  it(`повторный клик изменит состояние на «пауза»`, () => {
    btn.simulate(`click`);
    expect(audioPlayer.state().isPlaying).toEqual(false);
  });
});
