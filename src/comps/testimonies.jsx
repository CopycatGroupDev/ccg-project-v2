/* eslint-disable react/no-children-prop */
/* eslint-disable react/prop-types */
import React, { useState } from 'react'
import { For } from '../functions'
import { Icons } from './icons'

export const Testimonies = ({ testimonies }) => {
  const [activeTestimony, setActiveTestimony] = useState(0)
  const [inTransition, setTransition] = useState(false)

  const card = {
    padding: '1.5rem',
    backgroundColor: 'rgb(255 255 255 / 1)',
    gap: '1rem',
    gridTemplateColumns: 'repeat(1, minmax(0, 1fr))',
    width: '24rem',
    display: 'grid',
    overflow: 'hidden',
    height: '100%',
    borderRadius: '1.5rem'
  }

  return <div className="flex w-full justify-center items-center relative gap-8 h-fit" style={{
    display: 'grid',
    gridTemplateColumns: 'repeat(2, minmax(0,1fr))',
    gridTemplateRows: 'repeat(1, minmax(0,1fr))',
    maxWidth: '800px',
    position: 'relative',
    margin: '0 auto',
    height: '550px'
  }}>
      <For obj={testimonies} render={(value, i) => {
        const minHeight = (4.5 / 6 * 100) + '%'
        return <div key={i} data-side={[
          (value === (testimonies[activeTestimony - 1] ?? testimonies[testimonies.length - 1])) && 'left',
          (value === testimonies[activeTestimony]) && 'center',
          (value === (testimonies[activeTestimony + 1] ?? testimonies[0])) && 'right'
        ].filter(Boolean)} style={{
          ...card,
          alignContent: 'space-between',
          position: [
            (value === (testimonies[activeTestimony - 1] ?? testimonies[testimonies.length - 1])) && 'static',
            (value === testimonies[activeTestimony]) && 'absolute',
            (value === (testimonies[activeTestimony + 1] ?? testimonies[0])) && 'static',
            (value !== (testimonies[activeTestimony - 1] ?? testimonies[testimonies.length - 1])) && (value !== testimonies[activeTestimony]) && (value !== (testimonies[activeTestimony + 1] ?? testimonies[0])) && 'fixed'
          ].filter(Boolean)[0],

          boxShadow: [
            (value === (testimonies[activeTestimony - 1] ?? testimonies[testimonies.length - 1])) && '0 0 #0000, 0 0 #0000, 0 1px 3px 0 rgb(0 0 0 / 0.1), 0 1px 2px -1px rgb(0 0 0 / 0.1)',
            (value === testimonies[activeTestimony]) && '0 0 #0000, 0 0 #0000, 0 1px 6px 0 rgb(0 0 0 / 0.1), 0 1px 4px -1px rgb(0 0 0 / 0.1)',
            (value === (testimonies[activeTestimony + 1] ?? testimonies[0])) && '0 0 #0000, 0 0 #0000, 0 1px 3px 0 rgb(0 0 0 / 0.1), 0 1px 2px -1px rgb(0 0 0 / 0.1)',
            (value !== (testimonies[activeTestimony - 1] ?? testimonies[testimonies.length - 1])) && (value !== testimonies[activeTestimony]) && (value !== (testimonies[activeTestimony + 1] ?? testimonies[0])) && ''
          ].filter(Boolean)[0],

          display: [
            (value === (testimonies[activeTestimony - 1] ?? testimonies[testimonies.length - 1])) && 'grid',
            (value === testimonies[activeTestimony]) && 'grid',
            (value === (testimonies[activeTestimony + 1] ?? testimonies[0])) && 'grid',
            (value !== (testimonies[activeTestimony - 1] ?? testimonies[testimonies.length - 1])) && (value !== testimonies[activeTestimony]) && (value !== (testimonies[activeTestimony + 1] ?? testimonies[0])) && 'none'
          ].filter(Boolean)[0],
          zIndex: i === activeTestimony && 100,
          gridColumnStart: [
            (value === (testimonies[activeTestimony - 1] ?? testimonies[testimonies.length - 1])) && '1',
            (value === testimonies[activeTestimony]) && '0',
            (value === (testimonies[activeTestimony + 1] ?? testimonies[0])) && '2',
            (value !== (testimonies[activeTestimony - 1] ?? testimonies[testimonies.length - 1])) && (value !== testimonies[activeTestimony]) && (value !== (testimonies[activeTestimony + 1] ?? testimonies[0])) && '0'
          ].filter(Boolean)[0],
          gridRowStart: 1,
          /* filter: [
            (value === (testimonies[activeTestimony - 1] ?? testimonies[testimonies.length - 1])) && 'blur(1.5px)',
            (value === testimonies[activeTestimony]) && 'blur(0px)',
            (value === (testimonies[activeTestimony + 1] ?? testimonies[0])) && 'blur(1.5px)',
            (value !== (testimonies[activeTestimony - 1] ?? testimonies[testimonies.length - 1])) && (value !== testimonies[activeTestimony]) && (value !== (testimonies[activeTestimony + 1] ?? testimonies[0])) && ''
          ].filter(Boolean)[0], */
          opacity: [
            (value === (testimonies[activeTestimony - 1] ?? testimonies[testimonies.length - 1])) && '0.8',
            (value === testimonies[activeTestimony]) && '1',
            (value === (testimonies[activeTestimony + 1] ?? testimonies[0])) && '0.8',
            (value !== (testimonies[activeTestimony - 1] ?? testimonies[testimonies.length - 1])) && (value !== testimonies[activeTestimony]) && (value !== (testimonies[activeTestimony + 1] ?? testimonies[0])) && '0'
          ].filter(Boolean)[0],
          [value === (testimonies[activeTestimony - 1] ?? testimonies[testimonies.length - 1]) && 'gridColumnStart']: '1',
          [value === (testimonies[activeTestimony - 1] ?? testimonies[testimonies.length - 1]) && 'margin']: '0 0%',
          [value === (testimonies[activeTestimony + 1] ?? testimonies[0]) && 'gridColumnStart']: '3',
          [value === (testimonies[activeTestimony + 1] ?? testimonies[0]) && 'margin']: '0 0%',
          [value === testimonies[activeTestimony] && 'gridColumnStart']: '2',

          height: (value === (testimonies[activeTestimony])) ? '100%' : minHeight,
          textOverflow: 'ellipsis',
          whiteSpace: 'nowrap'
        }} onClick={() => {
          if (!inTransition) {
            setTransition(true);
            const duration = 1000
            const anim = {
              duration,
              iterations: 1,
              easing: 'cubic-bezier(0.68, -0.55, 0.27, 1.55)'
            }

            let move = {
              l2C: document.querySelector('div[data-side="center"]').getBoundingClientRect().x - document.querySelector('div[data-side="left"]').getBoundingClientRect().x,
              l2r: document.querySelector('div[data-side="right"]').getBoundingClientRect().x - document.querySelector('div[data-side="left"]').getBoundingClientRect().x
            }
            move = {
              l2C: move.l2C + 'px',
              l2r: move.l2r + 'px'
            }

            if (value === (testimonies[activeTestimony - 1] ?? testimonies[testimonies.length - 1])) {
              document.querySelector('div[data-side="left"]').animate([{ filter: 'blur(1.5px)', transform: 'translateX(0%)', height: minHeight, zIndex: '0', opacity: '0.6' }, { filter: 'blur(0px)', transform: 'translateX(' + move.l2C + ')', height: '100%', zIndex: '100', opacity: '1' }], anim)
              document.querySelector('div[data-side="center"]').animate([{ filter: 'blur(0px)', transform: 'translateX(0%)', height: '100%', zIndex: '100', opacity: '1' }, { filter: 'blur(1.5px)', transform: 'translateX(' + move.l2C + ')', height: minHeight, zIndex: '0', opacity: '0.6' }], anim)
              document.querySelector('div[data-side="right"]').animate([{ transform: 'translateX(0%)', zIndex: '0' }, { transform: 'translateX(-' + move.l2r + ')', zIndex: '-100' }], anim)
              setTimeout(() => { setActiveTestimony(testimonies.indexOf(testimonies[activeTestimony - 1] ?? testimonies[testimonies.length - 1])) }, duration)
            }
            if (value === (testimonies[activeTestimony + 1] ?? testimonies[0])) {
              document.querySelector('div[data-side="right"]').animate([{ filter: 'blur(1.5px)', transform: 'translateX(0%)', height: minHeight, zIndex: '0', opacity: '0.6' }, { filter: 'blur(0px)', transform: 'translateX(-' + move.l2C + ')', height: '100%', zIndex: '100', opacity: '1' }], anim)
              document.querySelector('div[data-side="center"]').animate([{ filter: 'blur(0px)', transform: 'translateX(0%)', height: '100%', zIndex: '100', opacity: '1' }, { filter: 'blur(1.5px)', transform: 'translateX(-' + move.l2C + ')', height: minHeight, zIndex: '0', opacity: '0.6' }], anim)
              document.querySelector('div[data-side="left"]').animate([{ transform: 'translateX(0%)' }, { transform: 'translateX(' + move.l2r + ')' }], anim)
              setTimeout(() => { setActiveTestimony(testimonies.indexOf(testimonies[activeTestimony + 1] ?? testimonies[0])) }, duration)
              setTimeout(() => { setTransition(false) }, duration)
            }
          }
        }}>
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 37.236 31.2">
                  <g id="Groupe_59" data-name="Groupe 59" transform="translate(-748.736 -3067.8)">
                      <path id="Tracé_71" data-name="Tracé 71" d="M15.152,0V6S8.82,6.344,9.29,16l5.927.065L15.152,31.2H.218S-3.111.6,15.152,0Z" transform="translate(770.756 3067.8)" fill="#06a13a"/>
                      <path id="Tracé_72" data-name="Tracé 72" d="M15.152,0V6S8.82,6.344,9.29,16l5.927.065L15.152,31.2H.218S-3.111.6,15.152,0Z" transform="translate(748.756 3067.8)" fill="#06a13a"/>
                  </g>
              </svg>

              <p className="overflow-hidden px-8 sm:px-0" style={{ textWrap: 'balance' }}>{testimonies[i].text}</p>

              <div className="grid grid-rows-2 items-center text-start gap-x-3 h-fit" style={{ gridTemplateColumns: 'auto minmax(0, 1fr)' }}>
                  <img src={value.img} className="w-12 h-fit aspect-square rounded-full row-span-2 bg-black" />
                  <b className="">{value.name}</b>{/* 
                  <span className="">Entreprise</span> */}
              </div>
          </div>
      }} />
      {/* <button children={<Icons icon={'Right'} size={32} />} className="absolute right-0 bg-zinc-800 text-4xl p-4 z-[200] -mx-6 opacity-90" onClick={(e) => {
        const minHeight = (4.5 / 6 * 100) + '%'

        const duration = 750
        const anim = {
          duration,
          iterations: 1,
          easing: 'cubic-bezier(0.68, -0.55, 0.27, 1.55)'
        }

        let move = {
          l2C: document.querySelector('div[data-side="center"]').getBoundingClientRect().x - document.querySelector('div[data-side="left"]').getBoundingClientRect().x,
          l2r: document.querySelector('div[data-side="right"]').getBoundingClientRect().x - document.querySelector('div[data-side="left"]').getBoundingClientRect().x
        }
        move = {
          l2C: move.l2C + 'px',
          l2r: move.l2r + 'px'
        }
        e.target.disabled = true

        document.querySelector('div[data-side="left"]').animate([{ filter: 'blur(1.5px)', transform: 'translateX(0%)', height: minHeight, zIndex: '0', opacity: '0.6' }, { filter: 'blur(0px)', transform: 'translateX(' + move.l2C + ')', height: '100%', zIndex: '100', opacity: '1' }], anim)
        document.querySelector('div[data-side="center"]').animate([{ filter: 'blur(0px)', transform: 'translateX(0%)', height: '100%', zIndex: '100', opacity: '1' }, { filter: 'blur(1.5px)', transform: 'translateX(' + move.l2C + ')', height: minHeight, zIndex: '0', opacity: '0.6' }], anim)
        document.querySelector('div[data-side="right"]').animate([{ transform: 'translateX(0%)', zIndex: '0' }, { transform: 'translateX(-' + move.l2r + ')', zIndex: '-100' }], anim)
        setTimeout(() => { setActiveTestimony(testimonies.indexOf(testimonies[activeTestimony - 1] ?? testimonies[testimonies.length - 1])); e.target.disabled = false }, duration)
      }} />
      <button children={<Icons icon={'Left'} size={32} />} className="absolute left-0 bg-zinc-800 text-4xl p-4 z-[200] -mx-6 opacity-90" onClick={(e) => {
        const minHeight = (4.5 / 6 * 100) + '%'

        const duration = 750
        const anim = {
          duration,
          iterations: 1,
          easing: 'cubic-bezier(0.68, -0.55, 0.27, 1.55)'
        }

        let move = {
          l2C: document.querySelector('div[data-side="center"]').getBoundingClientRect().x - document.querySelector('div[data-side="left"]').getBoundingClientRect().x,
          l2r: document.querySelector('div[data-side="right"]').getBoundingClientRect().x - document.querySelector('div[data-side="left"]').getBoundingClientRect().x
        }
        move = {
          l2C: move.l2C + 'px',
          l2r: move.l2r + 'px'
        }
        e.target.disabled = true

        document.querySelector('div[data-side="right"]').animate([{ filter: 'blur(1.5px)', transform: 'translateX(0%)', height: minHeight, zIndex: '0', opacity: '0.6' }, { filter: 'blur(0px)', transform: 'translateX(-' + move.l2C + ')', height: '100%', zIndex: '100', opacity: '1' }], anim)
        document.querySelector('div[data-side="center"]').animate([{ filter: 'blur(0px)', transform: 'translateX(0%)', height: '100%', zIndex: '100', opacity: '1' }, { filter: 'blur(1.5px)', transform: 'translateX(-' + move.l2C + ')', height: minHeight, zIndex: '0', opacity: '0.6' }], anim)
        document.querySelector('div[data-side="left"]').animate([{ transform: 'translateX(0%)' }, { transform: 'translateX(' + move.l2r + ')' }], anim)
        setTimeout(() => { setActiveTestimony(testimonies.indexOf(testimonies[activeTestimony + 1] ?? testimonies[0])); e.target.disabled = false }, duration)
      }} /> */}
  </div>
}
