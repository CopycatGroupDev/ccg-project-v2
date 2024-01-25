/* eslint-disable react/prop-types */
import { Header, Footer } from './comps'
import React, { useEffect, useState, useRef } from 'react'

import Home from './bodies/home'
import Solutions from './bodies/solutions'
import Shop from './bodies/shop'
import Print from './bodies/print'
import Labs from './bodies/labs'
import Boutiques from './bodies/boutiques'
import APropos from './bodies/apropos'
import Rse from './bodies/rse'
import Contact from './bodies/contact'

export const Page = ({ header, title, Body }) => {
  const footer = useRef(null)
  const body = document.querySelector('body')?.getBoundingClientRect()

  document.querySelector('title').innerHTML = title
  const [scroll, setScroll] = useState(window.scrollY)
  const [bottomBtnScrTop, setBottomBtnScrTop] = useState(0)
  useEffect(() => {
    const int = setInterval(() => { setScroll(window.scrollY) }, 0)
    return () => { clearInterval(int) }
  }, [])

  useEffect(() => {
    // const int = setInterval(, 1000);
    // return () => clearInterval(int);

    const up = () => {
      const body = document.querySelector('body')?.getBoundingClientRect()
      const footerRect = footer.current?.getBoundingClientRect()
      const footerBottom = (footerRect.bottom < body.height) ? 'ot' : (body.height > footerRect.y) ? body.height - footerRect.y : 0
      setBottomBtnScrTop(footerBottom)
    }

    window.addEventListener('load', up)
    window.addEventListener('scroll', up)
    window.addEventListener('resize', up)
  }, [])

  return <>
        {<style>{`body{background:rgba(0,0,0,0.025);--thickness: 3px; --page-color: ${header.color};} .colorPage{background-color: var(--page-color);}`}</style>}
        <Header {...header} />
        {Body && <Body color={header.color} />}
        <Footer refF={footer} />
        {scroll > 100 && <button className="fixed z-[999] shadow-md shadow-black/30 bottom-0 right-0 rounded-md py-3 px-4 bg-[#0061ad] hover:bg-white text-white hover:text-[#0061ad] m-6 flex items-center gap-2 justify-center" onClick={() => scrollTo(0, 0)} style={{ bottom: bottomBtnScrTop }}>
            <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} fill="currentColor" viewBox="0 0 16 16"> <path fillRule="evenodd" d="M7.646 2.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1-.708.708L8 3.707 2.354 9.354a.5.5 0 1 1-.708-.708l6-6z" /> <path fillRule="evenodd" d="M7.646 6.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1-.708.708L8 7.707l-5.646 5.647a.5.5 0 0 1-.708-.708l6-6z" /> </svg>
            <span>Retour en haut</span>
        </button>}
        {(body.width < 1024) && <button className="w-full py-3 px-4 bg-white text-[#0061ad] -m-12 flex items-center gap-2 justify-center" onClick={() => scrollTo(0, 0)}>
            <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} fill="currentColor" viewBox="0 0 16 16"> <path fillRule="evenodd" d="M7.646 2.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1-.708.708L8 3.707 2.354 9.354a.5.5 0 1 1-.708-.708l6-6z" /> <path fillRule="evenodd" d="M7.646 6.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1-.708.708L8 7.707l-5.646 5.647a.5.5 0 0 1-.708-.708l6-6z" /> </svg>
            <span>Retour en haut</span>
        </button>}
    </>
}

export default { Home, Solutions, Shop, Print, Labs, Boutiques, APropos, Rse, Contact }
