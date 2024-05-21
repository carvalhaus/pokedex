import Loading from "@/components/Loading";
import Nav from "@/components/Nav";
import { useApi } from "@/context/ApiContext";
import { useEffect, useState } from "react";
import { Outlet, useLocation } from "react-router-dom";

function StandardPage() {
  let location = useLocation();
  const [isLoading, setIsLoading] = useState(true);
  const { loading } = useApi();

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 100);
  }, [loading]);

  return (
    <div>
      {isLoading ? (
        <Loading />
      ) : (
        <main className="pb-20">
          <Outlet />
          <Nav url={location} />
        </main>
      )}
    </div>
  );
}

export default StandardPage;
