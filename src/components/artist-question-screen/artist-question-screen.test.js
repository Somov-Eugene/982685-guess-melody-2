import React from 'react';
import renderer from 'react-test-renderer';

import questions from '../../mocks/questions';
import ArtistQuestionScreen from './artist-question-screen';

describe(`Проверка <ArtistQuestionScreen>`, () => {
  it(`компонент <ArtistQuestionScreen> корректно отрисован`, () => {
    const question = 1;
    const currentQuestion = questions[question];
    const handleAnswer = jest.fn();

    const tree = renderer
      .create(<ArtistQuestionScreen
        question = {currentQuestion}
        onAnswer = {handleAnswer}
      />)
      .toJSON();

    expect(tree).toMatchSnapshot();
  });
});
