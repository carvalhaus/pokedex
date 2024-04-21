import Nav from "@/components/Nav";
import { Outlet, useLocation } from "react-router-dom";

function StandardPage() {
  let location = useLocation();
  return (
    <main className="pb-20">
      <Outlet />
      <Nav url={location} />
    </main>
  );
}

export default StandardPage;
