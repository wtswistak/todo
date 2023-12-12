interface AuthInputProps {
  type: string;
  value: string;
  setInputValue: (value: string) => void;
}

const AuthInput: React.FC<AuthInputProps> = ({
  type,
  value,
  setInputValue,
}) => {
  return (
    <input
      type={type}
      id={type}
      value={value}
      className="form-control input-task mb-2"
      onChange={(e) => setInputValue(e.target.value)}
      required
      minLength={3}
      autoComplete="on"
    />
  );
};

export default AuthInput;
