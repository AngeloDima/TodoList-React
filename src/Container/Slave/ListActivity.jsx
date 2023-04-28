import React from 'react'

const ListActivity = (props) => {
  return (
    <div>
      <ul>
        {props.data.map(item => (
          <li key={item.id}>
            {item.name}
            <button onClick={() => props.onRemove(item.id)}>Remove</button>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default ListActivity;
