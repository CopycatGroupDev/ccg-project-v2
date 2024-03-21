import { motion } from 'framer-motion'
import { contactForm, imagesCarouselHome } from '../arrays'
import { Container, Title, CCGCarousel as Carousel } from '../comps'
import React, { useRef } from 'react'
import { Link } from 'react-router-dom'

export function Home () {
  const cont1 = useRef(null)
  return (<>
        {/* <div style={{ position: 'fixed', zIndex: 999 }}>{
            cont1.current?.getBoundingClientRect().x + ' ' + scrollYProgress.get()
        }</div> */}
        <Container>
            <motion.div ref={cont1} initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ duration: 0.5 }} viewport={{ once: true }} className='flex flex-col gap-6 snap-always snap-center toFade'>
                <Title color={'black'}>Nos services</Title>
                <p>Avec des valeurs hautes en couleurs, COPYCAT GROUP est une entreprise française née de l’ambition de remettre le service et la simplicité au coeur des solutions documentaires, digitales et bureautiques.</p>
                <p>La simplicité par un contact unique pour traiter et vous accompagner sur tous vos besoins d’IMPRESSIONS, de GRAPHISMES, de FOURNITURES, de BUREAUTIQUES et de SOLUTIONS DIGITALES.</p>
                <p>Le service, car nous croyons au fond qu’il n’y a pas de solutions pertinentes sans accompagnement, conseils et approche humaine tout au long de la vie de votre projet.</p>
                <p>C’est ce que nous appelons « Document as a Service »</p>
            </motion.div>
            <div className='grid max-lg:grid-rows-4 lg:grid-cols-4 h-fit w-full gap-6'>
                {[
                  { imgSrc: '/Solutions.svg', title: 'COPYCAT SOLUTIONS', desc: 'Vous souhaitez acheter ou louer des solutions bureautiques ?', motto: 'Prendre rendez-vous', link: '/contact' },
                  { imgSrc: '/Shop.svg', title: 'COPYCAT SHOP', desc: 'Vous souhaitez acheter vos fournitures à des prix intéressants ?', motto: 'Commandez vos fournitures', link: 'https://www.copycat.vous-livre.com/hbdb/webShop/IndexWebShop.php?PHPSESSID=a9d4e735397409f8fa9f13408774beed#/shop?hrefEinstiegFrameset=%2Fhbdb%2FwebShop%2Feinstieg%2FeinstiegSshopHome-tpl.php%3Faction%3DrHome' },
                  { imgSrc: '/Print.svg', title: 'COPYCAT PRINT', desc: 'Vous souhaitez imprimer vos supports de communication ?', motto: 'Imprimez vos documents', link: 'http://www.copycatprint.fr/accueil/' },
                  { imgSrc: '/Labs.svg', title: 'COPYCAT LABS', desc: 'Vous souhaitez développer votre propre site ou créer des visuels ?', motto: 'Demander un devis', link: '/labs' }
                ].map(({ imgSrc, title, desc, motto, link }, i) => {
                  return <motion.div key={i} className='flex flex-col gap-4 items-center snap-always snap-center toFade justify-between' initial={{ opacity: 0, scale: 0.8 }} whileInView={{ opacity: 100, scale: 1 }} transition={{ duration: 0.5, delay: 0.25 * i }} viewport={{ once: true }}>
                        <div className="flex flex-col gap-2">
                            <img src={imgSrc} className="h-[200px] aspect-square w-fit" />
                            <span>{title}</span>
                        </div>
                        <p className='text-gray-400'> {desc} </p>
                        <Link to={link} target='_blank' className='text-white bg-[#0061ad] px-5 py-2 rounded-full w-fit flex align-center justify-center' style={{ textOverflow: 'ellipsis', whiteSpace: 'nowrap', fontSize: '17px' }}>{ motto }</Link>
                    </motion.div>
                })}
            </div>
        </Container>
        <Container modifier="bg-[#efefef] flex items-center max-sm:h-screen w-full justify-center snap-always snap-center toFade">
            <div className='max-w-[1340px] flex flex-col lg:flex-row w-full [&>div]:w-full px-5 py-10 gap-8'>
                <div className='flex justify-center'>
                    <motion.img src="/pdg.svg" className="w-[65%]" initial={{ opacity: 0, x: 100 }} transition={{ duration: 0.5 }} whileInView={{ opacity: 100, x: 0 }} viewport={{ once: true }} />
                </div>
                <motion.div className='flex flex-col justify-center items-center gap-4 text-xl text-gray-400 text-center' initial={{ opacity: 0, x: -100 }} transition={{ duration: 0.5 }} whileInView={{ opacity: 100, x: 0 }} viewport={{ once: true }}>
                    <Title color={'black'}>Erwan HECAEN</Title>
                    <p>Fondateur et Expert Solutions Documentaires</p>
                    <hr className='border-[#0061ad] !border-gray-400 w-full' />
                    <p>+33 (0) 6 15 94 55 46</p>
                    <p>e.hecaen@copycatgroup.fr</p>
                </motion.div>
            </div>
        </Container>
        <Container modifier="flex w-full justify-center text-center md:text-left text-base md:text-xl text-gray-400">
            <div className='max-w-[1340px] flex flex-col lg:flex-row w-full [&>div]:w-full px-12 gap-8 items-center'>
                <motion.div className='flex flex-col gap-6 toFade snap-always snap-center toFade' initial={{ opacity: 0, y: 200 }} transition={{ duration: 0.5 }} whileInView={{ opacity: 100, y: 0 }} viewport={{ once: true }}>
                    <Title color={'#1e40af'} modifier={'!text-left'}>Ils nous font confiance !</Title>
                    <p>Faites comme nos clients, faites-nous confiance pour notre accompagnement et la réalisation de vos projets documentaires ! Adressez-vous à notre guichet unique pour traiter vos besoins d’IMPRESSIONS, de GRAPHISMES, de FOURNITURES, de BUREAUTIQUES et de SOLUTIONS DIGITALES.</p>
                </motion.div>
                <motion.div className='flex border shadow rounded-xl p-4 aspect-square lg:aspect-video snap-always snap-center toFade bg-white' initial={{ opacity: 0, y: 200 }} transition={{ duration: 0.5, delay: 0.25 }} whileInView={{ opacity: 100, y: 0 }} viewport={{ once: true }}>
                    <Carousel images={imagesCarouselHome} className="[&_button]:bg-[#0061ad] [&_button]:rounded-full px-16 py-12" />
                </motion.div>
            </div>
        </Container>
        <Container modifier="flex w-full justify-center text-center md:text-left text-base md:text-xl text-gray-400">
            <div className='max-w-[1340px] flex flex-col lg:flex-row w-full [&>div]:w-full px-12 gap-8 items-center'>
                <motion.div className='flex flex-col gap-6 snap-always snap-center toFade' initial={{ opacity: 0, y: 200 }} transition={{ duration: 0.5, delay: 0.5 }} whileInView={{ opacity: 100, y: 0 }} viewport={{ once: true }}>
                    <div className="grid grid-cols-2 [&_label]:grid [&_label>input]:w-full [&_label>input]:border-gray-300 gap-4" style={{ textWrap: 'nowrap' }}>
                        <Title color={'#1e40af'} modifier={'col-span-2 !text-left'}>Faites vous rappeler !</Title>
                        <form className="contents">
                            {contactForm.Home.map(({ className, Input, label }, id) => <label className={className} key={id}> {Input().props.placeholder} {label} <Input required /> </label>)}
                            <button className='p-4 bg-[#0061ad] rounded-full text-white mt-2 col-span-2 w-1/2' style={{ justifySelf: 'center' }}>Envoyer</button>
                        </form>
                    </div>
                </motion.div>
                <motion.div className='flex flex-col gap-6 snap-always snap-center toFade' initial={{ opacity: 0, y: 200 }} transition={{ duration: 0.5, delay: 0.75 }} whileInView={{ opacity: 100, y: 0 }} viewport={{ once: true }}>
                    <iframe className='w-full' height="500" id="gmap_canvas" src="https://maps.google.com/maps?q=copycat%20sevre&amp;t=&amp;z=13&amp;ie=UTF8&amp;iwloc=&amp;output=embed" frameBorder="0" scrolling="no" marginHeight="0" marginWidth="0"></iframe>
                </motion.div>
            </div>
        </Container>
    </>)
}

