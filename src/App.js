import { useState } from 'react'
import {findAllByDisplayValue} from "@testing-library/react";

const App = () => {
    // save clicks of each button to its own state
    const [good, setGood] = useState(0)
    const [neutral, setNeutral] = useState(0)
    const [bad, setBad] = useState(0)


    return (
        <>
            <div>
                <div>
                    <h1>give feedback</h1>
                </div>
                <div>
                    <Button description={'Good'} fn={() => setGood(good + 1)}/>
                    <Button description={'Neutral'} fn={() => setNeutral(neutral + 1)}/>
                    <Button description={'Bad'} fn={() => setBad(bad + 1)}/>
                </div>
                <Statistics good={good} neutral={neutral} bad={bad}/>
            </div>
        </>
    )
}

const Statistics = ({good, neutral, bad}) => {
    let all = good + neutral + bad;
    let average = (good * 1 + bad * -1 + neutral * 0) / all;
    let positive = good / all;
    if (all === 0) {
        return (
            <div>
                <p>No feedback given</p>
            </div>
        )
    } else {
        return (
            <>
                <div>
                    <h1>statistics</h1>
                </div>
                <StatisticLine text='good' value={good}/>
                <StatisticLine text='neutral' value={neutral}/>
                <StatisticLine text='bad' value={bad}/>
                <StatisticLine text='all' value={all}/>
                <StatisticLine text='average' value={average}/>
                <StatisticLine text='positive' value={positive}/>
            </>
        )
    }

}

const StatisticLine = ({text, value}) => {
    return (
        <div>
            <table>
                <tbody>
                <tr>
                    <td>{text}</td>
                    <td>{value}</td>
                </tr>
                </tbody>
            </table>
        </div>
    )
}

const Button = ({description, fn}) => {
    return (
        <button onClick={fn}>{description}</button>
    )
}

export default App