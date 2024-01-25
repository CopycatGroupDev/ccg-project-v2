/* eslint-disable react/prop-types */
import React, { useState, useEffect } from 'react'
import { Container, Title } from '../comps'
import { For } from '../functions'
import { horaires, renseignements, services, realisations } from '../arrays'
import { archi } from '../archi'

const Boulogne = ({ color }) => {
  const [currentTabRealisation, setCurrentTabRealisation] = useState('imp')

  useEffect(() => {
    // console.log(horaires.filter(jour => jour.col == "1"));
  }, [])

  return (<>
        <Container>
            <div className='flex flex-col gap-6 snap-always snap-center toFade'>
                <Title color={'black'}>La boutique à Boulogne</Title>
                <p>Découvrez Copycat DPS Boulogne, votre choix idéal pour les fournitures de bureau et les services d'impression.De l'impression à la réparation d'ordinateurs, notre équipe dévouée vous offre des produits de qualité et des services personnalisés pour répondre à vos besoins professionnels. Faites-nous confiance pour une expérience d'achat agréable et des solutions documentaires adaptées</p>
            </div>
        </Container>

        <Container modifier='grid grid-cols-1 lg:grid-cols-2 gap-16 text-center max-w-[1340px] px-12'>
            <img src="image boutique.png" />
            <div className="grid grid-cols-1 grid-rows-min gap-4 snap-center">
                <Title color={'black'}>Horaires d'ouverture</Title>
                <div className="gap-4 grid p-4 grid-cols-2 grid-flow-row auto-rows-min">
                    <For obj={horaires.Boulogne} render={(value, key) => {
                      const row = horaires.Boulogne.filter(jour => jour.col === value.col).indexOf(value) + 1
                      const closed = !(value.debut && value.fin)

                      return <div key={key} className={'rounded-l-xl bg-gray-300 flex'} style={{
                        gridColumn: value.col + '/' + value.col,
                        gridRow: row + '/' + row,
                        background: value.color + '4f'
                      }}>
                            <div className={'w-4 rounded-2xl'} style={{ background: value.color + 'ff' }}></div>
                            <div className="w-full grow flex max-lg:flex-col justify-around text-xl py-2 items-center uppercase">
                                <div>{value.jour}</div>
                                <div className="text-xs flex gap-2 lg:gap-0 lg:flex-col">{
                                    closed ? 'Fermé' : <For obj={value.debut} render={(debut, key) => <div key={key}>{`${debut} - ${value.fin[key]}`}</div>} />
                                }</div>
                            </div>
                        </div>
                    }} />
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3">
                    <For obj={renseignements.Boulogne} render={(value, key) => <div key={key} className="flex gap-2">
                        <value.Icon size={43} />
                        <div className="w-full text-gray-400 text-left">{value.text}</div>
                    </div>} />
                </div>
            </div>
        </Container>

        <Container>
            <Title color={'black'}>Nos services au sein de la boutique</Title>
            <div className="grid grid-cols-1 lg:grid-cols-4 gap-12">
                <For obj={services.Boulogne} render={({ mainImg, imgs, path, text, title }, key) => {
                  function capitalizeFirstLetter (string) {
                    return string.charAt(0).toUpperCase() + string.slice(1)
                  }

                  return (<div key={key} className="text-center text-2xl grid grid-cols-1 gap-4 justify-items-center">
                        <div className="grid grid-cols-1 h-fit gap-4">
                            <img src={capitalizeFirstLetter(mainImg) + '.svg'} className="rounded-full aspect-square w-fit h-[210px]" />
                            <b style={{ color: archi.find(arc => arc.path === path).element.props.header.color }}>{title}</b>
                        </div>
                        <div>
                            <For obj={imgs} render={(img, key) => <img key={key} src={img + '.png'} className="inline-block h-20" style={{ mixBlendMode: 'color' }} /> } />
                        </div>
                        <div className="text-[#0061ad]">{text}</div>
                    </div>)
                }} />
            </div>
        </Container>

        <Container>
            <Title color={'black'}>Nos réalisations</Title>
            <div className="flex flex-wrap gap-4 justify-center">
                <For obj={realisations.Boulogne} render={(value, key) => <button key={key} className={'text-xl py-4 px-8 bg-gray-200 rounded-full hover:bg-gray-300'} style={value.name === currentTabRealisation ? { background: color, color: 'white' } : {}} onClick={() => setCurrentTabRealisation(value.name)}>{value.text}</button> } />
            </div>
            <div className="flex flex-wrap gap-2 justify-center">
                <For obj={realisations.Boulogne.find(realisation => realisation.name === currentTabRealisation)?.imgs} render={(value, key) => <img key={key} src={realisations.Boulogne.find(realisation => realisation.name === currentTabRealisation)?.root + value + '.png'} className="h-64" /> } />
            </div>
        </Container>

        <div className="grid grid-cols-1 lg:grid-cols-2 text-white snap-always snap-center" style={{ background: color }}>
            <div className="p-12">
                <p className="text-4xl pb-4">Pour en découvrir plus : Rejoignez-nous sur Instagram !</p>
                <button className="border border-white rounded-xl p-2 text-2xl">@copycatsevres</button>
            </div>
            <img src="Bannière insta.png" className={'h-full'} />
        </div>

        <Container>
            <div className='flex flex-col gap-6 snap-always snap-center toFade w-full'>
                <Title color={'black'} style={{ textWrap: 'balance' }}>Contactez nous</Title>
                <div className="flex w-full justify-center text-center md:text-left text-base md:text-xl text-gray-400">
                    <div className='max-w-[1340px] flex flex-col lg:flex-row w-full [&>div]:w-full gap-8 items-center'>
                        <div className='flex flex-col gap-6 snap-always snap-center toFade'>
                            <div className="grid grid-cols-2 [&_label]:grid [&_label>input]:w-full [&_label>input]:border-gray-300 gap-4" style={{ textWrap: 'nowrap' }}>
                                <Title color={'blue-800'} modifier={'col-span-2'} style={{ textWrap: 'balance' }}>Faites vous rappeler !</Title>
                                <form className="contents">
                                    {[
                                      { className: null, input: <input type="text" placeholder='Nom' /> },
                                      { className: null, input: <input type="text" placeholder='Prénom' /> },
                                      { className: null, input: <input type="text" placeholder='Numéro de téléphone' /> },
                                      { className: null, input: <input type="text" placeholder='Entreprise' /> },
                                      { className: 'col-span-2', input: <input type="text" placeholder='Votre email' /> },
                                      { className: 'col-span-2', input: <input type="text" placeholder='Sujet' /> }
                                    ].map((field, id) => <label className={field.className} key={id}> {field.input.props.placeholder} {field.label} {field.input} </label>)}
                                    <button className='p-4 bg-[#0061ad] rounded-full text-white mt-2 col-span-2'>Envoyer</button>
                                </form>
                            </div>
                        </div>
                        <div className='flex flex-col gap-6 snap-always snap-center toFade'>
                            <iframe className='w-full' height="500" id="gmap_canvas" src="https://maps.google.com/maps?q=DIGITAL%20PRINT%20SERVICES%20boulogne&amp;t=&amp;z=17&amp;ie=UTF8&amp;iwloc=&amp;output=embed" frameBorder="0" scrolling="no" marginHeight="0" marginWidth="0"></iframe>
                        </div>
                    </div>
                </div>
            </div>
        </Container>
    </>)
}

export default Boulogne
