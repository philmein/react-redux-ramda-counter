import { fork, put, take } from 'redux-saga/effects'
import { UpdateLocation } from 'store/location'
import { IncrementCounter } from 'store/counter'
import { ButtonOnClickType, UrlChangeType } from 'utils/events'

export const businessLogic = function * () {
  yield [
    fork(incrementCounterOnButtonClick),
    fork(updateLocationOnUrlChange)
  ]
}

function * incrementCounterOnButtonClick () {
  while (true) {
    yield take(ButtonOnClickType)
    yield put(IncrementCounter())
  }
}

export const updateLocationOnUrlChange = function * () {
  while (true) {
    const { name, options } = yield take(UrlChangeType)
    yield put(UpdateLocation({ name, options }))
  }
}
