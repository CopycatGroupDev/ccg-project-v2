import { Link } from 'react-router-dom'
import { Container, Title, Tabs, Testimonies, Icons } from '../comps'
import { For } from '../functions'
import { aboutPageArrays } from '../arrays'
import React from 'react'

export const APropos = ({ }) => {
  const { tabs, values, testimonies } = aboutPageArrays
  return (<>
        <Container>
            <div className="grid grid-cols-1 lg:grid-cols-2 grid-rows-min gap-y-2 gap-x-8 text-left [&_span]:text-[#0061ad]" style={{ color: '#737070' }}>
                <div className="flex gap-8 lg:col-start-1 lg:row-start-1" style={{ height: '100px', color: '#0061ad' }}>
                    <div className={'grid grid-cols-1 grid-rows-3'} style={{ textWrap: 'nowrap' }}>
                        <div></div>
                        <Title color="#0061ad">Edito CopycatGroup</Title>
                        <div className="flex items-end">
                            <svg xmlns="http://www.w3.org/2000/svg" width="22.909" height="17.523" viewBox="0 0 22.909 17.523">
                                <g id="Groupe_68" data-name="Groupe 68" transform="translate(0)">
                                    <path id="Tracé_73" data-name="Tracé 73" d="M3.552,8.928a4.926,4.926,0,0,1,5.071.9,4.447,4.447,0,0,1,.267,6.344,4.608,4.608,0,0,1-6.528.144C-.308,13.732-.451,10.57.637,7.306,1.807,3.857,4.394,1.619,7.781.1c.39.554.739,1.068,1.17,1.7C6.18,3.405,4.065,5.5,3.552,8.928Z" transform="translate(0 -0.079)"/>
                                    <path id="Tracé_74" data-name="Tracé 74" d="M70.375,0,71.5,1.724c-2.833,1.6-4.865,3.736-5.42,7.062.554-.082,1.068-.205,1.6-.246a4.489,4.489,0,0,1,2.669,8.376,4.734,4.734,0,0,1-5.789-1.047c-2.238-2.443-2.607-6.487-.924-9.793A13.543,13.543,0,0,1,70.375,0Z" transform="translate(-49.743)"/>
                                </g>
                            </svg>
                        </div>
                    </div>
                </div>

                <div className="flex flex-col justify-between gap-8 lg:col-start-1 lg:row-start-2" style={{ gridColumn: 1, gridRow: 2 }}>
                    <p>La volonté de <span>COPYCAT GROUP</span> est de rassembler toute l'expertise documentaire. Nous avons à coeur de vous proposer une analyse et une solution documentaire complètes.</p>
                    <p>Face à une offre de plus en plus importante, comment choisir son matériel et vers qui se tourner ? Quels noms doivent se trouver en premier dans votre carnet d'adresses?</p>
                    <p><span>LE DOCUMENT</span> n'est pas qu'une question de matériel. C'est aussi un service et tout ce qui touche à son environnement : le digital, du matériel d'appoint, des fournitures, de l'équipement personnalisé.</p>
                    <div className="flex justify-end -mt-6">
                        <svg id="Groupe_69" data-name="Groupe 69" xmlns="http://www.w3.org/2000/svg" width="22.909" height="17.523" viewBox="0 0 22.909 17.523">
                            <path id="Tracé_73" data-name="Tracé 73" d="M6.54,8.775a4.926,4.926,0,0,1-5.071-.9A4.447,4.447,0,0,1,1.2,1.528,4.608,4.608,0,0,1,7.73,1.385C10.4,3.971,10.543,7.133,9.455,10.4,8.285,13.846,5.7,16.084,2.311,17.6c-.39-.554-.739-1.068-1.17-1.7C3.912,14.3,6.026,12.2,6.54,8.775Z" transform="translate(12.818 -0.1)"/>
                            <path id="Tracé_74" data-name="Tracé 74" d="M64.87,17.484l-1.129-1.724c2.833-1.6,4.866-3.736,5.42-7.062-.554.082-1.068.205-1.6.246A4.489,4.489,0,0,1,64.891.568,4.734,4.734,0,0,1,70.68,1.615c2.238,2.443,2.607,6.487.924,9.793A13.543,13.543,0,0,1,64.87,17.484Z" transform="translate(-62.593 0.04)"/>
                        </svg>
                    </div>
                </div>

                <hr className="my-4 block lg:hidden" />

                <div className="flex gap-8 lg:col-start-2 lg:row-start-1" style={{ height: '100px', color: '#0061ad' }}>
                    <img src="/pdg.svg" className="h-full aspect-square w-fit" />
                    <div className={'grid grid-cols-1 grid-rows-3 text-wrap items-center'}>
                        <div></div>
                        <Title modifier={'!text-wrap !text-left'} color="#0061ad">Erwan HECAEN</Title>
                        <div className="flex items-end">
                            <svg xmlns="http://www.w3.org/2000/svg" width="22.909" height="17.523" viewBox="0 0 22.909 17.523">
                                <g id="Groupe_68" data-name="Groupe 68" transform="translate(0)">
                                    <path id="Tracé_73" data-name="Tracé 73" d="M3.552,8.928a4.926,4.926,0,0,1,5.071.9,4.447,4.447,0,0,1,.267,6.344,4.608,4.608,0,0,1-6.528.144C-.308,13.732-.451,10.57.637,7.306,1.807,3.857,4.394,1.619,7.781.1c.39.554.739,1.068,1.17,1.7C6.18,3.405,4.065,5.5,3.552,8.928Z" transform="translate(0 -0.079)"/>
                                    <path id="Tracé_74" data-name="Tracé 74" d="M70.375,0,71.5,1.724c-2.833,1.6-4.865,3.736-5.42,7.062.554-.082,1.068-.205,1.6-.246a4.489,4.489,0,0,1,2.669,8.376,4.734,4.734,0,0,1-5.789-1.047c-2.238-2.443-2.607-6.487-.924-9.793A13.543,13.543,0,0,1,70.375,0Z" transform="translate(-49.743)"/>
                                </g>
                            </svg>
                        </div>
                    </div>
                </div>

                <div className="flex flex-col justify-between gap-8 lg:col-start-2 lg:row-start-2" style={{}}>
                    <p>Chez <span>COPYCAT GROUP</span> nous avons à coeur de vous proposer les solutions les plus adaptées à votre fonctionnement.</p>
                    <p>Pour chaque service, nous mettons à votre disposition un interlocuteur privilégié et spécialisé.</p>
                    <p><span>NOS OUTILS PRINCIPAUX</span> : l'observation, l'écoute et l'attention à votre domaine et vos métiers.</p>
                    <p>Tous les secteurs imposent contraintes et besoins, vous accompagner pour les déterminer est notre première mission.</p>
                    <div className="flex justify-end -mt-6"><svg id="Groupe_69" data-name="Groupe 69" xmlns="http://www.w3.org/2000/svg" width="22.909" height="17.523" viewBox="0 0 22.909 17.523"><path id="Tracé_73" data-name="Tracé 73" d="M6.54,8.775a4.926,4.926,0,0,1-5.071-.9A4.447,4.447,0,0,1,1.2,1.528,4.608,4.608,0,0,1,7.73,1.385C10.4,3.971,10.543,7.133,9.455,10.4,8.285,13.846,5.7,16.084,2.311,17.6c-.39-.554-.739-1.068-1.17-1.7C3.912,14.3,6.026,12.2,6.54,8.775Z" transform="translate(12.818 -0.1)"></path><path id="Tracé_74" data-name="Tracé 74" d="M64.87,17.484l-1.129-1.724c2.833-1.6,4.866-3.736,5.42-7.062-.554.082-1.068.205-1.6.246A4.489,4.489,0,0,1,64.891.568,4.734,4.734,0,0,1,70.68,1.615c2.238,2.443,2.607,6.487.924,9.793A13.543,13.543,0,0,1,64.87,17.484Z" transform="translate(-62.593 0.04)"></path></svg></div>
                </div>
            </div>
        </Container>

        <Tabs tabs={tabs} />

        <Container>
            <div className='flex flex-col gap-8 snap-always snap-center toFade [&>p]:text-left w-full justify-center' style={{ color: '#737070' }}>
                <Title color="#0061ad">Ils nous font confiance</Title>
                <Testimonies testimonies={testimonies} />
            </div>
        </Container>

        <Container>
            <div className='flex flex-col gap-8 snap-always snap-center toFade [&>p]:text-left' style={{ color: '#737070' }}>
                <Title color="#0061ad">Nos valeurs</Title>
                <p>Nous abordons le travail d’équipe au sens large : Une collaboration avec une entreprise signifie une entente totale, transparente et proactive. Nos outils sont les vôtres et vice versa. Notre image est celle d’une entreprise dynamique, entreprenante et surtout, très fiable.</p>
                <p>L’humain étant au cœur de notre société et ayant pour objectif d’être les plus fiables pour nos clients, nos collaborateurs répondent à des critères stricts et pointus.</p>
                <p>Nous collaborons avec des personnes mais avant tout des personnalités : Amoureux du travail d’équipe, spontané, force de propositions, réactif, autonome et à l’esprit créatif. Chacun de nos échanges doit être agréable et productif.</p>
                <p>Notre « sphère » de travail doit adopter le même état d’esprit : agréable, optimale, sans barrières et où toute proposition est prise en compte et analysée. Nos collaborateurs ne viennent pas travailler pour remplir un seul objectif mais préparer les suivants, acquérir de nouvelles compétences et renforcer celles déjà présentes.</p>
                <p>Pour nous, chaque métier, chaque compétence sont importants. Le clivage et la préférence pour tel ou tel rôle n’a pas sa place dans nos projets. Nous valorisons au maximum chaque acteur de nos équipes. La productivité passe par la reconnaissance et l’encouragement.</p>
                <p>Évidemment, nos collaborateurs ne sont pas cantonnés dans un seul et même modèle, la liberté reste un outil de travail essentiel à ceux qui nous aident et vous aident à trouver vos solutions. Pour être sûrs d’assurer une collaboration sur le plus long terme possible, nous laissons nos collaborateurs agir tels des « électrons libres » si cela permet d’offrir une meilleure productivité.</p>
            </div>
        </Container>

        <Container>
            <div className='flex flex-col gap-8 snap-always snap-center toFade [&>p]:text-left' style={{ color: '#737070' }}>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 justify-center gap-16">
                    <For obj={values} render={(value, i) => {
                      return <div key={i} className="grid grid-cols-1 grid-rows-2 justify-items-center gap-2">
                            <img src={value.img} style={{ mixBlendMode: 'color' }} />
                            <div className='flex flex-col gap-4'>
                                <div className="font-bold" style={{ color: value.color }}>{value.title}</div>
                                <div>{value.text}</div>
                            </div>
                        </div>
                    }} />
                </div>
            </div>
        </Container>

        <Container modifier='p-0 flex max-xl:flex-col w-full bg-[#0061ad] h-[250px]'>
            <div className='w-full flex flex-col gap-4 snap-always snap-center toFade [&>p]:text-left text-white justify-center px-8'>
                <Title modifier={'text-2xl'} color="#fff">Retrouvez nous sur les réseaux sociaux</Title>
                <div className="flex justify-center gap-16">
                    <Link to={'https://www.facebook.com/copycat.groupe/'} className='flex flex-col items-center gap-4'>
                        {/* <Icons icon={'Facebook'} size={32} /> */}
                        <img src="/socialLogo1.PNG" style={{ objectFit: 'cover', aspectRatio: '1', width: 'fit-content', height: '55px' }} alt="" />
                        <span className='py-2 px-4 border-2 border-white rounded-xl' style={{ whiteSpace: 'nowrap' }}>copycat_group {/* CopyCat Group CopyCat Group */}</span>
                    </Link>
                    <Link to={'https://www.instagram.com/copycat_group/'} className='flex flex-col items-center gap-4'>
                        {/* <Icons icon={'Instagram'} size={32} /> */}
                        <img src="/socialLogo2.PNG" style={{ filter: 'invert(1)', objectFit: 'cover', aspectRatio: '1', width: 'fit-content', height: '55px' }} alt="" />
                        <span className='py-2 px-4 border-2 border-white rounded-xl' style={{ whiteSpace: 'nowrap' }}>CopyCat Group</span>
                    </Link>
                    <Link to={'https://fr.linkedin.com/company/copycat-group'} className='flex flex-col items-center gap-4'>
                        {/* <Icons icon={'Linkedin'} size={32} /> */}
                        <img src="/socialLogo3.PNG" style={{ filter: 'invert(1)', objectFit: 'cover', aspectRatio: '1', width: 'fit-content', height: '55px' }} alt="" />
                        <span className='py-2 px-4 border-2 border-white rounded-xl' style={{ whiteSpace: 'nowrap' }}>CopyCat Group</span>
                    </Link>
                </div>
            </div>
            <img src="/Capture.PNG" style={{ aspectRatio: '1136 / 377.406', height: '100%' }} />
        </Container>
    </>)
}
