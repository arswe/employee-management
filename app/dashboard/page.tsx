import EmployeesState from '@/components/employees-state'
import TeamsState from '@/components/teams-state'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'

const DashboardPage = () => {
  return (
    <Tabs defaultValue='employees'>
      <TabsList className='mb-4'>
        <TabsTrigger value='employees'>Employees State</TabsTrigger>
        <TabsTrigger value='teams'>Teams State</TabsTrigger>
      </TabsList>
      <TabsContent value='employees'>
        <EmployeesState />
      </TabsContent>
      <TabsContent value='teams'>
        <TeamsState />
      </TabsContent>
    </Tabs>
  )
}

export default DashboardPage
