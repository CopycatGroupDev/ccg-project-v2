import React, { useRef, useEffect } from 'react'
import { useLocation } from 'react-router-dom'

/* eslint-disable react/prop-types */

export const Timeline = ({ color = '#000', list, modal }) => {
  const timeline = useRef(null)
  const location = useLocation()

  useEffect(() => {
    const hr = function () {
      // [...timeline.current.querySelectorAll('.container.right')].map((item) => { item.style.top = "-" + (0.75 * item.getBoundingClientRect().height) + "px"; });
      const whole = timeline.current?.getBoundingClientRect()

      const last = [...(timeline.current ?? document).querySelectorAll('.ligacao')].pop()?.getBoundingClientRect()
      timeline.current?.style.setProperty('--x', (whole.bottom - last.bottom) + 'px', '')
    }
    hr()
    document.onreadystatechange = function () { if (document.readyState === 'complete') { hr(); window.scroll(0, 0) } }
    window.addEventListener('load', hr)
    window.addEventListener('scroll', hr)
    window.addEventListener('resize', hr)
    if (location.hash) {
      window.scroll(
        0,
        document
          .querySelector(location.hash)
          .getBoundingClientRect()
          .top
      )
    }
  }, [location.hash])

  return <div ref={timeline} className={'timeline !-mt-12 pt-12 w-full max-w-[1340px] [&_img]:drop-shadow-xl text-center'}>
          {list.map(({ id, image, text, button }, i) => {
            let mt = -(timeline.current?.querySelector('#' + id)?.getBoundingClientRect().height / 2.25)
            if (isNaN(mt)) mt = 0
            return <div id={id} className={'max-sm:!top-0 container ' + (i % 2 === 0 ? 'left' : 'right')} key={i} style={{ marginTop: (i === 0 ? 0 : mt) }}>
                  <div className="content grid grid-cols-1 grid-rows-[min-content] gap-8 text-base md:text-2xl lg:text-2xl snap-start">
                      <div className='relative grid'>
                          <div className={'hr absolute w-full'}>
                              <div className='inner'>
                                  <div className={'ligacao'}></div>
                              </div>
                          </div>
                          <img src={image} className='bg-white rounded-full w-3/4 z-10 relative justify-self-center' alt=""></img>
                      </div>
                      <div className='text-gray-400'>{text}</div>
                      <button style={{ background: color }} className={'p-4 drop-shadow-xl rounded-full text-white'} onClick={() => {
                        modal.opener(true)
                        modal.select(list.map(li => li.title))
                        modal.default(i)
                      }}>{button}</button>
                  </div>
              </div>
          })}
      </div>
}
