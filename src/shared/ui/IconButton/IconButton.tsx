import React, { FC } from "react";
import classNames from "classnames";
import styles from "./IconButton.module.scss";
import { NavLink } from "react-router";

interface IconButtonProps {
  children: React.ReactNode;
  text: string;
  classes?: string;
  to: string;
}

export const IconButton: FC<IconButtonProps> = ({
  children,
  classes,
  text,
  to,
}) => {
  return (
    <NavLink
      to={to}
      className={({ isActive }) =>
        classNames(styles.button, classes, { [styles.active]: isActive })
      }
    >
      {children}
      <span>{text}</span>
    </NavLink>
  );
};
