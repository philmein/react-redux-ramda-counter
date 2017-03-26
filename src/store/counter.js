import { defaultTo, evolve, inc, pipe, propOr } from 'ramda'
import { ChangeRequest } from 'utils/messages'
import { updaters } from 'utils/updaters'

// Message Passing

export const IncrementCounterType = 'COUNTER/INCREMENT'
export const IncrementCounter = ChangeRequest(IncrementCounterType)

// Object

export const Counter = ({ value } = {}) => ({
  value: defaultTo(0, value)
})

// Setter Methods

const increment = () => evolve({
  value: inc
})

// Dynamic Dispatch

export const counter = updaters({
  [IncrementCounterType]: increment
}, Counter())

// Getter Methods

export const getValue = state => pipe(
  propOr({}, 'counter'),
  propOr(void 0, 'value')
)(state)
