import React, { Component } from "react"
import Link from "next/link"
import {NextPage} from 'next';
import { ClassNames } from "@emotion/react";


function popup2(){
    let text: string
    window.confirm('是否允許')
    if(confirm('是否允許') == true){
        text='已驗證'
        console.log(text)
    } else {
        text='驗證失敗'
        console.log(text)
    }
    return text;

}

const mainpage: NextPage = () => {
    
    return (
        <div>
            <h1>首頁</h1>
            <p><a href="/firstpost"><button>a 點擊這裡跳轉</button></a></p>
            <p><Link href="/firstpost"><button>link 點擊這裡跳轉</button></Link></p>
            <input className='popuptest' type="button" value='click'></input>
            <p className='show'></p>
            popup2()
        </div>
    )
}

export default mainpage;
