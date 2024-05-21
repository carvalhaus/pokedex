import { useApi } from "@/context/ApiContext";
import { auth } from "@/services/firebase";
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

function useGoogleAuth() {
  const { setUser, setIsLogged } = useApi();
  const navigate = useNavigate();

  const handleGoogleAuth = () => {
    const provider = new GoogleAuthProvider();

    signInWithPopup(auth, provider)
      .then((result) => {
        const credential = GoogleAuthProvider.credentialFromResult(result);
        const token = credential.accessToken;
      })
      .then(() => {
        navigate("/");
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const handleLogout = async () => {
    await auth.signOut();
  };

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((authUser) => {
      if (authUser) {
        setUser(authUser);
        setIsLogged(true);
      } else {
        setUser(null);
        setIsLogged(false);
      }
    });

    return () => {
      unsubscribe();
    };
  }, []);

  return { handleGoogleAuth, handleLogout };
}

export default useGoogleAuth;
