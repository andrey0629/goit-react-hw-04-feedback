import { useState } from 'react';
import { AppContainer } from './StyledComponents/App.styled';
import FeedbackOptions from './FeedbackOptions';
import Statistics from './Statistics';
import Section from './Section';
import Notification from './Notification';

export function App() {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const handleClick = e => {
    const { name } = e.target;
    switch (name) {
      case 'good':
        setGood(good + 1);
        break;
      case 'neutral':
        setNeutral(neutral + 1);
        break;
      case 'bad':
        setBad(bad + 1);
        break;
      default:
        return;
    }
  };

  const countTotalFeedback = () => {
    return good + neutral + bad;
  };
  const countPositiveFeedbackPercentage = () => {
    const totalFeedback = countTotalFeedback();
    return totalFeedback === 0 ? 0 : Math.round((good / totalFeedback) * 100);
  };
  const totalFeedback = countTotalFeedback();
  const positiveFeedbackPercentaga = countPositiveFeedbackPercentage() + '%';
  const feedbackOptions = Object.keys({ good, neutral, bad });
  const statisticsOptions = {
    good,
    neutral,
    bad,
    totalFeedback,
    positiveFeedbackPercentaga,
  };

  return (
    <AppContainer>
      <Section title="Please leave feedback">
        <FeedbackOptions
          options={feedbackOptions}
          onLeaveFeedback={handleClick}
        />
      </Section>
      {totalFeedback === 0 ? (
        <Notification message="There is no feedback" />
      ) : (
        <Section title="Statistics">
          <Statistics options={statisticsOptions} />
        </Section>
      )}
    </AppContainer>
  );
}
