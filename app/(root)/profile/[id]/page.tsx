import Header from '@/componenets/Header';
import React from 'react'

const page = async ({ params }: ParamsWithSearch) => {
    const { id } = await params;
    return (
        <div className='wrapper page'>
            <Header subHeader="shawwon@gmail.com" title="Shawon Ahmed" userImg="/assets/images/dummy.jpg">

            </Header>
            <h1 className='text-2xl font-karla'> User ID: {id}</h1></div>
    )
}

export default page