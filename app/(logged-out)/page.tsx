import { Button } from '@/components/ui/button'
import { Fragment } from 'react'

import { PersonStandingIcon } from 'lucide-react'

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
        <Button> Login In</Button>
        <Button variant={'outline'}> Sign Up</Button>
      </div>
    </Fragment>
  )
}

export default LandingPage
