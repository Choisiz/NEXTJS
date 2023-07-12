const Button = ({ children }) => {
  return (
    <button
      className="bg-black dark:bg-white text-lo text-teal-200 dark:text-teal-700 rounded-lg px-5"
      onClick={() => alert("thank you")}
    >
      {children}
    </button>
  );
};

export default Button;
