import type { Session, User } from 'next-auth'
import type { JWT } from "next-auth"

type UserId = string

declare module 'next-auth/jwt' {
    interface JWT{
        id: UserId
    }
}


declare module 'next-auth'{
    interface Sesssion{
        user: User & {
            id: UserId
        }
    }
}