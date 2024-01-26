/* eslint-disable react/prop-types */
import React, { useState } from 'react'
import { For } from '../functions'
import { Link } from 'react-router-dom'

export const Dropdown = ({ obj, color, callback, className, close, closeBtn }) => {
  const [hover, setHover] = useState(null)

  const pillStyle = { background: 'none', textWrap: 'wrap' }
  const pillStyleHover = { backgroundColor: color, color: 'white', textWrap: 'wrap' }

  return (<div className={className + ' p-2'}>
          <div className='bg-white rounded-md z-50 drop-shadow-md'>
              <For obj={obj} render={(li, key) => <Link key={key} to={!li.disabled && li.path} className={li.disabled && 'cursor-default'} onClick={callback}>
                  <div className={'py-4 px-5 [:first-child>&]:rounded-t-md [:last-child>&]:rounded-b-md flex gap-4 items-center ' + (li.disabled && 'opacity-50')} style={hover === li.path ? pillStyleHover : pillStyle} onMouseOver={() => { !li.disabled && setHover(li.path) }} onMouseLeave={() => { !li.disabled && setHover(null) }}>
                      <img className={'w-10 aspect-square h-fit object-cover ' + (!li.disabled && '[div:hover>&]:invert [div:hover>&]:mix-blend-color-dodge')} src={li.icon} />
                      <div className='w-full'>
                          <div> {li.title} </div>
                          {li.text && <div className='text-base'> {li.text} </div>}
                      </div>
                  </div>
              </Link>} />
              {closeBtn && <Link>
                  <div onClick={close} className={'py-4 px-5 [:first-child>&]:rounded-t-md [:last-child>&]:rounded-b-md flex gap-4 justify-center bg-black/[0.04]'}>
                      <div>Fermer</div>
                  </div>
              </Link>}
          </div>
      </div>)
}
