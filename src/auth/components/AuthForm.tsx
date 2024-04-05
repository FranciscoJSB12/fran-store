import { useState, ChangeEvent, FormEvent } from "react";
import { useAppDispatch, logIn } from "../../store";
import { useNavigate } from "react-router-dom";
import { AuthInput } from "./AuthInput";
import { SubmitBtn } from "./SubmitBtn";
import { categories } from "../../utils/navbarCategories";

interface AuthFormProps {
  isLoggingIn: boolean;
}

interface AuthFormState {
  email: string;
  password: string;
  firstName: string;
  lastName: string;
}

export const AuthForm = ({ isLoggingIn }: AuthFormProps) => {
  const [inputs, setInputs] = useState({} as AuthFormState);
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const changeHandler = (e: ChangeEvent<HTMLInputElement>) => {
    setInputs((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const submitHandler = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    dispatch(logIn());
    const lastCategory = localStorage.getItem("lastCategory");
    if (lastCategory) {
      navigate(
        lastCategory !== categories.all.toLowerCase() ? `/${lastCategory}` : "/"
      );
    }
  };

  return (
    <form
      onSubmit={submitHandler}
      className="w-full max-w-96 flex flex-col items-center justify-center gap-5"
    >
      <AuthInput
        name="email"
        changeHandler={changeHandler}
        placeHolder="Email"
        type="email"
        value={inputs.email}
      />
      {!isLoggingIn && (
        <>
          <AuthInput
            name="first name"
            changeHandler={changeHandler}
            placeHolder="First Name"
            type="text"
            value={inputs.password}
          />
          <AuthInput
            name="last name"
            changeHandler={changeHandler}
            placeHolder="Last Name"
            type="text"
            value={inputs.firstName}
          />
        </>
      )}
      <AuthInput
        name="password"
        changeHandler={changeHandler}
        placeHolder="Password"
        type="password"
        value={inputs.lastName}
      />
      <SubmitBtn />
    </form>
  );
};
