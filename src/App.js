import './App.css';

const Hello = (props) => {
    const bornYear = () => {
        const yearNow = new Date().getFullYear();
        return yearNow - props.age;
    }

    return (
        <div>
            <p>
                Hello {props.name}, you are {props.age} years old
            </p>
        </div>
    )
}

const App = () => {
    const name = 'Peter';
    const age = 10;
    return (
        <div>
            <h1>Greetings</h1>
            <Hello name={name} age={17 + 22}></Hello>
            <Hello name='Jajaan' age={age}></Hello>
            <Hello></Hello>
        </div>
    )
}

export default App;
