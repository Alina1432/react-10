import './App.css'
import { useState } from 'react'
import styled from 'styled-components'
import CForm from './components/CForm'
import CList from './components/CList'
import Filter from './components/Filter'

const Container = styled.div`
  padding: 20px;
`

const Title = styled.h1`
  font-size: 30px;
`

const Subtitle = styled.h2`
  font-size: 24px;
`

const Form = styled.div`
  form {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 10px;
  }

  label {
    display: flex;
    flex-direction: column;
    gap: 5px;
  }

  input {
    padding: 6px;
  }

  button {
    padding: 6px 12px;
    cursor: pointer;
  }

  li {
    margin-bottom: 10px;
  }

  li button {
    margin-left: 10px;
  }
`

export default function App() {
  const [contacts, setContacts] = useState([])
  const [filter, setFilter] = useState('')

  const addContact = (contact) => {
    const contactExists = contacts.find(
      item => item.name.toLowerCase() === contact.name.toLowerCase()
    )

    if (contactExists) {
      alert('This contact already exists!')
      return false
    }

    setContacts([...contacts, contact])
    return true
  }

  const deleteContact = (id) => {
    setContacts(contacts.filter(contact => contact.id !== id))
  }

  const visibleContacts = contacts.filter(contact =>
    contact.name.toLowerCase().includes(filter.toLowerCase())
  )

  return (
    <Container>
      <Title>Phonebook</Title>

      <Form>
        <CForm onAddContact={addContact} />
      </Form>

      <Subtitle>Contacts</Subtitle>

      <Form>
        <Filter
          filter={filter}
          onChangeFilter={setFilter}
        />

        <CList
          contacts={visibleContacts}
          onDelete={deleteContact}
        />
      </Form>
    </Container>
  )
}
