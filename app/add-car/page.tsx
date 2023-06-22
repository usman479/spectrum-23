'use client'

import { UploadButton } from "@uploadthing/react";
import { OurFileRouter } from "../api/uploadthing/core";
import "@uploadthing/react/styles.css";
import { useState } from "react";

type Image = {
    fileUrl: string;
    fileKey: string;
}[]


export default function addCarPage() {
    const [images, setImages] = useState<Image>([]);
    const [isOpened,setIsOpened] = useState<boolean>(false);

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
       
            
        const res = await fetch('http://localhost:3000/api/add-car', {
            method: 'POST',
            body: JSON.stringify({
                make: e.target.make.value,
                model: e.target.model.value,
                variant: e.target.variant.value,
                color: e.target.color.value,
                price: e.target.price.value,
                location: e.target.location.value,
                image: images[0].fileUrl,
            })
        })

        setIsOpened(true);
        e.target.make.value = "";
        e.target.model.value= "";
        e.target.variant.value= "";
        e.target.color.value= "";
        e.target.price.value= "";
        setImages([]);

    }
    return (
        <>
        <section className="bg-white dark:bg-gray-900">
            <div className="py-8 px-4 mx-auto max-w-2xl lg:py-16">
                <h2 className="mb-4 text-xl font-bold text-gray-900 dark:text-white">Add a new Car</h2>
                <form onSubmit={e => handleSubmit(e)}>
                    <div className="grid gap-4 sm:grid-cols-2 sm:gap-6">
                        <div className="sm:col-span-2">
                            <label htmlFor="name" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Make</label>
                            <input type="text" name="make" id="name" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" placeholder="Car Make" required />
                        </div>
                        <div className="w-full">
                            <label htmlFor="brand" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Model</label>
                            <input type="text" name="model" id="brand" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" placeholder="Car Model" required />
                        </div>
                        <div className="w-full">
                            <label htmlFor="price" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Price</label>
                            <input type="number" name="price" id="price" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" placeholder="20000   " required />
                        </div>
                        <div>
                            <label htmlFor="category" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Variant</label>
                            <select id="category" name="variant" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500">
                                <option selected>Select category</option>
                                <option value="Convertible">Convertible</option>
                                <option value="Electric">Electric</option>
                                <option value="Sports">Sports</option>
                                <option value="Luxury">Luxury</option>
                            </select>
                        </div>
                        <div>
                            <label htmlFor="location" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Variant</label>
                            <select id="location" name="location" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500">
                                <option selected>Select location</option>
                                <option value="Karachi">Karachi</option>
                                <option value="Lahore">Lahore</option>
                                <option value="Islamabad">Islamabad</option>
                                <option value="Abbotabad">Abbotabad</option>
                            </select>
                        </div>
                        <div>
                            <label htmlFor="item-weight" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Color   </label>
                            <input type="text" name="color" id="item-weight" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" placeholder="color" required />
                        </div>
                        <div className="sm:col-span-2">
                            {/* <label htmlFor="description" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Description</label>
                  <textarea id="description" rows={8} className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" placeholder="Your description here"></textarea> */}
                            {/* IMAGE UPLOAD */}
                            <UploadButton<OurFileRouter>
                                endpoint="imageUploader"
                                onClientUploadComplete={(res) => {
                                    if (res) {
                                        setImages(res);
                                        const json = JSON.stringify(res);
                                        // Do something with the response
                                        // console.log("Files: ", res);
                                        console.log(json)
                                    }
                                    // alert("Upload Completed");
                                }}
                                onUploadError={(error: Error) => {
                                    // Do something with the error.
                                    alert(`ERROR! ${error.message}`);
                                }}

                            />
                        </div>
                    </div>
                    <button type="submit" className="inline-flex items-center px-5 py-2.5 mt-4 sm:mt-6 text-sm font-medium text-center text-white bg-blue-700 rounded-lg focus:ring-4 focus:ring-primary-200 dark:focus:ring-primary-900 hover:bg-primary-800">
                        Add product
                    </button>
                </form>
            </div>
        </section>
        {isOpened && (
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
            </div>
          )}
          </>
    )
}
