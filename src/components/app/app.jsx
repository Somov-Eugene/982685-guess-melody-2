import React from 'react';
import PropTypes from 'prop-types';

import WelcomeScreen from '../welcome-screen/welcome-screen.jsx';
import GenreQuestionScreen from '../genre-question-screen/genre-question-screen.jsx';
import ArtistQuestionScreen from '../artist-question-screen/artist-question-screen.jsx';

class App extends React.PureComponent {
  static getScreen(question, props, onUserAnswer) {
    if (question === -1) {
      const {
        gameTime,
        errorCount,
      } = props;

      return <WelcomeScreen
        time = {gameTime}
        errorCount = {errorCount}
        onStartButtonClick = {onUserAnswer}
      />;
    }

    const {questions} = props;
    const currentQuestion = questions[question];

    switch (currentQuestion.type) {
      case `genre`:
        return <GenreQuestionScreen
          screenIndex = {question}
          question = {currentQuestion}
          onAnswer = {onUserAnswer}
        />;

      case `artist`:
        return <ArtistQuestionScreen
          screenIndex = {question}
          question = {currentQuestion}
          onAnswer = {onUserAnswer}
        />;
    }

    return null;
  }

  constructor(props) {
    super(props);

    this.state = {
      question: -1,
    };
  }

  render() {
    const {questions} = this.props;
    const {question} = this.state;

    return App.getScreen(question, this.props, () => {
      this.setState((prevState) => {
        const nextIndex = prevState.question + 1;
        const isEnd = (nextIndex >= questions.length);

        return {
          question: !isEnd ? nextIndex : -1,
        };
      });
    });
  }

}

App.propTypes = {
  gameTime: PropTypes.number.isRequired,
  errorCount: PropTypes.number.isRequired,
  questions: PropTypes.arrayOf(
      PropTypes.oneOfType([
        PropTypes.shape({
          type: PropTypes.oneOf([`genre`]).isRequired,
          genre: PropTypes.oneOf([`jazz`, `blues`, `pop`, `rock`, `folk`]),
          answers: PropTypes.arrayOf(
              PropTypes.shape({
                src: PropTypes.string.isRequired,
                genre: PropTypes.oneOf([`jazz`, `blues`, `pop`, `rock`, `folk`])
              }).isRequired
          ).isRequired,
        }).isRequired,
        PropTypes.shape({
          type: PropTypes.oneOf([`artist`]).isRequired,
          song: PropTypes.shape({
            artist: PropTypes.string.isRequired,
            src: PropTypes.string.isRequired
          }).isRequired,
          answers: PropTypes.arrayOf(
              PropTypes.shape({
                picture: PropTypes.string.isRequired,
                artist: PropTypes.string.isRequired
              }).isRequired
          ).isRequired
        }).isRequired
      ]).isRequired
  ).isRequired
};

export default App;
