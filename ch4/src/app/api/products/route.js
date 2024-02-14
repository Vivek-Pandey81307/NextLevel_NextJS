import { NextResponse } from "next/server"
export async function GET(req){
    // console.log(req)
    // const requestHeaders = new Headers(req.headers);
    // console.log(requestHeaders)
    //  const {searchParams}= new URL(req.url);
    // const searchParams = req.nextUrl.searchParams 
    // console.log(searchParams);
    // const cook1 =req.cookies
    // console.log("Cookie1:",cook1);
    // const cook2 =cookies();
    // console.log("Cookie2:",cook2)
    return NextResponse.json({"msg":"Ello ji Nextjs api"})
}
export async function POST(req){
    // console.log(req);
    // const res = await req.json();
    // console.log("ResJSON:",res)
    const formData = await req.formData();
    console.log("Form Data: ",formData)
    return NextResponse.json({"msg":"Post request accomplished"},{status:201})
}