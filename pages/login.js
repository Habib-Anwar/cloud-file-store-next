import { useSession, signIn, signOut } from "next-auth/react"

export default function Component() {
  const { data: session } = useSession()
  if (session) {
    return (
      <>
        Signed in as {session.user.email} <br />
        <button onClick={() => signOut()}>Sign out</button>
      </>
    )
  }
  return (
    <div className='flex justify-center items-center mt-[25%]'>
      <span className="mr-2">Not signed in?</span>
      <button className='bg-blue-400 p-2 rounded-xl px-3 text-white' onClick={() => signIn()}>Sign in</button>
    </div>
  )
}