import { useState } from 'react'
import styled from 'styled-components'
import CForm from './components/CForm'
import CList from './components/CList'
import Filter from './components/Filter'

const Container = styled.div`
  width: 400px;
  margin: 30px auto;
  font-family: Arial;
`

const Title = styled.h1`
  font-size: 28px;
`

const Subtitle = styled.h2`
  font-size: 22px;
`

const Form = styled.div`
  padding: 15px;
  border: 1px solid #ccc;
  border-radius: 8px;

  label {
    display: block;
    margin-bottom: 10px;
  }

  input {
    display: block;
    width: 95%;
    padding: 7px;
    margin-top: 5px;
  }

  button {
    margin: 5px;
    padding: 6px 10px;
    cursor: pointer;
  }

  li {
    margin-bottom: 10px;
  }
`

export default function App() {
  const [contacts, setContacts] = useState([])
  const [filter, setFilter] = useState('')
  const [editId, setEditId] = useState(null)

  const addContact = (contact) => {
    const contactExists = contacts.find(
      item =>
        item.name.toLowerCase() === contact.name.toLowerCase() &&
        item.id !== editId
    )

    if (contactExists) {
      alert('This contact already exists!')
      return false
    }

    if (editId) {
      setContacts(contacts.map(item =>
        item.id === editId ? contact : item
      ))
      setEditId(null)
    } else {
      setContacts([...contacts, contact])
    }

    return true
  }

  const deleteContact = (id) => {
    setContacts(contacts.filter(contact => contact.id !== id))
  }

  const editContact = (contact) => {
    setEditId(contact.id)
  }

  const visibleContacts = contacts.filter(contact =>
    contact.name.toLowerCase().includes(filter.toLowerCase())
  )

  const selectedContact = contacts.find(contact => contact.id === editId)

  return (
    <Container>
      <Title>Phonebook</Title>

      <Form>
        <CForm
          onAddContact={addContact}
          selectedContact={selectedContact}
          editId={editId}
        />
      </Form>

      <Subtitle>Contacts</Subtitle>

      <Form>
        <Filter filter={filter} onChangeFilter={setFilter} />

        <CList
          contacts={visibleContacts}
          onDelete={deleteContact}
          onEdit={editContact}
        />
      </Form>
    </Container>
  )
}
