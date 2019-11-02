import React from 'react';
import {configure, mount} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import questions from '../../mocks/questions';
import AudioPlayer from './audio-player.jsx';

configure({adapter: new Adapter()});

describe(`Проверка <AudioPlayer>`, () => {
  const question = 0;
  const currentQuestion = questions[question];
  const src = currentQuestion.answers[0].src;
  const handleClick = jest.fn();

  let audioPlayer = null;
  let btn = null;

  beforeEach(() => {
    audioPlayer = mount(<AudioPlayer
      src = {src}
      isPlaying = {false}
      onPlayButtonClick = {handleClick}
    />);

    btn = audioPlayer.find(`.track__button`);
  });

  it(`начальное состояние компонента: аудиофайл не проигрывается`, () => {
    expect(audioPlayer.state(`isPlaying`)).toBe(false);
  });

  it(`при нажатии на кнопку «Воспроизведение» у компонента изменится состояние на «воспроизведение»`, () => {
    audioPlayer.update();
    btn.simulate(`click`);
    audioPlayer.setState({isPlaying: true});
    expect(audioPlayer.state(`isPlaying`)).toBe(true);
  });

  it(`повторный клик изменит состояние на «пауза»`, () => {
    audioPlayer.update();
    btn.simulate(`click`);
    audioPlayer.setState({isPlaying: false});
    expect(audioPlayer.state(`isPlaying`)).toBe(false);
  });
});
