import { ReactNode, useState } from "react";
import { Navigate } from "react-router-dom";

interface PrivateRouteType {
  children: ReactNode;
}

export const PrivateRoute = ({ children }: PrivateRouteType) => {
  //Extraer del contexto si el usuario está autenticado o no
  const [logged, setLogged] = useState(true);

  return logged ? children : <Navigate to="auth/login" />;
};
