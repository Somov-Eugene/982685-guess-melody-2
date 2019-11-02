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

  window.HTMLMediaElement.prototype.load = () => { /* do nothing */ };
  window.HTMLMediaElement.prototype.play = () => { /* do nothing */ };
  window.HTMLMediaElement.prototype.pause = () => { /* do nothing */ };
  window.HTMLMediaElement.prototype.addTextTrack = () => { /* do nothing */ };

  beforeEach(() => {
    audioPlayer = mount(<AudioPlayer
      src = {src}
      isPlaying = {false}
      onPlayButtonClick = {handleClick}
    />);

    btn = audioPlayer.find(`.track__button`);
  });

  it(`начальное состояние компонента: аудиофайл не проигрывается`, () => {
    audioPlayer.setState({isLoading: false});
    expect(audioPlayer.state(`isPlaying`)).toBe(false);
  });

  it(`при нажатии на кнопку «Воспроизведение» у компонента изменится состояние на «воспроизведение»`, () => {
    audioPlayer.update();
    btn.at(0).simulate(`click`);
    audioPlayer.setState({isPlaying: true});
    expect(audioPlayer.state(`isPlaying`)).toBe(true);
  });

  it(`повторный клик изменит состояние на «пауза»`, () => {
    audioPlayer.update();
    btn.at(0).simulate(`click`);
    audioPlayer.setState({isPlaying: false});
    expect(audioPlayer.state(`isPlaying`)).toBe(false);
  });
});
