import React from "react";

const Button = ({
  text = "",
  onClick = () => {},
  className = "",
  type = "button",
  style = {},
  icon = null,
}) => {
  return (
    <button
      type={type}
      onClick={onClick}
      className={`
      ${className}`}
      style={style}
    >
      {icon && <span className="mr-2">{icon}</span>}
      {text && <span>{text}</span>}
    </button>
  );
};

export default Button;
