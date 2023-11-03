import React from 'react';

const Button = props => {
    const btnFilled = !props.isFilled ? "bg-white text-credit-one-blue hover:bg-credit-one-blue hover:bg-opacity-5" : "bg-credit-one-blue text-white hover:bg-dark-credit-one-blue";

  return (
    <button id="button" className={`overflow-y-auto cursor-pointer  rounded-full font-bold  border-solid border-2 border-credit-one-blue h-auto pt-2 pb-2 w-auto pl-4 pr-4 text-xs ${btnFilled}`} onClick={props.onClick}>
      {props.children}
    </button>
  );
};

Button.defaultProps = {
    type: "button",
    isFilled: false
  };

export default Button;