import { data } from '@/data/data'

import { Bar, BarChart, ResponsiveContainer, XAxis, YAxis } from 'recharts'

const WordLocationTrends = () => {
  return (
    <ResponsiveContainer height={350} width={'100%'}>
      <BarChart data={data}>
        <XAxis dataKey={'name'} stroke='#888888' />
        <YAxis stroke='#888888' />
        <Bar dataKey='office' stackId={1} fill='#ec4899' />
        <Bar dataKey='wfh' stackId={1} fill='#6b7280' />
      </BarChart>
    </ResponsiveContainer>
  )
}

export default WordLocationTrends
