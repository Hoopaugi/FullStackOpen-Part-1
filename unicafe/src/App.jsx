import { useState } from 'react'

const Header = ({ text }) => {
  return (
    <h1>{text}</h1>
  )
}

const Button = ({ text, onClick }) => {
  return (
    <button onClick={onClick}>{text}</button>
  )
}

const Statistics = ({ good, neutral, bad }) => {
  const all = good + neutral + bad

  const average = ((good*1 + bad*-1) / all).toFixed(1)

  const positive = `${(good / all*100).toFixed(1)} %`

  if (all > 0) {
    return (
      <>
        <Header text={'statistics'} />
        <table>
          <tbody>
            <StatisticLine text={'good'} value={good} />
            <StatisticLine text={'neutral'} value={neutral} />
            <StatisticLine text={'bad'} value={bad} />
            <StatisticLine text={'all'} value={all} />
            <StatisticLine text={'average'} value={average} />
            <StatisticLine text={'positive'} value={positive} />
          </tbody>
        </table>
      </>
    )
  } else {
    return (
      <>
        <Header text={'statistics'} />
        <p>No feedback given</p>
      </>
    )
  }
}

const StatisticLine = ({ text, value }) => {
  return (
    <tr>
      <td>{text}</td>
      <td>{value}</td>
    </tr>
  )
}

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  return (
    <>
      <Header text={'give feedback'} />
      <Button text={'good'} onClick={() => setGood(good + 1)} />
      <Button text={'neutral'} onClick={() => setNeutral(neutral + 1)} />
      <Button text={'bad'} onClick={() => setBad(bad + 1)} />
      <Statistics good={good} neutral={neutral} bad={bad} />
    </>
  )
}

export default App