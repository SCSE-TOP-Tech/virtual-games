"use client";
import { useContext } from "react";
import { AuthContext } from "../../context/AuthContext";
import { useRouter } from "next/navigation";

const isBrowser = () => typeof window != "undefined";
const unprotectedRoutes = ["/", "/login"];

const ProtectedRoute = ({ children }) => {
  const router = useRouter();
  console.log(router.path);
  console.log(isBrowser);
  const { isAuthenticated } = useContext(AuthContext);
  const isProtectedPath = unprotectedRoutes.indexOf(router.path) === -1;
  if (!isAuthenticated && isBrowser && isProtectedPath) router.push("/login");
  return children;
};

export default ProtectedRoute;
