import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchCars, deleteCar, addCar, updateCar } from '../features/CarsSlice'
import toast from 'react-hot-toast';

const Cars = () => {
  const dispatch = useDispatch();
  const [editingCar, setEditingCar] = useState(null);
  const [viewCar, setViewCar] = useState(null);

  const [form, setForm] = useState({
    make: "",
    model: "",
    year: "",
    price: "",
    color: "",
    image: ""
  });

  const { data, loading } = useSelector(
    (state) => state.cars
  )

  useEffect(() => {
    dispatch(fetchCars())
  }, [])

  const handleSubmit = () => {
    if (!form.make || !form.model || !form.year || !form.price) {
      return toast.error(`Bo'sh maydonni to'ldiring !`);
    }

    if (editingCar) {
      dispatch(updateCar({
          ...form,
          id: editingCar.id
        })
      )
      setEditingCar(null)
    } else {
      dispatch(addCar(form))
    }

    setForm({
      make: "",
      model: "",
      year: "",
      price: "",
      color: "",
      image: ""
    })
  }

  const handleEdit = (car) => {
    setEditingCar(car)

    setForm({
      make: car.make,
      model: car.model,
      year: car.year,
      price: car.price,
      color: car.color,
      image: car.image
    })
  }

  if(loading) return <h1> Loading... </h1>

  return (
    <div>
      <h1 className='text-3xl font-bold mb-5'> Cars CRUD </h1>
    <div className='grid grid-cols-3 gap-3 mb-5'>
      <input className='border p-2 rounded' placeholder='Make' value={form.make} onChange={(e) =>
          setForm({
            ...form,
            make: e.target.value
          })
        }
      />

      <input className='border p-2 rounded' placeholder='Model' value={form.model} onChange={(e) =>
          setForm({
            ...form,
            model: e.target.value
          })
        }
      />

      <input className='border p-2 rounded' placeholder='Year' value={form.year} onChange={(e) =>
          setForm({
            ...form,
            year: e.target.value
          })
        }
      />

      <input className='border p-2 rounded' placeholder='Price' value={form.price} onChange={(e) =>
          setForm({
            ...form,
            price: e.target.value
          })
        }
      />

      <input className='border p-2 rounded' placeholder='Color' value={form.color} onChange={(e) =>
          setForm({
            ...form,
            color: e.target.value
          })
        }
      />

      <input className='border p-2 rounded' placeholder='Image URL' value={form.image} onChange={(e) =>
          setForm({
            ...form,
            image: e.target.value
          })
        }
      />
  </div>

    <button onClick={handleSubmit} className='bg-black text-white px-5 py-2 rounded mb-10'>
      { editingCar ? "Update Car" : "Add Car" }
    </button>

      <div className='grid grid-cols-4 gap-5'>
        {data?.map((car) => (
          <div key={car.id} className='bg-white rounded shadow p-3'>
            <img src={car.image} alt="" className='h-[200px] w-full object-cover rounded' />
            <h2 className='text-xl font-bold mt-3'> {car.make} </h2>
            <p> {car.model} </p>
            <p className='font-semibold'> $ {car.price} </p>
          <div className='flex gap-2 mt-4'>
            <button onClick={() => setViewCar(car)} className='bg-blue-500 text-white px-3 py-1 rounded'> View </button>
            <button onClick={() => handleEdit(car)} className='bg-yellow-500 text-white px-3 py-1 rounded'> Edit </button>
            <button onClick={() => dispatch(deleteCar(car.id))} className='bg-red-500 text-white px-3 py-1 rounded'> Delete </button>
          </div>
        </div>
        ))}
      </div>

      {viewCar && (
        <div className='fixed inset-0 bg-black/50 flex items-center justify-center'>
          <div className='bg-white p-5 rounded w-[400px]'>
            <img src={viewCar.image} className='h-[250px] w-full object-cover rounded' />
            <h1 className='text-2xl font-bold mt-3'> {viewCar.make} </h1>
            <p> Model: {viewCar.model} </p>
            <p> Year: {viewCar.year} </p>
            <p> Price: $ {viewCar.price} </p>
            <p> Color: {viewCar.color} </p>
            <button onClick={() => setViewCar(null)} className='bg-black text-white px-4 py-2 rounded mt-5'> Close </button>
          </div>
        </div>
        )
      }
    </div>
  )
}
export default Cars