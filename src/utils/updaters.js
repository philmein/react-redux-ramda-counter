import { __, curry, dissocAll, evolve, isNil, merge } from 'ramda'

export const updaters = curry((updaterTable, initialState, changeRequest, state) => {
  if (isNil(state)) {
    return initialState
  } else if (updaterTable.hasOwnProperty(changeRequest.type)) {
    return updaterTable[changeRequest.type](changeRequest)(state)
  } else {
    return state
  }
})

export const redirectTo = curry((property, updater, changeRequest, state) =>
  evolve({
    [property]: updater(changeRequest)
  }, state)
)

export const set = changeRequest =>
  merge(__, dissocAll(['msg', 'type'], changeRequest))
