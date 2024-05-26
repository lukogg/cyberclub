const Button = ({ className, href, onClick, children }) => {
  const classes = `relative inline-flex items-center justify-center transition-colors hover:text-color-1 text-n-1 ${className}`;
  const spanClasses = "relative z-10";

  const handleClick = (event) => {
    if (!href) {
      onClick && onClick(event);
    }
  };

  const renderButton = () => (
    <button className={classes} onClick={handleClick}>
      <span className={spanClasses}>{children}</span>
    </button>
  );

  const renderLink = () => (
    <a href={href} className={classes} onClick={handleClick}>
      <span className={spanClasses}>{children}</span>
    </a>
  );

  return href ? renderLink() : renderButton();
};

export default Button;
