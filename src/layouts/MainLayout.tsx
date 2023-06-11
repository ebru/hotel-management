import { FC, ReactNode } from 'react'
import { Header } from '../components'

interface MainLayoutProps {
  children: ReactNode;
  title: string;
}

const MainLayout: FC<MainLayoutProps> = ({ children, title }) => {
  return (
    <>
      <Header />
      <div className='p-8 flex flex-col gap-5'>
        <h1 className='text-xl mb-2 font-semibold'>{title}</h1>
        <div>
          {children}
        </div>
      </div>
    </>
  )
}

export default MainLayout
