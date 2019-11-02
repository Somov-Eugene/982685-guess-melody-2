import React from 'react';
import Enzyme, {shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import ArtistQuestionScreen from './artist-question-screen';
import questions from '../../mocks/questions';

Enzyme.configure({adapter: new Adapter()});

describe(`Проверка <ArtistQuestionScreen>`, () => {
  it(`пользователь выбрал вариант ответа`, () => {
    const question = 1;
    const currentQuestion = questions[question];
    const handleAnswer = jest.fn();

    const artistQuestion = shallow(<ArtistQuestionScreen
      question = {currentQuestion}
      onAnswer = {handleAnswer}
    />);

    const form = artistQuestion.find(`.game__artist`);
    form.simulate(`change`);

    expect(handleAnswer).toHaveBeenCalledTimes(1);
  });
});
