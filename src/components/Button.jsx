const Button = ({ className, href, onClick, children, textColor, outlineColor, size }) => {
    const defaultWidth = 233;
    const defaultHeight = 48;
    const width = (defaultWidth / 100) * (size ? size : 100);
    const height = (defaultHeight / 100) * (size ? size : 100);

  const currentColor = "#5EF6FF";
  const d = `
    M${13} ${22}
    v${3}
    H${1}
    v${22}
    h${214.5}
    L${232} ${29.5}
    V${0}
    H${1}
    v${22}
    z
  `;

  const renderButton = () => (
    <button
      className={`relative inline-block${className}`}
      onClick={onClick}
      style={{ width: `${width}px`, height: `${height}px`, padding: 0, border: 'none', background: 'none', cursor: 'pointer' }}
    >
      <svg
        viewBox={`0 0 ${defaultWidth} ${defaultHeight}`}
        fill="none"
        className="block"
        style={{ width: '100%', height: '100%' }}
      >
        <path stroke={outlineColor ? outlineColor : currentColor} d={d} />
        <text
          x="50%"
          y="50%"
          textAnchor="middle"
          dominantBaseline="middle"
          fontFamily="var(--font-play)"
          fontSize="16"
          fill={textColor ? textColor : currentColor}
        >
          {children}
        </text>
      </svg>
    </button>
  );

  const renderLink = () => (
    <a
      href={href}
      className={`relative inline-block ${className}`}
      style={{ width: `${width}px`, height: `${height}px`, padding: 0, border: 'none', background: 'none', textDecoration: 'none' }}
    >
      <svg
        viewBox={`0 0 ${defaultWidth} ${defaultHeight}`}
        fill="none"
        className="block"
        style={{ width: '100%', height: '100%' }}
      >
        <path stroke={outlineColor ? outlineColor : currentColor} d={d} />
        <text
          x="50%"
          y="50%"
          textAnchor="middle"
          dominantBaseline="middle"
          fontFamily="var(--font-play)"
          fontSize="16"
          fill={textColor ? textColor : currentColor}
        >
          {children}
        </text>
      </svg>
    </a>
  );

  return href ? renderLink() : renderButton();
};

export default Button;
