import { SignUp } from '@clerk/nextjs'

export default function Page() {
  return (
    <div className="w-full max-w-screen-2xl min-h-screen flex items-center justify-center">
        <SignUp />
    </div>
  )
}