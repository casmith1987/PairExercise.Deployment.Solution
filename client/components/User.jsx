import React from 'react'

const test = _ => {
  console.log('hello world')
}

export default (props) => (
  <tr>
    <td className="user--first-name">{props.firstName}</td>
    <td className="user--last-name">{props.lastName}</td>
    <td className="user--email">{props.email}</td>
  </tr>
)
