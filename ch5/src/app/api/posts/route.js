import {NextResponse} from 'next/server';
import connectDB from '@/lib/connectDB.js';
import  PostModel from '@/models/Post'
export async function GET(req){
    try{
        await connectDB()
        const result = await PostModel.findOne()
        return NextResponse.json({"result":result},{"msg":"success"},{status:200})
    }catch(error){
        console.log(error)
        return NextResponse.json({"msg":"something went wrong"},{status:400})
    }
}