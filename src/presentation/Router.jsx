import { screens } from 'config/routes'
import { connect } from 'react-redux'
import { getLocationName } from 'store/location'

export let Router = ({ jsxElement }) => jsxElement

const bindStore = connect(
  state => {
    const locationName = getLocationName(state)
    const jsxElement = screens[locationName]
    return { jsxElement }
  },
  () => ({})
)

Router = bindStore(Router)
