import { SignIn } from '@clerk/nextjs'

export default function Page() {
  return (
    <div className="w-full max-w-screen-2xl h-screen flex items-center justify-center">
        <SignIn />
    </div>
  )
}