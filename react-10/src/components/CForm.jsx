import { useState, useEffect } from 'react'
import { nanoid } from 'nanoid'

export default function CForm({onAddContact, selectedContact, editId}) {
  const [name, setName] = useState('')
  const [number, setNumber] = useState('')

  useEffect(() => {
    if (selectedContact) {
      setName(selectedContact.name)
      setNumber(selectedContact.number)
    }
  }, [selectedContact])

  const handleChange = (event) => {
    const { name, value } = event.target

    if (name === 'name') setName(value)
    if (name === 'number') setNumber(value)
  }

  const handleSubmit = (event) => {
    event.preventDefault()

    const newContact = {
      id: editId || nanoid(),
      name: name,
      number: number
    }

    const added = onAddContact(newContact)

    if (added) {
      setName('')
      setNumber('')
    }
  }

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Name
        <input
          type="text"
          name="name"
          pattern="^[a-zA-Zа-яА-Я]+([' \-][a-zA-Zа-яА-Я]+)*$"
          required
          value={name}
          onChange={handleChange}
        />
      </label>

      <label>
        Number
        <input
          type="tel"
          name="number"
          pattern="^[+]?[0-9. \x28\x29\x2D]+$"
          required
          value={number}
          onChange={handleChange}
        />
      </label>

      <button type="submit">
        {editId ? 'Save' : 'Add contact'}
      </button>
    </form>
  )
}

