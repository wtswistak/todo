interface AuthInputProps {
  type: string;
  // setInputValue: (value: string) => void;
}

const AuthInput: React.FC<AuthInputProps> = ({ type }) => {
  return (
    <input
      type={type}
      className="form-control input-task mb-2"
      required
      minLength={5}
    />
  );
};

export default AuthInput;
