import "./Popup.css"
import 'react-phone-number-input/style.css'
import PhoneInput from 'react-phone-number-input'
import Button from "./Button"
import { useEffect, useState } from "react"
import PhoneForm from "./PhoneForm"

export default function Popup(props) {
  
  return (props.trigger) ? (
    <div className="popup">

      <div className="popup-inner ">
      <div className="flex flex-col-reverse">
        <div className="flex justify-center gap-6">
        <Button className="send-btn mt-6 items-center hover:scale-95 transition-transform duration-200" size={115} onClick={() => props.setTrigger(false)}>Надіслати</Button>
        { props.children }
        </div>
        <div className="flex justify-center">
        <form>
        {PhoneForm()}
        </form>
        </div>
        <h3 className="text-3xl text-center mb-6">Залиште свій номер і ми перетелефонуємо Вам</h3>
      <a  onClick={() => props.setTrigger(false)}>
        <svg className="close-btn hover:scale-125 transition-transform"
        width={"20"} height={"20"}
        viewBox="0 0 10 10">
          <line x1={0} y1={0} x2={10} y2={10} stroke="#FFFFFF" strokeWidth={1}></line>
          <line x1={10} y1={0} x2={0} y2={10} stroke="#FFFFFF" strokeWidth={1}></line>
        </svg>
      </a>
      </div>
      </div>
    </div>
  ) : "";
}