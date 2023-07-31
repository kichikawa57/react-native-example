import React, { FC } from "react";
import { Button as ButtonOfRneui, ButtonProps } from "@rneui/themed";

import { IconName } from "../../shared/types/components/icon";
import { Colors, colors } from "../../shared/styles/color";

interface Props extends ButtonProps {
  iconName?: IconName;
  textColor?: Colors;
  backgroundColor?: Colors;
}

export const Button: FC<Omit<Props, "icon">> = ({
  iconName,
  backgroundColor,
  textColor,
  ...props
}) => {
  return (
    <ButtonOfRneui
      {...props}
      titleStyle={{ color: colors[textColor ? textColor : "textLight"] }}
      buttonStyle={{
        paddingTop: 10,
        paddingBottom: 10,
        borderRadius: 20,
        backgroundColor: colors[backgroundColor ? backgroundColor : "secondary"],
      }}
      containerStyle={{
        width: "100%",
      }}
      icon={iconName && { name: iconName, type: "font-awesome", size: 15, color: "white" }}
    />
  );
};
