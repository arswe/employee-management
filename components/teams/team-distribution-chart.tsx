import { teamPieData } from '@/data/data-pie'
import { Cell, Pie, PieChart, ResponsiveContainer, Tooltip } from 'recharts'

const TeamDistributionChart = () => {
  return (
    <ResponsiveContainer width={'100%'} height={150}>
      <PieChart>
        <Tooltip
          labelClassName='font-bold'
          wrapperClassName='!text-sm dark:!bg-black rounded-md dark:!border-border'
        />
        <Pie dataKey='value' nameKey={'name'} data={teamPieData}>
          {teamPieData.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={entry.color} />
          ))}
        </Pie>
        <Tooltip />
      </PieChart>
    </ResponsiveContainer>
  )
}

export default TeamDistributionChart
