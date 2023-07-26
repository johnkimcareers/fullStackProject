import { useState, useEffect } from 'react'
import axios from 'axios'
import personService from './services/persons'


const App = () => {
    const [persons, setPersons] = useState([
    ])
    const [newName, setNewName] = useState('')
    const [newPhoneNumber, setNewPhoneNumber] = useState('')
    const [search, setSearch] = useState('')

    useEffect(() => {
        personService.getAll()
            .then(intialPersons => {
                setPersons(intialPersons)
            })
    }, [])
    const personsToShow = search
        ? persons.filter(person =>  person.name.toLowerCase().includes(search))
        : persons

    return (
        <div>
            <h2>Phonebook</h2>
            <Filter search={search} setSearch={setSearch}/>
            <PersonForm persons={persons} setPersons={setPersons} newName={newName} setNewName={setNewName} newPhoneNumber={newPhoneNumber} setNewPhoneNumber={setNewPhoneNumber}/>
            <h2>Numbers</h2>
            <Persons personsToShow={personsToShow} setPersons={setPersons}/>
        </div>
    )
}

const Filter = ({search, setSearch}) => {
    const handleSearch = (event) => {
        setSearch(event.target.value)
    }
    return (
        <div>
            Filter: <input type="text" value={search} onChange={handleSearch}/>
        </div>
    )
}

const PersonForm = ({persons, setPersons, newName, newPhoneNumber, setNewName, setNewPhoneNumber}) => {
    const handleNameChange = (event) => {
        setNewName(event.target.value)
    }

    const handlePhoneNumberChange = (event) => {
        setNewPhoneNumber(event.target.value)
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
        personService
            .create(newPerson)
            .then(returnedPerson => {
                setPersons(persons.concat(returnedPerson))
                setNewName('')
                setNewPhoneNumber('')
            })
    }
    return (
        <div>
            <form onSubmit={addPerson}>
                <div>name: <input value={newName} onChange={handleNameChange}/></div>
                <div>number: <input value={newPhoneNumber} onChange={handlePhoneNumberChange}/></div>
                <div>
                    <button type="submit">add</button>
                </div>
            </form>
        </div>
    )
}

const Persons = ({personsToShow, setPersons}) => {
    return (
        <div>
            <ul>
                {personsToShow.map(person => <li>{person.name} {person.number} <Button id={person.id} persons={personsToShow} setPersons={setPersons}/></li>)}
            </ul>
        </div>
    )
}

const Button = ({id, persons, setPersons}) => {
    const remove = () => {
        personService.remove(id)
            .then(removedPerson => {
                const updatedPersons = persons.filter(person => person.id !== id)
                setPersons(updatedPersons)
            })
    }
    return (
        <>
            <button onClick={remove}>delete</button>
        </>
    )
}

export default App