import { Link } from 'react-router-dom'
import { Container, Timeline } from '../comps'
import { timelines } from '../arrays'
import React from 'react'

const Print = ({ color }) => {
  return (<>
        <Timeline color={color} list={timelines.Print} />
        <iframe src="https://e.issuu.com/embed.html?d=catalogue_produits_en_marque_blanche&u=e3m4" className='w-full aspect-[4/3] max-w-[1024px] max-md:h-screen snap-center'></iframe>
        <Container modifier='grid grid-cols-1 text-4xl gap-4 text-center'>
            <span>Une partie de nos impressions en ligne sur :</span>
            <Link to={'http://www.copycatprint.fr/accueil/'} style={{ color }}>www.copycatprint.fr</Link>
        </Container>
    </>)
}

export default Print
