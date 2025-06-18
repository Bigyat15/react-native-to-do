import { useRouter, usePathname } from "expo-router";
import { useUser } from "../../hooks/useUser";
import { useEffect } from "react";
import ThemedLoading from "../ThemedLoader";

const UserOnly = ({ children }) => {
  const { user, authChecked } = useUser();
  const router = useRouter();
  

  useEffect(() => {
    if (authChecked && user === null) {
      router.push("/");
    }
  }, [user, authChecked]); 

  if (!authChecked || !user) {
    return <ThemedLoading />;
  }

  return children;
};

export default UserOnly;
