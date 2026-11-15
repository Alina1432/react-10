export default function Filter({filter, onChangeFilter}){
  return (
    <label>
      Find contacts by name
      <input
        type="text"
        value={filter}
        onChange={(event) => onChangeFilter(event.target.value)}/>
    </label>
  )
}
