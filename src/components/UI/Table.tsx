import { FC, ReactNode } from 'react'

interface TableProps {
  headers: string[]
  children: ReactNode
}

const Table: FC<TableProps> = ({ headers, children }) => (
  <div className='overflow-x-auto sm:-mx-6 lg:-mx-8'>
    <div className='inline-block min-w-full py-2 align-middle sm:px-6 lg:px-8'>
      <div className='overflow-hidden shadow-sm rounded-lg'>
        <table className='min-w-full divide-y divide-gray-200'>
          <thead className='bg-gray-50'>
            <tr>
              {headers.map((header, index) => (
                <th key={index} className='px-6 py-3 text-xs font-medium text-gray-500 uppercase tracking-wider'>
                  {header}
                </th>
              ))}
            </tr>
          </thead>
          <tbody className='bg-white divide-y divide-gray-200'>{children}</tbody>
        </table>
      </div>
    </div>
  </div>
)

export default Table
