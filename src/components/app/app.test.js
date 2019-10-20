import React from "react";
import renderer from "react-test-renderer";
import App from "./app";

describe(`Проверка <App>`, () => {
  it(`компонент <App> корректно отрисован`, () => {
    const tree = renderer.create(<App gameTime = {5} errorsCount = {3} />).toJSON();

    expect(tree).toMatchSnapshot();
  });
});
