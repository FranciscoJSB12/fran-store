import { Layout } from "../../ui/Layout";
import { AuthForm } from "../components/AuthForm";

export const Register = () => {
  return (
    <Layout>
      <main className="w-full flex flex-col justify-center items-center px-2 h-[calc(100vh-160px)] xlg:h-[calc(100vh-120px)]">
        <h1 className="text-center text-gray-700 pb-5 italic">
          Don't have an account? <strong>Register here!</strong>
        </h1>
        <AuthForm isLoggingIn={false} />
        <h2 className="text-center text-gray-700 mt-5 italic">
          Have an account already? <strong>Log in</strong>
        </h2>
      </main>
    </Layout>
  );
};
