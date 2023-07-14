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
                    <button onClick={() => setGood(good + 1)}>Good</button>
                    <button onClick={() => setNeutral(neutral + 1)}>Neutral</button>
                    <button onClick={() => setBad(bad + 1)}>Bad</button>
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
                <div>good {good}</div>
                <div>neutral {neutral}</div>
                <div>bad {bad}</div>
                <div>all {all}</div>
                <div>average {average ? average : 0}</div>
                <div>positive {positive ? positive : 0}</div>
            </>
        )
    }

}

export default App