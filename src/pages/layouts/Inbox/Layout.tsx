import { Outlet } from "react-router";
import Sections from "@/components/Sections";
import ListMenu from "./ListMenu";

export default function Layout() {
  return <Sections menu={<ListMenu />} view={<Outlet/>} />;
}
