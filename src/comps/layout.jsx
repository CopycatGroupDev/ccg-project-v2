/* eslint-disable react/prop-types */
import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { archi } from '../archi'
import { Nav, NavMobile } from './nav'
import { For } from '../functions'
import { boutiques, renseignements } from '../arrays'
import { Icons } from './icons'
export const zoom = 0.9

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
              <img src={'/src/assets/banner-bg-ccg.png'} className='w-full h-full object-cover'/>
              <div className="absolute w-full h-full flex flex-col [&>*]:h-full gap-4 p-8 lg:p-4 text-xl xl:text-2xl" style={{ zoom }}>
                  <Nav {...nvOp} textColor={header.navTextColor} />
                  <div className="flex justify-center gap-16 max-sm:grid max-sm:grid-cols-1 justify-items-center">
                      <For obj={boutiques} render={({path, name}, key) => {
                        const page = archi.find(ar => ar.path === path)
                        const [address, number, email] = renseignements[name].map(r => r.text)

                        return <Link key={key} to={path} className="bg-white h-fit shadow p-6 gap-2 rounded-xl w-[350px]">
                            <div className="grid grid-cols-1 justify-items-center text-xl">
                                <img src={'icone boutique.png'} className="" />
                                <div className="" style={{ color: '#0061ad' }}>{page.title}</div>
                            </div>
                              <hr className='my-3 mx-8' />
                              <ul className='text-base' style={{ color: '#999' }}>
                                <li><b style={{ color: '#0061ad' }}>Adresse:</b> {address}</li>
                                <li><b style={{ color: '#0061ad' }}>Numéro:</b> {number}</li>
                                <li><b style={{ color: '#0061ad' }}>Email:</b> {email}</li>
                              </ul>
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
