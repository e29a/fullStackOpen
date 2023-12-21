import { useState } from 'react'

const Button = ({ text, onClick }) => <button onClick={onClick}>{text}</button>;

const StatisticLine = ({ text, statistic }) => <p>{text}: {statistic}</p>;

const Statistics = ({data}) => {
  return (
    <>
      <StatisticLine text="good" statistic={data[0]} />
      <StatisticLine text="neutral" statistic={data[1]} />
      <StatisticLine text="bad" statistic={data[2]} />
      <StatisticLine text="Average" statistic={data[3]} /> 
      <StatisticLine text="Positive" statistic={data[4]} />
    </>
  )
}

const App = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);
  
  let total = good + neutral + bad;
  let average = total === 0 ? 0 : ((bad * -1) + (good * 1)) / total;
  let positive = total === 0 ? 0 : (good/total) * 100

  if(total == 0){
    return (
      <>
        <h1>Give feedback</h1>
        <Button text="good" onClick={() => setGood(good + 1)} />
        <Button text="neutral" onClick={() => setNeutral(neutral + 1)} />
        <Button text="bad" onClick={() => setBad(bad + 1)} />
        <h1>Statistics</h1>
        <p> No Feedback Given</p>
      </>
    )
  }

  return (
    <div>
      <h1>Give feedback</h1>
      <Button text="good" onClick={() => setGood(good + 1)} />
      <Button text="neutral" onClick={() => setNeutral(neutral + 1)} />
      <Button text="bad" onClick={() => setBad(bad + 1)} />
      <h1>Statistics</h1>
      <Statistics data={[good, neutral, bad, average, positive]} />
    </div>
  );
}

export default App;
