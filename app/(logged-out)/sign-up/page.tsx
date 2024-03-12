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
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form'
import { Input } from '@/components/ui/input'
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'
import { zodResolver } from '@hookform/resolvers/zod'
import { PersonStandingIcon } from 'lucide-react'
import Link from 'next/link'
import { useForm } from 'react-hook-form'
import { z } from 'zod'

const formSchema = z.object({
  email: z.string().email(),
  accountType: z.enum(['personal', 'company']),
  companyName: z.string().optional(),
  numberOfEmployees: z.coerce.number().optional(),
})

const SignUpPage = () => {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: { email: '' },
  })

  const handleSubmit = () => {
    console.log('submitted')
  }

  const accountType = form.watch('accountType')

  return (
    <>
      <PersonStandingIcon size={50} />
      <Card className='w-full max-w-sm'>
        <CardHeader>
          <CardTitle>Sign Up</CardTitle>
          <CardDescription>Sign Up for a new Support Me account</CardDescription>
        </CardHeader>
        <CardContent>
          <Form {...form}>
            <form className='flex flex-col gap-4' onSubmit={form.handleSubmit(handleSubmit)}>
              <FormField
                control={form.control}
                name='email'
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Email</FormLabel>
                    <FormControl>
                      <Input placeholder='your@example.com' {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name='accountType'
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Account Type</FormLabel>
                    <Select onValueChange={field.onChange}>
                      <FormControl>
                        <SelectTrigger>
                          <SelectValue placeholder='Select an Account Type' />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        <SelectGroup>
                          <SelectItem value='personal'>Personal</SelectItem>
                          <SelectItem value='company'>Company</SelectItem>
                        </SelectGroup>
                      </SelectContent>
                    </Select>
                    <FormMessage />
                  </FormItem>
                )}
              />

              {accountType === 'company' && (
                <>
                  <FormField
                    control={form.control}
                    name='companyName'
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Company Name</FormLabel>
                        <FormControl>
                          <Input placeholder='Company Name' {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name='numberOfEmployees'
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Number of Employees</FormLabel>
                        <FormControl>
                          <Input type='number' placeholder='0' {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </>
              )}

              <Button type='submit'>Sign Up</Button>
            </form>
          </Form>
        </CardContent>
        <CardFooter className='flex justify-between'>
          <small> Already have an account?</small>
          <Button asChild variant='outline' size='sm'>
            <Link href='/login'>Login</Link>
          </Button>
        </CardFooter>
      </Card>
    </>
  )
}

export default SignUpPage
