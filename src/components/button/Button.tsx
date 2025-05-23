import type { CSSProperties, FC } from "react";

import "./Button.css";

interface Props {
  ariaLabel?: string;
  children?: React.ReactNode;
  classNames?: string;
  dataToggle?: string;
  disabled?: boolean;
  icon?: string;
  isCompact?: boolean;
  name?: string;
  onClick?: (() => void) | ((e: React.MouseEvent<HTMLButtonElement>) => void);
  rightIcon?: string;
  style?: CSSProperties;
  tabIndex?: number;
  title?: string;
  type?: 'button' | 'submit' | 'reset';
  variant?: 'default' | 'primary' | 'info' | 'link' | 'warning' | 'danger' | 'success';
}

const Button: FC<Props> = ({
  ariaLabel,
  children,
  classNames = '',
  disabled = false,
  icon,
  isCompact = false,
  name,
  onClick,
  rightIcon,
  style,
  tabIndex,
  title,
  dataToggle,
  type = 'button',
  variant = 'default'
}) => (
  <button
    aria-label={title || ariaLabel}
    className={`btn btn-${variant} ${classNames}`}
    data-toggle={dataToggle}
    disabled={disabled}
    name={name}
    onClick={onClick}
    style={style}
    tabIndex={tabIndex}
    title={title}
    type={type}
  >
    {children}

    {(title || (icon || rightIcon)) && (
      <>
        {icon && (
          <i
            aria-hidden
            className={icon}
            style={title && !isCompact ? { paddingRight: '5px' } : {}}
          />
        )}

        {!isCompact && title}

        {rightIcon && (
          <i
            aria-hidden
            className={rightIcon}
            style={title ? { paddingLeft: '5px' } : {}}
          />
        )}
      </>
    )}
  </button>
);

export default Button;
