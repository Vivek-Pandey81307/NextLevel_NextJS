import { NextResponse } from "next/server"
export async function GET(req){
    // console.log(req)
    // const requestHeaders = new Headers(req.headers);
    // console.log(requestHeaders)
     const {searchParams}= new URL(req.url);
     console.log(searchParams);
    return NextResponse.json({"msg":"Ello ji Nextjs api"})
}