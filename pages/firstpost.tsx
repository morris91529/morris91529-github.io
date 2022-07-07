import React from "react"
import {NextPage} from 'next';
import Link from "next/link"

const FirstPost: NextPage = () => {
  return (
    <div>
        <h1>第一篇文章</h1>
            <p><a href="/main"><button>a click here</button></a></p>
            <p><Link href="/main"><button>link click here</button></Link></p>
    </div>
  )
}

export default FirstPost;