import React, { Component } from 'react';
import { GlobalStyle } from './GlobalStyles';

import { Statistics } from 'components/Statistics/Statistics';
import { FeedbackOptions } from 'components/Feedback/FeedbackOptions';
import { Section } from 'components/Section/Section';
import { Notification } from 'components/Notification/Notification';

export class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  handleFeedback = property => {
    this.setState(prevState => ({
      [property]: prevState[property] + 1,
    }));
  };

  countTotalFeedback = () => {
    const { good, neutral, bad } = this.state;
    return good + neutral + bad;
  };

  countPositiveFeedbackPercentage = () => {
    const { good, neutral, bad } = this.state;
    const total = good + neutral + bad;
    return total > 0 ? Math.round((100 / total) * good) : 0;
  };

  render() {
    const keys = Object.keys(this.state);
    const { good, neutral, bad } = this.state;
    return (
      <div
        style={{
          height: '100vh',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          fontSize: 30,
          color: '#010101',
          backgroundColor: '#FFF0F5',
          maxWidth: '100 %',
          padding: '20px',
          margin: '0 auto',
        }}
      >
        <Section title="Please leave feedback">
          <FeedbackOptions
            options={keys}
            onLeaveFeedback={this.handleFeedback}
          />
        </Section>
        <Section title="Statistics">
          {this.countTotalFeedback() !== 0 ? (
            <Statistics
              good={good}
              neutral={neutral}
              bad={bad}
              total={this.countTotalFeedback()}
              positivePercentage={this.countPositiveFeedbackPercentage()}
            />
          ) : (
            <Notification message="There is no feedback"></Notification>
          )}
        </Section>
        <GlobalStyle />
      </div>
    );
  }
};

