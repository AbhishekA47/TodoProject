// import { freeze } from '@reduxjs/toolkit'
import React from 'react'
import{Bounce, ToastContainer,toast} from 'react-toastify'
// import { IconName } from "react-icons/fi";
import { FiSmile } from "react-icons/fi";
import { GiAllSeeingEye } from "react-icons/gi";


function Toast() {
    const notify =()=>{
        toast('Wow So Easy!.. 👌'
            ,{
            position :'top-center',
            autoClose:5000,
            hideProgressBar:false,
            closeOnClick:true,
            pauseOnHover:true,
            draggable:true,
            progress:undefined,
            theme:'light',
            transition:Bounce,
       
    })
}
  return (
<div>
    <GiAllSeeingEye/>
    <button onClick={notify}>Notify<FiSmile/>
    </button>
    <ToastContainer
    position='top-center'
    autoClose={5000}
    hideProgressBar={false}
    newestOnTop={false}
    closeOnClick
    rtl={false}
    pauseOnFocusLoss
    draggable
    pauseOnHover
    theme="light"
    transition={Bounce}
    />
</div>

  )

}
export default Toast