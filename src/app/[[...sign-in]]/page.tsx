'use client'

import * as Clerk from '@clerk/elements/common'
import * as SignIn from '@clerk/elements/sign-in'
import { useUser } from '@clerk/nextjs'
import Image from 'next/image'
import { useRouter } from 'next/navigation'
import { useEffect } from 'react'
import { esMX } from '@clerk/localizations'



const Login = () => {

    const { isLoaded, isSignedIn, user } = useUser()

    const router = useRouter()

    useEffect(() => {
        const role = user?.publicMetadata.role;

        if (role) {
            router.push(`/${role}`)
        }
    }, [user, router])


  return (
    <div className='h-screen flex items-center justify-center bg-verdedos-900'>
      <SignIn.Root>
        <SignIn.Step name='start' className='bg-white p-12 rounded-lg shadow-2xl flex flex-col gap-2'>

            <h1 className='text-xl font-bold flex items-center gap-2'>
                <Image src="/CBTALogo.png" alt="" width={33} height={33} />
                SISTEMA DE GESTION ESCOLAR
            </h1>
            <h2 className='text-verde-200'>Entra a tu cuenta</h2>

            <Clerk.GlobalError  className='text-sm text-red-500'/>
            <Clerk.Field  name="identifier" className='flex flex-col gap-2'>
                <Clerk.Label  className='text-xs text-verdedos-100'>Usuario</Clerk.Label>
                <Clerk.Input type='text' required className='p-2 rounded-md ring-1 ring-verdedos-100'/>

                <Clerk.FieldError className='text-xs text-red-500'/>
            </Clerk.Field>
            <Clerk.Field name="password" className='flex flex-col gap-2'>
                <Clerk.Label className='text-xs text-verdedos-100'>Contraseña</Clerk.Label>
                <Clerk.Input type='password' required className='p-2 rounded-md ring-1 ring-verdedos-100'/>
                <Clerk.FieldError className='text-xs text-red-500'/>
            </Clerk.Field>

            <SignIn.Action submit className='bg-verde-200 text-verdedos-900 my-1 rounded-md text-sm p-[10px]'>Iniciar sesión</SignIn.Action>
        </SignIn.Step>
      </SignIn.Root>
        
    </div>
  )
}

export default Login