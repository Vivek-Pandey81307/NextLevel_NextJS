import Link from "next/link"

const LearnLink = () => {
    const id = 2
    return (
    <>
        <Link href="/admin/dashboard">Go to Admin Dashboard</Link>
        <Link href= {`/user/profile/${id}`} >Go to Admin Dashboard</Link>

    </>
  )
}

export default LearnLink