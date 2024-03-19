'use client'

import { Button } from '@/components/ui/button'
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form'
import { Input } from '@/components/ui/input'
import { PasswordInput } from '@/components/ui/password-input'
import { zodResolver } from '@hookform/resolvers/zod'
import { Users2Icon } from 'lucide-react'
import Link from 'next/link'
import { useForm } from 'react-hook-form'
import { z } from 'zod'

const formSchema = z.object({
  email: z.string().email(),
  password: z.string().min(6),
})

const LoginPage = () => {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: { email: '', password: '' },
  })

  const handleSubmit = () => {
    console.log('submitted')
  }

  return (
    <>
      <Users2Icon size={50} />
      <Card className='w-full max-w-sm'>
        <CardHeader>
          <CardTitle>Login</CardTitle>
          <CardDescription>
            Login to your Employee Management account
          </CardDescription>
        </CardHeader>
        <CardContent>
          <Form {...form}>
            <form
              className='flex flex-col gap-4'
              onSubmit={form.handleSubmit(handleSubmit)}
            >
              <FormField
                control={form.control}
                name='email'
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Email</FormLabel>
                    <FormControl>
                      <Input placeholder='your@example.com' {...field} />
                    </FormControl>
                    <FormDescription>
                      This is the email address you signed up to SupportMe with
                    </FormDescription>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name='password'
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Password</FormLabel>
                    <FormControl>
                      <PasswordInput placeholder='••••••••' {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <Button type='submit'>
                <Link href='/dashboard'>Login</Link>
              </Button>
            </form>
          </Form>
        </CardContent>
        <CardFooter className='flex justify-between'>
          <small>Do not have an account?</small>
          <Button asChild variant='outline' size='sm'>
            <Link href='/sign-up'>Sign Up</Link>
          </Button>
        </CardFooter>
      </Card>
    </>
  )
}

export default LoginPage
