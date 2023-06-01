import SidebarWithHeader from "./sidebar/SidebarWithHeader";
import { ReactNode } from "react";

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <>
      <SidebarWithHeader>
        <main>{children}</main>
      </SidebarWithHeader>
    </>
  );
}
