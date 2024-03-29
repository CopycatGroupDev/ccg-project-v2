/* eslint-disable react/no-unescaped-entities */
/* eslint-disable react-refresh/only-export-components */
import { Navigate, Routes, Route /* Link */ } from 'react-router-dom'
import Page, * as Body from './pages'
import React from 'react'

import bannerAccueil from './assets/banner-bg.png'
import bannerSolutions from './assets/banner-bg-sol.png'
import bannerBoutique from './assets/banner-bg-sevres.svg'
import bannerBoulogne from './assets/banner-bg-boulogne.svg'
import bannerContact from './assets/Page contact.png'
import bannerLabs from './assets/banner-bg-labs.png'
import bannerPrint from './assets/banner-bg-print.png'
import bannerRSE from './assets/banner-bg-rse.png'
import bannerShop from './assets/banner-bg-shop.png'
import bannerCCG from './assets/Page boutique et a propos.png'

import logoSèvres from './assets/copycat-sevres-logo.png'
import logoBoulogne from './assets/Boulogne.svg'
import { Menu } from './comps'
import { timelines } from './arrays'

const modalOpener = (timelineArray) => ({ modal }) => {
  return ({
    onClick: ({ event }) => {
      modal.opener(true)
      modal.select(timelineArray.map(({ title }) => title))
      modal.default(0)
    }
  })
}

export const headerProps = {
  Accueil: { cover: bannerAccueil, logo: '/ccg.jpg', textLine: ['« Document as a Service »', 'Votre interlocuteur privilégié au service du document !'], color: '#0061ad', textBtn: 'Demandez une expertise' },
  Solutions: { cover: bannerSolutions, logo: '/sol1.png', textLine: ['Venez en profiter !', 'Audit gratuit, Bureautique, Informatique', "Fort de notre capacité à sélectionner les meilleurs acteurs du marché pour vous accompagner dans l'ensemble de vos projets, COPYCAT SOLUTIONS vous offre un panel de services sur-mesure avec possibilité de maintenance et support"], color: '#09a13b', textBtn: 'Demandez une expertise', btnProps: modalOpener(timelines.Solutions) },
  Shop: { cover: bannerShop, logo: '/ccs3.jpg', textLine: ['Achetez vos fournitures, appareils informatiques, multimédia et bien plus !', null, 'COPYCAT SHOP regroupe des fournitures en tout genre à des prix imbattables'], color: '#f39115', textBtn: 'Commandez en ligne', btnProps: () => ({ to: '/shop#shop' }) },
  Print: { cover: bannerPrint, logo: '/pr1.png', textLine: ['10% sur notre site CopycatPrint.fr avec le code promo COPYCAT10', null, 'COPYCAT PRINT est capable de vous accompagner sur l\'ensemble de vos projets sur-mesure. De la carte de visite à la vitrophanie, jusqu\'aux objets personnalisés'], color: /* '#ed00b5' */ '#F101B8', textBtn: 'Imprimez vos documents', btnProps: modalOpener(timelines.Print) },
  Labs: { cover: bannerLabs, logo: '/lab1.png', textLine: ['Réaliser un audit gratuit pour vos projets', null, 'COPYCAT LABS est un adepte des technologies de programmons et de la compréhension globale du système informatique dans lequel nous évoluons, ainsi que la compétence des outils graphique pour vous accompagner au mieux dans vos projets de création'], color: '#6e2380', textBtn: 'Contactez nous', btnProps: modalOpener(timelines.Labs) },
  Boutiques: { cover: bannerCCG, logo: null, textLine: [], color: '#0061ad' },
  APropos: { cover: bannerCCG, logo: null, textLine: [<>{'Avec des valeurs hautes en couleurs, Copycat Group se démarque sur le marché du document grace à un soin tout particulier apporté à notre relationnel ou encore au respect des valeurs importantes telles que la reforestation. Vous servir de la meilleure des façons reste notre objectif numéro un ! Nous développons constamment de nouveaux projets, suivons l\'évolution des solutions digitales et de l\'innovation du print.... Nous vous guidons pas à pas, toujours dans le respect de notre crédo :'}<br />{' " Document as a Service " '}</>], color: '#0061ad', textBtn: 'Demandez une expertise', fullText: true, title: 'A propos de Copycat Group' },
  RSE: { cover: bannerRSE, logo: null, textLine: [''], color: '#0061ad', fullText: false, kurz: true },
  Contact: { cover: bannerContact, logo: null, textLine: ['Chez Copycat Group, votre opinion compte. Nous sommes ravis de vous entendre et sommes là pour répondre à toutes vos questions, suggestions ou demandes. Remplissez simplement le formulaire ci-dessous et notre équipe se fera un plaisir de vous assister dans les meilleurs délais.'], color: '#0061ad', fullText: true, mid: true, title: 'Formulaire de contact' },
  Sevres: { cover: bannerBoutique, logo: logoSèvres, textLine: ['Retrouvez notre boutique COPYCAT Sèvres avec un service de photocopie, reprographie et impression numérique', <svg key={1} xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 16 16" className="h-8 lg:h-14"> <path fillRule="evenodd" d="M8 1a.5.5 0 0 1 .5.5v11.793l3.146-3.147a.5.5 0 0 1 .708.708l-4 4a.5.5 0 0 1-.708 0l-4-4a.5.5 0 0 1 .708-.708L7.5 13.293V1.5A.5.5 0 0 1 8 1" /> </svg>], color: '#ed01b5' },
  Boulogne: { cover: bannerBoulogne, logo: logoBoulogne, textLine: ['Retrouvez notre boutique COPYCAT DPS pour l\'achat de vos fournitures informatique, un service de Photocopie - reprographie et impression numérique. ', <svg key={1} xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 16 16" className="h-8 lg:h-14"> <path fillRule="evenodd" d="M8 1a.5.5 0 0 1 .5.5v11.793l3.146-3.147a.5.5 0 0 1 .708.708l-4 4a.5.5 0 0 1-.708 0l-4-4a.5.5 0 0 1 .708-.708L7.5 13.293V1.5A.5.5 0 0 1 8 1" /> </svg>], color: '#f39113' },
  Mentions: { cover: bannerCCG, logo: null, textLine: [<> </>], color: '#0061ad', fullText: true, title: 'Mentions légales', navTextColor: 'white' },
  Confi: { cover: bannerCCG, logo: null, textLine: [<> </>], color: '#0061ad', fullText: true, title: 'Politique de confidentialité', navTextColor: 'white' }
}

export const dropdowns = {
  Solutions: [
    { path: '/solutions#bur', title: 'Bureautique', text: 'Analyse Financière, Vente et location, Rachat de contrat...', icon: 'icone bur1.png' },
    { path: '/solutions#tel', title: 'Téléphonie', text: 'Téléphone Fixes, Mobiles, Internet...', icon: 'icone tel1.png' },
    { path: '/solutions#dig', title: 'Digital', text: 'Archivage, Dématérialisation de factures, Note de frais...', icon: 'icone dig1.png' },
    { path: '/solutions#inf', title: 'Informatique', text: 'Vente maintenance, Infogérance...', icon: 'icone inf1.png' }
  ],
  Shop: [
    { path: '/shop#inf', title: 'Informatique', text: 'Ordinateur, Clé USB, Souris, Clavier, Câble HDMI...', icon: 'Informatique.png' },
    { path: '/shop#mul', title: 'IT / Multimédia', text: 'Vidéo projecteur, écran interactif, Visio conférence...', icon: 'IT-Multimédia.png' },
    { path: '/shop#bur', title: 'Bureautique', text: 'Imprimante domestique, Toner, Agenda, Papier, Stylo...', icon: 'Bureautique.png' },
    { path: '/shop#div', title: 'Divers', text: 'Loisirs, Gastronomie et Restauration, Hygiène..', icon: 'Divers.png' }
  ],
  Print: [
    { path: '/print#rep', title: 'Reprographie / Imprimerie', text: 'Reliure, Plastification, Flyer...', icon: 'Imprimerie.png' },
    { path: '/print#mug', title: 'Objet Personnalisé', text: 'Mug, Vêtement, Stylo, Clé usb...', icon: 'Objets personnalisés.png' },
    { path: '/print#sup', title: 'Support PLV', text: "Roll'up, Drapeau, Vitrophanie..", icon: 'Signalétique-PLV.png' }
  ],
  Labs: [
    { path: '/labs#dev', title: 'Développement Web', text: 'Développement de site sur-mesure, Programmation...', icon: 'Développement web.png' },
    { path: '/labs#gra', title: 'Graphisme', text: 'Identité visuelle, Communication visuelle, Logo...', icon: 'Création graphique.png' },
    { path: '/labs#com', title: 'Communication digitale', text: 'LinkedIn, Facebook, Instagram...', icon: 'Création graphique.png' }
  ],
  Boutiques: [
    { path: '/sevres', title: 'Copycat Sèvres', icon: 'icone boutique.png' },
    { path: '/boulogne', title: 'Copycat DPS Boulogne', icon: 'icone boutique.png' }
  ],
  APropos: [
    { path: '/about', title: 'A propos', icon: 'icone a  propos.png' },
    { path: '/contact', title: 'Contact', icon: 'icone formulaire.png' /* disabled: true */ },
    { path: '/rse', title: 'Politique RSE', icon: 'icone RSE.png' }
  ]
}

export const archi = [
  { nav: false, path: '/', title: 'Accueil', element: <Page title={'Accueil'} Body={Body.Home} header={headerProps.Accueil} /> },
  { nav: true, path: '/solutions', title: 'Copycat Solutions', element: <Page title={'Copycat Solutions'} Body={Body.Solutions} header={headerProps.Solutions} />, dropdown: dropdowns.Solutions },
  { nav: true, path: '/shop', title: 'Copycat Shop', element: <Page title={'Copycat Shop'} Body={Body.Shop} header={headerProps.Shop} />, dropdown: dropdowns.Shop },
  { nav: true, path: '/print', title: 'Copycat Print', element: <Page title={'Copycat Print'} Body={Body.Print} header={headerProps.Print} />, dropdown: dropdowns.Print },
  { nav: true, path: '/labs', title: 'Copycat Labs', element: <Page title={'Copycat Labs'} Body={Body.Labs} header={headerProps.Labs} />, dropdown: dropdowns.Labs },
  { nav: true, path: '/boutiques', title: 'Boutiques', element: <Menu title={'Boutiques Copycat'} header={headerProps.Boutiques} />, dropdown: dropdowns.Boutiques },
  { nav: true, path: '/about', title: 'En savoir plus', element: <Page title={'A propos'} Body={Body.APropos} header={headerProps.APropos} />, dropdown: dropdowns.APropos },
  { nav: false, path: '/rse', title: 'Politique RSE', element: <Page title={'Politique RSE'} Body={Body.Rse} header={headerProps.RSE} /> },
  { nav: false, path: '/contact', title: 'Contact', element: <Page title={'Contact'} Body={Body.Contact} header={headerProps.Contact} /> },
  { nav: false, path: '/sevres', title: 'Copycat Sèvres', element: <Page title={'Copycat Sèvres'} Body={Body.Boutiques.Sevres} header={headerProps.Sevres} />, dropdown: [] },
  { nav: false, path: '/boulogne', title: 'Copycat DPS Boulogne', element: <Page title={'Copycat DPS Boulogne'} Body={Body.Boutiques.Boulogne} header={headerProps.Boulogne} />, dropdown: [] },
  { nav: false, path: '/mentions-legales', title: 'Mentions légales', element: <Page title={'Mentions légales'} Body={Body.Mentions} header={headerProps.Mentions} />, dropdown: [] },
  { nav: false, path: '/confidentialité', title: 'Politique de confidentialité', element: <Page title={'Politique de confidentialité'} Body={Body.Confi} header={headerProps.Confi} />, dropdown: [] },
  { nav: false, path: '*', element: <Navigate to={'/'} /> }
]

export const Map = () => <Routes>
    { archi.map(({ path, element }, id) => <Route key={id} path={path} element={element} />) }
  </Routes>
