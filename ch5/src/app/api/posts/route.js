import {NextResponse} from 'next/server';
import connectDB from '@/lib/connectDB.js';
import  PostModel from '@/models/Post'
export async function GET(req){
    try{
        await connectDB()
        const result = await PostModel.find()
        return NextResponse.json(
            {"result":result},
            {"msg":"success"},{status:200})
    }catch(error){
        console.log(error)
        return NextResponse.json({"msg":"something went wrong"},{status:400})
    }
}

// export async function POST(req){
//     const body = await req.json()
//     try{
//         await connectDB()
//         const result = await PostModel.create(body)
//         return NextResponse.json({"result":result},{"msg":"success"},{status:201})
//     }catch(error){
//         console.log(error)
//         return NextResponse.json({"msg":"something went wrong"},{status:400})
//     }
// }