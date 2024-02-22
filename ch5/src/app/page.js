import GetData1 from "@/components/GetData1";
import GetData2 from "@/components/GetData2";
import PostData from "@/components/PostData";
import PostData2 from "@/components/PostData2";
export const metadata = {title : "Blog Posts",
description : "This is blog post all using nextjs"}
export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
    {/* <PostData />
    <GetData1 />
     */}
     <PostData2 />
    <GetData2/>
    
    </main>
     
  );
}
