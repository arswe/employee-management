import { Button } from '@/components/ui/button'
import { PersonStandingIcon } from 'lucide-react'
import Link from 'next/link'
import { Fragment } from 'react'

const LandingPage = () => {
  return (
    <Fragment>
      <h1 className='flex gap-2 items-center'>
        <PersonStandingIcon size={50} className='text-pink-400' /> Support me
      </h1>
      <p>
        best dashboard for your personal customer support. <br />
      </p>
      <div className='flex gap-2 items-center'>
        <Button asChild>
          <Link href='/login'>Login In</Link>
        </Button>
        <span>or</span>
        <Button asChild variant={'outline'}>
          <Link href='sign-up'>Sign Up</Link>
        </Button>
      </div>
    </Fragment>
  )
}

export default LandingPage
