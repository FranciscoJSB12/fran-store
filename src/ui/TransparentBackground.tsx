interface PropType {
  hiddenAfterStreching?: boolean;
}

export const TransparentBackground = ({
  hiddenAfterStreching = false,
}: PropType) => {
  return (
    <div
      className={`fixed z-10 top-0 left-0 h-screen w-screen bg-blue-600/30 ${
        hiddenAfterStreching ? "xlg:hidden" : ""
      }`}
    ></div>
  );
};
