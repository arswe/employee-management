import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { DataTable } from '@/components/ui/data-table'
import { employees } from '@/data/empData'
import { columns } from './columns'

const EmployeesPage = async () => {
  await new Promise((resolve) => setTimeout(resolve, 1000))
  return (
    <Card>
      <CardHeader>
        <CardTitle>Employees</CardTitle>
      </CardHeader>
      <CardContent>
        <DataTable columns={columns} data={employees} />
      </CardContent>
    </Card>
  )
}

export default EmployeesPage
