import { FC } from 'react'
import { Link } from 'react-router-dom'
import { HomeIcon } from '@heroicons/react/24/outline'

const Header: FC = () => {
  return (
    <header className='bg-white shadow-sm'>
      <div className='mx-auto flex justify-between items-center py-5 px-10'>
        <Link to='/' className='flex items-center space-x-2 text-gray-800 hover:text-indigo-600 transition-colors duration-200'>
          <HomeIcon className='h-6 w-6' />
          <span>Hotel Management</span>
        </Link>
        <nav className='space-x-4'>
          <Link to='/' className='text-gray-800 hover:text-indigo-600 transition-colors duration-200'>
            Dashboard
          </Link>
          <Link to='/cleaning' className='text-gray-800 hover:text-indigo-600 transition-colors duration-200'>
            Cleaning
          </Link>
        </nav>
      </div>
    </header>
  )
}

export default Header
