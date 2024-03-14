import { monthsData } from '@/data/monthsData'
import {
  CartesianGrid,
  Legend,
  Line,
  LineChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from 'recharts'

const SupportTicketsResolved = () => {
  return (
    <ResponsiveContainer height={350} width='100%'>
      <LineChart data={monthsData}>
        <Tooltip
          labelClassName='font-bold'
          wrapperClassName='!text-sm dark:!bg-black rounded-md dark:!border-border'
        />
        <XAxis  dataKey='name' stroke='#888888' />
        <YAxis  stroke='#888888' />
        <CartesianGrid strokeDasharray='3 3' />
        <Line type='monotone' dataKey='delta' stroke='#84cc16' />
        <Line type='monotone' dataKey='alpha' stroke='#3b82f6' />
        <Line type='monotone' dataKey='canary' stroke='#f97316' />
        <Legend
          formatter={(value) => <span className='capitalize'>{value}</span>}
        />
      </LineChart>
    </ResponsiveContainer>
  )
}

export default SupportTicketsResolved
