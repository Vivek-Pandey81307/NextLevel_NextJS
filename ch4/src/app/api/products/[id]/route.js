import { AmpContext } from 'next/dist/server/future/route-modules/app-page/vendored/contexts/entrypoints'
import {NextResponse} from 'next/server'
export const GET = async (req,{params})=>{
    // console.log("Req:",req);
    console.log("Context: ",{params});
    console.log("params.id: ",params.id);
    return NextResponse.json({"msg":"success"},{status:200})
} 