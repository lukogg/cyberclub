import './PhoneForm.css'
import PhoneInput from 'react-phone-number-input'
import { useState } from "react"

export default function PhoneForm() {
  const [value, setValue] = useState()
  return (
    <PhoneInput
      country="UA"
      defaultCountry='UA'
      value={value}
      placeholder="Ваш номер телефону"
      onChange={setValue} />
  )
}
