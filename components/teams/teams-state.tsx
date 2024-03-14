'use client'

import { ListChecksIcon, UsersIcon } from 'lucide-react'
import Link from 'next/link'
import { Button } from '../ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '../ui/card'

const TeamsState = () => {
  return (
    <>
      <div className='grid lg:grid-cols-3 gap-4'>
        <Card className='border-blue-300'>
          <CardHeader className='pb-2'>
            <CardTitle className='text-base '>Total Teams</CardTitle>
          </CardHeader>
          <CardContent className='flex justify-between'>
            <div className='flex gap-2'>
              <UsersIcon />
              <div className='text-5xl'>8</div>
            </div>
            <div className='font-bold'>
              <Button size='xs' asChild>
                <Link href='/dashboard/teams'>View All</Link>
              </Button>
            </div>
          </CardContent>
        </Card>

        <Card className='border-green-300'>
          <CardHeader className='pb-2'>
            <CardTitle className='text-base'>Teams Leaders Present</CardTitle>
          </CardHeader>
          <CardContent className='flex justify-between'></CardContent>
        </Card>

        <Card className='border-pink-300 flex flex-col'>
          <CardHeader className='pb-2'>
            <CardTitle className='text-base'>
              Team Distribution Overview
            </CardTitle>
          </CardHeader>
          <CardContent className='flex gap-2 items-center'></CardContent>
        </Card>
      </div>
      <div className='my-4'>
        <Card>
          <CardHeader>
            <CardTitle className='text-lg flex items-center gap-2'>
              <ListChecksIcon />
              <span className='text-muted-foreground text-sm ml-2'>
                Support Tickets Overview
              </span>
            </CardTitle>
          </CardHeader>
          <CardContent className='pl-0'>Line Graph</CardContent>
        </Card>
      </div>
    </>
  )
}

export default TeamsState
