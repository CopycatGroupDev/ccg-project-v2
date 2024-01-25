import { timelines } from '../arrays'
import { Timeline, Container } from '../comps'
import { For } from '../functions'
import React from 'react'

const Shop = ({ color }) => {
  return (<>
        <Timeline color={color} list={timelines.Shop} />

        <Container modifier='grid grid-cols-1 gap-4 text-center'>
            <span className='text-4xl snap-center'>{'Vous avez d\'autres besoins ?'}</span>
            <div className='flex max-md:flex-col justify-center gap-4 max-md:text-xl text-2xl [&>*]:w-full w-full max-w-[1024px] px-4' name='ee' style={{ wordBreak: 'break-word' }}>
                <For obj={[
                  { img: '/img/page shop/Fournitures.png', text: 'Commandez vos fournitures bureautiques' },
                  { img: '/img/page shop/IT-Multimédia.png', text: 'Commandez vos appareils multimédia' },
                  { img: '/img/page shop/Informatique.png', text: 'Commandez vos appareils et solutions informatiques' }
                ]} render={(value, key) => <div key={key} className='aspect-[4/3] bg-[#f39115] max-h-[400px] w-min grid grid-rows-[min-content] items-center text-center snap-always snap-center'>
                        <img className='aspect-[2/1] bg-gray-900 w-full' src={value.img} />
                        <div className='text-white p-4'>{value.text}</div>
                    </div>
                } />
            </div>
        </Container>
    </>)
}

export default Shop
