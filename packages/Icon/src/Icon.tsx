import { IconProps } from "@modulz/radix-icons/dist/types";
import React from "react";
import { IconBaseProps } from "react-icons";

interface IIconProps {
  icon: (props: IconProps) => JSX.Element | React.ReactElement<IconBaseProps>;
  onClick?: () => void;
}

function Icon({ icon: Icon, ...rest }: IIconProps) {
  return (
    <>
      <Icon {...rest} />
    </>
  );
}

export default Icon;
