import React from 'react';
import Enzyme, {shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import GenreQuestionScreen from './genre-question-screen';
import questions from '../../mocks/questions';

Enzyme.configure({adapter: new Adapter()});

describe(`Проверка <GenreQuestionScreen>`, () => {
  it(`пользователь выбрал варианты ответов`, () => {
    const question = 0;
    const currentQuestion = questions[question];
    const handlerAnswer = jest.fn();

    const genreQuestion = shallow(<GenreQuestionScreen
      screenIndex = {question}
      question = {currentQuestion}
      onAnswer = {handlerAnswer}
    />);

    genreQuestion.find(`.game__input`).at(1).simulate(`change`);
    genreQuestion.find(`.game__input`).at(2).simulate(`change`);
    genreQuestion.find(`form`).simulate(`submit`, {preventDefault: () => {}});

    expect(handlerAnswer).toHaveBeenCalledTimes(1);
  });
});
