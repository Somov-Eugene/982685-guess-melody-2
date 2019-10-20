import React from "react";
import renderer from "react-test-renderer";
import WelcomeScreen from "./welcome-screen";

describe(`Проверка <WelcomeScreen>`, () => {
  it(`компонент <WelcomeScreen> корректно отрисован`, () => {
    const handleClick = jest.fn();
    const tree = renderer
      .create(<WelcomeScreen
        gameTime = {5}
        errorsCount = {3}
        onClickStartButton = {handleClick} />)
      .toJSON();

    expect(tree).toMatchSnapshot();
  });
});
