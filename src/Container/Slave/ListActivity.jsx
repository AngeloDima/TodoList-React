import React from 'react'

const ListActivity = (props) => {

  const activityList = props.activityList;

  return (
    <div>
      <ul>
        {activityList.map((activity) => (
          <li key={activity.id}>
            {activity.title}
          </li>
        ))}
      </ul>
    </div>
  )
}

export default ListActivity
