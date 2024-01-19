/* eslint-disable react/no-children-prop */
/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";
import { Header, Footer, CCGCarousel as Carousel, Timeline, Nav, NavMobile, Testimonies, Tabs } from "./comps";
import { useEffect, useState, useRef } from "react";
import { For } from "./functions";
import { Svg, Icons } from "./utilities";
import { archi } from "./archi";

const Container = ({ modifier="w-full flex flex-col gap-6 items-center text-base md:text-xl text-gray-400 max-w-[1340px] text-center px-12", style, children }) => <div className={modifier} style={style}>{children}</div>
const Title = ({children, color="black", modifier}) => <h1 className={`text-4xl text-center text-${color} text-[${color}] ${modifier}`} style={{color: color}}>{children}</h1>

export const Page = ({header, title, Body}) => {
    const footer = useRef(null);
    const body = document.querySelector('body').getBoundingClientRect();

    document.querySelector('title').innerHTML = title;
    const [scroll, setScroll] = useState(window.scrollY);
    const [bottomBtnScrTop, setBottomBtnScrTop] = useState(0);
    useEffect(() => {
        const int = setInterval(() => { setScroll(window.scrollY); }, 0);
        return () => { clearInterval(int); };
    }, []);

    useEffect(() => {
        //const int = setInterval(, 1000);
        //return () => clearInterval(int);

        const up = () => {
            let body = document.querySelector('body').getBoundingClientRect();
            let footerRect = footer.current.getBoundingClientRect();
            let footerBottom = (footerRect.bottom < body.height) ? "ot" : (body.height > footerRect.y) ? body.height - footerRect.y : 0;
            setBottomBtnScrTop(footerBottom);
        }

        window.addEventListener('load', up);
        window.addEventListener('scroll', up);
        window.addEventListener('resize', up);

        return;
    }, []);

    return <>
        {<style>{`body{background:rgba(0,0,0,0.025);--thickness: 6px; --page-color: ${header.color};} .colorPage{background-color: var(--page-color);}`}</style>}
        <Header {...header} />
        {Body && <Body color={header.color} />}
        <Footer refF={footer} />
        {scroll > 100 && <button className="fixed z-[999] shadow-md shadow-black/30 bottom-0 right-0 rounded-md py-3 px-4 bg-[#0061ad] hover:bg-white text-white hover:text-[#0061ad] m-6 flex items-center gap-2 justify-center" onClick={() => scrollTo(0,0)} style={{bottom: bottomBtnScrTop}}>
            <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} fill="currentColor" viewBox="0 0 16 16"> <path fillRule="evenodd" d="M7.646 2.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1-.708.708L8 3.707 2.354 9.354a.5.5 0 1 1-.708-.708l6-6z" /> <path fillRule="evenodd" d="M7.646 6.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1-.708.708L8 7.707l-5.646 5.647a.5.5 0 0 1-.708-.708l6-6z" /> </svg>
            <span>Retour en haut</span>    
        </button>}
        {(body.width < 1024) && <button className="w-full py-3 px-4 bg-white text-[#0061ad] -m-12 flex items-center gap-2 justify-center" onClick={() => scrollTo(0,0)}>
            <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} fill="currentColor" viewBox="0 0 16 16"> <path fillRule="evenodd" d="M7.646 2.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1-.708.708L8 3.707 2.354 9.354a.5.5 0 1 1-.708-.708l6-6z" /> <path fillRule="evenodd" d="M7.646 6.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1-.708.708L8 7.707l-5.646 5.647a.5.5 0 0 1-.708-.708l6-6z" /> </svg>
            <span>Retour en haut</span>    
        </button>}
    </>
}

const Home = () => {
    return (<>
        <Container>
            <div className='flex flex-col gap-6 snap-always snap-center toFade'>
                <Title color={"black"}>Nos services</Title>
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
                    <Title color={"black"}>Erwan HECAEN</Title>
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
                    <Title color={"#1e40af"}>Ils nous font confiance !</Title>
                    <p>Faites comme nos clients, faites-nous confiance pour notre accompagnement et la réalisation de vos projets documentaires ! Adressez-vous à notre guichet unique pour traiter vos besoins d’IMPRESSIONS, de GRAPHISMES, de FOURNITURES, de BUREAUTIQUES et de SOLUTIONS DIGITALES.</p>
                </div>
                <div className='flex border shadow rounded-xl p-4 aspect-square lg:aspect-video snap-always snap-center toFade bg-white'>
                    <Carousel images={[
                        "https://copycatgroup.fr/images/log2.jpg",
                        "https://copycatgroup.fr/images/log1.jpg",
                        "https://copycatgroup.fr/images/log7.jpg",
                        "https://copycatgroup.fr/images/log4.jpg",
                        "https://copycatgroup.fr/images/log5.jpg",
                        "https://copycatgroup.fr/images/log6.jpg",
                        "https://copycatgroup.fr/images/log3.jpg",
                    ]} className="[&_button]:bg-[#0061ad] [&_button]:rounded-full px-16 py-12" />
                </div>
            </div>
        </Container>
        <Container modifier="flex w-full justify-center text-center md:text-left text-base md:text-xl text-gray-400">
            <div className='max-w-[1340px] flex flex-col lg:flex-row w-full [&>div]:w-full px-12 gap-8 items-center'>
                <div className='flex flex-col gap-6 snap-always snap-center toFade'>
                    <div className="grid grid-cols-2 [&_label]:grid [&_label>input]:w-full [&_label>input]:rounded-lg gap-4" style={{"textWrap": "nowrap"}}>
                        <Title color={"#1e40af"} modifier={"col-span-2"}>Faites vous rappeler !</Title>
                        <form className="contents">
                            {[
                                {className: null, input : <input type="text" placeholder='Nom' />},
                                {className: null, input : <input type="text" placeholder='Prénom' />},
                                {className: null, input : <input type="text" placeholder='Numéro de téléphone' />},
                                {className: null, input : <input type="text" placeholder='Entreprise' />},
                                {className: "col-span-2", input : <input type="text" placeholder='Votre email' />},
                                {className: "col-span-2", input : <input type="text" placeholder='Sujet' />},
                            ].map((field, id) => <label className={field.className} key={id}> {field.input.props.placeholder} {field.label} {field.input} </label> )}
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

const Solutions = ({color}) => {
    return (<>
        <Timeline color={color} list={[
            //{image: "", texte: "", button: "",},
            {image: "https://copycatgroup.fr/images/bur1.png", id: "bur", text: <>{`Vente et location d'imprimante`}<br />{`Petit et grand format, laser ou jet d'encre...`}</>, button: "Je suis intéressé",},
            {image: "https://copycatgroup.fr/images/tel1.png", id: "tel", text: <>{`Téléphones fixes, mobiles, internet...`}</>, button: "Je suis intéressé",},
            {image: "https://copycatgroup.fr/images/dig1.png", id: "dig", text: <>{`Archivage, dématérialisation des factures, note de frais...`}</>, button: "Je suis intéressé",},
            {image: "https://copycatgroup.fr/images/inf1.png", id: "inf", text: <>{`Vente, maintenance, infogérance`}</>, button: "Je suis intéressé",},
        ]} />
    </>)
}

const Shop = ({color}) => {
    return (<>
        <Timeline color={color} list={[
            //{image: "", texte: "", button: "",},
            {image: "https://copycatgroup.fr/images/pc1.png", id: "inf", text: <>{`Ordinateur, clé USB, souris, clavier, câble HDMI...`}</>, button: "Je suis intéressé",},
            {image: "https://copycatgroup.fr/images/mu1.png", id: "mul", text: <>{`Vidéo projecteur, écran interactif, visioconférence`}</>, button: "Je suis intéressé",},
            {image: "https://copycatgroup.fr/images/bu1.png", id: "bur", text: <>{`Imprimante domestique, toner, agenda, papier, stylo...`}</>, button: "Je suis intéressé",},
            {image: "https://copycatgroup.fr/images/div1.png", id: "div", text: <>{`Loisirs, gastronomie, restauration, hygiène..`}</>, button: "Je suis intéressé",},
        ]} />

        <Container modifier='grid grid-cols-1 gap-4 text-center'>
            <span className='text-4xl snap-center'>{`Vous avez d'autres besoins ?`}</span>
            <div className='flex max-md:flex-col justify-center gap-4 max-md:text-xl text-2xl [&>*]:w-full w-full max-w-[1024px] px-4' name='ee' style={{wordBreak: "break-word"}}>
                <For obj={[
                    {img: "/img/page shop/Fournitures.png", text: "Commandez vos fournitures bureautiques"},
                    {img: "/img/page shop/IT-Multimédia.png", text: "Commandez vos appareils multimédia"},
                    {img: "/img/page shop/Informatique.png", text: "Commandez vos appareils et solutions informatiques"},
                ]} render={(value, key) => <div key={key} className='aspect-[4/3] bg-[#f39115] max-h-[400px] w-min grid grid-rows-[min-content] items-center text-center snap-always snap-center'>
                        <img className='aspect-[2/1] bg-gray-900 w-full' src={value.img} />
                        <div className='text-white p-4'>{value.text}</div>
                    </div>
                } />
            </div>
        </Container>
    </>)
}

const Print = ({color}) => {
    return (<>
        <Timeline color={color} list={[
            {image: "https://copycatgroup.fr/images/rep1.png", id: "rep", text: <>{`Reliure, plastification, flyer..`}</>, button: "Je suis intéressé",},
            {image: "https://copycatgroup.fr/images/mug.png", id: "mug", text: <>{`Mugs, vêtements, stylos, clés USB...`}</>, button: "Je suis intéressé",},
            {image: "https://copycatgroup.fr/images/sup1.png", id: "sup", text: <>{`Roll'up, drapeaux, vitrophanie...`}</>, button: "Je suis intéressé",},
        ]} />
        <iframe src="https://e.issuu.com/embed.html?d=catalogue_produits_en_marque_blanche&u=e3m4" className='w-full aspect-[4/3] max-w-[1024px] max-md:h-screen snap-center'></iframe>
        <Container modifier='grid grid-cols-1 text-4xl gap-4 text-center'>
            <span>Une partie de nos impressions en ligne sur :</span>
            <Link to={'http://www.copycatprint.fr/accueil/'} style={{color: color}}>www.copycatprint.fr</Link>
        </Container>
    </>)
}

const Labs = ({color}) => {
    return (<>
        <Timeline color={color} list={[
            //{image: "", texte: "", button: "",},
            {image: "https://copycatgroup.fr/images/dev1.png", text: <>
                {`Programmation, développement de site sur-mesure`}
                <div className='grid grid-cols-3 [&>img]:aspect-square [&>img]:w-full [&>img]:h-fit p-4 gap-4 [&>img]:rounded-2xl [&>img]:object-contain'>
                    <img src="https://copycatgroup.fr/images/php.png"></img>
                    <img src="https://copycatgroup.fr/images/js.png"></img>
                    <img src="https://copycatgroup.fr/images/wp.jpg"></img>
                    <img src="https://copycatgroup.fr/images/git.svg"></img>
                    <img src="https://copycatgroup.fr/images/an.svg"></img>
                </div>
            </>, button: "Je suis intéressé", id: "dev",},
            {image: "https://copycatgroup.fr/images/gra1.png", text: <>
                {`Identité visuelle, communication visuelle, logo...`}
                <div className='grid grid-cols-3 [&>img]:aspect-square [&>img]:w-full [&>img]:h-fit p-4 gap-4 [&>img]:rounded-2xl [&>img]:object-contain'>
                    <img src="https://copycatgroup.fr/images/ps.png"/><img src="https://copycatgroup.fr/images/id.png"/><img src="https://copycatgroup.fr/images/ai.png"/><img src="https://copycatgroup.fr/images/xd.png"/>
                </div>
            </>, button: "Je suis intéressé", id: "gra",},
        ]} />
    </>)
}

const Boutiques = {
    Menu : ({header, title}) => {
        const [navOpened, setNavOpened] = useState(false);
        const boutiques = ["/sevres", "/boulogne"]
    
        return <>
            {navOpened && <NavMobile setNavOpened={setNavOpened} navOpened={navOpened} />}
            <div id='header' className={`w-full h-screen relative flex snap-always snap-center`}>
                <img src={"/banner-bg-ccg.png"} className='w-full h-full object-cover'/>
                <div className="absolute w-full h-full flex flex-col [&>*]:h-full gap-4 p-8 lg:p-4">
                    <Nav setNavOpened={setNavOpened} navOpened={navOpened} />
                    <div className="flex justify-center gap-16">
                        <For obj={boutiques} render={(value, key) => {
                            const page = archi.find(ar => ar.path === value);
                            
                            return <Link key={key} to={value} className="bg-white h-fit shadow p-6 gap-2 rounded-xl grid grid-cols-1 justify-items-center">
                                <img src={'icone boutique.png'} className="" />
                                <div className="text-xl" style={{color: "#0061ad"}}>{page.title}</div>
                            </Link>
                        } } />
                    </div>
                    <div></div>
                </div>
            </div>
        </>
    },

    Sevres : ({color}) => {
        const [currentTabRealisation, setCurrentTabRealisation] = useState('tex');

        let horaires = [
            {col: 1, color: "#0061ad", jour: "Lundi", debut: ["9H", "14H"], fin: ["12H30", "18H30"]},
            {col: 1, color: "#0aa13c", jour: "Mardi", debut: ["9H"], fin: ["18H30"]},
            {col: 1, color: "#f39116", jour: "Mercredi", debut: ["9H"], fin: ["18H30"]},
            {col: 1, color: "#ed01b5", jour: "Jeudi", debut: ["9H"], fin: ["18H30"]},
            {col: 2, color: "#6d237f", jour: "Vendredi", debut: ["9H"], fin: ["18H30"]},
            {col: 2, color: "#0061ad", jour: "Samedi", debut: ["9H"], fin: ["17H30"]},
            {col: 2, color: "#0aa13c", jour: "Dimanche", debut: null, fin: null},
        ]

        let renseignements = [
            {Icon: ({size}) => <Svg size={size} children={<path d="M8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10m0-7a3 3 0 1 1 0-6 3 3 0 0 1 0 6" />} />, text: "2 rue de Ville d'Avray, 92310 Sèvres"},
            {Icon: ({size}) => <Svg size={size} children={<><path d="M11 1a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1zM5 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2z" /> <path d="M8 14a1 1 0 1 0 0-2 1 1 0 0 0 0 2" /></>} />, text: "01 45 07 98 00"},
            {Icon: ({size}) => <Svg size={size} children={<path d="M.05 3.555A2 2 0 0 1 2 2h12a2 2 0 0 1 1.95 1.555L8 8.414.05 3.555ZM0 4.697v7.104l5.803-3.558zM6.761 8.83l-6.57 4.027A2 2 0 0 0 2 14h12a2 2 0 0 0 1.808-1.144l-6.57-4.027L8 9.586l-1.239-.757Zm3.436-.586L16 11.801V4.697l-5.803 3.546Z" />} /> , text: "hello@copycatgroup.fr"},
        ]

        let services = [
            {color: null, mainImg: "print", imgs: ["Objets personnalisés","Signalétique-PLV","Imprimerie"], text: "Reprographie, Photocopie, Impression numérique, Support PLV, Objets personnalisés"},
            {color: null, mainImg: "shop", imgs: ["Informatique", "Divers", "Bureautique", "IT-Multimédia",], text: "Informatique, IT / Multimédia, Bureautique, Divers"},
            {color: null, mainImg: "labs", imgs: ["Création graphique", "Développement web"], text: "Développement web, Graphisme"},
        ]

        let realisations = [
            {imgs: ["Badge magnetique 1","Biscuits imprimes 1","Drapeau 1","Transfert tissus 1","Transfert tissus 2"], root: "/Realisations/Objets et textiles personnalise/", name: "tex", text: "Objets et textiles personnalisés"},
            {imgs: ["Signaletique 1"], root: "/Realisations/PLVSignaletique/", name: "plv", text: "PLV / Signalétique"},
            {imgs: ["Brochure agrafee 1","Intercalaires 1","Packaging 1"], root: "/Realisations/Reprographie-Imprimerie/", name: "rep", text: "Reprographie / Imprimerie"},
        ];

        useEffect(() => {
            //console.log(horaires.filter(jour => jour.col == "1"));
            return;
        }, []);

        return (<>
            <Container>
                <div className='flex flex-col gap-6 snap-always snap-center toFade'>
                    <Title color={"black"}>La boutique à Sèvres</Title>
                    <p>Découvrez Copycat Sèvres, votre boutique de référence pour les fournitures de bureau et les services d'impression. Située au cœur de Sèvres, notre équipe dévouée vous propose une large sélection de produits de qualité et des services personnalisés pour répondre à tous vos besoins professionnels. Faites confiance à notre expertise et à notre engagement envers la satisfaction client pour une expérience d'achat agréable et des solutions documentaires sur mesure.</p>
                </div>
            </Container>

            <Container modifier='grid grid-cols-1 lg:grid-cols-2 gap-16 text-center max-w-[1340px] px-12'>
                <img src="image boutique.png" />
                <div className="grid grid-cols-1 grid-rows-min gap-4 snap-center">
                    <Title color={"black"}>Horaires d'ouverture</Title>
                    <div className="gap-4 grid p-4 grid-cols-2 grid-flow-row auto-rows-min">
                        <For obj={horaires} render={(value, key) => {
                            let row = horaires.filter(jour => jour.col === value.col).indexOf(value)+1;
                            let closed = !(value.debut && value.fin)

                            return <div key={key} className={"rounded-l-xl bg-gray-300 flex"} style={{
                                gridColumn: value.col + "/" + value.col,
                                gridRow: row + "/" + row,
                                background: value.color+"4f"
                            }}>
                                <div className={"w-4 rounded-2xl"} style={{background: value.color+"ff"}}></div>
                                <div className="w-full grow flex max-lg:flex-col justify-around text-xl py-2 items-center uppercase">
                                    <div>{value.jour}</div>
                                    <div className="text-xs flex gap-2 lg:gap-0 lg:flex-col">{
                                        closed ? "Fermé" : <For obj={value.debut} render={(debut, key) => <div key={key}>{`${debut} - ${value.fin[key]}`}</div>} />
                                    }</div>
                                </div>
                            </div>
                        }} />
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-3">
                        <For obj={renseignements} render={(value, key) => <div key={key} className="flex gap-2">
                            <value.Icon size={43} />
                            <div className="w-full text-gray-400 text-left">{value.text}</div>
                        </div>} />
                    </div>
                </div>
            </Container>

            <Container modifier='flex flex-col gap-6 snap-always snap-center toFade p-12 text-center'>
                <Title color={"black"}>Nos services au sein de la boutique</Title>
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
                    <For obj={services} render={(value, key) => <div key={key} className="text-center text-2xl grid grid-cols-1 gap-4 justify-items-center">
                        <img src={"icone "+value.mainImg+".png"} className="rounded-full" />
                        <div>
                            <For obj={value.imgs} render={(img, key) => <img key={key} src={img+".png"} className="inline-block h-20" /> } />
                        </div>
                        <div className="text-[#0061ad]">{value.text}</div>
                    </div>} />
                </div>
            </Container>

            <Container modifier='flex flex-col gap-6 snap-always snap-center items-center toFade px-12'>
                <Title color={"black"}>Nos réalisations</Title>
                <div className="flex flex-wrap gap-4 justify-center">
                    <For obj={realisations} render={(value, key) => <button key={key} className={"text-xl py-4 px-8 bg-gray-200 rounded-full hover:bg-gray-300"} style={value.name === currentTabRealisation ? {background: color, color: "white"} : {}} onClick={() => setCurrentTabRealisation(value.name)}>{value.text}</button> } />
                </div>
                <div className="flex flex-wrap gap-2 justify-center">
                    <For obj={realisations.find(realisation => realisation.name === currentTabRealisation)?.imgs} render={(value, key) => <img key={key} src={realisations.find(realisation => realisation.name === currentTabRealisation)?.root+value+".png"} className="h-64" /> } />
                </div>
            </Container>

            <Container modifier="grid grid-cols-1 lg:grid-cols-2 text-white snap-always snap-center" style={{background: color}}>
                <div className="p-12">
                    <p className="text-4xl pb-4">Pour en découvrir plus : Rejoignez-nous sur Instagram !</p>
                    <button className="border border-white rounded-xl p-2 text-2xl">@copycatsevres</button>
                </div>
                <img src="Bannière insta.png" className={"h-full"} />
            </Container>

            <Container>
                <div className='flex flex-col gap-6 snap-always snap-center toFade w-full'>
                    <Title color={"black"} style={{textWrap: "balance"}}>Contactez nous</Title>
                    <div className="flex w-full justify-center text-center md:text-left text-base md:text-xl text-gray-400">
                        <div className='max-w-[1340px] flex flex-col lg:flex-row w-full [&>div]:w-full gap-8 items-center'>
                            <div className='flex flex-col gap-6 snap-always snap-center toFade'>
                                <div className="grid grid-cols-2 [&_label]:grid [&_label>input]:w-full [&_label>input]:rounded-lg gap-4" style={{"textWrap": "nowrap"}}>
                                    <Title color={"blue-800"} modifier={"col-span-2"} style={{textWrap: "balance"}}>Faites vous rappeler !</Title>
                                    <form className="contents">
                                        {[
                                            {className: null, input : <input type="text" placeholder='Nom' />},
                                            {className: null, input : <input type="text" placeholder='Prénom' />},
                                            {className: null, input : <input type="text" placeholder='Numéro de téléphone' />},
                                            {className: null, input : <input type="text" placeholder='Entreprise' />},
                                            {className: "col-span-2", input : <input type="text" placeholder='Votre email' />},
                                            {className: "col-span-2", input : <input type="text" placeholder='Sujet' />},
                                        ].map((field, id) => <label className={field.className} key={id}> {field.input.props.placeholder} {field.label} {field.input} </label> )}
                                        <button className='p-4 bg-[#0061ad] rounded-full text-white mt-2 col-span-2'>Envoyer</button>
                                    </form>
                                </div>
                            </div>
                            <div className='flex flex-col gap-6 snap-always snap-center toFade'>
                                <iframe className='w-full' height="500" id="gmap_canvas" src="https://maps.google.com/maps?q=copycat%20sevre&amp;t=&amp;z=13&amp;ie=UTF8&amp;iwloc=&amp;output=embed" frameBorder="0" scrolling="no" marginHeight="0" marginWidth="0"></iframe>
                            </div>
                        </div>
                    </div>
                </div>
            </Container>
        </>)
    },

    Boulogne : ({color}) => {
        const [currentTabRealisation, setCurrentTabRealisation] = useState('imp');

        let horaires = [
            {col: 1, color: "#0061ad", jour: "Lundi", debut: ["9H30"], fin: ["19H"]},
            {col: 1, color: "#0aa13c", jour: "Mardi", debut: ["9H30"], fin: ["19H"]},
            {col: 1, color: "#f39116", jour: "Mercredi", debut: ["9H30"], fin: ["19H"]},
            {col: 1, color: "#ed01b5", jour: "Jeudi", debut: ["9H30"], fin: ["19H"]},
            {col: 2, color: "#6d237f", jour: "Vendredi", debut: ["9H30"], fin: ["19H"]},
            {col: 2, color: "#0061ad", jour: "Samedi", debut: ["9H30"], fin: ["19H"]},
            {col: 2, color: "#0aa13c", jour: "Dimanche", debut: null, fin: null},
        ]

        let renseignements = [
            {Icon: ({size}) => <Svg size={size} children={<path d="M8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10m0-7a3 3 0 1 1 0-6 3 3 0 0 1 0 6" />} />, text: "45 Route de la Reine, 92100 Boulogne - Billancourt"},
            {Icon: ({size}) => <Svg size={size} children={<><path d="M11 1a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1zM5 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2z" /> <path d="M8 14a1 1 0 1 0 0-2 1 1 0 0 0 0 2" /></>} />, text: "01 46 05 82 03"},
            {Icon: ({size}) => <Svg size={size} children={<path d="M.05 3.555A2 2 0 0 1 2 2h12a2 2 0 0 1 1.95 1.555L8 8.414.05 3.555ZM0 4.697v7.104l5.803-3.558zM6.761 8.83l-6.57 4.027A2 2 0 0 0 2 14h12a2 2 0 0 0 1.808-1.144l-6.57-4.027L8 9.586l-1.239-.757Zm3.436-.586L16 11.801V4.697l-5.803 3.546Z" />} /> , text: "altitudeink@gmail.com"},
        ]

        let services = [
            {title: "SOLUTIONS", path: "/solutions", mainImg: "solutions", imgs: ["","",""], text: "Bureautique, Téléphonie Digital, Informatique"},
            {title: "PRINT", path: "/print", mainImg: "print", imgs: ["Objets personnalisés","Signalétique-PLV","Imprimerie"], text: "Reprographie, Photocopie, Impression numérique, Support PLV, Objets personnalisés"},
            {title: "SHOP", path: "/shop", mainImg: "shop", imgs: ["Informatique", "Divers", "Bureautique", "IT-Multimédia",], text: "Informatique, IT / Multimédia, Bureautique, Divers"},
            {title: "LABS", path: "/labs", mainImg: "labs", imgs: ["Création graphique", "Développement web"], text: "Développement web, Graphisme"},
        ]

        let realisations = [
            {imgs: [], root: "/Realisations/Objets et textiles personnalise/", name: "imp", text: "Impressions 3D"},
            {imgs: ["Badge magnetique 1","Biscuits imprimes 1","Drapeau 1","Transfert tissus 1","Transfert tissus 2"], root: "/Realisations/Objets et textiles personnalise/", name: "tex", text: "Objets et textiles personnalisés"},
            {imgs: ["Signaletique 1"], root: "/Realisations/PLVSignaletique/", name: "plv", text: "PLV / Signalétique"},
            {imgs: ["Brochure agrafee 1","Intercalaires 1","Packaging 1"], root: "/Realisations/Reprographie-Imprimerie/", name: "rep", text: "Reprographie / Imprimerie"},
        ];

        useEffect(() => {
            //console.log(horaires.filter(jour => jour.col == "1"));
            return;
        }, []);

        return (<>
            <Container>
                <div className='flex flex-col gap-6 snap-always snap-center toFade'>
                    <Title color={"black"}>La boutique à Boulogne</Title>
                    <p>Découvrez Copycat DPS Boulogne, votre choix idéal pour les fournitures de bureau et les services d'impression.De l'impression à la réparation d'ordinateurs, notre équipe dévouée vous offre des produits de qualité et des services personnalisés pour répondre à vos besoins professionnels. Faites-nous confiance pour une expérience d'achat agréable et des solutions documentaires adaptées</p>
                </div>
            </Container>

            <Container modifier='grid grid-cols-1 lg:grid-cols-2 gap-16 text-center max-w-[1340px] px-12'>
                <img src="image boutique.png" />
                <div className="grid grid-cols-1 grid-rows-min gap-4 snap-center">
                    <Title color={"black"}>Horaires d'ouverture</Title>
                    <div className="gap-4 grid p-4 grid-cols-2 grid-flow-row auto-rows-min">
                        <For obj={horaires} render={(value, key) => {
                            let row = horaires.filter(jour => jour.col === value.col).indexOf(value)+1;
                            let closed = !(value.debut && value.fin)

                            return <div key={key} className={"rounded-l-xl bg-gray-300 flex"} style={{
                                gridColumn: value.col + "/" + value.col,
                                gridRow: row + "/" + row,
                                background: value.color+"4f"
                            }}>
                                <div className={"w-4 rounded-2xl"} style={{background: value.color+"ff"}}></div>
                                <div className="w-full grow flex max-lg:flex-col justify-around text-xl py-2 items-center uppercase">
                                    <div>{value.jour}</div>
                                    <div className="text-xs flex gap-2 lg:gap-0 lg:flex-col">{
                                        closed ? "Fermé" : <For obj={value.debut} render={(debut, key) => <div key={key}>{`${debut} - ${value.fin[key]}`}</div>} />
                                    }</div>
                                </div>
                            </div>
                        }} />
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-3">
                        <For obj={renseignements} render={(value, key) => <div key={key} className="flex gap-2">
                            <value.Icon size={43} />
                            <div className="w-full text-gray-400 text-left">{value.text}</div>
                        </div>} />
                    </div>
                </div>
            </Container>

            <Container modifier='grid grid-cols-1 lg:grid-cols-2 gap-16 text-center max-w-[1340px] px-12'>
                <Title color={"black"}>Nos services au sein de la boutique</Title>
                <div className="grid grid-cols-1 lg:grid-cols-4 gap-12">
                    <For obj={services} render={(value, key) => <div key={key} className="text-center text-2xl grid grid-cols-1 gap-4 justify-items-center">
                        <div className="grid grid-cols-1 h-fit gap-4">
                            <img src={"icone "+value.mainImg+".png"} className="rounded-full" />
                            <b style={{color: archi.find(arc => arc.path === value.path).element.props.header.color}}>{value.title}</b>
                        </div>
                        <div>
                            <For obj={value.imgs} render={(img, key) => <img key={key} src={img+".png"} className="inline-block h-20" /> } />
                        </div>
                        <div className="text-[#0061ad]">{value.text}</div>
                    </div>} />
                </div>
            </Container>

            <Container modifier='grid grid-cols-1 lg:grid-cols-2 gap-16 text-center max-w-[1340px] px-12'>
                <Title color={"black"}>Nos réalisations</Title>
                <div className="flex flex-wrap gap-4 justify-center">
                    <For obj={realisations} render={(value, key) => <button key={key} className={"text-xl py-4 px-8 bg-gray-200 rounded-full hover:bg-gray-300"} style={value.name === currentTabRealisation ? {background: color, color: "white"} : {}} onClick={() => setCurrentTabRealisation(value.name)}>{value.text}</button> } />
                </div>
                <div className="flex flex-wrap gap-2 justify-center">
                    <For obj={realisations.find(realisation => realisation.name === currentTabRealisation)?.imgs} render={(value, key) => <img key={key} src={realisations.find(realisation => realisation.name === currentTabRealisation)?.root+value+".png"} className="h-64" /> } />
                </div>
            </Container>

            <div className="grid grid-cols-1 lg:grid-cols-2 text-white snap-always snap-center" style={{background: color}}>
                <div className="p-12">
                    <p className="text-4xl pb-4">Pour en découvrir plus : Rejoignez-nous sur Instagram !</p>
                    <button className="border border-white rounded-xl p-2 text-2xl">@copycatsevres</button>
                </div>
                <img src="Bannière insta.png" className={"h-full"} />
            </div>

            <Container>
                <div className='flex flex-col gap-6 snap-always snap-center toFade w-full'>
                    <Title color={"black"} style={{textWrap: "balance"}}>Contactez nous</Title>
                    <div className="flex w-full justify-center text-center md:text-left text-base md:text-xl text-gray-400">
                        <div className='max-w-[1340px] flex flex-col lg:flex-row w-full [&>div]:w-full gap-8 items-center'>
                            <div className='flex flex-col gap-6 snap-always snap-center toFade'>
                                <div className="grid grid-cols-2 [&_label]:grid [&_label>input]:w-full [&_label>input]:rounded-lg gap-4" style={{"textWrap": "nowrap"}}>
                                    <Title color={"blue-800"} modifier={"col-span-2"} style={{textWrap: "balance"}}>Faites vous rappeler !</Title>
                                    <form className="contents">
                                        {[
                                            {className: null, input : <input type="text" placeholder='Nom' />},
                                            {className: null, input : <input type="text" placeholder='Prénom' />},
                                            {className: null, input : <input type="text" placeholder='Numéro de téléphone' />},
                                            {className: null, input : <input type="text" placeholder='Entreprise' />},
                                            {className: "col-span-2", input : <input type="text" placeholder='Votre email' />},
                                            {className: "col-span-2", input : <input type="text" placeholder='Sujet' />},
                                        ].map((field, id) => <label className={field.className} key={id}> {field.input.props.placeholder} {field.label} {field.input} </label> )}
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
}

const APropos = ({color}) => {
    let tabs = [ "solutions", "shop", "print", "labs", ];
    let values = [
        {img:null, color:"#f39113", title: "Bonne humeur", text: "Une équipe passionnée à l'écoute de vos besoins"},
        {img:null, color:"#A271AD", title: "Bonne volonté", text: "Nous avançons avec entrain vers la réalisation de vos projets"},
        {img:null, color:"#5892C4", title: "Bon sens", text: "Nous oeuvrons méthodiquement au traitement de vos documents"},
        {img:null, color:"#60C280", title: "Bonne foi", text: "Nous vous accompagnons avec intégrité et honnêteté"},
    ];
    let testimonies = [
        {text: <>{`1. Nous travaillons avec CopycatGroup depuis plusieurs années sur plusieurs entreprises du groupe.`}<br />{`Au-delà de nos exigences de performance de service et de compétitivité des prix, parfaitement répondu par CCG, nous avons été toujours agréablement surpris par la disponibilité des équipes et leur grande capacité à gérer des projets non standards.`}<br />{`Je ne peux que me réjouir de les savoir notre fournisseur.`}</>},
        {text: <>{`2. Nous travaillons avec CopycatGroup depuis plusieurs années sur plusieurs entreprises du groupe.`}<br />{`Au-delà de nos exigences de performance de service et de compétitivité des prix, parfaitement répondu par CCG, nous avons été toujours agréablement surpris par la disponibilité des équipes et leur grande capacité à gérer des projets non standards.`}<br />{`Je ne peux que me réjouir de les savoir notre fournisseur.`}</>},
        {text: <>{`3. Nous travaillons avec CopycatGroup depuis plusieurs années sur plusieurs entreprises du groupe.`}<br />{`Au-delà de nos exigences de performance de service et de compétitivité des prix, parfaitement répondu par CCG,`}<br />{`Je ne peux que me réjouir de les savoir notre fournisseur.`}</>},
        {text: <>{`4. Nous travaillons avec CopycatGroup depuis plusieurs années sur plusieurs entreprises du groupe.`}<br />{`Au-delà de nos exigences de performance de service et de compétitivité des prix, parfaitement répondu par CCG, nous avons été toujours agréablement surpris par la disponibilité des équipes et leur grande capacité à gérer des projets non standards.`}<br />{`Je ne peux que me réjouir de les savoir notre fournisseur.`}</>},
        {text: <>{`5. Nous travaillons avec CopycatGroup depuis plusieurs années sur plusieurs entreprises du groupe.`}<br />{`Au-delà de nos exigences de performance de service et de compétitivité des prix, parfaitement répondu par CCG, nous avons été toujours agréablement surpris par la disponibilité des équipes et leur grande capacité à gérer des projets non standards.`}<br />{`Je ne peux que me réjouir de les savoir notre fournisseur.`}</>},
    ];

    return (<>
        <Container>
            <div className="grid grid-cols-1 lg:grid-cols-2 grid-rows-min gap-y-2 gap-x-8 text-left [&_span]:text-[#0061ad]" style={{color: "#737070"}}>
                <div className="flex gap-8 lg:col-start-1 lg:row-start-1" style={{height: "100px", color: "#0061ad"}}>
                    <div className={"grid grid-cols-1 grid-rows-3"} style={{textWrap: "nowrap"}}>
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

                <div className="flex flex-col justify-between gap-8 lg:col-start-1 lg:row-start-2" style={{gridColumn: 1, gridRow: 2}}>
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

                <div className="flex gap-8 lg:col-start-2 lg:row-start-1" style={{height: "100px", color: "#0061ad"}}>
                    <img src="/pdg.svg" className="h-full aspect-square w-fit" />
                    <div className={"grid grid-cols-1 grid-rows-3 text-wrap items-center"}>
                        <div></div>
                        <Title modifier={"!text-wrap !text-left"} color="#0061ad">Erwan HECAEN</Title>
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
            <div className='flex flex-col gap-8 snap-always snap-center toFade [&>p]:text-left w-full justify-center' style={{color: "#737070"}}>
                <Title color="#0061ad">Ils nous font confiance</Title>
                <Testimonies testimonies={testimonies} />
            </div>
        </Container>

        <Container>
            <div className='flex flex-col gap-8 snap-always snap-center toFade [&>p]:text-left' style={{color: "#737070",}}>
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
            <div className='flex flex-col gap-8 snap-always snap-center toFade [&>p]:text-left' style={{color: "#737070", wordBreak: "break-all"}}>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 justify-center gap-16">
                    <For obj={values} render={(value, i) => {
                        return <div key={i} className="grid grid-cols-1 grid-rows-3">
                            <img src={value.img} />
                            <div className="font-bold" style={{color: value.color}}>{value.title}</div>
                            <div>{value.text}</div>
                        </div>
                    }} />
                </div>
            </div>
        </Container>

        <Container>
            <div className='flex flex-col gap-8 snap-always snap-center toFade [&>p]:text-left' style={{color: "#737070"}}>
                <Title color="#0061ad">Retrouvez nous sur les réseaux sociaux</Title>
                <div className="flex justify-center gap-16">
                    <Link to={"https://www.facebook.com/copycat.groupe/"} style={{display: "contents"}}><Icons icon={"Facebook"} size={32} /></Link>
                    <Link to={"https://www.instagram.com/copycat_group/"} style={{display: "contents"}}><Icons icon={"Instagram"} size={32} /></Link>
                    <Link to={"https://fr.linkedin.com/company/copycat-group"} style={{display: "contents"}}><Icons icon={"Linkedin"} size={32} /></Link>
                </div>
            </div>
        </Container>
    </>)
}

const RSE = ({color}) => {
    return (<>
        <Container>
            <Title>{"Notre Engagement RSE :"}<br />{"Construire un Avenir Responsable"}</Title>
            <hr className="w-full border border-[#0061ad]" />
            <p>{`La RSE, où Responsabilité Sociale des entreprises, consiste pour les entreprises à prendre en compte les aspects sociaux, environnementaux et économiques dans leurs actions, au-delà de la recherche de profits. Cela implique d'agir de manière responsable envers la société et l'environnement, en favorisant des conditions de travail équitables, le respect des droits de l'homme et des pratiques durables.`}</p>
            <hr className="w-full border border-[#0061ad]" />
        </Container>

        <Container>
            <div className="w-full h-fit grid grid-cols-3 p-8 gap-16">
                <For obj={[
                    {title: `Environnemental`,text: `Nous mettons l'accent sur la protection de l'environnement en adoptant des pratiques durables et respectueuses.`,icon: `Environment`, viewBox:"0 0 67.602 68"},
                    {title: `Social`,text: `Nous nous engageons à avoir un impact positif sur la société en maintenant des relations éthiques et en soutenant des initiatives sociales.`,icon: `Social`, viewBox: "0 0 100.97 66.875"},
                    {title: `Sociétal`,text: `Nous valorisons l'épanouissement de notre équipe en favorisant un environnement de travail inclusif et équitable.`,icon: `Society`, viewBox: "0 0 97.561 68"},
                ]} render={({title, text, icon, viewBox="0 0 63.229 88.556"}, i) => <div key={i} className="items-center flex-col flex gap-8">
                    <Icons icon={icon} size={90} viewBox={viewBox} />
                    <Title modifier={"text-xl uppercase"} color="#0061ad">{title}</Title>
                    <p className="text-center">{text}</p>
                </div>} />
            </div>
        </Container>

        

        <Container>
            <div className="w-full h-fit bg-[#0061ad] flex max-lg:flex-col">
                <div className="text-white gap-8 justify-center flex flex-col p-16" style={{ minWidth: (100*752/1683)+"%" }}>
                    <Title color="white"> 1% Pour Les Animaux </Title>
                    <p>CopyCat Group s’engage dans le cadre d’un partenariat avec 1% pour les animaux. </p>
                    <p>Nous reversons 1% de notre chiffre d’affaires afin de protéger les animaux et la biodiversité.</p>
                </div>
                <div style={{aspectRatio: "931 / 581.88", height: "100%"}}>
                    <img src={"/img/page rse/panda-roux-1pourcent-pour-les-animaux.jpg"} alt="" />
                </div>
            </div>
        </Container>

        <Container>
            <Title>{"Nos actions"}</Title>
            <div className="flex flex-col lg:grid lg:grid-cols-3 gap-4 w-full [&>:nth-last-child(-n+1)]:col-span-3">
                <For obj={[
                    {title: `Recyclage des cartouches d'encre`,text: `Nous offrons à nos clients une boîte de tri spécial pour collecter les cartouches usagées. Avec les Ecobox Xerox, nous réduisons l'impact environnemental en triant également nos propres consommables.`,icon: `InkRecycle`,},
                    {title: `Tri des piles`,text: `Nous nous soucions de l’environn-
                    ement et de la sécurité de nos clients. C’est pourquoi nous mettons à leur disposition une boîte de tri pour les piles usagées, afin qu’elles puissent être recyclées ou éliminées de manière appropriée.`,icon: `BatteryRecycle`,},
                    {title: `Tri des déchets papier`,text: `Nous accordons une grande impor-
                    tance au tri responsable des déchets papier. En séparant les documents recyclables des autres déchets, nous contribuons à la réduction de notre empreinte carbone et à la préservation des ressources forestières. `,icon: `PaperRecycle`, viewBox: "0 0 88.323 88.603"},
                    {title: `salariés, Partenaires et fournisseurs`,text: `Chez Copycat Group, nous sommes engagés dans une démarche responsable et durable. C’est pourquoi nous fournissons à nos salariés, fournisseurs et prestataires une charte RSE à laquelle ils doivent se conformer, afin de garantir le respect de l’environnement, des droits humains et des normes éthiques.`,icon: `Partners`, viewBox:"0 0 101.916 72.223"},
                ]} render={({title, text, icon, viewBox="0 0 63.229 88.556"}, i) => <div key={i} className="bg-blue-200 text-left text-wrap">
                    <div className="bg-white p-4 rounded-bl-2xl ml-5 mb-2 mt-0 mr-0" style={{float: "right"}}>
                        <Icons icon={icon} size={90} viewBox={viewBox} />
                    </div>
                    <Title modifier={"text-xl uppercase !text-left p-8 pb-1 break-all"} color="#0061ad">{title}</Title>
                    <p className="p-8 pt-1">{text}</p>
                </div>} />
            </div>
        </Container>

        <button className="bg-[#0061ad] py-4 px-6 rounded-full text-white">Télécharger la charte RSE Copycat Group</button>
    </>)
}

const Contact = ({color}) => {
    return (<>
        <Container>
            <div className="grid grid-cols-2 [&_label]:grid [&_label>input]:w-full  gap-4 w-full text-start" style={{"textWrap": "nowrap"}}>
                <Title color={"#1e40af"} modifier={"col-span-2"}>Faites vous rappeler !</Title>
                <form className="contents">
                    {[
                        [null, "Nom", (props) => <input type="text" {...props} />],
                        [null, "Prénom", (props) => <input type="text" {...props} />],
                        ["col-span-2", "Votre email", (props) => <input type="text" {...props} />],
                        ["col-span-2", "Numéro de téléphone", (props) => <input type="text" {...props} />],
                        ["col-span-2", "Société", (props) => <input type="text" {...props} />],
                        ["col-span-2", "Comment avez-vous connu les services Copycat Group ?", (props) => <select {...props}>
                            <option value=""></option>
                            <option value=""></option>
                            <option value=""></option>
                        </select>],
                        ["col-span-2", "Ville", (props) => <input type="text" {...props} />],
                        ["col-span-2", "Code postal", (props) => <input type="text" {...props} />],
                        ["col-span-2", "Sujet", (props) => <input type="text" {...props} />],
                        ["col-span-2", "Votre message", (props) => <textarea {...props} />],
                    ].map(([modifier, placeholder, Input, name], id) => (
                        <label className={modifier} key={id}>
                            {placeholder} {Input({ placeholder, name: placeholder.toLowerCase().replace(' ', ''), className: "border-gray-300" })}
                        </label>
                    ))}
                    <label className="col-span-2">
                    <button className='p-4 bg-[#0061ad] rounded-full text-white mt-2 mx-auto min-w-[50%]'>Envoyer</button>
                    </label>
                </form>
            </div>
        </Container>
    </>)
}

export default {Home, Solutions, Shop, Print, Labs, Boutiques, APropos, RSE, Contact}