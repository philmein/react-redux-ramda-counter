import React from 'react'
import { connect } from 'react-redux'
import { getValue } from 'store/counter'
import { ButtonOnClick } from 'utils/events'

export let Counter = ({ onClick, text }) => (
  <button id='counter' onClick={onClick}>Clicks: {text}</button>
)

const bindStore = connect(
  state => ({
    text: getValue(state)
  }),
  dispatch => ({
    onClick: (event) => dispatch(ButtonOnClick({ id: 'counter' }))
  })
)

Counter = bindStore(Counter)
