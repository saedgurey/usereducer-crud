import React, { useReducer, useState } from 'react'

import Contact from './Contact'
const intialState = []



const reducer = (state, action) => {
  switch (action.type) {
    case "add":
      return [
        ...state,
        action.payload
      ]




    case "delete":
      return state.filter(contact => contact.id !== action.payload.id);


      case "toggle":
        return state.map(contact => {
          if (contact.id === action.payload.id){
            return {...contact, complete : !contact.complete} 
          }
          return contact

        }  )


    default:
      return state;


  }
}
const App = () => {
  const [name, setName] = useState();
  const [email, setEmail] = useState();


  const [state, dispatch] = useReducer(reducer, intialState);

  const handleChange = (e) => {
    e.preventDefault();
    const contact = {
      complete:false,
      id: Date.now(),
      name,
      email,
    }
    dispatch({
      type: "add", payload: contact
    })
  }
  return (
    <div>
      <form onSubmit={handleChange}>
        <input value={name} onChange={(e) => setName(e.target.value)} type="text" placeholder='text' />
        <input value={email} onChange={(e) => setEmail(e.target.value)} type="email" placeholder='email' />
        <button>add contact</button>
      </form>
      {
        state.map(contact => (
          <Contact dispatch={dispatch} key={contact.id} contact={contact} />
             
        
         
        ))
      }
    </div>
  )
}

export default App