/* eslint-disable react/no-children-prop */
/* eslint-disable react/prop-types */
import emailjs from '@emailjs/browser'
import { archi } from './archi'
import { For } from './functions'
import { Carousel } from 'flowbite-react'
import React, { useEffect, useRef, useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { boutiques } from './arrays'

const zoom = 0.9

export const Container = ({ modifier = 'w-full flex flex-col gap-6 items-center text-base md:text-xl text-gray-400 max-w-[1340px] text-center px-12', style, children }) => <div className={modifier} style={style}>{children}</div>

export const Title = ({ children, color = 'black', modifier }) => <h1 className={`text-4xl text-center text-${color} text-[${color}] ${modifier}`} style={{ color }}>{children}</h1>

export const Header = ({ cover, logo, textLine, color, textBtn, fullText = false, kurz = false, mid = false, title, navTextColor }) => {
  const [navOpened, setNavOpened] = useState(false)
  const nvOp = { navOpened, setNavOpened }

  return <>
        {navOpened && <NavMobile {...nvOp} />}
        <div id='header' className={`w-full h-screen relative flex snap-always snap-center bg-[${color}]`} style={{ [kurz && 'height']: '400px', [mid && 'height']: '720px', background: `linear-gradient(180deg, rgb(235 235 235) 50%, ${color} 50%)` }} >
            <img src={cover} className='w-full h-full object-cover' />
            <div className="absolute w-full h-full flex flex-col [&>*]:h-full gap-4 p-8 lg:p-4 text-xl xl:text-2xl" style={{ zoom }}>
                <Nav {...nvOp} textColor={navTextColor} />
                {!kurz && <>
                    {!fullText
                      ? <>
                        <div className='w-full flex justify-center header_Plate'>
                            <img src={logo} className={'w-[35vh] xl:w-[350px] aspect-square h-fit rounded-full md:mt-16 object-contain'} style={{ opacity: (logo) ? '1' : '0' }}/>
                        </div>
                        <div className='w-full text-white text-center flex flex-col justify-center text-base md:text-2xl lg:text-2xl xl:text-3xl gap-[1.5vh] xl:gap-[18px] items-center header_Plate'>
                            <h2 className='max-w-[1000px]'>{textLine[0]}</h2>
                            <h2 className=''>{textLine[1]}</h2>
                            {textBtn && <button className={'md:text-2xl bg-white px-4 py-2 md:px-7 md:py-3.5 rounded-full'}style={{ color: `${color}` }}>{textBtn}</button>}
                        </div>
                    </>
                      : <>
                        <div className='lg:px-24 text-white flex flex-col justify-center gap-4 h-full [div:has(&)>#nav]:h-fit text-lg md:text-xl max-w-[800px] leading-loose'>
                            <h2 className='text-4xl md:text-5xl my-2 md:my-8'>{title}</h2>
                            <For obj={textLine} render={(value, i) => <p key={i}>{value}</p>} />
                        </div>
                    </>}
                </>}
            </div>
        </div>
        {(textLine[2] && !fullText) && <div className={'-mt-12 text-white w-full flex justify-center p-16 pt-0 text-base md:text-2xl lg:text-2xl xl:text-3xl text-center snap-end'} style={{ background: `${color}` }}>
            <p style={{ zoom }}>{`${textLine[2]}`}</p>
        </div>}
    </>
}

export const Menu = ({ header, title }) => {
  const [navOpened, setNavOpened] = useState(false)
  const nvOp = { navOpened, setNavOpened }

  document.querySelector('title').innerHTML = title

  return <>
        {navOpened && <NavMobile {...nvOp} />}
        <div id='header' className={'w-full h-screen relative flex snap-always snap-center'}>
            <img src={'/src/assets/banner-bg-ccg.png'} className='w-full h-full object-cover'/>
            <div className="absolute w-full h-full flex flex-col [&>*]:h-full gap-4 p-8 lg:p-4 text-xl xl:text-2xl" style={{ zoom }}>
                <Nav {...nvOp} textColor={header.navTextColor} />
                <div className="flex justify-center gap-16">
                    <For obj={boutiques} render={(value, key) => {
                      const page = archi.find(ar => ar.path === value)

                      return <Link key={key} to={value} className="bg-white h-fit shadow p-6 gap-2 rounded-xl grid grid-cols-1 justify-items-center">
                            <img src={'icone boutique.png'} className="" />
                            <div className="text-xl" style={{ color: '#0061ad' }}>{page.title}</div>
                        </Link>
                    } } />
                </div>
                <div></div>
            </div>
        </div>
    </>
}

export const Footer = ({ refF }) => {
  return (<div id='footer' ref={refF} className="bg-[#0061ad] w-full flex flex-col text-white">
        <div className='gap-8 grid grid-cols-1 lg:grid-cols-4 snap-always snap-start p-8 [&_h2]:text-3xl [&_input]:rounded-lg [&>div]:grid [&>div]:grid-rows-[min-content] [&>div]:gap-4 snap-center max-sm:gap-[2.5vh] max-sm:h-screen'>
            <div>
                <h2>Contactez nous</h2>
                <ul>
                    <li><a href="/contact">01 45 07 98 00</a></li>
                    <li><a href="/contact">hello@copycatgroup.fr</a></li>
                    <li><a href="/contact">Trouver un Magasin :</a></li>
                    <li><a href="/contact">2 rue de ville d’Avray</a></li>
                    <li><a href="/contact">92310 SÈVRES</a></li>
                </ul>
            </div>
            <div>
                <h2>A propos</h2>
                <ul>
                    <li><a href="/mentions-legales">Mentions légales</a></li>
                    <li><a href="/confidentialit%C3%A9">Politique de confidentialité</a></li>
                    <li><a href="https://copycatgroup.fr/#service_1">Les Services</a></li>
                </ul>
            </div>
            <div>
                <h2>Nos autres services</h2>
                <ul>
                    <li><a href="https://copycat-shop.fr" target="_blank" rel="noreferrer">Copycat Shop</a></li>
                    <li><a href="http://www.copycatprint.fr/accueil/" target="_blank" rel="noreferrer">Copycat Print</a></li>
                    <li><a href="https://www.copycat.vous-livre.com/" target="_blank" rel="noreferrer">Copycat vous livre</a></li>
                    <li><a href="https://copycat-group.mydigitalcorner.fr/" target="_blank" rel="noreferrer">Copycat Group mydigitalcorner</a></li>
                    <li><a href="https://www.exalink.fr/profil/copycat-group" target="_blank" rel="noreferrer">Exalink Copycat Group</a></li>
                </ul>
            </div>
            <div>
                <form className='contents'>
                    <h2>Newsletter</h2>
                    <div className='grid gap-2 grid-rows-[min-content]'>
                        <input type="email" id="email" pattern=".+@globex\.com" className='w-full text-black h-fit' placeholder='Votre email'/>
                        <button className='border rounded-full w-full h-fit p-2'>{'S\'inscrire'}</button>
                    </div>
                </form>
            </div>
        </div>
        <div className='flex justify-between px-8 pb-4 snap-always snap-end items-center'>
            <span>Copyright - Copycat Group</span>
            <div className='grid grid-rows-1 grid-cols-3 gap-2'>
                <Link to={'https://www.facebook.com/copycat.groupe/'} style={{ display: 'contents' }}><Icons icon="Facebook" size={32} /></Link>
                <Link to={'https://www.instagram.com/copycat_group/'} style={{ display: 'contents' }}><Icons icon="Instagram" size={32} /></Link>
                <Link to={'https://fr.linkedin.com/company/copycat-group'} style={{ display: 'contents' }}><Icons icon="Linkedin" size={32} /></Link>
            </div>
        </div>
    </div>)
}

export const ContactUs = () => {
  const form = useRef()
  let confirmMessage = ''

  const sendEmail = (e) => {
    e.preventDefault()
    emailjs.sendForm('service_o6semg5', 'template_fngu4h2', form.current, '8Rs9RvEbWiGOIy4pj').then(
      result => {
        console.log(result.text)
        console.log('message send')
        confirmMessage = 'MESSAGE ENVOYÉ'
      },
      error => console.log(error.text)
    )
  }

  return (
        <div className="ContactUs">
            <h1>Contact Us</h1>
            <form className="ContactUs-form" ref={form} onSubmit={sendEmail}>
                <input type="text" name="user_name" placeholder="Your name" />
                <input type="email" name="user_mail" placeholder="Your mail" />
                <textarea placeholder="Your message" name="message"/>
                <input className="ContactUs-button" type="submit" value="Send" />
                <p>{confirmMessage}</p>
            </form>
        </div>
  )
}

export const CCGCarousel = ({ images, className }) => <Carousel className={className}>
    {images.map((image, i) => <img key={i} alt="" src={image} className='object-contain h-full' />)}
</Carousel>

export const Timeline = ({ color = '#000', list }) => {
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
        {list.map((element, i) => {
          let mt = -(timeline.current?.querySelector('#' + element.id)?.getBoundingClientRect().height / 2.25)
          if (isNaN(mt)) mt = 0
          return <div id={element.id} className={'max-sm:!top-0 container ' + (i % 2 === 0 ? 'left' : 'right')} key={i} style={{ marginTop: (i === 0 ? 0 : mt) }}>
                <div className="content grid grid-cols-1 grid-rows-[min-content] gap-8 text-2xl snap-start">
                    <div className='relative grid'>
                        <div className={'hr absolute w-full'}>
                            <div className='inner'>
                                <div className={'ligacao'}></div>
                            </div>
                        </div>
                        <img src={element.image} className='bg-white rounded-full w-3/4 z-10 relative justify-self-center' alt=""></img>
                    </div>
                    <div className='text-gray-400'>{element.text}</div>
                    <button style={{ background: color }} className={'p-4 drop-shadow-xl rounded-full text-white'}>{element.button}</button>
                </div>
            </div>
        })}
    </div>
}

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

export const Testimonies = ({ testimonies }) => {
  const [activeTestimony, setActiveTestimony] = useState(0)

  const card = {
    padding: '1.5rem',
    backgroundColor: 'rgb(255 255 255 / 1)',
    gap: '1rem',
    gridTemplateColumns: 'repeat(1, minmax(0, 1fr))',
    width: '24rem',
    display: 'grid',
    overflow: 'hidden',
    height: '100%'
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
            /*filter: [
              (value === (testimonies[activeTestimony - 1] ?? testimonies[testimonies.length - 1])) && 'blur(1.5px)',
              (value === testimonies[activeTestimony]) && 'blur(0px)',
              (value === (testimonies[activeTestimony + 1] ?? testimonies[0])) && 'blur(1.5px)',
              (value !== (testimonies[activeTestimony - 1] ?? testimonies[testimonies.length - 1])) && (value !== testimonies[activeTestimony]) && (value !== (testimonies[activeTestimony + 1] ?? testimonies[0])) && ''
            ].filter(Boolean)[0],*/
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
                    <div className="w-12 h-fit aspect-square rounded-full row-span-2 bg-black"></div>
                    <b className="">Nom</b>
                    <span className="">Entreprise</span>
                </div>
            </div>
        }} />
        <button children={<Icons icon={'Right'} size={32} />} className="absolute right-0 bg-zinc-800 text-4xl p-4 z-[200] -mx-6 opacity-90" onClick={(e) => {
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
        }} />
    </div>
}

export const Tabs = ({ tabs }) => {
  const [activeTab, setActiveTab] = useState(0)

  return <div className="w-full flex flex-col gap-6 items-center text-base md:text-xl text-gray-400 max-w-[1340px] text-center px-12">
        <div className="bg-[#F2F2F2] w-full p-2 gap-2 flex max-md:flex-col md:max-lg:grid md:max-lg:grid-cols-2 md:max-lg:grid-rows-2">
            <For obj={tabs} render={(value, i) => {
              return <button key={i} className="w-full flex rounded-lg p-2 items-center" style={{ color: archi.find(arc => '/' + value === arc.path).element.props.header.color, background: i === activeTab && 'white' }} onClick={() => setActiveTab(i)}>
                    <img src={value.replace(value[0], value[0].toUpperCase()) + '.svg'} className="h-[50px] aspect-square w-fit rounded-full" />
                    <div className="w-full">{archi.find(arc => '/' + value === arc.path).title}</div>
                </button>
            }} />
        </div>
        <For obj={tabs} render={(value, i) => {
          return (i === activeTab && <div key={i} className="grid grid-cols-1 lg:grid-cols-2 w-full gap-8">
                <div className="aspect-[625/418] bg-black"></div>
                <div className="flex flex-col justify-center gap-4">
                    <button className="w-full flex rounded-lg p-2 items-center gap-4" style={{ color: archi.find(arc => '/' + value === arc.path).element.props.header.color }} onClick={() => setActiveTab(i)}>
                        <img src={value.replace(value[0], value[0].toUpperCase()) + '.svg'} className="h-[50px] aspect-square w-fit rounded-full" />
                        <div className="">{archi.find(arc => '/' + value === arc.path).title}</div>
                    </button>
                    <p className="text-left">Nous mettons à votre disposition notre savoir et notre regard expert pour vous aider à voir plus loin qu'une marque de renom. En effet. nous vous aidons à trouver les services qui répondent le plus à vos attentes. Pour cela. nous nous appuyons sur nos partenaires méticuleusement sélectionnés.</p>
                    <div className="flex flex-wrap text-sm gap-2 uppercase">
                        <For obj={archi.find(arc => '/' + value === arc.path).dropdown} render={(tag, i) => <span key={i} className="px-16 py-2 border rounded-full" style={{ color: archi.find(arc => '/' + value === arc.path).element.props.header.color, borderColor: archi.find(arc => '/' + value === arc.path).element.props.header.color }}>{tag.title}</span>} />
                    </div>
                </div>
            </div>)
        }} />
    </div>
}

export const SolutionsList = ({ solutions }) => {
  return <Container>
        <For obj={solutions} render={({ title, content, img }, key) => {
          return <div key={key} className='grid max-lg:grid-cols-1 grid-cols-2 items-center gap-8'>{key % 2
            ? <>
                    <img src={img} alt="" className='w-full' />
                    <div className='w-full h-full flex flex-col gap-4'>
                        <Title color='#08A03A' modifier="text-2xl">{title}</Title>
                        <div className='bg-white border-l-4 border-[#08A03A] p-4 h-full'>{content}</div>
                    </div>
                </>
            : <>
                    <div className='w-full h-full flex flex-col gap-4'>
                        <Title color='#08A03A' modifier="text-2xl">{title}</Title>
                        <div className='bg-white border-l-4 border-[#08A03A] p-4 h-full'>{content}</div>
                    </div>
                    <img src={img} alt="" className='w-full' />
                </>}</div>
        }} />
    </Container>
}

export const Svg = ({ children, size, viewBox }) => <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox={viewBox} height={size} width={size} children={children} />

export const Icons = ({ icon, size = 16, viewBox = '0 0 16 16' }) => {
  const icons = {
    Instagram: <path d="M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.9 3.9 0 0 0-1.417.923A3.9 3.9 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.9 3.9 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.9 3.9 0 0 0-.923-1.417A3.9 3.9 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0zm-.717 1.442h.718c2.136 0 2.389.007 3.232.046.78.035 1.204.166 1.486.275.373.145.64.319.92.599s.453.546.598.92c.11.281.24.705.275 1.485.039.843.047 1.096.047 3.231s-.008 2.389-.047 3.232c-.035.78-.166 1.203-.275 1.485a2.5 2.5 0 0 1-.599.919c-.28.28-.546.453-.92.598-.28.11-.704.24-1.485.276-.843.038-1.096.047-3.232.047s-2.39-.009-3.233-.047c-.78-.036-1.203-.166-1.485-.276a2.5 2.5 0 0 1-.92-.598 2.5 2.5 0 0 1-.6-.92c-.109-.281-.24-.705-.275-1.485-.038-.843-.046-1.096-.046-3.233s.008-2.388.046-3.231c.036-.78.166-1.204.276-1.486.145-.373.319-.64.599-.92s.546-.453.92-.598c.282-.11.705-.24 1.485-.276.738-.034 1.024-.044 2.515-.045zm4.988 1.328a.96.96 0 1 0 0 1.92.96.96 0 0 0 0-1.92m-4.27 1.122a4.109 4.109 0 1 0 0 8.217 4.109 4.109 0 0 0 0-8.217m0 1.441a2.667 2.667 0 1 1 0 5.334 2.667 2.667 0 0 1 0-5.334"/>,

    Linkedin: <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854zm4.943 12.248V6.169H2.542v7.225zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248S2.4 3.226 2.4 3.934c0 .694.521 1.248 1.327 1.248zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016l.016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225z"/>,

    Facebook: <path d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951"/>,

    Right: <path fillRule="evenodd" d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708"/>,

    Left: <path fillRule="evenodd" d="M11.354 1.646a.5.5 0 0 1 0 .708L5.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0"/>,

    InkRecycle: <> <path id="Tracé_47" data-name="Tracé 47" d="M27.2,0l-.236.118L.986,16.767l-.177.118-.059.059h0L.69,17h0l-.59.413v1.712h0V88.556H36.054l.767-.472h0L55.89,76.276v-30.7l6.612-6.73.827-36.721V0Zm7.38,86.312H2.284V19.187H34.578Zm.767-69.428H4.941L27.847,2.243h30.4ZM60.318,37.9l-5.136,5.2-.708.708-.827.886V74.977L36.821,85.427V18.715L53.292,8.5l2.6-1.653,5.254-3.424Z" transform="translate(-0.1)" fill="#0061ad"/> <path id="Tracé_48" data-name="Tracé 48" d="M17.586,123.7H9.38a2.508,2.508,0,0,0-2.48,2.539v5.786a2.546,2.546,0,0,0,2.48,2.539h8.206a2.6,2.6,0,0,0,2.539-2.539v-5.786A2.52,2.52,0,0,0,17.586,123.7Zm.3,8.324a.209.209,0,0,1-.236.236H9.38a.209.209,0,0,1-.236-.236v-5.786a.279.279,0,0,1,.3-.3h8.147a.209.209,0,0,1,.236.236v5.845Z" transform="translate(-2.885 -50.671)" fill="#0061ad"/> <path id="Tracé_49" data-name="Tracé 49" d="M43,123.8H34.739a2.557,2.557,0,0,0-2.539,2.539v5.786a2.52,2.52,0,0,0,2.539,2.539h8.206a2.557,2.557,0,0,0,2.539-2.539v-5.786A2.508,2.508,0,0,0,43,123.8Zm.3,8.324a.279.279,0,0,1-.3.3H34.739a.279.279,0,0,1-.3-.3v-5.786c0-.059.059-.118.059-.177a.217.217,0,0,1,.177-.059h8.206c.059,0,.118.059.177.059a.217.217,0,0,1,.059.177v5.786Z" transform="translate(-13.249 -50.712)" fill="#0061ad"/> <path id="Tracé_50" data-name="Tracé 50" d="M31.144,38.9H13.315A4.019,4.019,0,0,0,9.3,42.915V82.528a4.019,4.019,0,0,0,4.015,4.015H31.144a4.019,4.019,0,0,0,4.015-4.015V42.974A4.07,4.07,0,0,0,31.144,38.9Zm1.771,43.628a1.814,1.814,0,0,1-1.83,1.83H13.315a1.814,1.814,0,0,1-1.83-1.83V42.974a1.831,1.831,0,0,1,.531-1.3,1.736,1.736,0,0,1,1.3-.531H31.144a1.831,1.831,0,0,1,1.3.531,1.736,1.736,0,0,1,.531,1.3V82.528Z" transform="translate(-3.869 -15.935)" fill="#0061ad"/> <path id="Tracé_51" data-name="Tracé 51" d="M31.705,72.888c-.354-.59-.708-1.181-1.063-1.712l-.059-.059a30.1,30.1,0,0,1-3.424-6.553,1.471,1.471,0,0,0-1.712-1.181,1.779,1.779,0,0,0-1.24,1.3,32.164,32.164,0,0,1-3.778,6.848v.059a14.183,14.183,0,0,0-1.181,2.3,8.527,8.527,0,0,0,2.184,9.092,6.3,6.3,0,0,0,4.192,1.653,6.537,6.537,0,0,0,2.716-.649c2.775-1.3,4.251-3.719,4.369-7.2A7.128,7.128,0,0,0,31.705,72.888Zm-4.133,9.446a4.329,4.329,0,0,1-4.959-.767,6.686,6.686,0,0,1-1.653-7.025,10.19,10.19,0,0,1,1-1.948v-.059a36.55,36.55,0,0,0,3.719-6.671,36.759,36.759,0,0,0,3.365,6.2l1.063,1.771a4.919,4.919,0,0,1,.708,2.893C30.761,79.5,29.7,81.33,27.573,82.334Z" transform="translate(-7.736 -25.953)" fill="#0061ad"/> <path id="Tracé_52" data-name="Tracé 52" d="M32.055,78.5c-.059,2.775-1.122,4.664-3.306,5.668A4.329,4.329,0,0,1,23.79,83.4a6.686,6.686,0,0,1-1.653-7.025,10.19,10.19,0,0,1,1-1.948v-.059A36.55,36.55,0,0,0,26.859,67.7a36.759,36.759,0,0,0,3.365,6.2l1.063,1.771A4.3,4.3,0,0,1,32.055,78.5Z" transform="translate(-8.971 -27.732)" fill="#0061ad"/> </>,

    BatteryRecycle: <> <path id="Tracé_53" data-name="Tracé 53" d="M45.931,2.893H35.3a1.886,1.886,0,0,0,.177-.827A2.092,2.092,0,0,0,33.415,0H20.722a2.092,2.092,0,0,0-2.066,2.066,1.634,1.634,0,0,0,.177.767H7.025A7.132,7.132,0,0,0,0,9.918V71.494a7.042,7.042,0,0,0,7.025,7.025H45.931a7.042,7.042,0,0,0,7.025-7.025V9.918A7,7,0,0,0,45.931,2.893Zm3.365,68.6a3.364,3.364,0,0,1-3.365,3.365H7.025A3.364,3.364,0,0,1,3.66,71.494V9.918A3.364,3.364,0,0,1,7.025,6.553H45.931A3.364,3.364,0,0,1,49.3,9.918Z" fill="#0061ad"/> <path id="Tracé_54" data-name="Tracé 54" d="M46.52,115.845H13.872A5.392,5.392,0,0,1,8.5,110.472h0a5.392,5.392,0,0,1,5.372-5.372H46.52a5.392,5.392,0,0,1,5.372,5.372h0A5.392,5.392,0,0,1,46.52,115.845Z" transform="translate(-3.482 -43.052)" fill="#0061ad"/> <g id="Groupe_53" data-name="Groupe 53" transform="translate(23.083 43.392)"> <g id="Groupe_51" data-name="Groupe 51"> <path id="Tracé_55" data-name="Tracé 55" d="M62.735,118.212A21.106,21.106,0,1,1,83.871,97.135,21.152,21.152,0,0,1,62.735,118.212Z" transform="translate(-40.124 -74.524)" fill="#fff"/> <path id="Tracé_56" data-name="Tracé 56" d="M61.711,76.452A19.659,19.659,0,1,1,42.052,96.111,19.69,19.69,0,0,1,61.711,76.452m0-2.952h0A22.613,22.613,0,0,0,39.1,96.111h0a22.613,22.613,0,0,0,22.611,22.611h0A22.613,22.613,0,0,0,84.322,96.111h0A22.575,22.575,0,0,0,61.711,73.5Z" transform="translate(-39.1 -73.5)" fill="#0061ad"/> </g> <g id="Groupe_52" data-name="Groupe 52" transform="translate(7.755 8.239)"> <path id="Tracé_57" data-name="Tracé 57" d="M57,119.105c-.354-.649-.767-1.358-1.122-2.007-.886-1.476-1.712-2.952-2.6-4.487a14.682,14.682,0,0,1-.886-1.653,1.835,1.835,0,0,1,0-1.476,9.992,9.992,0,0,1,1-1.712c.236-.413.531-.767.767-1.181.059-.118.059-.177-.059-.236-.413-.236-.767-.472-1.181-.708-.177-.118-.354-.177-.3-.413s.236-.3.472-.354h.118c.945,0,1.889-.059,2.834-.059,1.063,0,2.184-.059,3.247-.118a.442.442,0,0,1,.472.3c.531,1.063,1.122,2.125,1.712,3.188.354.649.708,1.358,1.063,2.007.059.177.177.3.177.472a.434.434,0,0,1-.118.354.221.221,0,0,1-.354,0c-.354-.236-.708-.413-1-.649-.177-.118-.236-.059-.3.059-1.122,1.771-2.3,3.6-3.424,5.372A3.633,3.633,0,0,0,57,118.042a6.388,6.388,0,0,1,0,1.063Z" transform="translate(-52.236 -94.519)" fill="#0061ad"/> <path id="Tracé_58" data-name="Tracé 58" d="M92.949,116.6a2.653,2.653,0,0,1-.354.708c-1.358,2.48-2.775,5.018-4.133,7.5a2.33,2.33,0,0,1-2.066,1.181H83.74c-.236,0-.3.059-.3.3v1.358a.4.4,0,0,1-.236.413.459.459,0,0,1-.472-.118,5.349,5.349,0,0,1-.649-.945c-.945-1.417-1.889-2.893-2.834-4.369-.118-.177-.059-.236,0-.413.827-1.476,1.653-2.893,2.539-4.369.177-.3.354-.649.531-.945.118-.177.236-.3.472-.236s.236.236.236.413a5.7,5.7,0,0,1,0,1c0,.177.059.236.236.236h5.845a5,5,0,0,0,3.719-1.594l.118-.118Z" transform="translate(-63.275 -99.394)" fill="#0061ad"/> <path id="Tracé_59" data-name="Tracé 59" d="M70.1,87.482a3.326,3.326,0,0,1,.767,0c2.834.059,5.727.177,8.56.236a2.284,2.284,0,0,1,2.007,1.3c.413.767.827,1.594,1.24,2.361.118.177.177.236.354.118a11.012,11.012,0,0,1,1.181-.59.308.308,0,0,1,.472.059.37.37,0,0,1,.118.472,8.245,8.245,0,0,1-.531,1c-.827,1.476-1.712,3.011-2.539,4.487-.118.177-.177.177-.354.177-1.653-.059-3.365-.177-5.018-.236-.354,0-.708-.059-1.063-.059a.378.378,0,0,1-.413-.3.355.355,0,0,1,.236-.413c.3-.118.531-.354.886-.472.177-.059.177-.118.118-.3-.886-1.712-1.771-3.483-2.716-5.2A4.675,4.675,0,0,0,70.277,87.6c-.059,0-.118,0-.177-.118Z" transform="translate(-59.554 -87.456)" fill="#0061ad"/> <path id="Tracé_60" data-name="Tracé 60" d="M66.973,127.139H63.785A1.727,1.727,0,0,1,61.9,125.6a4.993,4.993,0,0,1,.531-3.778c.413-.649.886-1.3,1.3-2.007.059-.118.177-.118.3-.118h6.317c.236,0,.3.059.3.3v6.73c0,.413,0,.413-.413.413Z" transform="translate(-56.131 -100.664)" fill="#0061ad"/> <path id="Tracé_61" data-name="Tracé 61" d="M90.613,111.162H89.137a.421.421,0,0,1-.354-.177c-1.122-1.889-2.243-3.719-3.424-5.609-.059-.118-.118-.177.059-.3,1.948-1.122,3.9-2.243,5.845-3.424.177-.118.3-.059.413.118,1.181,1.771,2.361,3.6,3.483,5.372a1.7,1.7,0,0,1,.059,1.889,4.2,4.2,0,0,1-3.011,2.066,6.934,6.934,0,0,1-1.594.059Z" transform="translate(-65.78 -93.248)" fill="#0061ad"/> <path id="Tracé_62" data-name="Tracé 62" d="M65.113,88.9A2.68,2.68,0,0,1,67,89.663a8.185,8.185,0,0,1,1.83,2.48,11.8,11.8,0,0,1,.59,1.24.376.376,0,0,1,0,.354c-1.181,1.771-2.3,3.542-3.483,5.372-.059.118-.118.118-.3.059-1.889-1.3-3.778-2.539-5.727-3.837-.177-.118-.118-.177-.059-.354.708-1.181,1.476-2.361,2.184-3.483.354-.59.708-1.122,1.063-1.712a1.723,1.723,0,0,1,1.653-.886Z" transform="translate(-55.335 -88.043)" fill="#0061ad"/> </g> </g> </>,

    PaperRecycle: <> <g id="Groupe_55" data-name="Groupe 55" transform="translate(0 0)"> <path id="Tracé_63" data-name="Tracé 63" d="M7.494,29.233c-1.712.236-3.07.413-4.487.59a2.508,2.508,0,0,1-2.893-1.83,2.281,2.281,0,0,1,1.948-2.775c3.542-.59,7.143-1.122,10.686-1.535a2.337,2.337,0,0,1,2.775,2.184c.472,3.424.945,6.848,1.358,10.272a2.284,2.284,0,0,1-1.653,2.834,2.173,2.173,0,0,1-2.952-1.948c-.3-1.535-.472-3.07-.708-4.6-.118-.059-.3-.118-.413-.177-1.122,2.243-2.48,4.369-3.365,6.671-4.723,12.4-4.015,24.323,2.834,35.836a4.036,4.036,0,0,1,.413,2.952c-.649,1.83-2.952,1.771-4.133-.059A42.434,42.434,0,0,1,1,63.534,44.6,44.6,0,0,1,7.494,29.233Z" transform="translate(0.008 -9.707)" fill="#0061ad"/> <path id="Tracé_64" data-name="Tracé 64" d="M79.5,11.641A33.949,33.949,0,0,0,67.164,6.091C56.419,3.553,46.206,4.852,36.7,10.873c-1.535,1-2.952.827-3.778-.413s-.354-2.716,1.24-3.66C49.039-2,64.035-2.115,79.207,5.8c.886.472,1.771,1,2.657,1.535h.354c-.177-1.417-.354-2.775-.531-4.133C81.51,1.6,82.277.424,83.635.247A2.442,2.442,0,0,1,86.41,2.608c.531,3.306,1,6.612,1.476,9.977a2.588,2.588,0,0,1-2.243,3.188c-3.306.472-6.671.945-9.977,1.358-1.83.236-2.952-.531-3.129-2.007-.177-1.358.767-2.361,2.48-2.657C76.373,12.113,77.731,11.936,79.5,11.641Z" transform="translate(-13.317 -0.026)" fill="#0061ad"/> <path id="Tracé_65" data-name="Tracé 65" d="M130.456,82.459c1.712-.236,3.129-.413,4.546-.59a2.37,2.37,0,1,1,.827,4.664c-3.483.59-7.025,1.063-10.568,1.535a2.42,2.42,0,0,1-2.893-2.243c-.472-3.306-.945-6.671-1.3-9.977-.236-1.889.472-2.952,2.007-3.188,1.417-.236,2.361.708,2.657,2.657.236,1.358.413,2.657.59,4.015.118.059.3.118.413.177a70.537,70.537,0,0,0,3.365-6.671c4.664-12.162,4.074-23.969-2.6-35.363-.236-.413-.531-.886-.767-1.358a2.352,2.352,0,0,1,4.133-2.243c1.653,3.306,3.6,6.553,4.723,10.036,4.251,13.283,2.6,25.858-4.841,37.725C130.81,81.81,130.692,81.987,130.456,82.459Z" transform="translate(-49.57 -13.401)" fill="#0061ad"/> <path id="Tracé_66" data-name="Tracé 66" d="M29.082,130.658c.236,1.712.413,3.07.531,4.428.177,1.712-.59,2.834-2.007,3.07-1.358.177-2.421-.708-2.657-2.361-.531-3.365-1-6.73-1.476-10.1a2.542,2.542,0,0,1,2.243-3.07c3.306-.472,6.671-.945,9.977-1.358,1.889-.236,3.011.531,3.188,2.007.177,1.358-.767,2.361-2.539,2.657-1.358.236-2.775.413-4.133.649-.059.118-.118.3-.177.413a68.568,68.568,0,0,0,6.553,3.365c12.162,4.723,23.969,4.192,35.3-2.48a11.885,11.885,0,0,1,1.476-.827,2.126,2.126,0,0,1,2.952.767,2.148,2.148,0,0,1-.472,3.129,24.851,24.851,0,0,1-3.778,2.3c-15.054,7.38-29.755,6.553-44.042-2.007C29.732,131.071,29.555,130.953,29.082,130.658Z" transform="translate(-9.595 -49.674)" fill="#0061ad"/> </g> <g id="Groupe_56" data-name="Groupe 56" transform="translate(44.224 44.263)"> <path id="Tracé_67" data-name="Tracé 67" d="M74.9,75Z" transform="translate(-74.9 -75)" fill="#0061ad"/> </g> <g id="Groupe_57" data-name="Groupe 57" transform="translate(44.165 44.263)"> <path id="Tracé_68" data-name="Tracé 68" d="M74.859,75h0Z" transform="translate(-74.8 -75)" fill="#0061ad"/> </g> <path id="Tracé_69" data-name="Tracé 69" d="M74.029,39.942a4.233,4.233,0,0,1,4.251,4.251V73.416l-.945-.945-2.48,2.48L72.79,77.018l-2.066-2.066-2.48-2.48-2.48,2.48L63.816,76.9l-1.948-1.948-2.48-2.48-2.48,2.48L54.9,76.959l-2.007-2.007-2.48-2.48-2.48,2.48-2.066,2.066L43.8,74.951l-2.48-2.48-1,1V44.193a4.233,4.233,0,0,1,4.251-4.251H74.029m0-3.542H44.393A7.785,7.785,0,0,0,36.6,44.193V81.918l4.546-4.546,4.546,4.546h0l4.546-4.546,4.487,4.487,4.487-4.487L63.7,81.859l4.428-4.487,4.487,4.487h.236l4.487-4.487,4.487,4.487h0V44.193A7.823,7.823,0,0,0,74.029,36.4Z" transform="translate(-14.988 -14.926)" fill="#0061ad"/> </>,

    Partners: <><path id="Tracé_70" data-name="Tracé 70" d="M74.432.1h0L63.352,10.9,61.79,12.458a8.754,8.754,0,0,0-11.506,1.136l-.142.142L50,13.594a8.47,8.47,0,0,0-11.364-.284l-.852-.852h0L27.557,2.231l-.142-.142L.142,29.5H0L10.227,39.731l.142.142,4.119-4.119,11.79,11.79-.142.142a4.9,4.9,0,0,0-.284,6.818,4.719,4.719,0,0,0,3.835,1.278,4.13,4.13,0,0,0,.71,3.125A5.006,5.006,0,0,0,33.239,60.9a3.462,3.462,0,0,0,1.7,0,4.13,4.13,0,0,0,.71,3.125,5.006,5.006,0,0,0,2.841,1.989,3.462,3.462,0,0,0,1.7,0,4.3,4.3,0,0,0,1.278,3.835,4.5,4.5,0,0,0,3.267,1.278,5.69,5.69,0,0,0,3.693-1.562l.284-.284a4.778,4.778,0,0,0,5.966-.852,5.243,5.243,0,0,0,1.563-3.977A4.677,4.677,0,0,0,59.8,63.31a4.881,4.881,0,0,0,1.847-3.551v-.852A4.677,4.677,0,0,0,65.2,57.77a4.881,4.881,0,0,0,1.847-3.551v-.852A4.617,4.617,0,0,0,71.023,51.8a4.8,4.8,0,0,0,.852-5.966l13.21-13.21,3.693,3.693.142.142L99.858,25.526l.142-.142ZM34.8,12.458,10.369,36.89,2.983,29.5,27.415,5.072ZM55.4,40.583l-1.562,1.563L64.063,52.373a2.82,2.82,0,0,1-3.977,3.977L50,46.265l-.142-.142L48.3,47.685,58.523,57.913a2.7,2.7,0,0,1,.71,1.847,2.8,2.8,0,0,1-.852,1.989,2.707,2.707,0,0,1-3.835.142L44.46,51.8l-.142-.142-1.563,1.563L52.983,63.452l.142.142a2.869,2.869,0,0,1-3.835,4.119,4.513,4.513,0,0,0-1.136-4.688,4.719,4.719,0,0,0-3.835-1.278,4.544,4.544,0,0,0-3.409-5.114,3.462,3.462,0,0,0-1.7,0A4.544,4.544,0,0,0,35.8,51.52a3.462,3.462,0,0,0-1.7,0,4.3,4.3,0,0,0-1.278-3.835,5,5,0,0,0-4.688-1.136L15.909,34.333,36.364,13.878l2.273,2.273.71-.71a6.4,6.4,0,0,1,9.233-.284l.142.142L39.2,24.816a4.96,4.96,0,0,0-1.42,3.409,4.5,4.5,0,0,0,1.278,3.267A4.741,4.741,0,0,0,42.33,32.77a5.242,5.242,0,0,0,3.409-1.42L50,27.089,69.886,46.975a2.7,2.7,0,0,1,.71,1.847,2.8,2.8,0,0,1-.852,1.989,2.707,2.707,0,0,1-3.835.142L55.4,40.583ZM43.04,64.731a2.8,2.8,0,0,1,1.989-.852h.142a2.352,2.352,0,0,1,1.7.71,2.7,2.7,0,0,1,.71,1.847,2.8,2.8,0,0,1-.852,1.989h0a2.8,2.8,0,0,1-1.989.852,2.436,2.436,0,0,1-2.557-2.557A2.8,2.8,0,0,1,43.04,64.731ZM29.545,48.4a2.992,2.992,0,0,1,1.847.71,2.7,2.7,0,0,1,.71,1.847,2.8,2.8,0,0,1-.852,1.989,2.566,2.566,0,0,1-4.545-1.7A2.913,2.913,0,0,1,29.545,48.4ZM32.67,54.5a2.8,2.8,0,0,1,1.989-.852,2.992,2.992,0,0,1,1.847.71,2.7,2.7,0,0,1,.71,1.847,2.8,2.8,0,0,1-.852,1.989,2.707,2.707,0,0,1-3.835.142A2.837,2.837,0,0,1,32.67,54.5Zm5.114,5.114a2.8,2.8,0,0,1,1.989-.852h.142a2.352,2.352,0,0,1,1.7.71,2.82,2.82,0,0,1-3.977,3.977A2.846,2.846,0,0,1,37.784,59.617ZM62.216,25.384a6.178,6.178,0,0,0,.852-.994,1.125,1.125,0,0,0-.142-1.563,1.156,1.156,0,0,0-1.562.284c-.142.284-.426.426-.568.71a6.4,6.4,0,0,1-9.233.284l-.142-.142-.142-.142a1.1,1.1,0,0,0-1.136-.284c-.142,0-.284.142-.426.284L44.034,29.5a2.493,2.493,0,0,1-3.551.142,2.621,2.621,0,0,1-.71-1.7,2.5,2.5,0,0,1,.852-1.847L51.989,14.731c2.557-2.557,6.818-2.841,9.233-.284a1.115,1.115,0,0,0,1.563,0l2.131-2.131L83.807,31.208,70.6,44.418,53.693,27.8A8.772,8.772,0,0,0,62.216,25.384Zm34.8.284-7.955,7.955-2.557-2.415L66.335,10.9,74.29,2.941Z" transform="translate(1.207 0.601)" fill="#0061ad" stroke="#0061ad" strokeWidth="1"/></>,

    Environment: <><path id="XMLID_5_" d="M56.468,8.55A34.079,34.079,0,0,0,34,0a40.235,40.235,0,0,0-8.55.994c-.8.2-1.789.6-2.784.8h0a41.686,41.686,0,0,0-8.351,4.374,13.93,13.93,0,0,0-1.988,1.591A34.418,34.418,0,0,0,0,34,33.826,33.826,0,0,0,17.7,63.825a8.059,8.059,0,0,1,1.789.994A32.689,32.689,0,0,0,33.8,68a32.083,32.083,0,0,0,9.743-1.392h.6a9.694,9.694,0,0,0,1.392-.6A34.1,34.1,0,0,0,59.45,56.269c.4-.4.8-.994,1.193-1.392a.73.73,0,0,0,.2-.6,33.966,33.966,0,0,0-2.784-43.942A12.865,12.865,0,0,0,56.468,8.55ZM34,2.585a31.766,31.766,0,0,1,20.678,7.754H53.485a18.467,18.467,0,0,0-2.585-.8c-3.579-.994-6.76-1.988-10.737-.8a9.988,9.988,0,0,0-2.585.994h0a15.584,15.584,0,0,1-2.784.994H34a5.771,5.771,0,0,1-3.181-1.193,9.432,9.432,0,0,1-2.784-3.38,8.919,8.919,0,0,0-1.988-2.585A26.463,26.463,0,0,1,34,2.585ZM19.088,61.637h0a31.244,31.244,0,0,1-5.17-51.895c.4-.4.994-.8,1.392-1.193,1.789,0,2.386.2,2.784,2.784a6.665,6.665,0,0,1,0,1.988,7.58,7.58,0,0,0,.2,2.982,4.044,4.044,0,0,0,1.193,1.789,4.7,4.7,0,0,1,1.193,1.789c.2,2.585-2.585,3.181-6.164,3.778-.4,0-.6.2-.994.2a20.634,20.634,0,0,0-2.386.6c-1.591.994-2.784,1.988-3.181,3.38-.8,2.386.8,4.772,2.386,6.561,2.187,2.585,3.38,6.561,2.784,9.146-.2.6-.4,1.392-.6,1.988-.8,2.187-1.591,4.573.994,6.76a12.342,12.342,0,0,0,2.386,1.591l1.193.6a3.469,3.469,0,0,1,1.591,2.585A9.19,9.19,0,0,1,19.088,61.637ZM57.86,54.48a32.279,32.279,0,0,1-12.924,8.947.694.694,0,0,0-.4.2c-2.585-3.579-6.76-7.754-11.532-9.146a5.509,5.509,0,0,1-3.579-2.585,8.418,8.418,0,0,1-.994-1.392,12.273,12.273,0,0,0-4.374-2.982l-1.193-.6a5.379,5.379,0,0,1-3.181-6.164c.8-4.374,5.17-5.766,8.749-5.766h.6a10.074,10.074,0,0,1,2.585.4c2.187.4,4.175.8,6.76-1.591,1.789-1.591,1.988-3.38,2.386-5.17a16.564,16.564,0,0,1,.8-2.982,5.428,5.428,0,0,1,1.789-2.386,2.955,2.955,0,0,1,1.789-.4,4.242,4.242,0,0,0,1.591,0,5.845,5.845,0,0,0,2.386-1.988,4.677,4.677,0,0,1,3.38-2.187c2.187-.2,6.561,1.193,7.754,3.38a2.442,2.442,0,0,1-.4,2.982,17.927,17.927,0,0,1-1.789,1.988h0a5.744,5.744,0,0,0-2.585,4.374c-.4,2.386.6,3.181,1.392,4.175a5.075,5.075,0,0,1,1.392,1.988c.4,1.193,0,2.585-.4,4.175-.4,1.392-.994,2.784-.6,4.175,0,.4.2.8.2,1.392a36.365,36.365,0,0,0,1.789,6.363A3.388,3.388,0,0,0,57.86,54.48ZM60.246,50.9a21.007,21.007,0,0,1-.994-3.778c0-.6-.2-.994-.2-1.591a6.086,6.086,0,0,1,.6-2.982c.6-1.789,1.193-3.579.4-5.766A6.286,6.286,0,0,0,58.058,34a2.032,2.032,0,0,1-.8-1.988,3.866,3.866,0,0,1,1.789-2.784h0l.4-.4.6-.6.6-.6a2.745,2.745,0,0,0,.6-.8,5.138,5.138,0,0,0,.4-5.766,8.026,8.026,0,0,0-2.585-2.585A13.038,13.038,0,0,0,51.5,16.3a7.165,7.165,0,0,0-5.368,3.181,3.376,3.376,0,0,1-1.193,1.193h-.4a3.837,3.837,0,0,0-3.579.8,7.563,7.563,0,0,0-2.585,3.579,12.07,12.07,0,0,0-.994,3.579c-.2,1.591-.4,2.585-1.591,3.579C34.2,33.6,33.4,33.6,31.216,33.2a12.034,12.034,0,0,0-2.982-.4C23.462,32.608,17.5,34.4,16.3,40.76c-.6,3.579.6,6.561,3.38,8.351a8.645,8.645,0,0,0,1.392.8l1.193.6A21.689,21.689,0,0,1,24.456,51.7a5.272,5.272,0,0,1,1.193.994,5.272,5.272,0,0,1,.994,1.193,9.068,9.068,0,0,0,2.386,2.386,10.636,10.636,0,0,0,2.585,1.193,15.055,15.055,0,0,1,3.579,1.789,26.48,26.48,0,0,1,5.965,5.567,34.543,34.543,0,0,1-7.754.994,28.569,28.569,0,0,1-12.327-2.585,1.2,1.2,0,0,1,.2-.8h0V58.456a.73.73,0,0,0-.2-.6v-.2c0-.2-.2-.6-.2-.8A6.853,6.853,0,0,0,16.7,52.094,10.532,10.532,0,0,1,14.713,50.9c-1.193-.994-.994-1.591-.2-3.977a10.486,10.486,0,0,0,.6-2.386c.8-3.579-.6-8.152-3.38-11.333-1.392-1.591-2.187-3.181-1.789-4.175v-.2c.2-.2.2-.4.4-.6s.6-.4.8-.6c.2,0,.2-.2.4-.2h0a25.834,25.834,0,0,1,2.982-.6c3.181-.6,8.55-1.591,8.152-6.561a5.555,5.555,0,0,0-1.789-3.38,3.491,3.491,0,0,1-.8-.994,3.371,3.371,0,0,1,0-1.988,11.2,11.2,0,0,0,0-2.585,1.2,1.2,0,0,0-.2-.8v-.2c0-.2,0-.4-.2-.4v-.2c0-.2,0-.2-.2-.4v-.2c0-.2-.2-.2-.2-.4v-.2c.6-.6.4-.8.4-.8h0c0-.2-.2-.2-.2-.4l-.2-.2-.2-.2-.2-.2-.2-.2h0a32.347,32.347,0,0,1,4.573-2.187h.2c1.193.4,1.789,1.591,2.784,2.982a13.052,13.052,0,0,0,3.38,4.175A7.642,7.642,0,0,0,34.4,13.123a8.848,8.848,0,0,0,4.573-1.392l-.6-1.193.2,1.392c.8-.4,1.392-.6,2.386-.994,3.181-.994,5.766-.2,9.146.8.8.2,1.591.6,2.585.8a.73.73,0,0,1,.6.2h3.778A31.252,31.252,0,0,1,65.415,34.2,30.06,30.06,0,0,1,60.246,50.9Z" fill="#0061ad"/>
        <path id="XMLID_2_" d="M32.365,19.276a5.911,5.911,0,0,0-6.052,1.958,6.025,6.025,0,0,0-6.052-1.958,4.815,4.815,0,0,0-3.56,4.806c0,5.34,8.9,11.571,9.257,11.749l.356.356.356-.356c.356-.178,9.257-6.586,9.257-11.749A4.967,4.967,0,0,0,32.365,19.276ZM26.313,34.407c-2.67-1.958-8.189-6.764-8.189-10.147a3.419,3.419,0,0,1,2.492-3.382c.356,0,.712-.178,1.068-.178A4.475,4.475,0,0,1,25.6,23.014l.712,1.246.712-1.246a4.374,4.374,0,0,1,4.984-2.136A3.234,3.234,0,0,1,34.5,24.26C34.5,27.643,28.8,32.449,26.313,34.407Z" transform="translate(17.976 20.5)" fill="#0061ad" stroke="#0061ad" strokeWidth="1"/></>,

    Society: <><path id="XMLID_38_" d="M95.865,27.657H66.336V1.664A1.64,1.64,0,0,0,64.673,0H33.064a1.833,1.833,0,0,0-1.872,1.664V12.893H1.664A1.789,1.789,0,0,0,0,14.557v51.78A1.64,1.64,0,0,0,1.664,68h94.2a1.64,1.64,0,0,0,1.664-1.664V29.321C97.737,28.281,96.905,27.657,95.865,27.657Zm-18.3,22.875H83.18V65.3H77.566ZM94.2,64.673H85.26V49.492a.982.982,0,0,0-1.04-1.04H76.526a.982.982,0,0,0-1.04,1.04v15.18h-9.15V30.985H94.2ZM3.327,16.428H31.193V64.881h-9.15V49.7A.982.982,0,0,0,21,48.661H13.517a.982.982,0,0,0-1.04,1.04v15.18H3.327Zm11.229,34.1h5.615V65.3H14.557ZM63.009,29.321V64.673H53.235V49.492a.982.982,0,0,0-1.04-1.04H44.5a.982.982,0,0,0-1.04,1.04v15.18H34.52V3.327H62.8l.208,25.994ZM45.541,65.3V50.532h5.615V65.3Z" fill="#0061ad"/> <path id="XMLID_35_" d="M27.137,4.7h-7.7A.983.983,0,0,0,18.4,5.74v7.7a.983.983,0,0,0,1.04,1.04h7.7a.983.983,0,0,0,1.04-1.04V5.74A.983.983,0,0,0,27.137,4.7ZM26.1,12.4H20.48V6.78H26.1Z" transform="translate(19.862 5.077)" fill="#0061ad"/> <path id="XMLID_32_" d="M32.637,4.7h-7.7A.983.983,0,0,0,23.9,5.74v7.7a.983.983,0,0,0,1.04,1.04h7.7a.983.983,0,0,0,1.04-1.04V5.74A.983.983,0,0,0,32.637,4.7ZM31.6,12.4H26.188V6.78H31.8V12.4Z" transform="translate(25.799 5.077)" fill="#0061ad"/> <path id="XMLID_29_" d="M27.137,10.7h-7.7a.983.983,0,0,0-1.04,1.04v7.7a.983.983,0,0,0,1.04,1.04h7.7a.983.983,0,0,0,1.04-1.04v-7.7A.983.983,0,0,0,27.137,10.7ZM26.1,18.4H20.48V12.78H26.1Z" transform="translate(19.862 11.55)" fill="#0061ad"/> <path id="XMLID_26_" d="M32.637,10.7h-7.7a.983.983,0,0,0-1.04,1.04v7.7a.983.983,0,0,0,1.04,1.04h7.7a.983.983,0,0,0,1.04-1.04v-7.7A.983.983,0,0,0,32.637,10.7ZM31.6,18.4H26.188V12.78H31.8V18.4Z" transform="translate(25.799 11.55)" fill="#0061ad"/> <path id="XMLID_23_" d="M27.137,16.7h-7.7a.983.983,0,0,0-1.04,1.04v7.7a.983.983,0,0,0,1.04,1.04h7.7a.983.983,0,0,0,1.04-1.04v-7.7A.983.983,0,0,0,27.137,16.7ZM26.1,24.189H20.48V18.572H26.1Z" transform="translate(19.862 18.026)" fill="#0061ad"/> <path id="XMLID_20_" d="M32.637,16.7h-7.7a.983.983,0,0,0-1.04,1.04v7.7a.983.983,0,0,0,1.04,1.04h7.7a.983.983,0,0,0,1.04-1.04v-7.7A.983.983,0,0,0,32.637,16.7ZM31.6,24.189H26.188V18.572H31.8v5.616Z" transform="translate(25.799 18.026)" fill="#0061ad"/> <path id="XMLID_17_" d="M4.24,20.377h7.7a.983.983,0,0,0,1.04-1.04v-7.7a.983.983,0,0,0-1.04-1.04H4.24A.983.983,0,0,0,3.2,11.64v7.7A1.114,1.114,0,0,0,4.24,20.377Zm1.04-7.489H10.9V18.5H5.28Z" transform="translate(3.456 11.442)" fill="#0061ad"/> <path id="XMLID_14_" d="M9.84,20.377h7.7a.983.983,0,0,0,1.04-1.04v-7.7a.983.983,0,0,0-1.04-1.04H9.84A.983.983,0,0,0,8.8,11.64v7.7A.983.983,0,0,0,9.84,20.377Zm1.04-7.489H16.5V18.5H10.88Z" transform="translate(9.499 11.442)" fill="#0061ad"/> <path id="XMLID_11_" d="M11.937,26.377a.983.983,0,0,0,1.04-1.04v-7.7a.983.983,0,0,0-1.04-1.04H4.24A.983.983,0,0,0,3.2,17.64v7.7a.983.983,0,0,0,1.04,1.04ZM5.28,18.888H10.9V24.5H5.28Z" transform="translate(3.456 17.918)" fill="#0061ad"/> <path id="XMLID_8_" d="M9.84,26.377h7.7a.983.983,0,0,0,1.04-1.04v-7.7a.983.983,0,0,0-1.04-1.04H9.84A.983.983,0,0,0,8.8,17.64v7.7A.983.983,0,0,0,9.84,26.377Zm1.04-7.489H16.5V24.5H10.88Z" transform="translate(9.499 17.918)" fill="#0061ad"/> <path id="XMLID_5_" d="M34.54,26.377h7.7a.983.983,0,0,0,1.04-1.04v-7.7a.983.983,0,0,0-1.04-1.04h-7.7a.983.983,0,0,0-1.04,1.04v7.7A1.114,1.114,0,0,0,34.54,26.377Zm1.04-7.489H41.2V24.5H35.58Z" transform="translate(36.161 17.918)" fill="#0061ad"/> <path id="XMLID_2_" d="M40.14,26.377h7.7a.983.983,0,0,0,1.04-1.04v-7.7a.983.983,0,0,0-1.04-1.04h-7.7a.983.983,0,0,0-1.04,1.04v7.7A.983.983,0,0,0,40.14,26.377Zm1.04-7.489H46.8V24.5H41.18Z" transform="translate(42.204 17.918)" fill="#0061ad"/></>,

    Social: <> <path id="XMLID_7_" d="M29.273,43.7c0,.525.262.787.525,1.311a2,2,0,0,0,1.311.525H69.66A1.754,1.754,0,0,0,71.5,43.965a41.37,41.37,0,0,0-.525-6.032H99.033a1.754,1.754,0,0,0,1.836-1.574c0-.525.262-14.686-8.392-22.816a1.957,1.957,0,0,0-2.36,0s-10.49,7.868-19.931,0a1.967,1.967,0,0,0-2.36,0,23.283,23.283,0,0,0-5.507,7.605,1.615,1.615,0,0,0-1.836.262c-.525.262-10.49,7.868-19.931,0a1.734,1.734,0,0,0-1.574-.262,23.643,23.643,0,0,0-5.245-7.343,1.957,1.957,0,0,0-2.36,0s-10.49,7.868-19.931,0a1.967,1.967,0,0,0-2.36,0C8.817,14.068.162,21.673-.1,36.622c0,.525.262.787.525,1.311a2,2,0,0,0,1.311.525H29.8A22.958,22.958,0,0,0,29.273,43.7ZM69.136,16.69c9.179,6.294,18.358,1.836,21.767,0C96.148,22.2,97.2,30.59,97.2,34.262H70.185A25.056,25.056,0,0,0,64.94,23.247,28.3,28.3,0,0,1,69.136,16.69ZM39.763,24.558c9.179,6.294,18.358,1.836,21.767,0,5.245,5.507,6.294,13.9,6.294,17.571H32.944C33.469,32.426,37.665,26.656,39.763,24.558ZM3.834,34a30.229,30.229,0,0,1,6.819-17.571c9.179,6.294,18.358,1.836,21.767,0a16.882,16.882,0,0,1,3.934,6.556A30,30,0,0,0,30.584,34Z" transform="translate(0.1 21.337)" fill="#0061ad"/> <path id="XMLID_2_" d="M1.7,16.522A16.453,16.453,0,0,0,18.222,33.044h0a16.471,16.471,0,0,0,11.539-4.721l1.311-1.311a16.6,16.6,0,0,0,16.26,13.9h0a16.471,16.471,0,0,0,11.539-4.721,17.08,17.08,0,0,0,4.721-9.441,16.516,16.516,0,0,0,13.113,6.556h0a16.471,16.471,0,0,0,11.539-4.721,17.084,17.084,0,0,0,4.983-12.064,16.505,16.505,0,0,0-28.061-11.8,17.08,17.08,0,0,0-4.721,9.441,16.424,16.424,0,0,0-24.652-1.836l-1.311,1.311A16.617,16.617,0,0,0,18.222,0,16.956,16.956,0,0,0,6.683,4.721,16.684,16.684,0,0,0,1.7,16.522ZM67.526,7.343a13.356,13.356,0,0,1,9.179-3.934A13.151,13.151,0,0,1,89.818,16.522,12.3,12.3,0,0,1,85.884,25.7a13.356,13.356,0,0,1-9.179,3.934h0A13.151,13.151,0,0,1,63.593,16.522,14.634,14.634,0,0,1,67.526,7.343ZM38.154,14.949a13.356,13.356,0,0,1,9.179-3.934A13.151,13.151,0,0,1,60.445,24.128a12.3,12.3,0,0,1-3.934,9.179,13.356,13.356,0,0,1-9.179,3.934h0A13.151,13.151,0,0,1,34.22,24.128,15.27,15.27,0,0,1,38.154,14.949ZM18.222,3.409A13.151,13.151,0,0,1,31.335,16.522,12.3,12.3,0,0,1,27.4,25.7a13.356,13.356,0,0,1-9.179,3.934h0A13.151,13.151,0,0,1,5.109,16.522,12.3,12.3,0,0,1,9.043,7.343,12.3,12.3,0,0,1,18.222,3.409Z" transform="translate(3.021)" fill="#0061ad"/> </>
  }
  return <Svg size={size} viewBox={viewBox} children={icons[icon]} />
}
