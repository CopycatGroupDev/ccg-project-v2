/* eslint-disable react/no-unescaped-entities */
/* eslint-disable react-refresh/only-export-components */
import { Navigate, Routes, Route /* Link */ } from 'react-router-dom'
import Body, { Page } from './pages'
import React from 'react'

import bannerAccueil from './assets/banner-bg.png'
import bannerSolutions from './assets/banner-bg-sol.png'
import bannerBoutique from './assets/banner-bg-sevres.svg'
import bannerBoulogne from './assets/banner-bg-boulogne.svg'
import bannerContact from './assets/banner-bg-contact.png'
import bannerLabs from './assets/banner-bg-labs.png'
import bannerPrint from './assets/banner-bg-print.png'
import bannerRSE from './assets/banner-bg-rse.png'
import bannerShop from './assets/banner-bg-shop.png'
import bannerCCG from './assets/banner-bg-ccg.png'

import logoSèvres from './assets/copycat-sevres-logo.png'
import { Container, Menu, Title } from './comps'
import { timelines } from './arrays'

export const archi = []

archi.push({
  nav: false,
  path: '/',
  title: 'Accueil',
  element: <Page title={'Accueil'} Body={Body.Home} header={{
    cover: bannerAccueil,
    logo: '/ccg.jpg',
    textLine: ['« Document as a Service »', 'Votre interlocuteur privilégié au service du document !'],
    color: '#0061ad',
    textBtn: 'Demandez une expertise'
  }} />
})

archi.push({
  nav: true,
  path: '/solutions',
  title: 'Copycat Solutions',
  element: <Page title={'Copycat Solutions'} Body={Body.Solutions} header={{
    cover: bannerSolutions,
    logo: '/sol1.png',
    textLine: ['Venez en profiter !', 'Audit gratuit, Bureautique, Informatique', "Fort de notre capacité à sélectionner les meilleurs acteurs du marché pour vous accompagner dans l'ensemble de vos projets, COPYCAT SOLUTIONS vous offre un panel de services sur-mesure avec possibilité de maintenance et support"],
    color: '#09a13b',
    textBtn: 'Demandez une expertise',
    btnProps: ({ modal }) => {
      return ({
        onClick: ({ event }) => {
          modal.opener(true)
          modal.select(timelines.Solutions.map(({ title }) => title))
          modal.default(0)
        }
      })
    }
  }} />,
  dropdown: [
    { path: '/solutions#bur', title: 'Bureautique', text: 'Analyse Financière, Vente et location, Rachat de contrat...', icon: 'icone bur1.png' },
    { path: '/solutions#tel', title: 'Téléphonie', text: 'Téléphone Fixes, Mobiles, Internet...', icon: 'icone tel1.png' },
    { path: '/solutions#dig', title: 'Digital', text: 'Archivage, Dématérialisation de factures, Note de frais...', icon: 'icone dig1.png' },
    { path: '/solutions#inf', title: 'Informatique', text: 'Vente maintenance, Infogérance...', icon: 'icone inf1.png' }
  ]
})

archi.push({
  nav: true,
  path: '/shop',
  title: 'Copycat Shop',
  element: <Page title={'Copycat Shop'} Body={Body.Shop} header={{
    cover: bannerShop,
    logo: '/ccs3.jpg',
    textLine: ['Achetez vos fournitures, appareils informatiques, multimédia et bien plus !', null, 'COPYCAT SHOP regroupe des fournitures en tout genre à des prix imbattables'],
    color: '#f39115',
    textBtn: 'Commandez en ligne',
    btnProps: () => {
      return ({
        to: '/shop#shop'
      })
    }
  }} />,
  dropdown: [
    { path: '/shop#inf', title: 'Informatique', text: 'Ordinateur, Clé USB, Souris, Clavier, Câble HDMI...', icon: 'Informatique.png' },
    { path: '/shop#mul', title: 'IT / Multimédia', text: 'Vidéo projecteur, écran interactif, Visio conférence...', icon: 'IT-Multimédia.png' },
    { path: '/shop#bur', title: 'Bureautique', text: 'Imprimante domestique, Toner, Agenda, Papier, Stylo...', icon: 'Bureautique.png' },
    { path: '/shop#div', title: 'Divers', text: 'Loisirs, Gastronomie et Restauration, Hygiène..', icon: 'Divers.png' }
  ]
})

archi.push({
  nav: true,
  path: '/print',
  title: 'Copycat Print',
  element: <Page title={'Copycat Print'} Body={Body.Print} header={{
    cover: bannerPrint,
    logo: '/pr1.png',
    textLine: ['10% sur notre site CopycatPrint.fr avec le code promo COPYCAT10', null, 'COPYCAT PRINT est capable de vous accompagner sur l\'ensemble de vos projets sur-mesure. De la carte de visite à la vitrophanie, jusqu\'aux objets personnalisés'],
    color: /* '#ed00b5' */ '#F101B8',
    textBtn: 'Imprimez vos documents',
    btnProps: ({ modal }) => {
      return ({
        onClick: ({ event }) => {
          modal.opener(true)
          modal.select(timelines.Print.map(({ title }) => title))
          modal.default(0)
        }
      })
    }
  }} />,
  dropdown: [
    { path: '/print#rep', title: 'Reprographie / Imprimerie', text: 'Reliure, Plastification, Flyer...', icon: 'Imprimerie.png' },
    { path: '/print#mug', title: 'Objet Personnalisé', text: 'Mug, Vêtement, Stylo, Clé usb...', icon: 'Objets personnalisés.png' },
    { path: '/print#sup', title: 'Support PLV', text: "Roll'up, Drapeau, Vitrophanie..", icon: 'Signalétique-PLV.png' }
  ]
})

archi.push({
  nav: true,
  path: '/labs',
  title: 'Copycat Labs',
  element: <Page title={'Copycat Labs'} Body={Body.Labs} header={{
    cover: bannerLabs,
    logo: '/lab1.png',
    textLine: ['Réaliser un audit gratuit pour vos projets', null, 'COPYCAT LABS est un adepte des technologies de programmons et de la compréhension globale du système informatique dans lequel nous évoluons, ainsi que la compétence des outils graphique pour vous accompagner au mieux dans vos projets de création'],
    color: '#6e2380',
    textBtn: 'Contactez nous',
    btnProps: ({ modal }) => {
      return ({
        onClick: ({ event }) => {
          modal.opener(true)
          modal.select(timelines.Labs.map(({ title }) => title))
          modal.default(0)
        }
      })
    }
  }} />,
  dropdown: [
    { path: '/labs#dev', title: 'Développement Web', text: 'Développement de site sur-mesure, Programmation...', icon: 'Développement web.png' },
    { path: '/labs#gra', title: 'Graphisme', text: 'Identité visuelle, Communication visuelle, Logo...', icon: 'Création graphique.png' },
    { path: '/labs#com', title: 'Communication digitale', text: '...', icon: 'Création graphique.png' }
  ]
})

archi.push({
  nav: true,
  path: '/boutiques',
  title: 'Boutiques',
  element: <Menu title={'Boutiques Copycat'} header={{
    cover: bannerBoutique,
    logo: null,
    textLine: [],
    color: '#0061ad',
    navTextColor: 'white'
  }} />,
  dropdown: [
    { path: '/sevres', title: 'Copycat Sèvres', icon: 'icone boutique.png' },
    { path: '/boulogne', title: 'Copycat DPS Boulogne', icon: 'icone boutique.png' }
  ]
})

archi.push({
  nav: true,
  path: '/about',
  title: 'En savoir plus',
  element: <Page title={'A propos'} Body={Body.APropos} header={{
    cover: bannerCCG,
    logo: null,
    textLine: [<>{'Avec des valeurs hautes en couleurs, Copycat Group se démarque sur le marché du document grace à un soin tout particulier apporté à notre relationnel ou encore au respect des valeurs importantes telles que la reforestation. Vous servir de la meilleure des façons reste notre objectif numéro un ! Nous développons constamment de nouveaux projets, suivons l\'évolution des solutions digitales et de l\'innovation du print.... Nous vous guidons pas à pas, toujours dans le respect de notre crédo :'}<br />{' " Document as a Service " '}</>],
    color: '#0061ad',
    textBtn: 'Demandez une expertise',
    fullText: true,
    title: 'A propos de Copycat Group',
    navTextColor: 'white'
  }} />,
  dropdown: [
    { path: '/about', title: 'A propos', icon: 'icone a  propos.png' },
    { path: '/contact', title: 'Contact', icon: 'icone formulaire.png' /* disabled: true */ },
    { path: '/rse', title: 'Politique RSE', icon: 'icone RSE.png' }
  ]
})

archi.push({
  nav: false,
  path: '/rse',
  title: 'Politique RSE',
  element: <Page title={'Politique RSE'} Body={Body.Rse} header={{
    cover: bannerRSE,
    logo: null,
    textLine: [''],
    color: '#ed01b5',
    fullText: false,
    kurz: true
  }} />
})

archi.push({
  nav: false,
  path: '/contact',
  title: 'Contact',
  element: <Page title={'Contact'} Body={Body.Contact} header={{
    cover: bannerContact,
    logo: null,
    textLine: ['Chez Copycat Group, votre opinion compte. Nous sommes ravis de vous entendre et sommes là pour répondre à toutes vos questions, suggestions ou demandes. Remplissez simplement le formulaire ci-dessous et notre équipe se fera un plaisir de vous assister dans les meilleurs délais.'],
    color: '#ed01b5',
    fullText: true,
    mid: true,
    title: 'Formulaire de contact',
    navTextColor: 'white'
  }} />
})

archi.push({
  nav: false,
  path: '/sevres',
  title: 'Copycat Sèvres',
  element: <Page title={'Copycat Sèvres'} Body={Body.Boutiques.Sevres} header={{
    cover: bannerBoutique,
    logo: logoSèvres,
    textLine: ['Retrouvez notre boutique COPYCAT Sèvres avec un service de photocopie, reprographie et impression numérique', <svg key={1} xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 16 16" className="h-8 lg:h-14"> <path fillRule="evenodd" d="M8 1a.5.5 0 0 1 .5.5v11.793l3.146-3.147a.5.5 0 0 1 .708.708l-4 4a.5.5 0 0 1-.708 0l-4-4a.5.5 0 0 1 .708-.708L7.5 13.293V1.5A.5.5 0 0 1 8 1" /> </svg>],
    color: '#ed01b5'
  }} />,
  dropdown: []
})

archi.push({
  nav: false,
  path: '/boulogne',
  title: 'Copycat DPS Boulogne',
  element: <Page title={'Copycat DPS Boulogne'} Body={Body.Boutiques.Boulogne} header={{
    cover: bannerBoulogne,
    logo: logoSèvres,
    textLine: ['Retrouvez notre boutique COPYCAT DPS pour l\'achat de vos fournitures informatique, un service de Photocopie - reprographie et impression numérique. ', <svg key={1} xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 16 16" className="h-8 lg:h-14"> <path fillRule="evenodd" d="M8 1a.5.5 0 0 1 .5.5v11.793l3.146-3.147a.5.5 0 0 1 .708.708l-4 4a.5.5 0 0 1-.708 0l-4-4a.5.5 0 0 1 .708-.708L7.5 13.293V1.5A.5.5 0 0 1 8 1" /> </svg>],
    color: '#f39113'
  }} />,
  dropdown: []
})

archi.push({
  nav: false,
  path: '/mentions-legales',
  title: 'Mentions légales',
  element: <Page title={'Mentions légales'} header={{
    cover: bannerCCG,
    logo: null,
    textLine: [<> </>],
    color: '#0061ad',
    fullText: true,
    title: 'Mentions légales',
    navTextColor: 'white'
  }} Body={() => <Container>
    <Title>Informations éditeurs</Title>
    <p>Le site internet, accessible à l’URL https://copycatgroup.fr/, est édité par : Copycat Group, société inscrite au R.C.S. de Nanterre sous le numéro RCS Nanterre B 852 536 309, dont le siège social est situé au 14 BD GEORGES CLEMENCEAU 92400 COURBEVOIE, représenté(e) par Erwan Hecaen dûment habilité(e). Le numéro individuel TVA de l’éditeur est : FR45852536309.</p>
    <Title>Hébergement</Title>
    <p>Le Site est hébergé par la société Ionos, situé 7 Place de la Gare - 57200 Sarreguemines.</p>
    <Title>Directeur de publication</Title>
    <p>Le Directeur de la publication du site est Erwan Hecaen.</p>
    <Title>Décharge de responsabilité</Title>
    <p>Malgré le contrôle minutieux des contenus, nous ne sommes pas responsables du contenu des liens externes. Les propriétaires des pages liées sont exclusivement responsables de ce contenu.</p>
    <Title>Propriété intellectuelle</Title>
    <p>Ce site relève de la législation sur les droits d’auteur et les droits de propriété littéraire et artistique. Tous les droits de propriété intellectuelle, notamment les droits de marque, les droits d’auteur, les textes, les illustrations, photos ou logos sont la propriété de Copycat Group. Les éléments de ce site ne peuvent être utilisés, modifiés altérés ou reproduits totalement ou partiellement ou encore faire l’objet d’une quelconque exploitation. Les reproductions, sur support papier ou informatique de tout ou partie du site, sont autorisées sous réserve qu’elles soient strictement réservées à un usage personnel, excluant tout usage à des fins publicitaires et/ou commerciales, et qu’elles soient conformes aux dispositions de l’article L122-5 du Code de la Propriété Intellectuelle et qu’aucun des avertissements concernant la propriété du site et de ces éléments ne soit effacé. A l’exception des dispositions ci-dessus, toute reproduction, représentation, utilisation ou modification, par quelque procédé que ce soit et sur quelque support que ce soit, de tout ou partie des pages du site, sans avoir obtenu l’autorisation préalable de Copycat Group, est strictement interdite. Vous vous interdirez également d’introduire des données sur le site web https://copycat-shop.fr/fr/ qui modifieraient ou qui seraient susceptibles de modifier le contenu ou l’apparence des données, de la présentation ou de l’organisation du site ou des œuvres figurant sur le site web de Copycat Group et par quelques procédés que ce soit.</p>
  </Container>} />,
  dropdown: []
})

archi.push({
  nav: false,
  path: '/confidentialité',
  title: 'Politique de confidentialité',
  element: <Page title={'Politique de confidentialité'} header={{
    cover: bannerCCG,
    logo: null,
    textLine: [<> </>],
    color: '#0061ad',
    fullText: true,
    title: 'Politique de confidentialité',
    navTextColor: 'white'
  }} Body={() => <Container>
    <Title>Informations générales</Title>
    <p>Nous prenons la protection des données à caractère personnel très au sérieux et respectons les dispositions légales en la matière. La déclaration suivante vous informe sur le type de données à caractère personnel collectées sur ce site Internet, la finalité de leur utilisation et la mesure dans laquelle ces données sont mises à la disposition de tiers.</p>
    <Title>Déclaration de protection des données</Title>
    <p>L'utilisation de notre site est possible sans fournir de données personnelles. L'utilisation de certains services de notre site peut faire l'objet de réglementations différentes, qui dans ce cas sont expliquées séparément ci-dessous. Vos données personnelles (par ex. nom, adresse, e-mail, numéro de téléphone, etc.) ne seront traitées par nous conformément aux dispositions de la loi française sur la protection des données qu'après adaptation de l'ordonnance de base sur la protection des données. Les données sont personnelles si elles peuvent être clairement attribuées à une personne physique spécifique. La base juridique de la protection des données se trouve dans la loi sur la protection des données (RGPD). Les règlements suivants vous informent à cet égard sur le type, l'étendue et la finalité de la collecte, de l'utilisation et du traitement des données personnelles par le fournisseur.</p>
    <Title>Cookies</Title>
    <p>Nous utilisons des cookies sur notre site pour la reconnaissance de l'utilisation multiple de notre offre par le même utilisateur/propriétaire de la connexion Internet. Les cookies sont de petits fichiers texte que votre navigateur Internet stocke sur votre ordinateur. Ils servent à optimiser notre site web et nos offres. Il s'agit généralement de "cookies de session", qui sont effacés après la fin de votre visite. Dans certains cas, cependant, ces cookies fournissent des informations afin de vous reconnaître automatiquement. Cette reconnaissance est basée sur l'adresse IP stockée dans les cookies. Les informations ainsi obtenues servent à optimiser nos offres et à vous faciliter l'accès à notre site. Vous pouvez refuser l'utilisation de cookies en sélectionnant les paramètres appropriés sur votre navigateur, mais veuillez noter que si vous le faites, il se peut que vous ne puissiez pas utiliser toutes les fonctionnalités de notre site Web.</p>
    <Title>Responsable du traitement des données</Title>
    <p>La présente politique de protection des données s’applique au traitement des données réalisé par Copycat Group, une société sise 14 BD GEORGES CLEMENCEAU 92400 COURBEVOIE, tél. : 01 45 07 98 00, que vous pouvez contacter à l’adresse e.hecaen@copycatgroup.fr.</p>
    <Title>Délégué à la protection des données</Title>
    <p>Vous pouvez nous faire part de vos préoccupations en matière de protection des données en écrivant à notre délégué à la protection des données à l’adresse e.hecaen@copycatgroup.fr ou par courrier postal à Copycat Group, à l’attention du délégué à la protection des données, 14 BD GEORGES CLEMENCEAU 92400 COURBEVOIE.</p>
    <Title>Durée de stockage de vos données</Title>
    <p>Quand vous remplissez un formulaire de contact sur notre site, les données inscrites dans le formulaire de contact sont collectées et conservées indéfiniment. Cela nous permet de répondre à votre demande.</p>
    <Title>Droits sur vos données</Title>
    <p>Si vous avez rempli un formulaire de contact sur le site, vous pouvez demander à recevoir un fichier contenant toutes les données personnelles que nous possédons à votre sujet, incluant celles que vous nous avez fournies. Vous pouvez également demander la suppression des données personnelles vous concernant. Cela ne prend pas en compte les données stockées à des fins administratives, légales ou pour des raisons de sécurité.</p>
    <Title>Newsletter</Title>
    <p>Sur notre site web, nous vous offrons la possibilité de vous abonner à notre newsletter. Avec cette lettre d'information, nous vous informons régulièrement de nos offres. Pour recevoir notre newsletter, nous avons besoin de votre adresse e-mail valide, qui peut être une donnée personnelle. Lorsque vous vous inscrivez à notre newsletter, nous enregistrons votre adresse IP ainsi que la date et l'heure de votre inscription. Dans l'éventualité où un tiers utiliserait votre adresse e-mail et s'abonnerait à notre newsletter à votre insu, ceci sert de protection de notre part. Nous ne collectons pas d'autres données. Les données ainsi collectées ne seront utilisées que pour s'abonner à notre newsletter. Les données ne seront pas transmises à des tiers. Il n'y a pas non plus de comparaison des données ainsi recueillies avec les données qui peuvent être recueillies par d'autres composantes de notre site. Vous pouvez vous désabonner à tout moment. Les détails peuvent être trouvés dans l'e-mail de confirmation et dans chaque bulletin individuel.</p>
    <Title>Informations de contact</Title>
    <p>Conformément à la réglementation en vigueur, Copycat Group vous informe que vous disposez d’un droit d’accès et d’un droit de rectification aux données personnelles que nous collectons. Vous disposez également d’un droit d’opposition au traitement de vos données personnelles pour motifs légitimes. Pour exercer l’un de ces droits, veuillez adresser votre demande à Copycat Group en utilisant l’une des coordonnées suivantes : <br/>Courrier : Copycat Group – 14 BD GEORGES CLEMENCEAU 92400 COURBEVOIE <br/>E-mail : e.hecaen@copycatgroup.fr <br/>Téléphone : 01 45 07 98 00.</p>
  </Container>} />,
  dropdown: []
})

archi.push({
  nav: false,
  path: '*',
  element: <Navigate to={'/'} />
})

export const Map = () => <Routes>
    { archi.map(({ path, element }, id) => <Route key={id} path={path} element={element} />) }
  </Routes>
