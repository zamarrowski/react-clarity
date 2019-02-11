import React, { useState } from 'react'
import Input from '../Input/Input'

const IconShow = "ios-eye-outline"
const IconHide = "ios-eye-off-outline"

export default (props) => {
  const [value, setValue] = useState(props.value || "")
  const [icon, setIcon] = useState(IconShow)
  const [isVisible, setVisibility] = useState(false)

  const changeValue = ({ target: { value }}) => setValue(value, () => props.onChange(value))
  const switchVisibility = () => isVisible ?
    () => setVisibility(false, () => setIcon(IconHide)) :
    () => setVisibility(true, () => setIcon(IconShow))

  return (
    <Input
      type={isVisible ? "text" : "password"}
      icon={icon}
      value={value}
      onChange={changeValue}
      onIconClick={switchVisibility()}
      {...props}
    />
  )
}

