type TInput = 'text' | 'number' | 'email' | 'password';

interface IInputProps {
  name: string;
  type: TInput;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  placeholder?: string;
}

const Input = (props: IInputProps) => {
  return (
    <input
      {...props}
      className="bg-white drop-shadow-lg rounded-full h-10 w-64 px-5 border-none focus:outline-orange-500 text-orange-500"
    />
  );
};

export default Input;
