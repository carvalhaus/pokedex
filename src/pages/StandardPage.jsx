import Nav from "@/components/Nav";
import { Outlet } from "react-router-dom";

function StandardPage() {
  return (
    <main className="flex flex-col content-center justify-center">
      <Outlet />
      <Nav />
    </main>
  );
}

export default StandardPage;
