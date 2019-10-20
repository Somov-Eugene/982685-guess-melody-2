import React from 'react';
import PropTypes from 'prop-types';
import WelcomeScreen from '../welcome-screen/welcome-screen.jsx';

const App = (props) => {
  const {gameTime, errorsCount} = props;
  const handleClickStartButton = () => {};

  return <WelcomeScreen
    gameTime = {gameTime}
    errorsCount = {errorsCount}
    onClickStartButton = {handleClickStartButton}
  />;
};

App.propTypes = {
  gameTime: PropTypes.number.isRequired,
  errorsCount: PropTypes.number.isRequired
};

export default App;
