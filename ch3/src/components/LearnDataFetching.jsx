async function getData(){
    const res = await fetch('https://jsonplaceholder.typicode.com/todos/').catch(err=>{console.log(err)});
    return res.json()
}

const LearnDataFetching = async() => {
    const data = await getData();
    console.log("DATA - \n",data);
  return (
    <>
        {data.map((post)=>(  
            <div key={post.id}>
                <h1>{post.title}</h1>
                <hr />
                <h1 className="text-orange-600">{`${post.completed}`}</h1>
                
            </div>
        ))}
    </>
  )
}

export default LearnDataFetching