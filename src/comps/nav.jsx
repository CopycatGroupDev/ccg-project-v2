/* eslint-disable react/prop-types */
import React, { useRef, useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { archi } from '../archi'
import { For } from '../functions'
import { Dropdown } from './dropdown'

export const Nav = ({ setNavOpened, navOpened, textColor }) => {
  const logo = useRef(null)
  const items = useRef(null)
  const [logoTouches, setLogoTouches] = useState(false)

  useEffect(() => {
    const checkLogoTouches = () => {
      const points = [logo.current?.getBoundingClientRect().x, logo.current?.getBoundingClientRect().width + logo.current?.getBoundingClientRect().x]
      const itemsLeft = items.current?.getBoundingClientRect().x
      const logoTouches_ = points[0] < itemsLeft && itemsLeft < points[1]
      setLogoTouches(logoTouches_)
    }
    window.addEventListener('resize', checkLogoTouches)

    return () => {
      //
    }
  }, [])

  const [dropdown, setDropdown] = useState(null)
  const colors = archi.filter(route => route.nav).map(route => route.element.props.header.color)

  const pillStyle = { textWrap: 'nowrap', transition: 'all 0s', [textColor && 'color']: textColor }
  const pillStyleHover = (color) => ({ textWrap: 'nowrap', color: colors[color] })

  useEffect(() => {
    // const int = setInterval(() => console.log(dropdown), 1000);
    // return () => clearInterval(int);
  })

  return (<div className='flex flex-col justify-start items-center' id="nav">
          <div className='flex justify-between lg:justify-right lg:justify-center relative max-w-[1500px] w-full max-lg:items-center max-lg:gap-2 items-start lg:max-xl:flex-col lg:max-xl:items-center'>
              <Link to="/" className='contents'>
                  <img src="/logo.png" alt="" className="w-[20vh] max-h-[120px] aspect-[163/120] object-contain h-fit left-0 lg:mx-18 xl:absolute" style={{ [logoTouches && 'opacity']: 0 }} ref={logo} />
              </Link>
              <div className='justify-center items-center hidden lg:flex gap-[.5vw] md:[&_li]:cursor-pointer [&>a]:text-[#0061ad] items-start [&_li]:p-2 z-50 px-2 py-4' ref={items}>
                  <For obj={archi.filter(route => route.nav)} render={(route, i) => <div key={i} className='text-[#0061ad]' style={dropdown === route.path ? pillStyleHover(i) : pillStyle} onMouseOver={() => { setDropdown(route.path) }} onMouseLeave={() => { setDropdown(null) }}>
                      <Link to={route.path} className={'p-2'}>{route.title}</Link>
                      {dropdown === route.path && <Dropdown obj={route.dropdown} color={colors[i]} className={'absolute'} />}
                  </div>} />
              </div>
              <button className='max-lg:block hidden mx-8' onClick={() => setNavOpened(!navOpened)}>
                  <svg className='' xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="currentColor" viewBox="0 0 16 16"> <path fillRule="evenodd" d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z"/> </svg>
              </button>
          </div>
      </div>)
}

export const NavMobile = ({ setNavOpened, navOpened }) => {
  const [dropdown, setDropdown] = useState(null)
  const colors = archi.filter(route => route.nav).map(route => route.element.props.header.color)

  const pillStyle = { textWrap: 'nowrap', transition: 'all 0s' }
  const pillStyleHover = (color) => ({ textWrap: 'nowrap', color: colors[color] })

  return <div className='fixed bg-[#fffd] backdrop-blur z-[9999] w-full h-full [body:has(&)]:overflow-hidden p-5 flex flex-col items-center overflow-auto'>
          <button className='max-lg:block hidden m-8' style={{ alignSelf: 'flex-end' }} onClick={() => setNavOpened(!navOpened)}>
              <svg className='' xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="currentColor" viewBox="0 0 16 16"> <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM5.354 4.646a.5.5 0 1 0-.708.708L7.293 8l-2.647 2.646a.5.5 0 0 0 .708.708L8 8.707l2.646 2.647a.5.5 0 0 0 .708-.708L8.707 8l2.647-2.646a.5.5 0 0 0-.708-.708L8 7.293 5.354 4.646z"/> </svg>
          </button>
          <div className='flex flex-col items-center text-xl'>
              <For obj={archi.filter(route => route.nav)} render={(route, i) => <div key={i} className='text-[#0061ad] flex flex-col items-center' style={dropdown === route.path ? pillStyleHover(i) : pillStyle} onClick={() => { setDropdown(dropdown === route.path ? null : route.path) }}>
                  {dropdown !== route.path ? <span className={'p-2'}>{route.title}</span> : <Link to={route.path} reloadDocument={true} className={'p-2 flex flex-col items-center'}>{route.title} <small>Cliquez pour accéder</small></Link>}
                  {dropdown === route.path && <Dropdown obj={route.dropdown} color={colors[i]} callback={() => setNavOpened(false)} className={'max-w-[100%]'} close={() => setDropdown(null)} closeBtn={true} />}
              </div>} />
          </div>
      </div>
}
