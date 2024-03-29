import React from 'react';
import renderer from 'react-test-renderer';

import questions from '../../mocks/questions';
import createNodeMock from '../../mocks/test-utility';
import GenreQuestionScreen from './genre-question-screen';

describe(`Проверка <GenreQuestionScreen>`, () => {
  it(`компонент <GenreQuestionScreen> корректно отрисован`, () => {
    const question = 0;
    const currentQuestion = questions[question];
    const handleAnswer = jest.fn();
    const options = {createNodeMock};

    const tree = renderer
      .create(<GenreQuestionScreen
        question = {currentQuestion}
        onAnswer = {handleAnswer}
      />, options)
      .toJSON();

    expect(tree).toMatchSnapshot();
  });
});
