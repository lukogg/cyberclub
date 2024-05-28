const Button = ({ className, href, onClick, children, textColor }) => {
  const renderButton = () => (
    <button
      className={`relative inline-block ${className}`}
      onClick={onClick}
      style={{ padding: 0, border: 'none', background: 'none', cursor: 'pointer' }}
    >
      <span
        style={{
          fontFamily: 'var(--font-play)',
          fontSize: '16px',
          color: textColor ? textColor : "#5EF6FF",
        }}
      >
        {children}
      </span>
    </button>
  );

  const renderLink = () => (
    <a
      href={href}
      className={`relative inline-block ${className}`}
      style={{ padding: 0, border: 'none', background: 'none', textDecoration: 'none' }}
    >
      <span
        style={{
          fontFamily: 'var(--font-play)',
          fontSize: '16px',
          color: textColor ? textColor : "#5EF6FF",
        }}
      >
        {children}
      </span>
    </a>
  );

  return href ? renderLink() : renderButton();
};

export default Button;
