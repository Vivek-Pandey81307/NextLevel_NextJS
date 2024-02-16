import mongoose from 'mongoose'
import { STRING_LITERAL_DROP_BUNDLE } from 'next/dist/shared/lib/constants'
const postSchema = new mongoose.Schema({
    title:{type:String,required:true,trim : true},
    body : {type : String,required : true,trim : true}
})
const Post = mongoose.models.Post || mongoose.model('Post',postSchema)
export default Post