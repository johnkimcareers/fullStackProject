import { useState, useEffect } from 'react'
import axios from 'axios'
import personService from './services/persons'


const App = () => {
    const [persons, setPersons] = useState([
    ])
    const [newName, setNewName] = useState('')
    const [newPhoneNumber, setNewPhoneNumber] = useState('')
    const [search, setSearch] = useState('')
    const [addMessage, setAddMessage] = useState({message: null, type: 'normal'})


    useEffect(() => {
        personService.getAll()
            .then(intialPersons => {
                setPersons(intialPersons)
            })

    }, [])
    const personsToShow = search
        ? persons.filter(person =>  person.name.toLowerCase().includes(search))
        : persons

    console.log(personsToShow)

    return (
        <div>
            <h2>Phonebook</h2>
            <Notification message={addMessage.message} type={addMessage.type}/>
            <Filter search={search} setSearch={setSearch}/>
            <PersonForm persons={persons} setPersons={setPersons} newName={newName} setNewName={setNewName} newPhoneNumber={newPhoneNumber} setNewPhoneNumber={setNewPhoneNumber} addMessage={addMessage} setAddMessage={setAddMessage}/>
            <h2>Numbers</h2>
            <Persons personsToShow={personsToShow} setPersons={setPersons} setAddMessage={setAddMessage} addMessage={addMessage}/>
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

const PersonForm = ({persons, setPersons, newName, newPhoneNumber, setNewName, setNewPhoneNumber, addMessage, setAddMessage}) => {
    const handleNameChange = (event) => {
        setNewName(event.target.value)
    }

    const handlePhoneNumberChange = (event) => {
        setNewPhoneNumber(event.target.value)
    }

    const addPerson = (event) => {
        event.preventDefault()
        const searchedPerson = persons.find(person => person.name === newName)
        if (searchedPerson) {
            const updatedPerson = {
                ...searchedPerson,
                name: newName,
                number: newPhoneNumber
            }
            personService.update(updatedPerson)
                .then(response => {
                    alert(`${response.name} has been updated`)
                    const updatedPersons = persons.map(person => {
                        if (person.id === updatedPerson.id) {
                            return updatedPerson
                        }
                        return person
                    })
                    setPersons(updatedPersons)
                })
        } else {
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
                    setAddMessage({
                        ...addMessage,
                        message: `Successfully added ${name}`
                    })
                    setTimeout(() => {
                        setAddMessage({
                            ...addMessage,
                            message: null
                        })
                    }, 5000)
                })
        }
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

const Persons = ({personsToShow, setPersons, setAddMessage, addMessage}) => {
    return (
        <div>
            <ul>
                {personsToShow.map(person => <li>{person.name} {person.number} <Button id={person.id} persons={personsToShow} setPersons={setPersons} setAddMessage={setAddMessage} addMessage={addMessage}/></li>)}
            </ul>
        </div>
    )
}

const Button = ({id, persons, setPersons, setAddMessage, addMessage}) => {
    const remove = () => {
        personService.remove(id)
            .then(removedPerson => {
                const updatedPersons = persons.filter(person => person.id !== id)
                setPersons(updatedPersons)
            })
            .catch(err => {
                const removedPerson = persons.filter(person => person.id === id)[0]
                setAddMessage({
                    ...addMessage,
                    message: `${removedPerson.name} was already removed`,
                    type: 'error'
                })
            })
    }
    return (
        <>
            <button onClick={remove}>delete</button>
        </>
    )
}

const Notification = ({message, type}) => {
    if (message === null) {
        return null
    }

    const style = {
        background: 'lightgrey',
        fontSize: 20,
        borderStyle: 'solid',
        borderRadius: 5,
        padding: 10,
        marginBottom: 10
    }

    if (type === 'normal') {
        style.color = 'green'
    } else if (type === 'error') {
        style.color = 'red'
    }

    return (
        <div style={style}>
            {message}
        </div>
    )
}

export default App