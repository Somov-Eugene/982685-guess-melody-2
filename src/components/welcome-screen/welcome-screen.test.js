import React from "react";
import renderer from "react-test-renderer";
import WelcomeScreen from "./welcome-screen";

describe(`Проверка <WelcomeScreen>`, () => {
  it(`компонент <WelcomeScreen> корректно отрисован`, () => {
    const handlerClick = jest.fn();

    const tree = renderer
      .create(<WelcomeScreen
        time = {5}
        errorCount = {3}
        onStartButtonClick = {handlerClick} />)
      .toJSON();

    expect(tree).toMatchSnapshot();
  });
});
