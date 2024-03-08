import { Link } from 'react-router-dom'
import { RSEActions } from '../arrays'
import { Container, Title, Icons } from '../comps'
import { For } from '../functions'
import React from 'react'

const Rse = () => {
  return (<>
        <Container>
            <Title>{'Notre Engagement RSE :'}<br />{'Construire un Avenir Responsable'}</Title>
            <hr className="w-full border border-[#0061ad]" />
            <p>{'La RSE, où Responsabilité Sociale des entreprises, consiste pour les entreprises à prendre en compte les aspects sociaux, environnementaux et économiques dans leurs actions, au-delà de la recherche de profits. Cela implique d\'agir de manière responsable envers la société et l\'environnement, en favorisant des conditions de travail équitables, le respect des droits de l\'homme et des pratiques durables.'}</p>
            <hr className="w-full border border-[#0061ad]" />
        </Container>

        <Container>
            <div className="w-full h-fit grid grid-cols-3 p-8 gap-16">
                <For obj={[
                  { title: 'Environnemental', text: 'Nous mettons l\'accent sur la protection de l\'environnement en adoptant des pratiques durables et respectueuses.', icon: 'Environment', viewBox: '0 0 67.602 68' },
                  { title: 'Social', text: 'Nous nous engageons à avoir un impact positif sur la société en maintenant des relations éthiques et en soutenant des initiatives sociales.', icon: 'Social', viewBox: '0 0 100.97 66.875' },
                  { title: 'Sociétal', text: 'Nous valorisons l\'épanouissement de notre équipe en favorisant un environnement de travail inclusif et équitable.', icon: 'Society', viewBox: '0 0 97.561 68' }
                ]} render={({ title, text, icon, viewBox = '0 0 63.229 88.556' }, i) => <div key={i} className="items-center flex-col flex gap-8">
                    <Icons icon={icon} size={90} viewBox={viewBox} />
                    <Title modifier={'text-xl uppercase'} color="#0061ad">{title}</Title>
                    <p className="text-center">{text}</p>
                </div>} />
            </div>
        </Container>

        <Container>
            <div className="w-full h-fit bg-[#0061ad] flex max-lg:flex-col">
                <div className="text-white gap-8 justify-center flex flex-col p-16" style={{ minWidth: (100 * 752 / 1683) + '%' }}>
                    <Title color="white"> 1% Pour Les Animaux </Title>
                    <p>CopyCat Group s’engage dans le cadre d’un partenariat avec 1% pour les animaux. </p>
                    <p>Nous reversons 1% de notre chiffre d’affaires afin de protéger les animaux et la biodiversité.</p>
                </div>
                <div style={{ aspectRatio: '931 / 581.88', height: '100%' }}>
                    <img src={'/img/page rse/panda-roux-1pourcent-pour-les-animaux.jpg'} alt="" />
                </div>
            </div>
        </Container>

        <Container>
            <Title>{'Nos actions'}</Title>
            <div className="flex flex-col lg:grid lg:grid-cols-3 gap-4 w-full [&>:nth-last-child(-n+1)]:col-span-3">
                <For obj={RSEActions} render={({ title, text, icon, viewBox = '0 0 63.229 88.556' }, i) => <div key={i} className="bg-blue-200 text-left text-wrap">
                    <div className="bg-white p-4 rounded-bl-2xl ml-5 mb-2 mt-0 mr-0" style={{ float: 'right' }}>
                        <Icons icon={icon} size={90} viewBox={viewBox} />
                    </div>
                    <Title modifier={'text-xl uppercase !text-left p-8 pb-1 break-all'} color="#0061ad">{title}</Title>
                    <p className="p-8 pt-1">{text}</p>
                </div>} />
            </div>
        </Container>

        <Link to="/contact?subject=rse" className="bg-[#0061ad] py-4 px-6 rounded-full text-white">Demander la charte RSE Copycat Group</Link>
    </>)
}

export default Rse
