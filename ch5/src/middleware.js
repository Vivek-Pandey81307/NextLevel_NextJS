import {NextResponse} from 'next/server'
export function middleware(request){
    request.url ==='/dashboard'
    return NextResponse.redirect(new URL('/login',request.url))
}