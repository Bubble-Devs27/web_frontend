import React from 'react'
import { useCart } from '../../store/mainStore'

const Bill = () => {
  const fullWash = useCart((s)=>s.fullWash)
  const Extwash = useCart((s)=>s.ExteriorWash)
  const smallWash = useCart((s)=>s.smallWash)
  const prefTime = useCart((s)=>s.preferedTime)
  const preferedDate = useCart((s)=>s.preferedDate)
  const address = useCart((s)=>s.address)
  const price = useCart((s)=>s.preferedTime)
  onClick = () =>{
    alert (fullWash , Extwash , smallWash , prefTime , preferedDate , address , price)
  }
  return (
    // <div onClick={onClick} className='px-4 py-2 bg-amber-800 text-white'>Show</div>
    <div>Hello</div>)
}

export default Bill