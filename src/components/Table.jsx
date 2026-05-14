import React from 'react'
import { useSelector } from 'react-redux'

const Table = () => {
 const {data , loading , Error} = useSelector((state) => state?.cars);

 console.log(data);


  return (
    <div>
        
    </div>
  )
}
export default Table