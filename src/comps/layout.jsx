/* eslint-disable react/prop-types */
import { motion } from 'framer-motion'
import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { archi } from '../archi'
import { Nav, NavMobile } from './nav'
import { For, hex2rgb } from '../functions'
import { boutiques, renseignements } from '../arrays'
import { Icons } from './icons'
import bannerCCG from '../assets/banner-bg-ccg.png'
export const zoom = 0.9

export const Container = ({ modifier = 'w-full flex flex-col gap-6 items-center text-base md:text-xl text-gray-400 max-w-[1340px] text-center px-12', style, children }) => <div className={modifier} style={style}>{children}</div>
export const Title = ({ children, color = 'black', modifier }) => <h1 className={`text-4xl text-center text-${color} text-[${color}] ${modifier}`} style={{ color, fontFamily: 'Arial' }}>{children}</h1>

export const Header = ({ cover, logo, textLine, color, textBtn, fullText = false, kurz = false, mid = false, auto = false, title, navTextColor, btnProps = () => null, modal }) => {
  const [navOpened, setNavOpened] = useState(false)
  const nvOp = { navOpened, setNavOpened }

  return <>
        {navOpened && <NavMobile {...nvOp} />}
        <div id='header' className={`w-full h-screen relative flex snap-always snap-center bg-[${color}]`} style={{ [auto && 'height']: 'auto', [kurz && 'height']: '400px', [mid && 'height']: '720px', background: `linear-gradient(180deg, rgb(235 235 235) 50%, ${color} 50%)` }} >
            <img src={cover} className='w-full h-full object-cover' />
            <div className="absolute w-full h-full flex flex-col gap-4 p-8 lg:p-4 text-xl xl:text-2xl" style={{ zoom }}>
                <Nav {...nvOp} textColor={navTextColor} />
                {!kurz && <motion.div className='flex flex-col [&>*]:h-full h-full gap-4 p-8' initial={{ opacity: 0, scale: 0.8 }} whileInView={{ opacity: 100, scale: 1 }} transition={{ duration: 0.5 }} viewport={{ once: true }}>
                    {!fullText
                      ? <>
                        <div className='w-full flex justify-center header_Plate'>
                            <img src={logo} className={'w-[35vh] xl:w-[350px] aspect-square h-fit rounded-full md:mt-16 object-contain'} style={{ opacity: (logo) ? '1' : '0' }}/>
                        </div>
                        <div className='w-full text-white text-center flex flex-col justify-center text-base md:text-2xl lg:text-2xl xl:text-3xl gap-[1.5vh] xl:gap-[18px] items-center header_Plate'>
                            <h2 className='max-w-[1000px]'>{textLine[0]}</h2>
                            <h2 className=''>{textLine[1]}</h2>
                            {textBtn && <Link className={'md:text-2xl bg-white px-4 py-2 md:px-7 md:py-3.5 rounded-full'} style={{ color: `${color}` }} {...btnProps({ modal })} >{textBtn}</Link>}
                        </div>
                    </>
                      : <>
                        <div className='lg:px-24 text-white flex flex-col justify-center gap-4 h-full [div:has(&)>#nav]:h-fit text-lg md:text-xl max-w-[800px] leading-loose'>
                            <h2 className='text-4xl md:text-5xl my-2 md:my-8'>{title}</h2>
                            <For obj={textLine} render={(value, i) => <p key={i}>{value}</p>} />
                        </div>
                    </>}
                </motion.div>}
            </div>
        </div>
        {(textLine[2] && !fullText) &&
        (<div className={'-mt-12 text-white w-full flex justify-center p-16 pt-0 text-base md:text-2xl lg:text-2xl xl:text-3xl text-center snap-end'} style={{ background: `${color}` }}>
            <p style={{ zoom }}>{`${textLine[2]}`}</p>
        </div>)}
    </>
}

export const Menu = ({ header, title }) => {
  const [navOpened, setNavOpened] = useState(false)
  const nvOp = { navOpened, setNavOpened }

  document.querySelector('title').innerHTML = title

  return <>
        {navOpened && <NavMobile {...nvOp} />}
        <div id='header' className={'w-full h-screen relative flex snap-always snap-center'}>
            <img src={header.cover} className='w-full h-full object-cover'/>
            <div className="absolute w-full h-full flex flex-col [&>*]:h-full gap-4 p-8 lg:p-4 text-xl xl:text-2xl" style={{ zoom }}>
                <Nav {...nvOp} textColor={header.navTextColor} />
                <div className='flex flex-col gap-8'>
                    <div className="flex justify-center gap-x-16 gap-y-8 max-sm:grid max-sm:grid-cols-1 justify-items-center">
                        <For obj={boutiques} render={({ path, name, filter, image }, key) => {
                          const page = archi.find(ar => ar.path === path)
                          const [address, number, email] = renseignements[name].map(r => r.text)

                          const { r, g, b } = hex2rgb(archi.find(ar => ar.path === path).element.props.header.color)
                          const color = `rgba(${r}, ${g}, ${b}, .8)`

                          return <Link key={key} to={path} style={{ display: 'contents' }} >
                                <motion.div to={path} className="h-fit shadow px-6 py-9 gap-2 rounded-xl w-[350px]" initial={{ opacity: 0, scale: 0.5, background: '#fff', color: '#999' }} transition={{ duration: 0.25 }} whileInView={{ opacity: 100, scale: 1 }} viewport={{ once: true }} whileHover={{ background: '#ffff', color: '#999' }}>
                                    <div className="grid grid-cols-1 justify-items-center text-xl">
                                        <img src={image} style={{ filter }} />
                                        <div className="" style={{ color }}>{page.title}</div>
                                    </div>
                                    <hr className='my-3 mx-8' />
                                    <ul className='text-base'>
                                        <li><b style={{ color }}>Adresse:</b> {address}</li>
                                        <li><b style={{ color }}>Numéro:</b> {number}</li>
                                        <li><b style={{ color }}>Email:</b> {email}</li>
                                    </ul>
                                </motion.div>
                            </Link>
                        } } />
                    </div>
                    <div className="flex justify-center gap-16 max-sm:grid max-sm:grid-cols-1 justify-items-center">
                        <Link to={'/'} style={{ display: 'contents' }} >
                            <motion.div className="shadow px-6 py-9 gap-2 rounded-xl flex items-center w-auto" initial={{ opacity: 0, scale: 0.5, background: '#fff', color: '#999' }} transition={{ duration: 0.25 }} whileInView={{ opacity: 100, scale: 1 }} viewport={{ once: true }} whileHover={{ background: '#ffff', color: '#999' }}>
                                <div className="grid grid-cols-1 justify-items-center text-xl h-fit">
                                    <img src={'icone a  propos.png'} className="" />
                                    <div className="" style={{ color: '#0061ad' }}>{'Copycat Group'}</div>
                                </div>
                                <hr className='h-full mx-3 my-8' style={{ borderLeft: '1px solid rgb(229, 231, 235)' }} />
                                <ul className='text-base'>
                                    <li className='pb-2'><div className="text-xl" style={{ color: '#0061ad' }}>{'Pour d\'autres services...'}</div></li>
                                    <li><b style={{ }}>Adresse:</b> <>{'Rue des combattants en Afrique du Nord,'}<br />{'92310 Sèvres'}</></li>
                                    <li><b style={{ }}>Numéro:</b> {'01 45 07 98 00'}</li>
                                    <li><b style={{ }}>Email:</b> {'hello@copycatgroup.fr'}</li>
                                </ul>
                            </motion.div>
                        </Link>
                    </div>
                </div>
                <div></div>
            </div>
        </div>
    </>
}

export const Footer = ({ refF }) => {
  return (<div id='footer' ref={refF} className="bg-[#0061ad] w-full flex flex-col text-white">
          <div className='gap-8 grid grid-cols-1 lg:grid-cols-4 snap-always snap-start p-8 [&_h2]:text-3xl [&_input]:rounded-lg [&>div]:grid [&>div]:grid-rows-[min-content] [&>div]:gap-4 snap-center max-sm:gap-[2.5vh]'>
              <div>
                  <h2>Contactez nous</h2>
                  <ul>
                      <li><a href="/contact">01 45 07 98 00</a></li>
                      <li><a href="/contact">sevres@copycatgroup.fr</a></li>
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
                  {/* <h2>Nos autres services</h2>
                  <ul>
                      <li><a href="https://copycat-shop.fr" target="_blank" rel="noreferrer">Copycat Shop</a></li>
                      <li><a href="http://www.copycatprint.fr/accueil/" target="_blank" rel="noreferrer">Copycat Print</a></li>
                      <li><a href="https://www.copycat.vous-livre.com/" target="_blank" rel="noreferrer">Copycat vous livre</a></li>
                      {/* <li><a href="https://copycat-group.mydigitalcorner.fr/" target="_blank" rel="noreferrer">Copycat Group mydigitalcorner</a></li>}
                      {/* <li><a href="https://www.exalink.fr/profil/copycat-group" target="_blank" rel="noreferrer">Exalink Copycat Group</a></li>}
                  </ul> */}
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
