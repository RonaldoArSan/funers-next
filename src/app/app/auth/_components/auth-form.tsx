'use client'
import Link from "next/link"
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { useForm } from "react-hook-form"

export default function Component() {
const form = useForm()

  const handleSubmit = form.handleSubmit((data) => {
    console.log(data)
  })


  return (
    <div className="flex min-h-[100dvh] items-center justify-center bg-gray-100 px-4 dark:bg-gray-900">
      <div className="w-full max-w-md space-y-6">
        <div className="text-center">
          <h1 className="text-3xl font-bold tracking-tight text-gray-900 dark:text-gray-50">Sign in to your account</h1>
          <p className="mt-2 text-sm text-gray-600 dark:text-gray-400">
            Or
            <Link className="font-medium text-blue-600 hover:underline dark:text-blue-400" href="#">
              sign up
            </Link>
          </p>
        </div>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <Label className="sr-only" htmlFor="email">
              Email
            </Label>
            <Input id="email" placeholder="Email address" required type="email" {...form.register('email')} />
          </div>
          <Button className="w-full" type="submit">
            Send magic link
          </Button>
        </form>
      </div>
    </div>
  )
}

