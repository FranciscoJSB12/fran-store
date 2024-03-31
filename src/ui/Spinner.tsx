import { CgSpinnerTwo } from "react-icons/cg";

export const Spinner = () => {
  return (
    <div className="mt-10">
      <CgSpinnerTwo className="h-24 w-24 animate-spin text-blue-600" />
      <p className="mt-4 text-lg text-gray-700 font-light">Loading...</p>
    </div>
  );
};
