interface IButtonStyle {
  bg: string;
  color: string;
}

interface ButtonProps {
  label: string;
  click: () => void;
  disabled?: boolean;
  style?: Partial<IButtonStyle>;
}

const Button = ({ label, click, disabled, style }: ButtonProps) => {
  let bgColor = style && style.bg ? style.bg : 'bg-orange-400';
  let color = style && style.color ? style.color : 'text-white';
  if (disabled) {
    bgColor = 'bg-slate-200';
    color = 'text-slate-500';
  }
  return (
    <button
      className={`${bgColor} ${color} px-4 py-2 rounded-full shadow-lg mt-2 w-full`}
      onClick={click}
    >
      {label}
    </button>
  );
};

export default Button;
