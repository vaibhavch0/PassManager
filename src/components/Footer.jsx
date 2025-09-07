import React from 'react'

const Footer = () => {
  return (
    <div className=' bg-slate-700 text-amber-50 flex flex-col items-center p-3  mt-10'>
          <div className="logo font-bold text-xl">
  <span className="text-green-600">&lt;</span>
  Get
  <span className="text-green-600">PASS/&gt;</span>
</div>
       <div className='  justify-center items-center text-center mt-2 '>
        created by Vaibhav Choudhary  with <span> <lord-icon className=' inline-block w-6 h-6 pt-2 '
        src="https://cdn.lordicon.com/yucrjnnl.json"
    trigger="hover"
    colors="primary:#c71f16"
>
</lord-icon></span>
              | &copy; 2024 All Rights Reserved
       </div>
    </div>
  )
}

export default Footer
