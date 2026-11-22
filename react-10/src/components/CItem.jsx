export default function CItem({contact, onDelete, onEdit}) {
  return (
    <li>
      {contact.name}: {contact.number}

      <button onClick={() => onEdit(contact)}>Edit</button>
      <button onClick={() => onDelete(contact.id)}>Delete</button>
    </li>
  )
}
