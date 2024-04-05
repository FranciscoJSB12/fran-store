import { ChangeEvent } from "react";

interface InputProps {
  name: string;
  type: string;
  placeHolder: string;
  autoComplete?: string;
  value: string;
  changeHandler: (e: ChangeEvent<HTMLInputElement>) => void;
}

export const AuthInput = (props: InputProps) => {
  const name = props.name.replace(/\s/g, "_");
  return (
    <div className="w-full">
      <label htmlFor={name} className="block">
        {props.name.replace(/\b\w/g, (l) => l.toUpperCase())}:
      </label>
      <input
        id={name}
        type={name}
        name={name}
        className="w-full border border-gray-400 py-2 px-4 rounded-lg focus:outline-blue-700"
        placeholder={props.placeHolder || "off"}
        autoComplete={props.autoComplete || "off"}
        onChange={props.changeHandler}
        value={props.value || ""}
      />
    </div>
  );
};
