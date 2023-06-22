import Link from 'next/link'
// import { useRouter } from 'next/navigation'
import React from 'react'

type Props = {
    image:string
    make:string
    model:string
    variant:string
    color:string,
    price:number
    id:number
    location:string
}

export default function Card({image,make,model,variant,color,id}:Props) {

    // const {refresh} = useRouter()

    const handleDelete = async (id:number,e:React.MouseEvent<HTMLButtonElement>) => {
        const res = await fetch(`http://localhost:3000/api/car?car_id=${id.toString()}`,{
            method:'DELETE',
        })
        location.reload();
    }

    return (
        
        <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
            {/* <a href="#"> */}
                <img className="rounded-t-lg" src={image} alt="" />
            {/* </a> */}
            <div className="p-5">
                
                    <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{`${make} ${model}`}</h5>
                
                <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">Variant: {variant}</p>
                <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">Color: {color}</p>
                <button type='button' onClick={e => handleDelete(id,e)} className=" red-button inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-red-700 rounded-lg hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-800">
                    Delete
                    <svg aria-hidden="true" className="w-4 h-4 ml-2 -mr-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
                </button>
            </div>
        </div>

    )
}
