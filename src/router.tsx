import { createBrowserRouter } from 'react-router-dom'
import { Cleaning, Dashboard } from './pages'

export const router = createBrowserRouter([
  {
    path: '/',
    element: <Dashboard />,
  },
  {
    path: '/cleaning',
    element: <Cleaning />,
  },
])
