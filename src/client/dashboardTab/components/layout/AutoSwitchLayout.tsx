import * as React from "react";
import { MasterLayout } from "./MasterLayout/MasterLayout";


export default function AutoSwitchLayout({ props, children }: {
  props?: any;
  children?: any;
} ) {
  return <MasterLayout {...props}>{children}</MasterLayout>;
}
