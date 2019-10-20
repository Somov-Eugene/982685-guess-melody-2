import React from "react";
import Enzyme, {shallow} from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import WelcomeScreen from "./welcome-screen";

Enzyme.configure({adapter: new Adapter()});

describe(`Проверка <WelcomeScreen>`, () => {
  it(`нажата кнопка СТАРТ`, () => {
    const handleClick = jest.fn();
    const tree = shallow(<WelcomeScreen gameTime = {5} errorsCount = {3} onClickStartButton = {handleClick} />);
    const welcomeButton = tree.find(`.welcome__button`);

    welcomeButton.simulate(`click`);
    expect(handleClick).toHaveBeenCalledTimes(1);
  });
});
