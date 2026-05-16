import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchCars } from '../features/CarsSlice';

const Table = () => {
 const {data , loading , Error} = useSelector((state) => state?.cars);
 const dispatch = useDispatch();

 useEffect(() => {
  dispatch(fetchCars());
 } , []);

 console.log(data);

  return (
    <div>
        
    </div>
  )
}
export default Table