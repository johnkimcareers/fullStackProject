import { useState } from 'react'
import {findAllByDisplayValue} from "@testing-library/react";
import Course from './components/course'

const App = () => {
    const courses = [
        {
            name: 'Half Stack application development',
            id: 1,
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
                },
                {
                    name: 'Redux',
                    exercises: 11,
                    id: 4
                }
            ]
        },
        {
            name: 'Node.js',
            id: 2,
            parts: [
                {
                    name: 'Routing',
                    exercises: 3,
                    id: 1
                },
                {
                    name: 'Middlewares',
                    exercises: 7,
                    id: 2
                }
            ]
        }
    ]


    return (
        <div>
            {courses.map(course => {
                return <Course course={course} />
            })}
        </div>
        )

}

// const Course = ({course}) => {
//     return (
//         <div>
//             <Header header={course.name}/>
//             <div></div>
//             <Content parts={course.parts}/>
//         </div>
//     )
//
// }
//
// const Header = ({header}) => {
//     return (
//         <div>
//             <h1>{header}</h1>
//         </div>
//     )
// }
//
// const Content = ({parts}) => {
//     const total = parts.reduce((s, p) => {
//         return {
//             exercises: s.exercises + p.exercises
//         }
//     }).exercises
//
//
//
//     return (
//         <div>
//             <ul>
//                 {parts.map(part => <Part name={part.name} exercise={part.exercises}/>)}
//                 Total of {total} exercises
//             </ul>
//         </div>
//     )
// }
//
// const Part = ({name, exercise}) => {
//     return (
//         <div>
//             {name} : {exercise}
//         </div>
//     )
// }
//
// const Button = ({description, fn}) => {
//     return (
//         <button onClick={fn}>{description}</button>
//     )
// }

export default App