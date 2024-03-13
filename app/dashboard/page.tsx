import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'

const DashboardPage = () => {
  return (
    <Tabs defaultValue='employees'>
      <TabsList>
        <TabsTrigger value='employees'>Employees State</TabsTrigger>
        <TabsTrigger value='teams'>Teams State</TabsTrigger>
      </TabsList>
      <TabsContent value='employees'>Employee State view</TabsContent>
      <TabsContent value='teams'>Teams State view</TabsContent>
    </Tabs>
  )
}

export default DashboardPage
