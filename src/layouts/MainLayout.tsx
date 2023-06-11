import { FC, ReactNode } from 'react'

interface MainLayoutProps {
  children: ReactNode;
  title: string;
}

const MainLayout: FC<MainLayoutProps> = ({ children, title }) => {
  return (
    <div className='p-8 flex flex-col gap-5'>
      <h1 className='text-xl mb-2'>{title}</h1>
      <div>
        {children}
      </div>
    </div>
  )
}

export default MainLayout
