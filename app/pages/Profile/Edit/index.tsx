import React, { FC } from "react";
import { Controller } from "react-hook-form";

import { RoutingPropsOfRoot } from "../../../router/types";
import { RoutingPropsOfApp } from "../../../router/app/types";
import { Input } from "../../../components/Input";
import { Header } from "../../../components/Header/Normal";
import { Icon } from "../../../components/Icon";
import { RoutingPropsOfProfile } from "../../../router/app/Profile/types";

import { useProfileEdit } from "./hooks";
import { StyledWrap, StyledContent } from "./style";

type Props = {
  rootRoute: RoutingPropsOfRoot<"app">;
  appRoute: RoutingPropsOfApp<"profile">;
  profileRoute: RoutingPropsOfProfile<"edit">;
};

export const Edit: FC<Props> = ({ profileRoute }) => {
  const params = profileRoute.route.params;

  const { control, clearErrors } = useProfileEdit(params);

  return (
    <>
      <Header
        title={"プロフィール編集"}
        onPressLeft={() => {
          profileRoute.navigation.goBack();
        }}
        right={<Icon name="check" onPress={() => profileRoute.navigation.goBack()} />}
      />
      <StyledWrap>
        <StyledContent>
          <Controller
            control={control}
            name={"email"}
            render={({ field: { onChange, value }, fieldState: { error } }) => (
              <Input
                title="推しの名前"
                value={value}
                onChangeText={(value) => {
                  onChange(value);
                  clearErrors("email");
                }}
                errorMessage={error && error.message}
              />
            )}
          />
        </StyledContent>
      </StyledWrap>
    </>
  );
};