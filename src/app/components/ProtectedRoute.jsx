"use client";
import { useContext } from "react";
import { useRouter } from "next/navigation";
import { AuthContext } from "../../context/AuthContext";
const ProtectedRoute = ({ children }) => {
  const router = useRouter();

  const { user } = useContext(AuthContext);
  if (!user) router.push("/login");
  return <>{user && children}</>;
};

export default ProtectedRoute;
