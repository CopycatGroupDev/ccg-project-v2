/* eslint-disable react-refresh/only-export-components */
import { Navigate, Routes, Route, /* Link */ } from "react-router-dom";
import Body, { Page } from "./pages";
//import { For } from "./functions";

export const archi = [
	{ 
		nav: false, 
		path: "/", 
		title: "Accueil", 
		element: <Page title={"Accueil"} Body={Body.Home} header={{ 
			cover:"", 
			logo:'/ccg.jpg', 
			textLine:['« Document as a Service »', 'Votre interlocuteur privilégié au service du document !'], 
			color:'#0061ad', 
			textBtn:'Demandez une expertise'
		}} /> 
	},
	{ 
		nav: true, 
		path: "/solutions", 
		title: "Copycat Solutions", 
		element: <Page title={"Copycat Solutions"} Body={Body.Solutions} header={{ 
			cover: '-sol', 
			logo: '/sol1.png', 
			textLine: ['Venez en profiter !', 'Audit gratuit, Bureautique, Informatique', "Fort de notre capacité à sélectionner les meilleurs acteurs du marché pour vous accompagner dans l'ensemble de vos projets, COPYCAT SOLUTIONS vous offre un panel de services sur-mesure avec possibilité de maintenance et support"], 
			color: '#09a13b', 
			textBtn: 'Demandez une expertise' 
		}} />, 
		dropdown: [
            {path: "/solutions#bur", title: "Bureautique", text: "Analyse Financière, Vente et location, Rachat de contrat...", icon: "icone bur1.PNG"},
            {path: "/solutions#tel", title: "Téléphonie", text: "Téléphone Fixes, Mobiles, Internet...", icon: "icone tel1.PNG"},
            {path: "/solutions#dig", title: "Digital", text: "Archivage, Dématérialisation de factures, Note de frais...", icon: "icone dig1.PNG"},
            {path: "/solutions#inf", title: "Informatique", text: "Vente maintenance, Infogérance...", icon: "icone inf1.PNG"},
        ]
	},
	{ 
		nav: true, 
		path: "/shop", 
		title: "Copycat Shop", 
		element: <Page title={"Copycat Shop"} Body={Body.Shop} header={{ 
			cover:"-shop", 
			logo:'/ccs3.jpg', 
			textLine:['Achetez vos fournitures, appareils informatiques, multimédia et bien plus !', null, "COPYCAT SHOP regroupe des fournitures en tout genre à des prix imbattables"], 
			color:'#f39115', 
			textBtn:'Commandez en ligne' 
		}} />,
		dropdown: [
            {path: "/shop#inf", title: "Informatique", text: "Ordinateur, Clé USB, Souris, Clavier, Câble HDMI...", icon: "Informatique.png"},
            {path: "/shop#mul", title: "IT / Multimédia", text: "Vidéo projecteur, écran interactif, Visio conférence...", icon: "IT-Multimédia.png"},
            {path: "/shop#bur", title: "Bureautique", text: "Imprimante domestique, Toner, Agenda, Papier, Stylo...", icon: "Bureautique.png"},
            {path: "/shop#div", title: "Divers", text: "Loisirs, Gastronomie et Restauration, Hygiène..", icon: "Divers.png"},
        ]
	},
	{ 
		nav: true, 
		path: "/print", 
		title: "Copycat Print", 
		element: <Page title={"Copycat Print"} Body={Body.Print} header={{ 
			cover:"-print", 
			logo:'/pr1.png', 
			textLine:['10% sur notre site CopycatPrint.fr avec le code promo COPYCAT10', null, `COPYCAT PRINT est capable de vous accompagner sur l'ensemble de vos projets sur-mesure. De la carte de visite à la vitrophanie, jusqu'aux objets personnalisés`], 
			color: /*'#ed00b5'*/ '#F101B8', 
			textBtn:'Imprimez vos documents' 
		}} />,
		dropdown: [
            {path: "/print#rep", title: "Reprographie / Imprimerie", text: "Reliure, Plastification, Flyer...", icon: "Imprimerie.png"},
            {path: "/print#mug", title: "Objet Personnalisé", text: "Mug, Vêtement, Stylo, Clé usb...", icon: "Objets personnalisés.png"},
            {path: "/print#sup", title: "Support PLV", text: "Roll'up, Drapeau, Vitrophanie..", icon: "Signalétique-PLV.png"},
        ]
	},
	{ 
		nav: true, 
		path: "/labs", 
		title: "Copycat Labs", 
		element: <Page title={"Copycat Labs"} Body={Body.Labs} header={{ 
			cover:"-labs", 
			logo:'/lab1.png', 
			textLine:['Réaliser un audit gratuit pour vos projets', null, 'COPYCAT LABS est un adepte des technologies de programmons et de la compréhension globale du système informatique dans lequel nous évoluons, ainsi que la compétence des outils graphique pour vous accompagner au mieux dans vos projets de création'], 
			color:'#6e2380', 
			textBtn:'Contactez nous' 
		}} />,
		dropdown: [
			{path : "/labs#dev", title : "Développement Web", text : "Développement de site sur-mesure, Programmation...", icon: "Développement web.png"},
			{path : "/labs#gra", title : "Graphisme", text : "Identité visuelle, Communication visuelle, Logo...", icon: "Création graphique.png"},
		] 
	},
	{ 
		nav: true, 
		path: "/boutiques", 
		title: "Boutiques", 
		element: <Body.Boutiques.Menu title={"Boutiques Copycat"} header={{ 
			cover:"-boutique", 
			logo: null,
			textLine:[], 
			color:'#0061ad',
		}} />,
		dropdown: [
			{path : "/sevres", title : "Copycat Sèvres", icon: 'icone boutique.png'},
			{path : "/boulogne", title : "Copycat DPS Boulogne", icon: 'icone boutique.png'},
		]
	},
	{ 
		nav: true, 
		path: "/about", 
		title: "En savoir plus", 
		element: <Page title={"A propos"} Body={Body.APropos} header={{ 
			cover:"-ccg", 
			logo: null,
			textLine:[<>
				{`Avec des valeurs hautes en couleurs, Copycat Group se démarque sur le marché du document
				grace à un soin tout particulier apporté à notre relationnel ou encore au respect des valeurs
				importantes telles que la reforestation. Vous servir de la meilleure des façons reste notre
				objectif numéro un ! Nous développons constamment de nouveaux projets, suivons l'évolution
				des solutions digitales et de l'innovation du print.... Nous vous guidons pas à pas, toujours
				dans le respect de notre crédo :`}<br />{` " Document as a Service " `}
			</>], 
			color:'#0061ad', 
			textBtn:'Demandez une expertise' ,
			fullText: true,
			title: "A propos de Copycat Group"
		}}  />, 
		dropdown: [
			{path : "/about", title : "A propos", icon: 'icone a  propos.png'},
			{path : "/contact", title : "Contact", icon: 'icone formulaire.png', disabled: true},
			{path : "/rse", title : "Politique RSE", icon: 'icone RSE.png', disabled: true},
		] 
	},
	{ 
		nav: false, 
		path: "/about", 
		title: "A propos", 
		element: <Page title={"A propos"} /> 
	},
	{ 
		nav: false, 
		path: "/sevres", 
		title: "Copycat Sèvres", 
		element: <Page title={"Copycat Sèvres"} Body={Body.Boutiques.Sevres} header={{ 
			cover:"-boutique", 
			logo: null, 
			textLine:['Retrouvez notre boutique COPYCAT Sèvres avec un service de photocopie, reprographie et impression numérique', <svg key={1} xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 16 16" className="h-8 lg:h-14"> <path fillRule="evenodd" d="M8 1a.5.5 0 0 1 .5.5v11.793l3.146-3.147a.5.5 0 0 1 .708.708l-4 4a.5.5 0 0 1-.708 0l-4-4a.5.5 0 0 1 .708-.708L7.5 13.293V1.5A.5.5 0 0 1 8 1" /> </svg>], 
			color:'#ed01b5',
		}} />,
		dropdown: []
	},
	{ 
		nav: false, 
		path: "/boulogne", 
		title: "Copycat DPS Boulogne", 
		element: <Page title={"Copycat DPS Boulogne"} Body={Body.Boutiques.Boulogne} header={{ 
			cover:"-boutique", 
			logo: null, 
			textLine:['Retrouvez notre boutique COPYCAT DPS pour l\'achat de vos fournitures informatique, un service de Photocopie - reprographie et impression numérique. ', <svg key={1} xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 16 16" className="h-8 lg:h-14"> <path fillRule="evenodd" d="M8 1a.5.5 0 0 1 .5.5v11.793l3.146-3.147a.5.5 0 0 1 .708.708l-4 4a.5.5 0 0 1-.708 0l-4-4a.5.5 0 0 1 .708-.708L7.5 13.293V1.5A.5.5 0 0 1 8 1" /> </svg>], 
			color:'#f39113',
		}} />,
		dropdown: []
	},
	{ 
		nav: false, 
		path: "*", 
		element: <Navigate to={"/"} /> 
	}
];

export const Map = () => <Routes> { archi.map((route, id) => <Route key={id} path={route.path} element={route.element} />) } </Routes>

/*


	{ nav: true, path: "", element: <Page title={""} header={{
		cover:"", logo: null,textLine:['', '', ''], color:'', textBtn:''
	}} /> },

*/