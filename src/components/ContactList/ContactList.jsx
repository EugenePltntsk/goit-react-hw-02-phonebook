


import React from 'react'
import PropTypes from 'prop-types'
import { List } from './ContactList.styled'
import { ContactElement } from 'components/ContactElement'

export function ContactList({ contacts }) {


  return (
    <List>
    {  contacts.map(item => (

      <ContactElement key={item.id} name={item.name} number={item.number}/>
    ))}
  </List>
    
  )
}

ContactList.propTypes = {

    contacts: PropTypes.arrayOf(PropTypes.shape({ 
        id: PropTypes.string,
        name: PropTypes.string,
        number: PropTypes.string,
    }))

}






