const ButtonOutlineDynamic = ({ text,  width = 233, height = 48, color = "#5EF6FF", size, className}) => {

  const classes = className
  const charWidth = 8;
  // const modWidth = text.length * charWidth;
  const modWidth = 0;
  const adjustedWidth = width + modWidth;

  const d = `
    M${13} ${22}
    v${3}
    H${1}
    v${22}
    h${214.5 + modWidth}
    L${232 + modWidth} ${29.5}
    V${0}
    H${1}
    v${22}
    z
  `;

 return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 233 48"
      fill="none"
      style={{ width: size + "%", height: "auto" }}
    >
      <path stroke={color} d={d} />
      <text
        x={adjustedWidth / 2} // Center the text horizontally
        y={height / 2} // Center the text vertically
        dominantBaseline="middle"
        textAnchor="middle"
        fill={color}
        fontSize="20"
        fontFamily="var(--font-play)"
        fontWeight="semibold"
      >
        {text}
      </text>
    </svg>
  );
};

export default ButtonOutlineDynamic;