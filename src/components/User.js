import React from 'react'

export default function User(props) {
  return (
   <li>
       <span>Name: {props.name} , age: {props.age} </span>
       <input onChange={props.changeEvent} value={props.name}/>
        <button onClick={props.deleteEvent}>delete</button>
        <div>aswin</div>
   </li>
  )
}
