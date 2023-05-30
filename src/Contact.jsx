import React from 'react'

const Contact = ({contact, dispatch}) => {
  return (
    <div>
        <span style={{color: contact.complete ? 'red': '#000'}}> {contact.name}</span>
        <span style={{color: contact.complete ? 'red': '#000'}}> {contact.email}</span>
        <button onClick={()=> dispatch({ type: "delete", payload:{id: contact.id}})}>delete</button>
        <button onClick={()=> dispatch({ type: "toggle", payload:{id: contact.id}})}>Toggle</button>
    </div>
  )
}

export default Contact