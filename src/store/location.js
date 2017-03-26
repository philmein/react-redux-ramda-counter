import { defaultTo, pipe, propOr } from 'ramda'
import { ChangeRequest } from 'utils/messages'
import { set, updaters } from 'utils/updaters'

// Message Passing

export const UpdateLocationType = 'LOCATION/UPDATE'
export const UpdateLocation = ChangeRequest(UpdateLocationType)

// Object

export const Location = ({ name, options } = {}) => ({
  name: defaultTo('counter', name),
  options: defaultTo({}, options)
})

// Setter Methods

// Dynamic Dispatch

export const location = updaters({
  [UpdateLocationType]: set
}, Location())

// Getter Methods

export const getLocationName = state => pipe(
  propOr({}, 'location'),
  propOr(void 0, 'name')
)(state)
