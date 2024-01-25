/* eslint-disable react/prop-types */
/* eslint-disable react/no-children-prop */
import React from 'react'
import { Svg } from './comps'

export const boutiques = ['/sevres', '/boulogne']

export const horaires = {
  Sèvres: [
    { col: 1, color: '#0061ad', jour: 'Lundi', debut: ['9H', '14H'], fin: ['12H30', '18H30'] },
    { col: 1, color: '#0aa13c', jour: 'Mardi', debut: ['9H'], fin: ['18H30'] },
    { col: 1, color: '#f39116', jour: 'Mercredi', debut: ['9H'], fin: ['18H30'] },
    { col: 1, color: '#ed01b5', jour: 'Jeudi', debut: ['9H'], fin: ['18H30'] },
    { col: 2, color: '#6d237f', jour: 'Vendredi', debut: ['9H'], fin: ['18H30'] },
    { col: 2, color: '#0061ad', jour: 'Samedi', debut: ['9H'], fin: ['17H30'] },
    { col: 2, color: '#0aa13c', jour: 'Dimanche', debut: null, fin: null }
  ],
  Boulogne: [
    { col: 1, color: '#0061ad', jour: 'Lundi', debut: ['9H30'], fin: ['19H'] },
    { col: 1, color: '#0aa13c', jour: 'Mardi', debut: ['9H30'], fin: ['19H'] },
    { col: 1, color: '#f39116', jour: 'Mercredi', debut: ['9H30'], fin: ['19H'] },
    { col: 1, color: '#ed01b5', jour: 'Jeudi', debut: ['9H30'], fin: ['19H'] },
    { col: 2, color: '#6d237f', jour: 'Vendredi', debut: ['9H30'], fin: ['19H'] },
    { col: 2, color: '#0061ad', jour: 'Samedi', debut: ['9H30'], fin: ['19H'] },
    { col: 2, color: '#0aa13c', jour: 'Dimanche', debut: null, fin: null }
  ]
}

export const renseignements = {
  Sèvres: [
    { Icon: ({ size }) => <Svg size={size} children={<path d="M8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10m0-7a3 3 0 1 1 0-6 3 3 0 0 1 0 6" />} />, text: "2 rue de Ville d'Avray, 92310 Sèvres" },
    { Icon: ({ size }) => <Svg size={size} children={<><path d="M11 1a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1zM5 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2z" /> <path d="M8 14a1 1 0 1 0 0-2 1 1 0 0 0 0 2" /></>} />, text: '01 45 07 98 00' },
    { Icon: ({ size }) => <Svg size={size} children={<path d="M.05 3.555A2 2 0 0 1 2 2h12a2 2 0 0 1 1.95 1.555L8 8.414.05 3.555ZM0 4.697v7.104l5.803-3.558zM6.761 8.83l-6.57 4.027A2 2 0 0 0 2 14h12a2 2 0 0 0 1.808-1.144l-6.57-4.027L8 9.586l-1.239-.757Zm3.436-.586L16 11.801V4.697l-5.803 3.546Z" />} />, text: 'hello@copycatgroup.fr' }
  ],
  Boulogne: [
    { Icon: ({ size }) => <Svg size={size} children={<path d="M8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10m0-7a3 3 0 1 1 0-6 3 3 0 0 1 0 6" />} />, text: '45 Route de la Reine, 92100 Boulogne - Billancourt' },
    { Icon: ({ size }) => <Svg size={size} children={<><path d="M11 1a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1zM5 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2z" /> <path d="M8 14a1 1 0 1 0 0-2 1 1 0 0 0 0 2" /></>} />, text: '01 46 05 82 03' },
    { Icon: ({ size }) => <Svg size={size} children={<path d="M.05 3.555A2 2 0 0 1 2 2h12a2 2 0 0 1 1.95 1.555L8 8.414.05 3.555ZM0 4.697v7.104l5.803-3.558zM6.761 8.83l-6.57 4.027A2 2 0 0 0 2 14h12a2 2 0 0 0 1.808-1.144l-6.57-4.027L8 9.586l-1.239-.757Zm3.436-.586L16 11.801V4.697l-5.803 3.546Z" />} />, text: 'altitudeink@gmail.com' }
  ]
}

export const services = {
  Sèvres: [
    { color: null, mainImg: 'print', imgs: ['Objets personnalisés', 'Signalétique-PLV', 'Imprimerie'], text: 'Reprographie, Photocopie, Impression numérique, Support PLV, Objets personnalisés' },
    { color: null, mainImg: 'shop', imgs: ['Informatique', 'Divers', 'Bureautique', 'IT-Multimédia'], text: 'Informatique, IT / Multimédia, Bureautique, Divers' },
    { color: null, mainImg: 'labs', imgs: ['Création graphique', 'Développement web'], text: 'Développement web, Graphisme' }
  ],
  Boulogne: [
    { title: 'SOLUTIONS', path: '/solutions', mainImg: 'solutions', imgs: ['icone bur1', 'icone tel1', 'icone inf1', 'icone dig1'], text: 'Bureautique, Téléphonie Digital, Informatique' },
    { title: 'PRINT', path: '/print', mainImg: 'print', imgs: ['Objets personnalisés', 'Signalétique-PLV', 'Imprimerie'], text: 'Reprographie, Photocopie, Impression numérique, Support PLV, Objets personnalisés' },
    { title: 'SHOP', path: '/shop', mainImg: 'shop', imgs: ['Informatique', 'Divers', 'Bureautique', 'IT-Multimédia'], text: 'Informatique, IT / Multimédia, Bureautique, Divers' },
    { title: 'LABS', path: '/labs', mainImg: 'labs', imgs: ['Création graphique', 'Développement web'], text: 'Développement web, Graphisme' }
  ]
}

export const realisations = {
  Sèvres: [
    { imgs: ['Badge magnetique 1', 'Biscuits imprimes 1', 'Drapeau 1', 'Transfert tissus 1', 'Transfert tissus 2'], root: '/Realisations/Objets et textiles personnalise/', name: 'tex', text: 'Objets et textiles personnalisés' },
    { imgs: ['Signaletique 1'], root: '/Realisations/PLVSignaletique/', name: 'plv', text: 'PLV / Signalétique' },
    { imgs: ['Brochure agrafee 1', 'Intercalaires 1', 'Packaging 1'], root: '/Realisations/Reprographie-Imprimerie/', name: 'rep', text: 'Reprographie / Imprimerie' }
  ],
  Boulogne: [
    { imgs: [], root: '/Realisations/Objets et textiles personnalise/', name: 'imp', text: 'Impressions 3D' },
    { imgs: ['Badge magnetique 1', 'Biscuits imprimes 1', 'Drapeau 1', 'Transfert tissus 1', 'Transfert tissus 2'], root: '/Realisations/Objets et textiles personnalise/', name: 'tex', text: 'Objets et textiles personnalisés' },
    { imgs: ['Signaletique 1'], root: '/Realisations/PLVSignaletique/', name: 'plv', text: 'PLV / Signalétique' },
    { imgs: ['Brochure agrafee 1', 'Intercalaires 1', 'Packaging 1'], root: '/Realisations/Reprographie-Imprimerie/', name: 'rep', text: 'Reprographie / Imprimerie' }
  ]
}

export const contactForm = {
  Sèvres: [
    { className: null, input: <input type="text" placeholder='Nom' /> },
    { className: null, input: <input type="text" placeholder='Prénom' /> },
    { className: null, input: <input type="text" placeholder='Numéro de téléphone' /> },
    { className: null, input: <input type="text" placeholder='Entreprise' /> },
    { className: 'col-span-2', input: <input type="text" placeholder='Votre email' /> },
    { className: 'col-span-2', input: <input type="text" placeholder='Sujet' /> }
  ],
  Contact: [
    [null, 'Nom', (props) => <input type="text" {...props} />],
    [null, 'Prénom', (props) => <input type="text" {...props} />],
    ['col-span-2', 'Votre email', (props) => <input type="text" {...props} />],
    ['col-span-2', 'Numéro de téléphone', (props) => <input type="text" {...props} />],
    ['col-span-2', 'Société', (props) => <input type="text" {...props} />],
    ['col-span-2', 'Comment avez-vous connu les services Copycat Group ?', (props) => <select {...props}>
            <option value=""></option>
            <option value=""></option>
            <option value=""></option>
        </select>],
    ['col-span-2', 'Ville', (props) => <input type="text" {...props} />],
    ['col-span-2', 'Code postal', (props) => <input type="text" {...props} />],
    ['col-span-2', 'Sujet', (props) => <input type="text" {...props} />],
    ['col-span-2', 'Votre message', (props) => <textarea {...props} />]
  ],
  Home: [
    { className: null, input: <input type="text" placeholder='Nom' /> },
    { className: null, input: <input type="text" placeholder='Prénom' /> },
    { className: null, input: <input type="text" placeholder='Numéro de téléphone' /> },
    { className: null, input: <input type="text" placeholder='Entreprise' /> },
    { className: 'col-span-2', input: <input type="text" placeholder='Votre email' /> },
    { className: 'col-span-2', input: <input type="text" placeholder='Sujet' /> }
  ]
}

export const aboutPageArrays = {
  tabs: ['solutions', 'shop', 'print', 'labs'],
  values: [
    { img: null, color: '#f39113', title: 'Bonne humeur', text: "Une équipe passionnée à l'écoute de vos besoins" },
    { img: null, color: '#A271AD', title: 'Bonne volonté', text: 'Nous avançons avec entrain vers la réalisation de vos projets' },
    { img: null, color: '#5892C4', title: 'Bon sens', text: 'Nous oeuvrons méthodiquement au traitement de vos documents' },
    { img: null, color: '#60C280', title: 'Bonne foi', text: 'Nous vous accompagnons avec intégrité et honnêteté' }
  ],
  testimonies: [
    { text: <>{'1. Nous travaillons avec CopycatGroup depuis plusieurs années sur plusieurs entreprises du groupe.'}<br />{'Au-delà de nos exigences de performance de service et de compétitivité des prix, parfaitement répondu par CCG, nous avons été toujours agréablement surpris par la disponibilité des équipes et leur grande capacité à gérer des projets non standards.'}<br />{'Je ne peux que me réjouir de les savoir notre fournisseur.'}</> },
    { text: <>{'2. Nous travaillons avec CopycatGroup depuis plusieurs années sur plusieurs entreprises du groupe.'}<br />{'Au-delà de nos exigences de performance de service et de compétitivité des prix, parfaitement répondu par CCG, nous avons été toujours agréablement surpris par la disponibilité des équipes et leur grande capacité à gérer des projets non standards.'}<br />{'Je ne peux que me réjouir de les savoir notre fournisseur.'}</> },
    { text: <>{'3. Nous travaillons avec CopycatGroup depuis plusieurs années sur plusieurs entreprises du groupe.'}<br />{'Au-delà de nos exigences de performance de service et de compétitivité des prix, parfaitement répondu par CCG,'}<br />{'Je ne peux que me réjouir de les savoir notre fournisseur.'}</> },
    { text: <>{'4. Nous travaillons avec CopycatGroup depuis plusieurs années sur plusieurs entreprises du groupe.'}<br />{'Au-delà de nos exigences de performance de service et de compétitivité des prix, parfaitement répondu par CCG, nous avons été toujours agréablement surpris par la disponibilité des équipes et leur grande capacité à gérer des projets non standards.'}<br />{'Je ne peux que me réjouir de les savoir notre fournisseur.'}</> },
    { text: <>{'5. Nous travaillons avec CopycatGroup depuis plusieurs années sur plusieurs entreprises du groupe.'}<br />{'Au-delà de nos exigences de performance de service et de compétitivité des prix, parfaitement répondu par CCG, nous avons été toujours agréablement surpris par la disponibilité des équipes et leur grande capacité à gérer des projets non standards.'}<br />{'Je ne peux que me réjouir de les savoir notre fournisseur.'}</> }
  ]
}

export const solutionsList = [
  { title: 'Financement', content: 'Disposez immédiatement de votre matériel ou de votre solution hébergée. Préservez votre trésorerie. Nous gérons toutes les formalités administratives en partenariat avec des organismes de financement bancaires spécialisés (Aucune démarche auprès de votre banque). Remplacer votre matériel ou solution avant la fin du contrat (possibilité de rachat des contrats concurrents) si vos besoins évoluent. Les loyers sont entièrement déductibles du résultat. Le financement locatif permet d’améliorer la structure du bilan (pas d’immobilisation).', img: 'Image financement .png' },
  { title: 'Maintenance et support', content: 'Moins d’actions mais plus de productivité, des techniques de résolution en constantes évolution, une fiabilité de moins en moins contestable. Peut on faire totalement confiance à nos solutions ? Nous restons convaincus que oui. Toutefois, rien n’étant infaillible, nous restons vigilants et disponibles pour vous offrir une garantie maximale. Nos contrats de maintenance ou de support vous apportent tout le confort nécessaire au bon fonctionnement de vos solutions. De plus, l’intervention sur site ou à distance est également compris.', img: 'Maintenance et support .png' },
  { title: 'Déploiement', content: 'Nous vous accompagnons à chaque étape du déploiement et notre prestation inclue : L’assistance aux démarches de résiliations de vos contrats avec votre ancien prestataire. La préparation et le paramétrage de votre nouvelle acquisition. Nous proposons la livraison, le paramétrage et l’installation de vos solutions (réseau, politique d’impression), la formation de vos collaborateurs et ce, sur l’ensemble du territoire national.', img: 'Deploiement .png' },
  { title: 'Suivi et Accompagnement', content: 'Nous vous proposons une routine de visite dans laquelle nous allons suivre les coûts liés à votre contrat, le taux de disponibilité de vos solutions et surtout votre satisfaction. Selon vos besoins nous pourrons faire évoluer votre contrat et vos options. Notre expertise et nos apports s’adapteront en permanence à vos demandes.', img: 'Suivi et accompagnement .png' }
]

const imgContainer = 'flex flex-wrap justify-center [&>img]:aspect-square [&>img]:w-1/5 [&>img]:max-w-[50px] [&>img]:h-fit p-4 gap-4 [&>img]:rounded-2xl [&>img]:object-contain'
export const timelines = {
  Solutions: [
    // {image: "", texte: "", button: "",},
    { image: 'https://copycatgroup.fr/images/bur1.png', id: 'bur', text: <>{'Vente et location d\'imprimante'}<br />{'Petit et grand format, laser ou jet d\'encre...'}</>, button: 'Je suis intéressé' },
    { image: 'https://copycatgroup.fr/images/tel1.png', id: 'tel', text: <>{'Téléphones fixes, mobiles, internet...'}</>, button: 'Je suis intéressé' },
    { image: 'https://copycatgroup.fr/images/dig1.png', id: 'dig', text: <>{'Archivage, dématérialisation des factures, note de frais...'}</>, button: 'Je suis intéressé' },
    { image: 'https://copycatgroup.fr/images/inf1.png', id: 'inf', text: <>{'Vente, maintenance, infogérance'}</>, button: 'Je suis intéressé' }
  ],
  Shop: [
    // {image: "", texte: "", button: "",},
    { image: 'https://copycatgroup.fr/images/pc1.png', id: 'inf', text: <>{'Ordinateur, clé USB, souris, clavier, câble HDMI...'}</>, button: 'Je suis intéressé' },
    { image: 'https://copycatgroup.fr/images/mu1.png', id: 'mul', text: <>{'Vidéo projecteur, écran interactif, visioconférence'}</>, button: 'Je suis intéressé' },
    { image: 'https://copycatgroup.fr/images/bu1.png', id: 'bur', text: <>{'Imprimante domestique, toner, agenda, papier, stylo...'}</>, button: 'Je suis intéressé' },
    { image: 'https://copycatgroup.fr/images/div1.png', id: 'div', text: <>{'Loisirs, gastronomie, restauration, hygiène..'}</>, button: 'Je suis intéressé' }
  ],
  Labs: [
    // {image: "", texte: "", button: "",},
    {
      image: 'https://copycatgroup.fr/images/dev1.png',
      text: <>
            {'Programmation, développement de site sur-mesure'}
            <div className={imgContainer}>
                <img src="https://copycatgroup.fr/images/php.png"></img>
                <img src="https://copycatgroup.fr/images/js.png"></img>
                <img src="https://copycatgroup.fr/images/wp.jpg"></img>
                <img src="https://copycatgroup.fr/images/git.svg"></img>
                <img src="https://copycatgroup.fr/images/an.svg"></img>
            </div>
        </>,
      button: 'Je suis intéressé',
      id: 'dev'
    },
    {
      image: 'https://copycatgroup.fr/images/gra1.png',
      text: <>
            {'Identité visuelle, communication visuelle, logo...'}
            <div className={imgContainer}>
                <img src="https://copycatgroup.fr/images/ps.png"/><img src="https://copycatgroup.fr/images/id.png"/><img src="https://copycatgroup.fr/images/ai.png"/><img src="https://copycatgroup.fr/images/xd.png"/>
            </div>
        </>,
      button: 'Je suis intéressé',
      id: 'gra'
    },
    {
      image: 'https://copycatgroup.fr/images/gra1.png',
      text: <>
            {'..'}
            <div className={imgContainer}>
                {/* <img src="https://copycatgroup.fr/images/ps.png"/><img src="https://copycatgroup.fr/images/id.png"/><img src="https://copycatgroup.fr/images/ai.png"/><img src="https://copycatgroup.fr/images/xd.png"/> */}
            </div>
        </>,
      button: 'Je suis intéressé',
      id: 'com'
    }
  ],
  Print: [
    { image: 'https://copycatgroup.fr/images/rep1.png', id: 'rep', text: <>{'Reliure, plastification, flyer..'}</>, button: 'Je suis intéressé' },
    { image: 'https://copycatgroup.fr/images/mug.png', id: 'mug', text: <>{'Mugs, vêtements, stylos, clés USB...'}</>, button: 'Je suis intéressé' },
    { image: 'https://copycatgroup.fr/images/sup1.png', id: 'sup', text: <>{'Roll\'up, drapeaux, vitrophanie...'}</>, button: 'Je suis intéressé' }
  ]
}

export const RSEActions = [
  { title: 'Recyclage des cartouches d\'encre', text: 'Nous offrons à nos clients une boîte de tri spécial pour collecter les cartouches usagées. Avec les Ecobox Xerox, nous réduisons l\'impact environnemental en triant également nos propres consommables.', icon: 'InkRecycle' },
  {
    title: 'Tri des piles',
    text: `Nous nous soucions de l’environn-
    ement et de la sécurité de nos clients. C’est pourquoi nous mettons à leur disposition une boîte de tri pour les piles usagées, afin qu’elles puissent être recyclées ou éliminées de manière appropriée.`,
    icon: 'BatteryRecycle'
  },
  {
    title: 'Tri des déchets papier',
    text: `Nous accordons une grande impor-
    tance au tri responsable des déchets papier. En séparant les documents recyclables des autres déchets, nous contribuons à la réduction de notre empreinte carbone et à la préservation des ressources forestières. `,
    icon: 'PaperRecycle',
    viewBox: '0 0 88.323 88.603'
  },
  { title: 'salariés, Partenaires et fournisseurs', text: 'Chez Copycat Group, nous sommes engagés dans une démarche responsable et durable. C’est pourquoi nous fournissons à nos salariés, fournisseurs et prestataires une charte RSE à laquelle ils doivent se conformer, afin de garantir le respect de l’environnement, des droits humains et des normes éthiques.', icon: 'Partners', viewBox: '0 0 101.916 72.223' }
]

export const imagesCarouselHome = [
  'https://copycatgroup.fr/images/log2.jpg',
  'https://copycatgroup.fr/images/log1.jpg',
  'https://copycatgroup.fr/images/log7.jpg',
  'https://copycatgroup.fr/images/log4.jpg',
  'https://copycatgroup.fr/images/log5.jpg',
  'https://copycatgroup.fr/images/log6.jpg',
  'https://copycatgroup.fr/images/log3.jpg'
]
