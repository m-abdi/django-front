import BarLoader from './BarLoader'
import React from 'react'
import { useRouter } from 'next/router'
import { useSession } from 'next-auth/react'

export default function UsersSessionRequired(props:any) {
    const router = useRouter()
    const {status} = useSession({
        required: true,
        onUnauthenticated() {
            router.push("/login")
        }
    })
    if (status === "loading") {
        return <BarLoader/>
    }
  return (
    <>{props.children}</>
  )
}
