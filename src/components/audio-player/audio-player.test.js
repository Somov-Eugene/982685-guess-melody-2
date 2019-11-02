import React from 'react';
import renderer from 'react-test-renderer';

import questions from '../../mocks/questions';
import createNodeMock from '../../mocks/test-utility';
import AudioPlayer from './audio-player';

describe(`Проверка <AudioPlayer>`, () => {
  it(`компонент <AudioPlayer> корректно отрисован`, () => {
    const question = 0;
    const currentQuestion = questions[question];
    const src = currentQuestion.answers[0].src;

    const handleClick = jest.fn();
    const options = {createNodeMock};

    const tree = renderer
      .create(<AudioPlayer
        src = {src}
        isPlaying = {false}
        onPlayButtonClick = {handleClick}
      />, options)
      .toJSON();

    expect(tree).toMatchSnapshot();
  });
});
