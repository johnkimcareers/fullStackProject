import { useState } from 'react'
import {findAllByDisplayValue} from "@testing-library/react";

const App = () => {
    const course = {
        id: 1,
        name: 'Half Stack application development',
        parts: [
            {
                name: 'Fundamentals of React',
                exercises: 10,
                id: 1
            },
            {
                name: 'Using props to pass data',
                exercises: 7,
                id: 2
            },
            {
                name: 'State of a component',
                exercises: 14,
                id: 3
            }
        ]
    }

    return <Course course={course} />
}

const Course = ({course}) => {
    return (
        <div>
            <Header header={course.name}/>
            <div></div>
            <Content parts={course.parts}/>
        </div>
    )

}

const Header = ({header}) => {
    return (
        <div>
            <h1>{header}</h1>
        </div>
    )
}

const Content = ({parts}) => {
    parts.reduce((s, p) => {
        console.log('what is happening', s, p)
    })


    return (
        <div>
            <ul>
                {parts.map(part => <Part name={part.name} exercise={part.exercises}/>)}

            </ul>
        </div>
    )
}

const Part = ({name, exercise}) => {
    return (
        <div>
            {name} : {exercise}
        </div>
    )
}

const Button = ({description, fn}) => {
    return (
        <button onClick={fn}>{description}</button>
    )
}

export default App