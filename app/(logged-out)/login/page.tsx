import { Button } from '@/components/ui/button'
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import { PersonStandingIcon } from 'lucide-react'
import Link from 'next/link'

const LoginPage = () => {
  return (
    <>
      <PersonStandingIcon size={50} />
      <Card className='w-full max-w-sm'>
        <CardHeader>
          <CardTitle>Login</CardTitle>
          <CardDescription>Login to your Support me account</CardDescription>
          <CardContent></CardContent>
        </CardHeader>

        <CardContent>
          <p>Card Content</p>
        </CardContent>
        <CardFooter className='flex justify-between'>
          <small> Do not have an account?</small>
          <Button asChild variant='outline' size='sm'>
            <Link href='/sign-Up'>Sign Up</Link>
          </Button>
        </CardFooter>
      </Card>
    </>
  )
}

export default LoginPage
