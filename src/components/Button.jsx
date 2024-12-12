import React from "react";

const Button = ({ title, id, leftIcon, rightIcon, containerClass }) => {
  return (
    <button
      className={`group relative cursor-pointer z-10 w-fit overflow-hidden rounded-full bg-violet-50 px-7 py-3 text-black ${containerClass}`}
      id={id}
    >
      {leftIcon}
      <span className="relative inline-flex overflow-hidden font-general text-xs uppercase">
        <div>{title}</div>
      </span>
      {rightIcon}
    </button>
  );
};

export default Button;
