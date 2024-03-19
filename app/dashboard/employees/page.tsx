import { setTimeout } from 'timers/promises'

const EmployeesPage = async () => {
  await setTimeout(5000)
  return <div>page</div>
}

export default EmployeesPage
