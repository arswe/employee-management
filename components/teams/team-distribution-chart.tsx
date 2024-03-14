import { teamPieData } from '@/data/data-pie'
import { Cell, Pie, PieChart, ResponsiveContainer, Tooltip } from 'recharts'

const TeamDistributionChart = () => {
  return (
    <ResponsiveContainer width='100%' height={150}>
      <PieChart>
        <Tooltip
          labelClassName='font-bold'
          wrapperClassName='dark:[&_.recharts-tooltip-item]:!text-white [&_.recharts-tooltip-item]:!text-black !text-sm dark:!bg-black rounded-md dark:!border-border'
        />
        <Pie
          data={teamPieData}
          dataKey='value'
          nameKey='name'
          labelLine={false}
          label
        >
          {teamPieData.map((dataItem, i) => (
            <Cell key={i} fill={dataItem.color} />
          ))}
        </Pie>
      </PieChart>
    </ResponsiveContainer>
  )
}

export default TeamDistributionChart
