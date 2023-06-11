import { FC, ReactNode } from "react";

interface CardProps {
  children: ReactNode;
}

const Card: FC<CardProps> = ({ children }) => {
  return (
    <div className='bg-slate-300 rounded-xl p-4'>
      {children}
    </div>
  )
}

export default Card;
