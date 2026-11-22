import CItem from './CItem'

export default function CList({contacts, onDelete, onEdit}) {
  return (
    <ul>
      {contacts.map(contact => (
        <CItem
          key={contact.id}
          contact={contact}
          onDelete={onDelete}
          onEdit={onEdit}
        />
      ))}
    </ul>
  )
}
