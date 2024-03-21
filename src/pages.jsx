/* eslint-disable react/prop-types */
import { Header, Footer } from './comps'
import React, { useEffect, useState, useRef } from 'react'
import Modal from './comps/modal'
import { motion } from 'framer-motion'
export { Home } from './bodies/home'
export { Solutions } from './bodies/solutions'
export { Shop } from './bodies/shop'
export { Print } from './bodies/print'
export { Labs } from './bodies/labs'
export { Boutiques } from './bodies/boutiques'
export { APropos } from './bodies/apropos'
export { Rse } from './bodies/rse'
export { Contact } from './bodies/contact'
export { Confi } from './bodies/confi'
export { Mentions } from './bodies/mentions'

export default function Page ({ header, title, Body }) {
  const footer = useRef(null)
  const body = document.querySelector('body')?.getBoundingClientRect()
  const [[modalOpened, setMO], [modalSelect, setMS], [modalDefault, setMD]] = [useState(false), useState([]), useState(0)]
  const [alert, alertSetter] = useState([])

  document.querySelector('title').innerHTML = title
  const [scroll, setScroll] = useState(window.scrollY)
  const [bottomBtnScrTop, setBottomBtnScrTop] = useState(0)

  useEffect(() => {
    const int = setInterval(() => { setScroll(window.scrollY) }, 0)
    return () => { clearInterval(int) }
  }, [])

  useEffect(() => {
    const up = () => {
      const body = document.querySelector('body')?.getBoundingClientRect()
      const footerRect = footer.current?.getBoundingClientRect()
      const footerBottom = (footerRect?.bottom < body.height) ? 'ot' : (body.height > footerRect?.y) ? body.height - footerRect.y : 0
      setBottomBtnScrTop(footerBottom)
    }

    window.addEventListener('load', up)
    window.addEventListener('scroll', up)
    window.addEventListener('resize', up)
  }, [])

  return (
    <>
      {<style>{`body{background:rgba(0,0,0,0.025);--thickness: 3px; --page-color: ${header.color}; overflow-x:hidden;} .colorPage{background-color: var(--page-color);}`}</style>}
      {<Header {...header} modal={{ opener: setMO, select: setMS, default: setMD }} />}
      {Body && <Body modal={{ opener: setMO, select: setMS, default: setMD }} alertSetter={alertSetter} alert={alert} color={header.color} /> }
      {<Footer refF={footer} />}
      {scroll > 100 && <button className="fixed z-[999] shadow-md shadow-black/30 bottom-0 right-0 rounded-full py-3 px-5 bg-[#0061ad] hover:bg-white text-white hover:text-[#0061ad] m-6 flex items-center gap-2 justify-center" onClick={() => scrollTo(0, 0)} style={{ bottom: bottomBtnScrTop }}>
          <svg xmlns="http://www.w3.org/2000/svg" width={14} height={14} fill="currentColor" viewBox="0 0 16 16"> <path fillRule="evenodd" d="M7.646 2.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1-.708.708L8 3.707 2.354 9.354a.5.5 0 1 1-.708-.708l6-6z" /> <path fillRule="evenodd" d="M7.646 6.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1-.708.708L8 7.707l-5.646 5.647a.5.5 0 0 1-.708-.708l6-6z" /> </svg>
          <span>Retour en haut</span>
      </button>}
      {scroll > 100 && <button className="fixed z-[999] shadow-md shadow-black/30 bottom-0 right-0 rounded-full py-3 px-5 bg-[#0061ad] hover:bg-white text-white hover:text-[#0061ad] m-6 flex items-center gap-2 justify-center" onClick={() => scrollTo(0, 0)} style={{ bottom: bottomBtnScrTop }}>
          <svg xmlns="http://www.w3.org/2000/svg" width={14} height={14} fill="currentColor" viewBox="0 0 16 16"> <path fillRule="evenodd" d="M7.646 2.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1-.708.708L8 3.707 2.354 9.354a.5.5 0 1 1-.708-.708l6-6z" /> <path fillRule="evenodd" d="M7.646 6.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1-.708.708L8 7.707l-5.646 5.647a.5.5 0 0 1-.708-.708l6-6z" /> </svg>
          <span>Retour en haut</span>
      </button>}
      {(body.width < 1024) && <button className="w-full py-3 px-4 bg-white text-[#0061ad] -m-12 flex items-center gap-2 justify-center" onClick={() => scrollTo(0, 0)}>
        <svg xmlns="http://www.w3.org/2000/svg" width={14} height={14} fill="currentColor" viewBox="0 0 16 16"> <path fillRule="evenodd" d="M7.646 2.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1-.708.708L8 3.707 2.354 9.354a.5.5 0 1 1-.708-.708l6-6z" /> <path fillRule="evenodd" d="M7.646 6.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1-.708.708L8 7.707l-5.646 5.647a.5.5 0 0 1-.708-.708l6-6z" /> </svg>
        <span>Retour en haut</span>
      </button>}
      {modalOpened && <Modal options={modalSelect} selected={modalDefault} openedSetter={setMO} alert={alert} alertSetter={alertSetter} />}
      {<div className='p-16 flex flex-col gap-2 fixed right-0 top-0'>{alert.map(({ text, color }, i) => <motion.div key={i} className='px-2.5 py-1.5 text-base rounded text-white shadow-md' style={{ background: color }} transition={{ delay: 3, duration: 0.5 }} animate={{ display: 'none' }}>{text}</motion.div>)}</div>}
    </>
  )
}
