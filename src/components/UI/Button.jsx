import React from "react";
import PropTypes from "prop-types";

const Button = ({ variant, children, disabled, ...rest }) => {
  const classNames = `w-full active:scale-90 relative h-auto inline-flex items-center justify-center rounded-full transition-all text-sm sm:text-base font-medium py-3 px-4 sm:py-2 sm:px-6 ${
    variant === "primary"
      ? `bg-slate-900 hover:bg-slate-800 text-slate-50 shadow-xl focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-6000 ${
          disabled ? "bg-opacity-50 cursor-not-allowed" : ""
        }`
      : `bg-white text-slate-700 hover:bg-gray-100 border border-slate-100 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-6000 ${
          disabled ? "cursor-not-allowed opacity-70" : ""
        }`
  }`;

  return (
    <button className={classNames} disabled={disabled} {...rest}>
      {children}
    </button>
  );
};

Button.propTypes = {
  variant: PropTypes.oneOf(["primary", "secondary"]).isRequired,
  children: PropTypes.node.isRequired,
  disabled: PropTypes.bool,
};

export default Button;
