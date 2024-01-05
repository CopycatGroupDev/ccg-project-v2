/* eslint-disable react/prop-types */
import emailjs from '@emailjs/browser';
import { archi } from "./archi";
import { For } from "./functions";
import { Carousel } from 'flowbite-react';
import { useEffect, useRef, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { icons } from './utilities';

export const Header = ({cover, logo, textLine, color, textBtn, fullText = false, title}) => {
    const [navOpened, setNavOpened] = useState(false);

    return <>
        {navOpened && <NavMobile setNavOpened={setNavOpened} navOpened={navOpened} />}
        <div id='header' className={`w-full h-screen relative flex snap-always snap-center bg-[${color}]`}>
            <img src={"/banner-bg"+cover+".png"} className='w-full h-full object-cover'/>
            <div className="absolute w-full h-full flex flex-col [&>*]:h-full gap-4 p-8 lg:p-4">
                <Nav setNavOpened={setNavOpened} navOpened={navOpened} />
                {!fullText ? <>
                    <div className='w-full flex justify-center header_Plate'>
                        <img src={logo} className={'w-[35vh] lg:w-[350px] aspect-square h-fit rounded-full md:mt-16 object-contain'} style={{opacity: (logo) ? "1" : "0"}}/>
                    </div>
                    <div className='w-full text-white text-center flex flex-col justify-center text-base md:text-2xl lg:text-3xl gap-[1.5vh] lg:gap-[18px] items-center header_Plate'>
                        <h2 className='max-w-[1000px]'>{textLine[0]}</h2>
                        <h2 className=''>{textLine[1]}</h2>
                        {textBtn && <button className={`md:text-2xl bg-white px-4 py-2 md:px-7 md:py-3.5 rounded-full`}style={{color: `${color}`}}>{textBtn}</button>}
                    </div>
                </> : <>
                    <div className='lg:px-24 text-white flex flex-col justify-center gap-4 h-full [div:has(&)>#nav]:h-fit text-lg md:text-xl max-w-[800px] leading-loose'>
                        <h2 className='text-4xl md:text-5xl my-2 md:my-8'>{title}</h2>
                        <For obj={textLine} render={(value, i) => <p>{value}</p>} />
                    </div>
                </>}
            </div>
        </div>
        {(textLine[2] && !fullText) && <div className={`-mt-12 text-white w-full flex justify-center p-16 pt-8 text-base md:text-2xl lg:text-3xl text-center snap-end`} style={{background: `${color}`}}>
            {`${textLine[2]}`}
        </div>}
    </>
}

export const Footer = ({refF}) => {
    return (<div id='footer' ref={refF} className="bg-[#0061ad] w-full flex flex-col text-white">
        <div className='gap-8 grid grid-cols-1 lg:grid-cols-4 snap-always snap-start p-8 [&_h2]:text-3xl [&_input]:rounded-lg [&>div]:grid [&>div]:grid-rows-[min-content] [&>div]:gap-4 snap-center max-sm:gap-[2.5vh] max-sm:h-screen'>
            <div>
                <h2>Contactez nous</h2>
                <ul>
                    <li><a href="/contact">01 45 07 98 00</a></li>
                    <li><a href="/contact">hello@copycatgroup.fr</a></li>
                    <li><a href="/contact">Trouver un Magasin :</a></li>
                    <li><a href="/contact">2 rue de ville d’Avray</a></li>
                    <li><a href="/contact">92310 SÈVRES</a></li>
                </ul>
            </div>
            <div>
                <h2>A propos</h2>
                <ul>
                    <li><a href="/mentions-legales">Mentions légales</a></li>
                    <li><a href="/confidentialit%C3%A9">Politique de confidentialité</a></li>
                    <li><a href="https://copycatgroup.fr/#service_1">Les Services</a></li>
                </ul>
            </div>
            <div>
                <h2>Nos autres services</h2>
                <ul>
                    <li><a href="https://copycat-shop.fr" target="_blank" rel="noreferrer">Copycat Shop</a></li>
                    <li><a href="http://www.copycatprint.fr/accueil/" target="_blank" rel="noreferrer">Copycat Print</a></li>
                    <li><a href="https://www.copycat.vous-livre.com/" target="_blank" rel="noreferrer">Copycat vous livre</a></li>
                    <li><a href="https://copycat-group.mydigitalcorner.fr/" target="_blank" rel="noreferrer">Copycat Group mydigitalcorner</a></li>
                    <li><a href="https://www.exalink.fr/profil/copycat-group" target="_blank" rel="noreferrer">Exalink Copycat Group</a></li>
                </ul>
            </div>
            <div>
                <form className='contents'>
                    <h2>Newsletter</h2>
                    <div className='grid gap-2 grid-rows-[min-content]'>
                        <input type="email" id="email" pattern=".+@globex\.com" className='w-full text-black h-fit' placeholder='Votre email'/>
                        <button className='border rounded-full w-full h-fit p-2'>{`S'inscrire`}</button>
                    </div>
                </form>
            </div>
        </div>
        <div className='flex justify-between px-8 pb-4 snap-always snap-end items-center'>
            <span>Copyright - Copycat Group</span>
            <div className='grid grid-rows-1 grid-cols-3 gap-2'>
                <Link to={"https://www.facebook.com/copycat.groupe/"} style={{display: "contents"}}><icons.Facebook size={32} /></Link>
                <Link to={"https://www.instagram.com/copycat_group/"} style={{display: "contents"}}><icons.Instagram size={32} /></Link>
                <Link to={"https://fr.linkedin.com/company/copycat-group"} style={{display: "contents"}}><icons.Linkedin size={32} /></Link>
            </div>
        </div>
    </div>)
}

export const ContactUs = () => {
    const form = useRef();
    let confirmMessage = "";

    const sendEmail = (e) => {
        e.preventDefault();
        emailjs.sendForm('service_o6semg5', 'template_fngu4h2', form.current, '8Rs9RvEbWiGOIy4pj').then(
            result => {
                console.log(result.text);
                console.log("message send");
                confirmMessage = "MESSAGE ENVOYÉ"
            },
            error => console.log(error.text)
        );
    };

    return (
        <div className="ContactUs">
            <h1>Contact Us</h1>
            <form className="ContactUs-form" ref={form} onSubmit={sendEmail}>
                <input type="text" name="user_name" placeholder="Your name" />
                <input type="email" name="user_mail" placeholder="Your mail" />
                <textarea placeholder="Your message" name="message"/>
                <input className="ContactUs-button" type="submit" value="Send" />
                <p>{confirmMessage}</p>
            </form>
        </div>
    )
}

export const CCGCarousel = ({images, className}) => <Carousel className={className}>
    {images.map((image, i) => <img key={i} alt="" src={image} className='object-contain h-full' />)}
</Carousel>;

export const Timeline = ({color = "#000", list}) => {
    const timeline = useRef(null);
    const location = useLocation();

    useEffect(() => {
        const hr = function () {
            //[...timeline.current.querySelectorAll('.container.right')].map((item) => { item.style.top = "-" + (0.75 * item.getBoundingClientRect().height) + "px"; });
            const whole = timeline.current?.getBoundingClientRect();
            // eslint-disable-next-line no-unsafe-optional-chaining
            const last = [...(timeline.current ?? document).querySelectorAll('.ligacao')].pop()?.getBoundingClientRect();
            timeline.current?.style.setProperty("--x", (whole.bottom-last.bottom) + "px", "");
        }
        hr();
        document.onreadystatechange = function() { if (document.readyState === 'complete') { hr(); window.scroll(0,0); } };
        window.addEventListener('load', hr);
        window.addEventListener('scroll', hr);
        window.addEventListener('resize', hr);
        if (location.hash) {
            window.scroll(
                0,
                document
                .querySelector(location.hash)
                .getBoundingClientRect()
                .top
            )
        }
    }, [location.hash])
    
    return <div ref={timeline} className={`timeline !-mt-12 pt-12 w-full max-w-[1340px] [&_img]:drop-shadow-xl text-center`}>
        {list.map((element, i) => <div id={element.id} className={"max-sm:!top-0 container "+(i % 2 === 0 ? "left" : "right")} key={i}>
            <div className="content grid grid-cols-1 grid-rows-[min-content] gap-8 text-2xl snap-start">
                <div className='relative grid'>
                    <div className={`hr absolute w-full`}>
                        <div className='inner'>
                            <div className={`ligacao`}></div>
                        </div>
                    </div>
                    <img src={element.image} className='bg-white rounded-full w-full z-10 relative justify-self-center' alt=""></img>
                </div>
                <div className='text-gray-400'>{element.text}</div>
                <button style={{background: color}} className={`p-4 drop-shadow-xl rounded-full text-white`}>{element.button}</button>
            </div>
        </div>)}
    </div>
};

export const Dropdown = ({obj, color, callback, className, close, closeBtn}) => {
    const [hover, setHover] = useState(null);

    const pillStyle = {background : "none", textWrap: "wrap"};
    const pillStyleHover = { backgroundColor: color, color: "white", textWrap: "wrap" };

    return (<div className={className+' p-2'}>
        <div className='bg-white rounded-md z-50 drop-shadow-md'>
            <For obj={obj} render={(li, key) => <Link key={key} to={!li.disabled && li.path} className={li.disabled && "cursor-default"} onClick={callback}>
                <div className={'py-4 px-5 [:first-child>&]:rounded-t-md [:last-child>&]:rounded-b-md flex gap-4 items-center '+(li.disabled && 'opacity-50')} style={hover === li.path ? pillStyleHover : pillStyle} onMouseOver={() => { !li.disabled && setHover(li.path); }} onMouseLeave={() => { !li.disabled && setHover(null); }}>
                    <img className={'w-10 aspect-square h-fit object-cover '+(!li.disabled && '[div:hover>&]:invert [div:hover>&]:mix-blend-color-dodge')} src={li.icon} />
                    <div className='w-full'>
                        <div> {li.title} </div>
                        {li.text && <div className='text-base'> {li.text} </div>}
                    </div>
                </div>
            </Link>} />
            {closeBtn && <Link>
                <div onClick={close} className={'py-4 px-5 [:first-child>&]:rounded-t-md [:last-child>&]:rounded-b-md flex gap-4 justify-center bg-black/[0.04]'}>
                    <div>Fermer</div>
                </div>
            </Link>}
        </div>
    </div>)
}

export const Nav = ({setNavOpened, navOpened}) => {
    const [dropdown, setDropdown] = useState(null);
    const colors = archi.filter(route => route.nav).map(route => route.element.props.header.color);

    const pillStyle = {textWrap: "nowrap", transition: "all 0s"};
    const pillStyleHover = (color) => ({ textWrap: "nowrap", color: colors[color] });

    useEffect(() => {
        //const int = setInterval(() => console.log(dropdown), 1000);
        //return () => clearInterval(int);
    });

    return (<div className='flex flex-col justify-start items-center' id="nav">
        <div className='flex justify-between lg:justify-center relative max-w-[1500px] w-full max-lg:items-center max-lg:gap-2 items-start lg:max-xl:flex-col lg:max-xl:items-center'>
            <Link to="/" className='contents'>
                <img src="/logo.png" alt="" className="w-[20vh] max-h-[120px] aspect-[163/120] object-contain h-fit left-0 lg:mx-18 xl:absolute" />
            </Link>
            <div className='justify-center items-center text-xl xl:text-2xl hidden lg:flex gap-[.5vw] md:[&_li]:cursor-pointer [&>a]:text-[#0061ad] items-start [&_li]:p-2 z-50 p-2'>
                <For obj={archi.filter(route => route.nav)} render={(route, i) => <div key={i} className='text-[#0061ad]' style={dropdown === route.path ? pillStyleHover(i) : pillStyle} onMouseOver={() => { setDropdown(route.path); }} onMouseLeave={() => { setDropdown(null); }}>
                    <Link to={route.path} className={'p-2'}>{route.title}</Link>
                    {dropdown === route.path && <Dropdown obj={route.dropdown} color={colors[i]} className={"absolute"} />}
                </div>} />
            </div>
            <button className='max-lg:block hidden mx-8' onClick={() => setNavOpened(!navOpened)}>
                <svg className='' xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="currentColor" viewBox="0 0 16 16"> <path fillRule="evenodd" d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z"/> </svg>
            </button>
        </div>
    </div>)
}

export const NavMobile = ({setNavOpened, navOpened}) => {
    const [dropdown, setDropdown] = useState(null);
    const colors = archi.filter(route => route.nav).map(route => route.element.props.header.color);

    const pillStyle = {textWrap: "nowrap", transition: "all 0s"};
    const pillStyleHover = (color) => ({ textWrap: "nowrap", color: colors[color] });

    return <div className='fixed bg-[#fffd] backdrop-blur z-[9999] w-full h-full [body:has(&)]:overflow-hidden p-5 flex flex-col items-center overflow-auto'>
        <button className='max-lg:block hidden m-8' style={{alignSelf: "flex-end"}} onClick={() => setNavOpened(!navOpened)}>
            <svg className='' xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="currentColor" viewBox="0 0 16 16"> <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM5.354 4.646a.5.5 0 1 0-.708.708L7.293 8l-2.647 2.646a.5.5 0 0 0 .708.708L8 8.707l2.646 2.647a.5.5 0 0 0 .708-.708L8.707 8l2.647-2.646a.5.5 0 0 0-.708-.708L8 7.293 5.354 4.646z"/> </svg>
        </button>
        <div className='flex flex-col items-center text-xl'>
            <For obj={archi.filter(route => route.nav)} render={(route, i) => <div key={i} className='text-[#0061ad] flex flex-col items-center' style={dropdown === route.path ? pillStyleHover(i) : pillStyle} onClick={() => { setDropdown(dropdown === route.path ? null : route.path); }}>
                {dropdown !== route.path ? <span className={'p-2'}>{route.title}</span> : <Link to={route.path} reloadDocument={true} className={'p-2 flex flex-col items-center'}>{route.title} <small>Cliquez pour accéder</small></Link>}
                {dropdown === route.path && <Dropdown obj={route.dropdown} color={colors[i]} callback={() => setNavOpened(false)} className={"max-w-[100%]"} close={() => setDropdown(null)} closeBtn={true} />}
            </div>} />
        </div>
    </div>
}