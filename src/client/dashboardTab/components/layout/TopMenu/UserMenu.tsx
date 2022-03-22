import * as React from "react";
import { CommandBarButton } from "@fluentui/react";
import { useHistory } from "react-router-dom";
import { Login } from "@microsoft/mgt-react";

export function UserMenu() {

  const history = useHistory();
  const menuProps = {
    shouldFocusOnMount: true,
    items: [
      {
        key: "profile",
        text: "Profile",
        iconProps: { iconName: "PlayerSettings" },
        onClick: () => history.push("/profile"),
      }
    ],
  };

  return (
    <Login></Login>
  );
}
