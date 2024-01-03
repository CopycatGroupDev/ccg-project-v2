/* eslint-disable react/no-children-prop */
/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";
import { Header, Footer, CCGCarousel as Carousel, Timeline } from "./comps";
import { useEffect, useState } from "react";
import { For } from "./functions";

export const Page = ({header, title, Body}) => {
    document.querySelector('title').innerHTML = title;
    const [scroll, setScroll] = useState(window.scrollY);
    useEffect(() => {
        const int = setInterval(() => { setScroll(window.scrollY); }, 0);
        return () => { clearInterval(int); };
    }, []);

    return <>
        {<style>{`body{background:rgba(0,0,0,0.025);--thickness: 6px; --page-color: ${header.color};} .colorPage{background-color: var(--page-color);}`}</style>}
        <Header {...header} />
        {Body && <Body color={header.color} />}
        <Footer />
        {scroll > 100 && <button className="fixed z-[999] shadow-md shadow-black/30 bottom-0 right-0 rounded-md py-3 px-4 bg-gradient-to-r from-[#0061ad] to-[#00519d] hover:from-white hover:to-white/80 text-white hover:text-[#0061ad] m-6 flex items-center gap-2 " onClick={() => scrollTo(0,0)}>
            <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} fill="currentColor" viewBox="0 0 16 16"> <path fillRule="evenodd" d="M7.646 2.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1-.708.708L8 3.707 2.354 9.354a.5.5 0 1 1-.708-.708l6-6z" /> <path fillRule="evenodd" d="M7.646 6.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1-.708.708L8 7.707l-5.646 5.647a.5.5 0 0 1-.708-.708l6-6z" /> </svg>
            <span>Retour en haut</span>    
        </button>}
    </>
}

const Home = () => {
    return (<>
        <div className="w-full flex flex-col gap-6 items-center text-base md:text-xl text-gray-400 max-w-[1340px] text-center px-12">
            <div className='flex flex-col gap-6 snap-always snap-center toFade'>
                <h1 className="text-4xl text-black">Nos services</h1>
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
        </div>
        <div className="bg-[#efefef] flex items-center max-sm:h-screen w-full justify-center snap-always snap-center toFade">
            <div className='max-w-[1340px] flex flex-col lg:flex-row w-full [&>div]:w-full px-5 py-10 gap-8'>
                <div className='flex justify-center'>
                    <img src="/pdg.svg" className="w-[65%]" />
                </div>
                <div className='flex flex-col justify-center items-center gap-4 text-xl text-gray-400 text-center'>
                    <h1 className='text-4xl text-black'>Erwan HECAEN</h1>
                    <p>Fondateur et Expert Solutions Documentaires</p>
                    <hr className='border-[#0061ad] !border-gray-400 w-full' />
                    <p>+33 (0) 6 15 94 55 46</p>
                    <p>e.hecaen@copycatgroup.fr</p>
                </div>
            </div>
        </div>
        <div className="flex w-full justify-center text-center md:text-left text-base md:text-xl text-gray-400">
            <div className='max-w-[1340px] flex flex-col lg:flex-row w-full [&>div]:w-full px-12 gap-8 items-center'>
                <div className='flex flex-col gap-6 toFade snap-always snap-center toFade'>
                    <h1 className='text-4xl text-blue-800'>Ils nous font confiance !</h1>
                    <p>Faites comme nos clients, faites-nous confiance pour notre accompagnement et la réalisation de vos projets documentaires ! Adressez-vous à notre guichet unique pour traiter vos besoins d’IMPRESSIONS, de GRAPHISMES, de FOURNITURES, de BUREAUTIQUES et de SOLUTIONS DIGITALES.</p>
                </div>
                <div className='flex border shadow rounded-xl p-4 aspect-square lg:aspect-video snap-always snap-center toFade'>
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
        </div>
        <div className="flex w-full justify-center text-center md:text-left text-base md:text-xl text-gray-400">
            <div className='max-w-[1340px] flex flex-col lg:flex-row w-full [&>div]:w-full px-12 gap-8 items-center'>
                <div className='flex flex-col gap-6 snap-always snap-center toFade'>
                    <div className="grid grid-cols-2 [&_label]:grid [&_label>input]:w-full [&_label>input]:rounded-lg gap-4" style={{"textWrap": "nowrap"}}>
                        <h1 className="text-4xl text-black col-span-2">Faites vous rappeler !</h1>
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
        </div>
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

        <div className='grid grid-cols-1 gap-4 text-center'>
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
        </div>
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
        <div className='grid grid-cols-1 text-4xl gap-4 text-center'>
            <span>Une partie de nos impressions en ligne sur :</span>
            <Link to={'http://www.copycatprint.fr/accueil/'} style={{color: color}}>www.copycatprint.fr</Link>
        </div>
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

const BoutiqueSevres = ({color}) => {
    const [currentTabRealisation, setCurrentTabRealisation] = useState('tex');
    const Svg = ({children, size}) => <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 16 16" height={size} width={size} children={children} />

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

    let bannerPhotos = [
        {img: "https://th.bing.com/th/id/OIP.h16mPGGEhwllt1Q-ufyaVQHaLH?rs=1&pid=ImgDetMain", class: "col-span-1"},
        {img: "https://i.pinimg.com/originals/08/be/5d/08be5d1d79d93f07eb451031774beccb.png", class: "col-span-1"},
        {img: "https://th.bing.com/th/id/OIP.h16mPGGEhwllt1Q-ufyaVQHaLH?rs=1&pid=ImgDetMain", class: "row-span-2"},
        {img: "https://th.bing.com/th/id/OIP.h16mPGGEhwllt1Q-ufyaVQHaLH?rs=1&pid=ImgDetMain", class: "row-span-2"},
    ]

    useEffect(() => {
        console.log(horaires.filter(jour => jour.col == "1"));
        return;
    }, []);

    return (<>
        <div className="w-full flex flex-col gap-6 items-center text-base md:text-xl text-gray-400 max-w-[1340px] text-center px-12">
            <div className='flex flex-col gap-6 snap-always snap-center toFade'>
                <h1 className="text-4xl text-black">La boutique à Sèvres</h1>
                <p>Découvrez Copycat Sèvres, votre boutique de référence pour les fournitures de bureau et les services d'impression. Située au cœur de Sèvres, notre équipe dévouée vous propose une large sélection de produits de qualité et des services personnalisés pour répondre à tous vos besoins professionnels. Faites confiance à notre expertise et à notre engagement envers la satisfaction client pour une expérience d'achat agréable et des solutions documentaires sur mesure.</p>
            </div>
        </div>

        <div className='grid grid-cols-1 lg:grid-cols-2 gap-16 text-center max-w-[1340px] px-12'>
            <img src="image boutique.png" />
            <div className="grid grid-cols-1 grid-rows-min gap-4 snap-center">
                <h1 className="text-4xl text-black">Horaires d'ouverture</h1>
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
        </div>

        <div className='flex flex-col gap-6 snap-always snap-center toFade p-12 text-center'>
            <h1 className="text-4xl text-black">Nos services au sein de la boutique</h1>
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
                <For obj={services} render={(value, key) => <div key={key} className="text-center text-2xl grid grid-cols-1 gap-4 justify-items-center">
                    <img src={"icone "+value.mainImg+".png"} className="rounded-full" />
                    <div>
                        <For obj={value.imgs} render={(img, key) => <img src={img+".png"} className="inline-block h-20" /> } />
                    </div>
                    <div className="text-[#0061ad]">{value.text}</div>
                </div>} />
            </div>
        </div>

        <div className='flex flex-col gap-6 snap-always snap-center items-center toFade px-12'>
            <h1 className="text-4xl text-black">Nos réalisations</h1>
            <div className="flex flex-wrap gap-4 justify-center">
                <For obj={realisations} render={(value, key) => <button key={key} className={"text-xl py-4 px-8 bg-gray-200 rounded-full hover:bg-gray-300"} style={value.name === currentTabRealisation ? {background: color, color: "white"} : {}} onClick={() => setCurrentTabRealisation(value.name)}>{value.text}</button> } />
            </div>
            <div className="flex flex-wrap gap-2 justify-center">
                <For obj={realisations.find(realisation => realisation.name === currentTabRealisation)?.imgs} render={(value, key) => <img key={key} src={realisations.find(realisation => realisation.name === currentTabRealisation)?.root+value+".png"} className="h-64" /> } />
            </div>
        </div>

        <div className="grid grid-cols-2 text-white" style={{background: color}}>
            <div className="p-12">
                <p className="text-4xl pb-4">Pour en découvrir plus : Rejoignez-nous sur Instagram !</p>
                <button className="border border-white rounded-xl p-2 text-2xl">@copycatsevres</button>
            </div>
            <img src="Bannière insta.png" className={"h-full"} />
        </div>

        <div className="w-full flex flex-col gap-6 items-center text-base md:text-xl text-gray-400 max-w-[1340px] text-center px-12">
            <div className='flex flex-col gap-6 snap-always snap-center toFade w-full'>
                <h1 className="text-4xl text-black">Contactez nous</h1>
                <div className="flex w-full justify-center text-center md:text-left text-base md:text-xl text-gray-400">
                    <div className='max-w-[1340px] flex flex-col lg:flex-row w-full [&>div]:w-full gap-8 items-center'>
                        <div className='flex flex-col gap-6 snap-always snap-center toFade'>
                            <div className="grid grid-cols-2 [&_label]:grid [&_label>input]:w-full [&_label>input]:rounded-lg gap-4" style={{"textWrap": "nowrap"}}>
                                <h1 className="text-4xl text-black col-span-2">Faites vous rappeler !</h1>
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
                </div>
            </div>
        </div>
    </>)
}

export default {Home, Solutions, Shop, Print, Labs, BoutiqueSevres}