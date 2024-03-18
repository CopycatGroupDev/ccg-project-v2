import { Link } from 'react-router-dom'
import { timelines } from '../arrays'
import { Timeline, Container } from '../comps'
import { For } from '../functions'
import React from 'react'

const Shop = ({ color, modal }) => {
  return (<>
        <Timeline color={color} list={timelines.Shop} modal={modal} />

        <Container modifier='grid grid-cols-1 gap-4 text-center'>
            {/* <span className='text-4xl snap-center'>{'Vous avez d\'autres besoins ?'}</span> */}
            <span className='text-4xl snap-center'>{'Visitez nos sites partenaires'}</span>
            <div className='flex max-md:flex-col justify-center gap-4 max-md:text-xl text-2xl [&>*]:w-full w-full max-w-[1024px] px-4' id='shop' style={{ wordBreak: 'break-word' }}>
                <For obj={[
                  { img: '/img/page shop/Fournitures.png', text: 'Commandez vos fournitures de bureau', link: 'https://www.copycat.vous-livre.com/' },
                  { img: '/img/page shop/IT-Multimédia.png', text: 'Commandez vos appareils multimédia', link: 'https://copycat-group.mydigitalcorner.fr/' },
                  { img: '/img/page shop/Informatique.png', text: 'Commandez vos fournitures informatiques', link: 'https://copycat-shop.fr/' }
                ]} render={({img, text, link}, key) => <Link key={key} to={link} className='aspect-[4/3] bg-[#f39115] max-h-[400px] w-min grid grid-rows-[min-content] items-center text-center snap-always snap-center'>
                        <img className='aspect-[2/1] bg-gray-900 w-full' src={img} />
                        <div className='text-white p-4'>{text}</div>
                    </Link>
                } />
            </div>
        </Container>
    </>)
}

export default Shop
