import React, { HTMLAttributes, MouseEventHandler } from "react";
import Link from "next/link";

interface ButtonI {
  href?: string;
  inverse?: boolean;
  danger?: boolean;
  className?: string;
  type?: "button" | "submit" | "reset";
  onClick?: MouseEventHandler<HTMLButtonElement>;
  size?: "small" | "large" ;
  disabled?: boolean;
  style?: HTMLAttributes<HTMLButtonElement>;
  children: React.ReactNode;
}

const Button = (props: ButtonI) => {
  if (props.href) {
    console.log('href', props.href)
    return (
      <Link href={props.href}>
        <button
          className={`button button--${props.size || "default"} ${
            props.inverse && "button--inverse"
          } ${props.danger && "button--danger"} ${props.className}`}
          type={props.type || "button"}
          onClick={props.onClick}
          disabled={props.disabled}
          style={props.style}
        >
          {props.children}
        </button>
      </Link>
    );
  }
  return (
      <button
        className={`button button--${props.size || "default"} ${
          props.inverse && "button--inverse"
        } ${props.danger && "button--danger"} ${props.className}`}
        type={props.type || "button"}
        onClick={props.onClick}
        disabled={props.disabled}
        style={props.style}
      >
        {props.children}
      </button>
  );
};

export default Button;
