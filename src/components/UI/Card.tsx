import { FC, ReactNode } from "react";

interface CardProps {
  title?: string;
  children: ReactNode;
}

const Card: FC<CardProps> = ({ title, children }) => {
  return (
    <div className='bg-white rounded-xl p-4'>
      {title && <h2 className='text-xl mb-2'>{title}</h2>}
      {children}
    </div>
  )
}

export default Card;
