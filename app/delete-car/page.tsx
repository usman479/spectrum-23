'use client'

import Image from 'next/image'
import DeleteCard from '@/components/DeleteCard'
import { useEffect, useState } from 'react'

type Car = {
  car_make: string, car_model: string, car_variant: string, car_color: string, car_price: number, car_pic: string, car_location: string, car_id: number
}

export default function deletePage() {

  const [cars, setCars] = useState<Car[] | null>(null)

  useEffect(() => {
    const res = fetch('http://localhost:3000/api/car').then(data => data.json()).then(data => setCars(data));
  },[])

  if (!cars) {
    return <p>Loading...</p>
  }
  return (
    <main className="flex flex-wrap gap-x-4">
      {cars && cars.map((car: Car) => {
        return <DeleteCard make={car.car_make} model={car.car_model} variant={car.car_variant} color={car.car_color} price={car.car_price} image={car.car_pic} location={car.car_location} id={car.car_id} />
      })}
    </main>
  )
}
