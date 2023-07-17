import { useState } from 'react'
import {findAllByDisplayValue} from "@testing-library/react";

const App = () => {
    const [selected, setSelected] = useState(0);
    const [points, setPoints] = useState([0,0,0,0,0,0,0,0]);
    const [maxVotes, setMaxVotes] = useState(0);

    const anecdotes = [
        'If it hurts, do it more often.',
        'Adding manpower to a late software project makes it later!',
        'The first 90 percent of the code accounts for the first 10 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
        'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
        'Premature optimization is the root of all evil.',
        'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
        'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.',
        'The only way to go fast, is to go well.'
    ];

    const randomSelect = () => {
        const randomIndex = Math.floor(Math.random() * (anecdotes.length - 1));
        setSelected(randomIndex);
    }
    const vote = () => {
        const copy = [...points];
        copy[selected] += 1;
        setPoints(copy);
        const max = points.indexOf(Math.max(...points));
        setMaxVotes(max);
    }


    return (
        <>
            <div>
                <h1>Anecdote of the day</h1>
                {anecdotes[selected]}
                <div></div>
                has {points[selected]} votes
                <div></div>
                <Button description='Vote' fn={vote}/>
                <Button description='Next Anecdote' fn={randomSelect}/>
            </div>
            <div>
                <h1>Anecdote with most votes</h1>
                {anecdotes[maxVotes]}
            </div>

        </>
    )



    // const [good, setGood] = useState(0)
    // const [neutral, setNeutral] = useState(0)
    // const [bad, setBad] = useState(0)
    //
    //
    // return (
    //     <>
    //         <div>
    //             <div>
    //                 <h1>give feedback</h1>
    //             </div>
    //             <div>
    //                 <Button description={'Good'} fn={() => setGood(good + 1)}/>
    //                 <Button description={'Neutral'} fn={() => setNeutral(neutral + 1)}/>
    //                 <Button description={'Bad'} fn={() => setBad(bad + 1)}/>
    //             </div>
    //             <Statistics good={good} neutral={neutral} bad={bad}/>
    //         </div>
    //     </>
    // )
}

// const Statistics = ({good, neutral, bad}) => {
//     let all = good + neutral + bad;
//     let average = (good * 1 + bad * -1 + neutral * 0) / all;
//     let positive = good / all;
//     if (all === 0) {
//         return (
//             <div>
//                 <p>No feedback given</p>
//             </div>
//         )
//     } else {
//         return (
//             <>
//                 <div>
//                     <h1>statistics</h1>
//                 </div>
//                 <StatisticLine text='good' value={good}/>
//                 <StatisticLine text='neutral' value={neutral}/>
//                 <StatisticLine text='bad' value={bad}/>
//                 <StatisticLine text='all' value={all}/>
//                 <StatisticLine text='average' value={average}/>
//                 <StatisticLine text='positive' value={positive}/>
//             </>
//         )
//     }
//
// }






const Button = ({description, fn}) => {
    return (
        <button onClick={fn}>{description}</button>
    )
}

export default App