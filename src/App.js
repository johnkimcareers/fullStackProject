import { useState } from 'react'

const App = () => {
    const [persons, setPersons] = useState([
        { name: 'Arto Hellas', number: '040-123456', id: 1 },
        { name: 'Ada Lovelace', number: '39-44-5323523', id: 2 },
        { name: 'Dan Abramov', number: '12-43-234345', id: 3 },
        { name: 'Mary Poppendieck', number: '39-23-6423122', id: 4 }
    ])
    const [newName, setNewName] = useState('')
    const [newPhoneNumber, setNewPhoneNumber] = useState('')
    const [search, setSearch] = useState('')

    const personsToShow = search
        ? persons.filter(person =>  person.name.toLowerCase().includes(search))
        : persons


    const handleNameChange = (event) => {
        setNewName(event.target.value)
    }

    const handlePhoneNumberChange = (event) => {
        setNewPhoneNumber(event.target.value)
    }

    const handleSearch = (event) => {
        setSearch(event.target.value)
    }

    const addPerson = (event) => {
        event.preventDefault()
        if (persons.find(person => person.name === newName)) {
            alert(`${newName} is already added to the phonebook`)
            return
        }
        const name = newName
        const number = newPhoneNumber
        const newPerson = {
            name: name,
            number: number
        }
        setPersons(persons.concat(newPerson))
        setNewName('')
        setNewPhoneNumber('')
    }

    return (
        <div>
            <h2>Phonebook</h2>
            <div>Filter: <input type="text" value={search} onChange={handleSearch}/></div>
            <form onSubmit={addPerson}>
                <div>name: <input value={newName} onChange={handleNameChange}/></div>
                <div>number: <input value={newPhoneNumber} onChange={handlePhoneNumberChange}/></div>
                <div>
                    <button type="submit">add</button>
                </div>
            </form>
            <h2>Numbers</h2>
            <ul>
                {personsToShow.map(person => <li>{person.name} {person.number}</li>)}
            </ul>
        </div>
    )
}

export default App