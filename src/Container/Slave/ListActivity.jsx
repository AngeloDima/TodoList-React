import React from 'react'
import CheckBox from './CheckBox';
const ListActivity = (props) => {
  return (
    <div>
      <ul>
        {props.data.map(item => (
          <li key={item.id}>
            <CheckBox />
            {item.name}
            <button onClick={() => props.onRemove(item.id)}>Remove</button>

          </li>
        ))}
      </ul>
    </div>
  )
}

export default ListActivity;
