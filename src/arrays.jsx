/* eslint-disable react/prop-types */
/* eslint-disable react/no-children-prop */
import React from 'react'
import { Svg } from './comps'
import { motion } from 'framer-motion'

export const boutiques = [{ path: '/sevres', name: 'Sèvres', filter: 'invert(18%) sepia(82%) saturate(3358%) hue-rotate(193deg) brightness(93%) contrast(102%)' }, { path: '/boulogne', name: 'Boulogne', filter: 'invert(57%) sepia(77%) saturate(944%) hue-rotate(352deg) brightness(98%) contrast(95%)' }]
export const bureau = [{ name: 'Sèvres' }, { path: '/boulogne', name: 'Boulogne' }]

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
    { Icon: ({ size }) => <Svg size={size} children={<path d="M.05 3.555A2 2 0 0 1 2 2h12a2 2 0 0 1 1.95 1.555L8 8.414.05 3.555ZM0 4.697v7.104l5.803-3.558zM6.761 8.83l-6.57 4.027A2 2 0 0 0 2 14h12a2 2 0 0 0 1.808-1.144l-6.57-4.027L8 9.586l-1.239-.757Zm3.436-.586L16 11.801V4.697l-5.803 3.546Z" />} />, text: 'sevres@copycatgroup.fr' }
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
    { className: null, Input: (props) => <input type="text" name="name" placeholder='Nom' {...props} /> },
    { className: null, Input: (props) => <input type="text" name="firstname" placeholder='Prénom' {...props} /> },
    { className: null, Input: (props) => <input type="text" name="number" placeholder='Numéro de téléphone' {...props} /> },
    { className: null, Input: (props) => <input type="text" name="firm" placeholder='Société' {...props} /> },
    { className: 'col-span-2', Input: (props) => <input type="email" name="mail" placeholder='Votre email' {...props} /> },
    { className: 'col-span-2', Input: (props) => <input type="text" name="message" placeholder='Sujet' {...props} /> }
  ],
  Contact: [
    { className: null, Input: (props) => <input type="text" name="name" placeholder='Nom' {...props} /> },
    { className: null, Input: (props) => <input type="text" name="firstname" placeholder='Prénom' {...props} /> },
    { className: 'col-span-2', Input: (props) => <input type="text" name="mail" placeholder='Votre email' {...props} /> },
    { className: 'col-span-2', Input: (props) => <input type="text" name="number" placeholder='Numéro de téléphone' {...props} /> },
    { className: 'col-span-2', Input: (props) => <input type="text" name="firm" placeholder='Société' {...props} /> },
    {
      className: 'col-span-2',
      Input: (props) => <select name="how" defaultValue={''} placeholder={'Comment avez-vous connu les services Copycat Group ?'} {...props}>
            <option value="" disabled={true}>Choisir</option>
            <option value="Reseaux">Par les reseaux sociaux</option>
            <option value="Internet">Par internet</option>
            <option value="Connaissance">Par une connaissance</option>
            <option value="Copycat Sèvres">Par notre boutique Copycat Sèvres</option>
            <option value="Copycat DPS Boulogne">Par notre boutique Copycat DPS Boulogne</option>
            <option value="Autres">Autres</option>
        </select>
    },
    { className: 'col-span-2', Input: (props) => <input type="text" name="city" placeholder='Ville' {...props} /> },
    { className: 'col-span-2', Input: (props) => <input type="text" name="zip" placeholder='Code postal' {...props} /> },
    { className: 'col-span-2', Input: (props) => <input type="text" name="object" placeholder='Sujet' list='subjectsArray' {...props} /> },
    { className: 'col-span-2', Input: (props) => <textarea name="message" placeholder='Votre message' {...props} /> }
  ],
  Home: [
    { className: null, Input: (props) => <input type="text" name="name" placeholder='Nom' {...props} /> },
    { className: null, Input: (props) => <input type="text" name="firstname" placeholder='Prénom' {...props} /> },
    { className: null, Input: (props) => <input type="text" name="number" placeholder='Numéro de téléphone' {...props} /> },
    { className: null, Input: (props) => <input type="text" name="firm" placeholder='Société' {...props} /> },
    { className: 'col-span-2', Input: (props) => <input type="email" name="mail" placeholder='Votre email' {...props} /> },
    { className: 'col-span-2', Input: (props) => <input type="text" name="message" placeholder='Sujet' {...props} /> }
  ],
  Boulogne: [
    { className: null, Input: (props) => <input type="text" name="name" placeholder='Nom' {...props} /> },
    { className: null, Input: (props) => <input type="text" name="firstname" placeholder='Prénom' {...props} /> },
    { className: null, Input: (props) => <input type="tel" name="number" placeholder='Numéro de téléphone' {...props} /> },
    { className: null, Input: (props) => <input type="text" name="firm" placeholder='Société' {...props} /> },
    { className: 'col-span-2', Input: (props) => <input type="email" name="mail" placeholder='Votre email' {...props} /> },
    { className: 'col-span-2', Input: (props) => <textarea name="message" placeholder='Sujet' {...props} /> }
  ],
  Modal: ({ options, selected }) => [
    { className: null, Input: (props) => <input type="text" name="name" placeholder='Nom' {...props} /> },
    { className: null, Input: (props) => <input type="text" name="firstname" placeholder='Prénom' {...props} /> },
    { className: null, Input: (props) => <input type="tel" name="number" placeholder='Numéro de téléphone' {...props} /> },
    { className: null, Input: (props) => <input type="text" name="firm" placeholder='Société' {...props} /> },
    { className: 'col-span-2', Input: (props) => <input type="email" name="mail" placeholder='Votre email' {...props} /> },
    {
      className: 'col-span-2',
      Input: (props) => <select name='category' placeholder='Votre demande concernant ?' {...props} defaultValue={options[selected]}>
        {options?.map((opt, i) => <option key={i} value={opt}>{opt}</option>)}
      </select>
    },
    { className: 'col-span-2', Input: (props) => <textarea name="message" placeholder='Sujet' {...props} /> }
  ]
}

export const aboutPageArrays = {
  tabs: [
    { value: 'solutions', text: 'De la conception de votre infrastructure à la sécurité des données, nous proposons des solutions sur mesure pour stimuler votre productivité. Avec des services de qualité supérieure tels que la téléphonie, la gestion électronique de documents et la maintenance informatique.' },
    { value: 'shop', text: 'Nous offrons une vaste sélection de produits de qualité, allant de la papeterie, aux accessoires de bureau pratiques et aux solutions de rangement efficaces. Parcourez notre catalogue en ligne sur copycat.vous-livre.com et trouvez tout ce dont vous avez besoin pour un bureau bien organisé et fonctionnel.' },
    { value: 'print', text: 'Que vous ayez besoin de cartes de visite, de flyers, de brochures ou de supports publicitaires personnalisés, COPYCAT PRINT est là pour vous fournir des impressions de qualité supérieure. Simplifiez le processus d\'impression en ligne en visitant copycatprint.fr.' },
    { value: 'labs', text: 'Notre équipe de professionnels qualifiés est dédiée à transformer vos idées en réalité en concevant des sites web attrayants, conviviaux et parfaitement adaptés à vos besoins. En plus de cela, COPYCAT LABS propose également un service de graphisme pour créer des supports de communication percutants qui feront briller votre entreprise.' }
  ],
  values: [
    { img: '/aboutIcon1.PNG', color: '#f39113', title: 'Bonne humeur', text: "Une équipe passionnée à l'écoute de vos besoins" },
    { img: '/aboutIcon2.PNG', color: '#A271AD', title: 'Bonne volonté', text: 'Nous avançons avec entrain vers la réalisation de vos projets' },
    { img: '/aboutIcon3.PNG', color: '#5892C4', title: 'Bon sens', text: 'Nous oeuvrons méthodiquement au traitement de vos documents' },
    { img: '/aboutIcon4.PNG', color: '#60C280', title: 'Bonne foi', text: 'Nous vous accompagnons avec intégrité et honnêteté' }
  ],
  testimonies: [
    {
      text: <>{'Nous travaillons avec CopycatGroup depuis plusieurs années sur plusieurs Sociétés du groupe. Au-delà de nos exigences de performance de service et de compétitivité des prix, parfaitement répondu par CCG, nous avons été toujours agréablement surpris par la disponibilité des équipes et leur grande capacité à gérer des projets non standards. Je ne peux que me réjouir de les savoir notre fournisseur.'}</>,
      img: 'as.jpg',
      name: 'AS INTER'
    },
    {
      text: <>{`J'ai bien reçu les brochures. Elles sont très bien. Je vous remercie pour vos conseils et votre réactivité.
    La quantité est supérieure à celle que j'avais commandée 😉
    Merci beaucoup`}</>,
      img: 'Brinav.png',
      name: 'Brinav'
    },
    { text: <>{'Je suis ravi de travailler avec Copycat Group'}<br />{'-Leur disponibilité est très appréciable.'}<br />{'-Le service est rapide et très sérieux.'}<br />{'-Jamais de fausses promesses'}<br />{'Et pour finir, la livraison se fait la plupart du temps en 24h ; tout ce qu’on aime.'}</>, img: 'a2s.jpg', name: 'A2C' }
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
    { title: 'Bureautique', image: 'https://copycatgroup.fr/images/bur1.png', id: 'bur', text: <>{'Vente et location d\'imprimante'}<br />{'Petit et grand format, laser ou jet d\'encre...'}</>, button: 'Je suis intéressé' },
    { title: 'Téléphonie', image: 'https://copycatgroup.fr/images/tel1.png', id: 'tel', text: <>{'Téléphones fixes, mobiles, internet...'}</>, button: 'Je suis intéressé' },
    { title: 'Digital', image: 'https://copycatgroup.fr/images/dig1.png', id: 'dig', text: <>{'Archivage, dématérialisation des factures, note de frais...'}</>, button: 'Je suis intéressé' },
    { title: 'Informatique', image: 'https://copycatgroup.fr/images/inf1.png', id: 'inf', text: <>{'Vente, maintenance, infogérance'}</>, button: 'Je suis intéressé' }
  ],
  Shop: [
    // {image: "", texte: "", button: "",},
    { title: 'Informatique', image: 'https://copycatgroup.fr/images/pc1.png', id: 'inf', text: <>{'Ordinateur, clé USB, souris, clavier, câble HDMI...'}</>, button: 'Je suis intéressé' },
    { title: 'IT/Multimédia', image: 'https://copycatgroup.fr/images/mu1.png', id: 'mul', text: <>{'Vidéo projecteur, écran interactif, visioconférence'}</>, button: 'Je suis intéressé' },
    { title: 'Bureautique', image: 'https://copycatgroup.fr/images/bu1.png', id: 'bur', text: <>{'Imprimante domestique, toner, agenda, papier, stylo...'}</>, button: 'Je suis intéressé' },
    { title: 'Divers', image: 'https://copycatgroup.fr/images/div1.png', id: 'div', text: <>{'Loisirs, gastronomie, restauration, hygiène..'}</>, button: 'Je suis intéressé' }
  ],
  Labs: [
    // {image: "", texte: "", button: "",},
    {
      title: 'Développement web',
      image: 'https://copycatgroup.fr/images/dev1.png',
      text: <>
            {'Programmation, développement de site sur-mesure'}
            <div className={imgContainer}>
                {[
                  'https://copycatgroup.fr/images/php.png',
                  'https://copycatgroup.fr/images/js.png',
                  'https://copycatgroup.fr/images/wp.jpg',
                  'https://copycatgroup.fr/images/git.svg',
                  'https://copycatgroup.fr/images/an.svg'
                ].map((img, key) => <motion.img key={key} src={img} initial={{ opacity: 0, x: 100 }} transition={{ duration: 0.5, delay: key * 0.25 }} whileInView={{ opacity: 100, x: 0 }} viewport={{ once: true }} />)}
            </div>
        </>,
      button: 'Je suis intéressé',
      id: 'dev'
    },
    {
      title: 'Graphisme',
      image: 'https://copycatgroup.fr/images/gra1.png',
      text: <>
            {'Identité visuelle, communication visuelle, logo...'}
            <div className={imgContainer}>
                {[
                  'https://copycatgroup.fr/images/ps.png',
                  'https://copycatgroup.fr/images/id.png',
                  'https://copycatgroup.fr/images/ai.png',
                  'https://copycatgroup.fr/images/xd.png'
                ].map((img, key) => <motion.img key={key} src={img} initial={{ opacity: 0, x: 100 }} transition={{ duration: 0.5, delay: (key + 1) * 0.25 }} whileInView={{ opacity: 100, x: 0 }} viewport={{ once: true }} />)}
            </div>
        </>,
      button: 'Je suis intéressé',
      id: 'gra'
    },
    {
      title: 'Communication digitale',
      image: '/comdig1.svg',
      text: <>
            {'LinkedIn, Facebook, Instagram...'}
            <div className={imgContainer}>
                {[
                  '/linkedin.svg',
                  '/facebook.svg',
                  '/instagram.svg'
                ].map((img, key) => <motion.img key={key} src={img} initial={{ opacity: 0, x: 100 }} transition={{ duration: 0.5, delay: (key + 1) * 0.25 }} whileInView={{ opacity: 100, x: 0 }} viewport={{ once: true }} />)}
                {/* <img src="https://copycatgroup.fr/images/ps.png"/><img src="https://copycatgroup.fr/images/id.png"/><img src="https://copycatgroup.fr/images/ai.png"/><img src="https://copycatgroup.fr/images/xd.png"/> */}
            </div>
        </>,
      button: 'Je suis intéressé',
      id: 'com'
    }
  ],
  Print: [
    { title: 'Reprographie / Imprimerie', image: 'https://copycatgroup.fr/images/rep1.png', id: 'rep', text: <>{'Reliure, plastification, flyer..'}</>, button: 'Je suis intéressé' },
    { title: 'Objet personnalisé', image: 'https://copycatgroup.fr/images/mug.png', id: 'mug', text: <>{'Mugs, vêtements, stylos, clés USB...'}</>, button: 'Je suis intéressé' },
    { title: 'Support PLV', image: 'https://copycatgroup.fr/images/sup1.png', id: 'sup', text: <>{'Roll\'up, drapeaux, vitrophanie...'}</>, button: 'Je suis intéressé' }
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
