import { Card, CardHeader, CardTitle } from './ui/card'

const EmployeesState = () => {
  return (
    <div className='grid lg:grid-cols-3 gap-4'>
      <Card className='border-green-300'>
        <CardHeader>
          <CardTitle className='text-base '>Total Employees</CardTitle>
        </CardHeader>
      </Card>
      <Card className='border-blue-300'>
        <CardHeader>
          <CardTitle className='text-base'>Employees Hired</CardTitle>
        </CardHeader>
      </Card>
      <Card className='border-pink-300'>
        <CardHeader>
          <CardTitle className='text-base'>Employees Fired</CardTitle>
        </CardHeader>
      </Card>
    </div>
  )
}

export default EmployeesState
