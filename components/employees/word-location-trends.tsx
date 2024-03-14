import { data } from '@/data/data'

import {
  Bar,
  BarChart,
  CartesianGrid,
  Legend,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from 'recharts'

const WordLocationTrends = () => {
  return (
    <ResponsiveContainer height={350} width={'100%'}>
      <BarChart
        data={data}
        className='[&_.recharts-tooltip-cursor]:fill-zinc-200 dark:[&_.recharts-tooltip-cursor]:fill-zinc-800'
      >
        <CartesianGrid />
        <XAxis dataKey={'name'} stroke='#888888' />
        <YAxis stroke='#888888' />
        <Tooltip
          separator=': '
          formatter={(value, name) => {
            if (name === 'wfh') return [value, 'Work from home']
            else if (name === 'office') return [value, 'Work from office']
          }}
          labelClassName='font-bold'
          wrapperClassName='!text-sm dark:!bg-black rounded-md dark:!border-border'
        />
        <Legend
          iconType='circle'
          formatter={(value) => {
            if (value === 'office') return 'Work form Office'

            if (value === 'wfh') return 'Work from Home'
          }}
        />
        <Bar dataKey='office' stackId={1} fill='#ec4899' />
        <Bar dataKey='wfh' stackId={1} fill='#6b7280' radius={[4, 4, 0, 0]} />
      </BarChart>
    </ResponsiveContainer>
  )
}

export default WordLocationTrends
