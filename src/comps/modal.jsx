import { Icons } from '../comps'
import React from 'react'
import { contactForm } from '../arrays'

const Modal = ({ options, selected, openedSetter }) => {
  return <div className='bg-black/80 backdrop-blur fixed w-full h-full z-[999] flex justify-center items-center py-24 shadow-lg'>
    <button className='fixed top-0 right-0 m-4 text-white' onClick={() => openedSetter(false)}>
      <Icons icon={'Close'} size={32} />
    </button>
    <style>{'html, body{overflow:hidden}'}</style>
    <div className="bg-white rounded-2xl w-full max-w-[800px] max-sm:w-full h-fit p-8 flex flex-col gap-8">
      <h1 className='text-4xl'>Contactez-nous</h1>
      <form id='modalContact' className="grid grid-cols-2 [&_label]:grid [&_label>input]:w-full [&_label>textarea]:w-full [&_label>select]:border-gray-300 [&_label>input]:border-gray-300 [&_label>textarea]:border-gray-300 gap-4" style={{ textWrap: 'nowrap' }}>
        {contactForm.Modal({ options, selected }).map(({ className, Input, label }, id) => <label className={className} key={id}> {Input().props.placeholder} {label} <Input required /> </label>)}
      </form>
      <button className='p-4 bg-[#0061ad] text-white rounded-full'>Envoyer</button>
    </div>
  </div>
}

export default Modal
