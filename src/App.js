import React, {Component} from 'react';
import {connect} from 'react-redux';
import './App.css';

import GuessedWords from './Components/GuessedWords/GuessedWords';
import Congrats from './Components/Congrats/Congrats';
import Input from '../src/Components/Input/Input';
import {getSecretWord} from './actions';

export class UnconnectedApp extends Component {
  componentDidMount() {
    // get the secret word
    this.props.getSecretWord();
  }

  render() {
    return (
      <div className="container">
        <h1>Jotto</h1>
        <Congrats success={this.props.success} />
        <Input />
        <GuessedWords guessedWords={this.props.guessedWords} />
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  const { success, guessedWords, secretWord } = state;
  return { success, guessedWords, secretWord };
}

export default connect(mapStateToProps, {getSecretWord})(UnconnectedApp);
