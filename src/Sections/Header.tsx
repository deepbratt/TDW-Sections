import * as React from "react";

interface IButtonProps {
  text: string;
}

const Button: React.FC<IButtonProps> = ({ text }) => {
  return <button style={{backgroundColor: "pink"}}>{text}</button>;
};

export default Button;
