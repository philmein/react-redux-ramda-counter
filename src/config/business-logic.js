import { businessLogic } from 'business-logic'
import { history } from 'config/history'
import { routes } from 'config/routes'
import createSagaMiddleware from 'redux-saga'
import { fork } from 'redux-saga/effects'
import { router } from 'redux-saga-router'

export const configureBusinessLogic = () =>
  createSagaMiddleware()

export const routing = function * () {
  yield router(history, routes)
}

export const businessProcesses = function * () {
  yield [
    fork(businessLogic),
    fork(routing)
  ]
}
