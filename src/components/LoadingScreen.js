import React from 'react'

const LoadingScreen = ({showLoading}) => {
  return (
    <div className={`fixed top-0 left-0 w-full bottom-0 px-3 h-[100vh] flex-col justify-center items-center bg-[#0e1346b2] z-50 ${showLoading ? 'flex':'hidden'}`}>
        <div className='w-full max-w-[1200px] mx-auto '>
        <h3 className='text-3xl md:text-4xl text-slate-50 font-ibm font-normal uppercase tracking-widest text-center'>Loading products</h3>
        <h3 className='text-2xl text-slate-50 font-ibm font-normal tracking-widest text-center mt-2'>Please Wait</h3>
        <p className='text-slate-50 text-sm font-ibm mt-4 tracking-widest text-center'>Api response is really slow </p>
        </div>
    </div>
  )
}

export default LoadingScreen