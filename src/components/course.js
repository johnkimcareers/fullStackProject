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
    const total = parts.reduce((s, p) => {
        return {
            exercises: s.exercises + p.exercises
        }
    }).exercises

    return (
        <div>
            <ul>
                {parts.map(part => <Part name={part.name} exercise={part.exercises}/>)}
                Total of {total} exercises
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

export default Course