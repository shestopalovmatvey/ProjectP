import React, { ComponentProps, FC } from "react";
import { Button } from "@/components/ui/button";
import styles from "./Button.module.scss";
import cls from "classnames";

interface ButtonProps extends ComponentProps<typeof Button> {
  children: React.ReactNode;
  classes?: string;
}

export const ButtonMain: FC<ButtonProps> = ({
  children,
  classes,
  ...restProps
}) => {
  return (
    <Button className={cls(styles.Button, classes)} {...restProps}>
      {children}
    </Button>
  );
};
