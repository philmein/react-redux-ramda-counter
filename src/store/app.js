import { defaultTo } from 'ramda'
import { Counter, counter, IncrementCounterType } from 'store/counter'
import { Location, location, LocationUpdateType } from 'store/location'
import { redirectTo, updaters } from 'utils/updaters'

// Message Passing

// Object

export const App = ({ counter, location } = {}) => ({
  counter: defaultTo(Counter(), counter),
  location: defaultTo(Location(), location)
})

// Setter Methods

// Dynamic Dispatch

export const app = updaters({
  [IncrementCounterType]: redirectTo('counter', counter),
  [LocationUpdateType]: redirectTo('location', location)
}, App())

// Getter Methods
