import "../styles.css"

const DividerText = ({text, id}) => {
    return(
    <div>
        <svg width="100%" height="82" className="-z-1">
            <rect width={"100%"} height={82} x1={0} y1={0} x2={"100"} y2={"100"} fill="#0e0c15e6"></rect>
            <line x1={0} y1={0} x2={"100%"} y2={0} stroke="#252134" strokeWidth={2}></line>
            <line x1={0} y1={82} x2={"100%"} y2={82} stroke="#252134" strokeWidth={2}></line>
            {/* <path d="" fill="none" stroke="#252134" stroke-width="2"/> */}
        </svg>
        <h1 className="noselect -mt-15 mb-15 text-center text-3xl text-color-9"> 
          {text}
        </h1>
    </div>
    )
}

export default DividerText