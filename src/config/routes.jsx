import { Counter } from 'presentation/Counter'
import React from 'react'
import { put } from 'redux-saga/effects'
import { UrlChange } from 'utils/events'

export const routes = {
  * '/' () {
    yield put(UrlChange({ name: 'counter', options: {} }))
  }
}

export const screens = {
  'counter': <Counter />
}
