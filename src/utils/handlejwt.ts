import * as jose from 'jose'

type Subscriber = {
  name: string
  email: string
}

export async function createJWT({ name, email }: Subscriber): Promise<string> {
  return await new jose.SignJWT({ name, email })
    .setProtectedHeader({ alg: 'HS256' })
    .setExpirationTime(`${import.meta.env.VITE_JWT_EXPIRES_IN}`)
    .sign(new TextEncoder().encode(`${import.meta.env.VITE_JWT_SECRET}`))
}

export async function verifyJWT({ jwt }: { jwt: string }): Promise<Subscriber> {
  const { payload } = await jose.jwtVerify(
    jwt,
    new TextEncoder().encode(`${import.meta.env.VITE_JWT_SECRET}`)
  )

  return payload as Subscriber
}
