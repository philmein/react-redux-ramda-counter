import { Event } from './messages'

export const UrlChangeType = 'URL/CHANGE'
export const UrlChange = Event(UrlChangeType)

export const ButtonOnClickType = 'BUTTON/CLICK'
export const ButtonOnClick = Event(ButtonOnClickType)

export const CheckboxOnChangeType = 'CHECKBOX/CHANGE'
export const CheckboxOnChange = Event(CheckboxOnChangeType)

export const LabelDoubleClickType = 'LABEL/DOUBLE_CLICK'
export const LabelDoubleClick = Event(LabelDoubleClickType)

export const TextInputOnKeyPressType = 'TEXTINPUT/KEYPRESS'
export const TextInputOnKeyPress = Event(TextInputOnKeyPressType)
