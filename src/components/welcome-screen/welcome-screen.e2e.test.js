import React from "react";
import Enzyme, {shallow} from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import WelcomeScreen from "./welcome-screen";

Enzyme.configure({adapter: new Adapter()});

describe(`Проверка <WelcomeScreen>`, () => {
  it(`нажата кнопка СТАРТ`, () => {
    const handlerClick = jest.fn();

    const welcomeScreen = shallow(<WelcomeScreen
      time = {5}
      errorCount = {3}
      onStartButtonClick = {handlerClick}
    />);

    const startButton = welcomeScreen.find(`.welcome__button`);

    startButton.simulate(`click`);
    expect(handlerClick).toHaveBeenCalledTimes(1);
  });
});
