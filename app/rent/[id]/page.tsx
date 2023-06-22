'use client'

import { useEffect, useState } from "react"

type Props = {
    params: {
        id: string
    }
}

export default function detailPage({ params: { id } }: Props) {

    const [cars, setCars] = useState()
    const [available,setAvailable] = useState();

    useEffect(() => {
        const res = fetch(`http://localhost:3000/api/car?car_id=${id}`).then(data => data.json()).then(data => setCars(data))
    })

    const handleSubmit = async (e:React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const res = await fetch(`http://localhost:3000/api/rent-car`,{
            method:'POST',
            body:JSON.stringify({
                car_id:id,
                name:e.target.name.value,
                phone:e.target.phone.value,
                rentalDate:e.target.rentalDate.value,
                returnDate:e.target.returnDate.value
            })
        }).then(data => data.json()).then(data => data && alert('Car Rented Successfully'));
    }

    return (
        <>
            <section className="bg-white dark:bg-gray-900 flex flex-wrap">
                <div className="py-8 px-4 mx-auto max-w-2xl lg:py-16">
                    <h2 className="mb-4 text-xl font-bold text-gray-900 dark:text-white">Rent a Car</h2>
                    <form onSubmit={e => handleSubmit(e)}>
                        <div className="grid gap-4 sm:grid-cols-2 sm:gap-6">
                            <div className="sm:col-span-2">
                                <label htmlFor="name" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Name</label>
                                <input type="text" name="name" id="name" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" placeholder="your name" required />
                            </div>
                            <div className="sm:col-span-2">
                                <label htmlFor="name" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Phone</label>
                                <input type="text" name="phone" id="name" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" placeholder="03**-*******" required />
                            </div>
                            <div className="sm:col-span-2">
                                <label htmlFor="name" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Rent Date</label>
                                <input type="date" name="rentDate" id="name" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" placeholder="03**-*******" required />
                            </div>
                            <div className="sm:col-span-2">
                                <label htmlFor="name" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Return Date</label>
                                <input type="date" name="returnDate" id="name" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" placeholder="03**-*******" required />
                            </div>
                        </div>
                        <button type="submit" className="inline-flex items-center px-5 py-2.5 mt-4 sm:mt-6 text-sm font-medium text-center text-white bg-blue-700 rounded-lg focus:ring-4 focus:ring-primary-200 dark:focus:ring-primary-900 hover:bg-primary-800">
                            Rent
                        </button>
                    </form>
                </div>
                {
                    cars &&

                    <div className="max-w-sm bg-white border  border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                        {/* <a href="#"> */}
                        <img className="rounded-t-lg" src={cars[0].car_pic} alt="" />
                        {/* </a> */}
                        <div className="p-5">

                            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{`${cars[0].car_make} ${cars[0].car_model}`}</h5>

                            <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">Variant: {cars[0].car_variant}</p>
                            <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">Color: {cars[0].car_color}</p>
                            <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">Location: {cars[0].car_location}</p>
                            <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">Price: {cars[0].car_price}</p>
                            
                        </div>
                    </div>
                }
            </section>
            {/* {isOpened && (
                <div
                    id="popup-modal"
                    className={`flex items-center justify-center fixed top-0 left-[10%] right-[10%] lg:left-0 z-50 p-4 overflow-x-hidden overflow-y-auto md:inset-0 h-[calc(100%-1rem)] max-h-full`}
                >
                    <div className="relative w-full max-w-md max-h-full">
                        <div className="relative bg-white border-2 border-gray-300 rounded-lg shadow dark:bg-gray-700">
                            <div className="p-6 text-center">
                                <svg
                                    aria-hidden="true"
                                    className="mx-auto lg:mb-4 mb-2 text-gray-400 lg:w-14 lg:h-14 w-8 h-8 dark:text-gray-200"
                                    fill="none"
                                    stroke="currentColor"
                                    viewBox="0 0 24 24"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                                    ></path>
                                </svg>
                                <h3 className="lg:mb-5 mb-2 lg:text-lg text-sm font-normal text-gray-500 dark:text-gray-400">
                                    Car Successfully Added
                                </h3>

                                <button
                                    data-modal-hide="popup-modal"
                                    type="button"
                                    className=" text-white bg-white hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-gray-200 rounded-lg border border-gray-200 lg:text-sm text-xs font-medium lg:px-5 lg:py-2.5 px-3 py-1.5 hover:text-whitefocus:z-10 dark:bg-gray-700 dark:text-gray-300 dark:border-gray-500 dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-gray-600"
                                    onClick={() => setIsOpened(false)}
                                >
                                    Ok
                                </button>
                            </div>
                        </div>
                    </div>
                </div> */}
            {/* )} */}
        </>
    )
}
