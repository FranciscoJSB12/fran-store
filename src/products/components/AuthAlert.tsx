import { XMarkIcon } from "@heroicons/react/24/outline";
import type { NavigateFunction } from "react-router-dom";

interface AuthAlertProps {
  navigate: NavigateFunction;
  closeAuthAlert: () => void;
}

export const AuthAlert = ({ navigate, closeAuthAlert }: AuthAlertProps) => {
  return (
    <aside className="w-11/12 max-w-80 h-48 flex flex-col items-center justify-center fixed top-0 right-0 bottom-0 left-0 m-auto z-30 bg-white rounded-lg border border-blue-900">
      <p className="italic text-gray-600 text-lg">
        Register or Log in to continue
      </p>
      <div className="mt-5">
        <button
          className="bg-blue-700 w-24 py-1 rounded-lg text-white mr-5"
          onClick={() => navigate("/auth/register")}
        >
          Register
        </button>
        <button
          className="bg-blue-700 w-24 py-1 rounded-lg text-white mr-5"
          onClick={() => navigate("auth/log-in")}
        >
          Log In
        </button>
      </div>
      <XMarkIcon
        onClick={closeAuthAlert}
        className="h-6 w-6 text-black absolute top-2 right-2 cursor-pointer"
      />
    </aside>
  );
};
