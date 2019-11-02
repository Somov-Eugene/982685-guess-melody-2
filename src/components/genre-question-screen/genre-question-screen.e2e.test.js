import React from 'react';
import Enzyme, {shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import questions from '../../mocks/questions';
import GenreQuestionScreen from './genre-question-screen';

Enzyme.configure({adapter: new Adapter()});

describe(`Проверка <GenreQuestionScreen>`, () => {
  it(`пользователь выбрал варианты ответов`, () => {
    const question = 0;
    const currentQuestion = questions[question];
    const handleAnswer = jest.fn();

    const genreQuestion = shallow(<GenreQuestionScreen
      question = {currentQuestion}
      onAnswer = {handleAnswer}
    />);

    genreQuestion.find(`.game__input`).at(1).simulate(`change`);
    genreQuestion.find(`.game__input`).at(2).simulate(`change`);
    genreQuestion.find(`form`).simulate(`submit`, {preventDefault: () => {}});

    expect(handleAnswer).toHaveBeenCalledTimes(1);
  });
});
