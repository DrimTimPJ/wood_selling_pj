import { FC } from 'react';

interface ButtonProps {
  text: string;
}

const Button: FC<ButtonProps> = ({ text }) => {
  return (
    <button className="outline-0 w-[100%] bg-[#728BAD] p-5 text-center rounded-3xl hover:bg-[#2d3e48] cursor-pointer active:scale-[1.2] transition-all duration-300">
      {text}
    </button>
  );
};

export default Button;