import { contactForm, imagesCarouselHome } from '../arrays'
import { Container, Title, CCGCarousel as Carousel } from '../comps'
import React from 'react'

const Home = () => {
  return (<>
        <Container>
            <div className='flex flex-col gap-6 snap-always snap-center toFade'>
                <Title color={'black'}>Nos services</Title>
                <p>Avec des valeurs hautes en couleurs, COPYCAT GROUP est une entreprise française née de l’ambition de remettre le service et la simplicité au coeur des solutions documentaires, digitales et bureautiques.</p>
                <p>La simplicité par un contact unique pour traiter et vous accompagner sur tous vos besoins d’IMPRESSIONS, de GRAPHISMES, de FOURNITURES, de BUREAUTIQUES et de SOLUTIONS DIGITALES.</p>
                <p>Le service, car nous croyons au fond qu’il n’y a pas de solutions pertinentes sans accompagnement, conseils et approche humaine tout au long de la vie de votre projet.</p>
                <p>C’est ce que nous appelons « Document as a Service »</p>
            </div>
            <div className='grid max-lg:grid-rows-4 lg:grid-cols-4 h-fit w-full gap-6'>
                <div className='flex flex-col gap-4 items-center snap-always snap-center toFade'>
                    <div className="flex flex-col gap-2">
                        <img src="/Solutions.svg" className="h-[200px] aspect-square w-fit" />
                        <span>COPYCAT SOLUTIONS</span>
                    </div>
                    <p className='text-gray-400'>
                        Vous souhaitez acheter ou louer des solutions bureautiques ?
                    </p>
                    <button className='text-white bg-[#0061ad] px-4 py-2 md:px-7 md:py-3.5 rounded-full'>Demander une expertise</button>
                </div>
                <div className='flex flex-col gap-4 items-center snap-always snap-center toFade'>
                    <div className="flex flex-col gap-2">
                        <img src="/Shop.svg" className="h-[200px] aspect-square w-fit" />
                        <span>COPYCAT SOLUTIONS</span>
                    </div>
                    <p className='text-gray-400'>
                        Vous souhaitez acheter ou louer des solutions bureautiques ?
                    </p>
                    <button className='text-white bg-[#0061ad] px-4 py-2 md:px-7 md:py-3.5 rounded-full'>Demander une expertise</button>
                </div>
                <div className='flex flex-col gap-4 items-center snap-always snap-center toFade'>
                    <div className="flex flex-col gap-2">
                        <img src="/Print.svg" className="h-[200px] aspect-square w-fit" />
                        <span>COPYCAT SOLUTIONS</span>
                    </div>
                    <p className='text-gray-400'>
                        Vous souhaitez acheter ou louer des solutions bureautiques ?
                    </p>
                    <button className='text-white bg-[#0061ad] px-4 py-2 md:px-7 md:py-3.5 rounded-full'>Demander une expertise</button>
                </div>
                <div className='flex flex-col gap-4 items-center snap-always snap-center toFade'>
                    <div className="flex flex-col gap-2">
                        <img src="/Labs.svg" className="h-[200px] aspect-square w-fit" />
                        <span>COPYCAT SOLUTIONS</span>
                    </div>
                    <p className='text-gray-400'>
                        Vous souhaitez acheter ou louer des solutions bureautiques ?
                    </p>
                    <button className='text-white bg-[#0061ad] px-4 py-2 md:px-7 md:py-3.5 rounded-full'>Demander une expertise</button>
                </div>
            </div>
        </Container>
        <Container modifier="bg-[#efefef] flex items-center max-sm:h-screen w-full justify-center snap-always snap-center toFade">
            <div className='max-w-[1340px] flex flex-col lg:flex-row w-full [&>div]:w-full px-5 py-10 gap-8'>
                <div className='flex justify-center'>
                    <img src="/pdg.svg" className="w-[65%]" />
                </div>
                <div className='flex flex-col justify-center items-center gap-4 text-xl text-gray-400 text-center'>
                    <Title color={'black'}>Erwan HECAEN</Title>
                    <p>Fondateur et Expert Solutions Documentaires</p>
                    <hr className='border-[#0061ad] !border-gray-400 w-full' />
                    <p>+33 (0) 6 15 94 55 46</p>
                    <p>e.hecaen@copycatgroup.fr</p>
                </div>
            </div>
        </Container>
        <Container modifier="flex w-full justify-center text-center md:text-left text-base md:text-xl text-gray-400">
            <div className='max-w-[1340px] flex flex-col lg:flex-row w-full [&>div]:w-full px-12 gap-8 items-center'>
                <div className='flex flex-col gap-6 toFade snap-always snap-center toFade'>
                    <Title color={'#1e40af'}>Ils nous font confiance !</Title>
                    <p>Faites comme nos clients, faites-nous confiance pour notre accompagnement et la réalisation de vos projets documentaires ! Adressez-vous à notre guichet unique pour traiter vos besoins d’IMPRESSIONS, de GRAPHISMES, de FOURNITURES, de BUREAUTIQUES et de SOLUTIONS DIGITALES.</p>
                </div>
                <div className='flex border shadow rounded-xl p-4 aspect-square lg:aspect-video snap-always snap-center toFade bg-white'>
                    <Carousel images={imagesCarouselHome} className="[&_button]:bg-[#0061ad] [&_button]:rounded-full px-16 py-12" />
                </div>
            </div>
        </Container>
        <Container modifier="flex w-full justify-center text-center md:text-left text-base md:text-xl text-gray-400">
            <div className='max-w-[1340px] flex flex-col lg:flex-row w-full [&>div]:w-full px-12 gap-8 items-center'>
                <div className='flex flex-col gap-6 snap-always snap-center toFade'>
                    <div className="grid grid-cols-2 [&_label]:grid [&_label>input]:w-full [&_label>input]:border-gray-300 gap-4" style={{ textWrap: 'nowrap' }}>
                        <Title color={'#1e40af'} modifier={'col-span-2'}>Faites vous rappeler !</Title>
                        <form className="contents">
                            {contactForm.Home.map((field, id) => <label className={field.className} key={id}> {field.input.props.placeholder} {field.label} {field.input} </label>)}
                            <button className='p-4 bg-[#0061ad] rounded-full text-white mt-2'>Envoyer</button>
                        </form>
                    </div>
                </div>
                <div className='flex flex-col gap-6 snap-always snap-center toFade'>
                    <iframe className='w-full' height="500" id="gmap_canvas" src="https://maps.google.com/maps?q=copycat%20sevre&amp;t=&amp;z=13&amp;ie=UTF8&amp;iwloc=&amp;output=embed" frameBorder="0" scrolling="no" marginHeight="0" marginWidth="0"></iframe>
                </div>
            </div>
        </Container>
    </>)
}

export default Home
