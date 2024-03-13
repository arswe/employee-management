'use client'

import me from '@/public/me.png'
import { AvatarFallback } from '@radix-ui/react-avatar'
import {
  AlertTriangleIcon,
  BadgeCheckIcon,
  PartyPopperIcon,
  UserCheck2Icon,
  UserIcon,
  UserRoundXIcon,
} from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import { Avatar } from './ui/avatar'
import { Button } from './ui/button'
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from './ui/card'

const EmployeesState = () => {
  const totalEmployees = 100
  const employeesPresent = 85
  const employeesPresentPercentage = (employeesPresent / totalEmployees) * 100
  return (
    <div className='grid lg:grid-cols-3 gap-4'>
      <Card className='border-green-300'>
        <CardHeader className='pb-2'>
          <CardTitle className='text-base '>Total Employees</CardTitle>
        </CardHeader>
        <CardContent className='flex justify-between'>
          <div className='flex gap-2'>
            <UserIcon />
            <div className='text-5xl'>100</div>
          </div>
          <div className='font-bold'>
            <Button size='xs' asChild>
              <Link href='/dashboard/employees'>View All</Link>
            </Button>
          </div>
        </CardContent>
      </Card>

      <Card className='border-blue-300'>
        <CardHeader className='pb-2'>
          <CardTitle className='text-base'>Employees Present</CardTitle>
        </CardHeader>
        <CardContent className='flex justify-between'>
          <div className='flex gap-2'>
            {employeesPresentPercentage > 75 ? (
              <UserCheck2Icon className='text-green-500' />
            ) : (
              <UserRoundXIcon className='text-red-500' />
            )}

            <div className='text-5xl'>{employeesPresent}</div>
          </div>
        </CardContent>
        <CardFooter>
          {employeesPresentPercentage > 75 ? (
            <span className='text-xs text-green-500 flex gap-2 items-center'>
              <BadgeCheckIcon />
              {employeesPresentPercentage}% of employees are present
            </span>
          ) : (
            <span className='text-xs text-red-500 flex gap-2 items-center'>
              <AlertTriangleIcon />
              Only {employeesPresentPercentage}% of employees are present
            </span>
          )}
        </CardFooter>
      </Card>

      <Card className='border-pink-300 flex flex-col'>
        <CardHeader className='pb-2'>
          <CardTitle className='text-base'>Employees of the months</CardTitle>
        </CardHeader>
        <CardContent className='flex gap-2 items-center'>
          <Avatar>
            <Image src={me} alt='Employee of the months' />
            <AvatarFallback>AR</AvatarFallback>
          </Avatar>
          <span className='text-2xl'>Abdur Rahman</span>
        </CardContent>

        <CardFooter>
          <span className=' flex gap-2 items-center text-xs text-muted-foreground mt-auto'>
            <PartyPopperIcon className='text-pink-400' />
            Congrats on being the employee of the month
          </span>
        </CardFooter>
      </Card>
    </div>
  )
}

export default EmployeesState
