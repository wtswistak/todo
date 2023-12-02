interface AuthInputProps {
  type: string;
  setInputValue: (value: string) => void;
  value: string;
}

const AuthInput: React.FC<AuthInputProps> = ({
  type,
  setInputValue,
  value,
}) => {
  return (
    <input
      type={type}
      value={value}
      className="form-control input-task mb-2"
      onChange={(e) => setInputValue(e.target.value)}
      required
      minLength={3}
    />
  );
};

export default AuthInput;
