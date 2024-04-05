import { Link } from "react-router-dom";
import { Layout } from "../../ui/Layout";
import { AuthForm } from "../components/AuthForm";

export const LogIn = () => {
  return (
    <Layout>
      <main className="w-full flex flex-col justify-center items-center px-2 h-[calc(100vh-160px)] xlg:h-[calc(100vh-120px)]">
        <h1 className="text-center text-gray-700 pb-5 italic">
          <strong>Log in here!</strong>
        </h1>
        <AuthForm isLoggingIn={true} />
        <h2 className="text-center text-gray-700 mt-5 italic">
          Don't Have an account yet?{" "}
          <Link to="/auth/register">
            <strong className="underline hover:text-blue-900">Register</strong>
          </Link>
        </h2>
      </main>
    </Layout>
  );
};
