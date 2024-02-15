const getData = async()=>{
  const res = await fetch("http://localhost:3000/api/blog/posts",{
    headers:{
      'Content-Type':'application/json', 
    }
  })
  const posts = await res.json();
  return posts;
}
export default async function Home() {
  const allposts = await getData()
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
     {
      allposts.data.map((post,i)=>
        <div key={i}>
          
          <h1>{post.tile}</h1>
          <br/>
          <p>{post.body}</p>
          <hr /><hr/><hr/>
        </div>
      )
     }
    </main>
  );
}
