import { FC } from 'react'
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Legend, Tooltip } from 'recharts'
import { Occupancy as OccupancyType } from '../../../types'
import { Card } from '../../../components';

interface OccupancyProps {
  data: OccupancyType[];
}

const Occupancy: FC<OccupancyProps> = ({ data }) => {
  const formatPercentage = (value: number) => `${value}%`;

  return (
    <Card title='Occupancy'>
      <div className='overflow-x-auto'>
        {/* TODO: Create a LineChart reusable component getting data directly in props for consistency in future uses */}
        <LineChart width={650} height={400} data={data}>
          <CartesianGrid strokeDasharray='3 3' />
          <XAxis dataKey='date' />
          <YAxis tickFormatter={formatPercentage} />
          <Tooltip />
          <Legend />
          <Line type='monotone' dataKey='Standard' stroke='#8884d8' activeDot={{ r: 8 }} />
          <Line type='monotone' dataKey='Deluxe' stroke='#82ca9d' activeDot={{ r: 8 }} />
          <Line type='monotone' dataKey='Suite' stroke='#ffc658' activeDot={{ r: 8 }} />
        </LineChart>
      </div>
    </Card>
  )
}

export default Occupancy
