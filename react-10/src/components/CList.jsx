import CItem from './CItem'

export default function CList({contacts, onDelete}) {
  return (
    <ul>
      {contacts.map(contact => (
        <CItem
          key={contact.id}
          contact={contact}
          onDelete={onDelete}
        />
      ))}
    </ul>
  )
}
