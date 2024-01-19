/* eslint-disable react/no-children-prop */
/* eslint-disable react/prop-types */
import emailjs from '@emailjs/browser';
import { archi } from "./archi";
import { For } from "./functions";
import { Carousel } from 'flowbite-react';
import { useEffect, useRef, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Icons } from './utilities';

export const Container = ({ modifier="w-full flex flex-col gap-6 items-center text-base md:text-xl text-gray-400 max-w-[1340px] text-center px-12", style, children }) => <div className={modifier} style={style}>{children}</div>

export const Title = ({children, color="black", modifier}) => <h1 className={`text-4xl text-center text-${color} text-[${color}] ${modifier}`} style={{color: color}}>{children}</h1>

export const Header = ({cover, logo, textLine, color, textBtn, fullText = false, kurz = false, mid = false, title}) => {
    const [navOpened, setNavOpened] = useState(false);

    return <>
        {navOpened && <NavMobile setNavOpened={setNavOpened} navOpened={navOpened} />}
        <div id='header' className={`w-full h-screen relative flex snap-always snap-center bg-[${color}]`} style={{[kurz && 'height']: '400px', [mid && 'height']: '720px'}}>
            <img src={cover} className='w-full h-full object-cover' />
            <div className="absolute w-full h-full flex flex-col [&>*]:h-full gap-4 p-8 lg:p-4 text-xl xl:text-2xl">
                <Nav setNavOpened={setNavOpened} navOpened={navOpened} />
                {!kurz && <>
                    {!fullText ? <>
                        <div className='w-full flex justify-center header_Plate'>
                            <img src={logo} className={'w-[35vh] xl:w-[350px] aspect-square h-fit rounded-full md:mt-16 object-contain'} style={{opacity: (logo) ? "1" : "0"}}/>
                        </div>
                        <div className='w-full text-white text-center flex flex-col justify-center text-base md:text-2xl lg:text-2xl xl:text-3xl gap-[1.5vh] xl:gap-[18px] items-center header_Plate'>
                            <h2 className='max-w-[1000px]'>{textLine[0]}</h2>
                            <h2 className=''>{textLine[1]}</h2>
                            {textBtn && <button className={`md:text-2xl bg-white px-4 py-2 md:px-7 md:py-3.5 rounded-full`}style={{color: `${color}`}}>{textBtn}</button>}
                        </div>
                    </> : <>
                        <div className='lg:px-24 text-white flex flex-col justify-center gap-4 h-full [div:has(&)>#nav]:h-fit text-lg md:text-xl max-w-[800px] leading-loose'>
                            <h2 className='text-4xl md:text-5xl my-2 md:my-8'>{title}</h2>
                            <For obj={textLine} render={(value, i) => <p key={i}>{value}</p>} />
                        </div>
                    </>}
                </>}
            </div>
        </div>
        {(textLine[2] && !fullText) && <div className={`-mt-12 text-white w-full flex justify-center p-16 pt-8 text-base md:text-2xl lg:text-2xl xl:text-3xl text-center snap-end`} style={{background: `${color}`}}>
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
                <Link to={"https://www.facebook.com/copycat.groupe/"} style={{display: "contents"}}><Icons icon="Facebook" size={32} /></Link>
                <Link to={"https://www.instagram.com/copycat_group/"} style={{display: "contents"}}><Icons icon="Instagram" size={32} /></Link>
                <Link to={"https://fr.linkedin.com/company/copycat-group"} style={{display: "contents"}}><Icons icon="Linkedin" size={32} /></Link>
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
    const logo = useRef(null);
    const items = useRef(null);
    const [logoTouches, setLogoTouches] = useState(false);

    useEffect(() => {
        const checkLogoTouches = () => {
            let points = [logo.current?.getBoundingClientRect().x, logo.current?.getBoundingClientRect().width + logo.current?.getBoundingClientRect().x];
            let itemsLeft = items.current?.getBoundingClientRect().x;
            let logoTouches_ = points[0] < itemsLeft && itemsLeft < points[1];
            setLogoTouches(logoTouches_); 
        }
        window.addEventListener('resize', checkLogoTouches);

        return () => {
            //
        };
    }, []);

    const [dropdown, setDropdown] = useState(null);
    const colors = archi.filter(route => route.nav).map(route => route.element.props.header.color);

    const pillStyle = {textWrap: "nowrap", transition: "all 0s"};
    const pillStyleHover = (color) => ({ textWrap: "nowrap", color: colors[color] });

    useEffect(() => {
        //const int = setInterval(() => console.log(dropdown), 1000);
        //return () => clearInterval(int);
    });

    return (<div className='flex flex-col justify-start items-center' id="nav">
        <div className='flex justify-between lg:justify-right lg:justify-center relative max-w-[1500px] w-full max-lg:items-center max-lg:gap-2 items-start lg:max-xl:flex-col lg:max-xl:items-center'>
            <Link to="/" className='contents'>
                <img src="/logo.png" alt="" className="w-[20vh] max-h-[120px] aspect-[163/120] object-contain h-fit left-0 lg:mx-18 xl:absolute" style={{[logoTouches && "opacity"]: 0}} ref={logo} />
            </Link>
            <div className='justify-center items-center hidden lg:flex gap-[.5vw] md:[&_li]:cursor-pointer [&>a]:text-[#0061ad] items-start [&_li]:p-2 z-50 px-2 py-4' ref={items}>
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

export const Testimonies = ({testimonies}) => {
    const [activeTestimony, setActiveTestimony] = useState(0);

    var card = {
        padding: "1.5rem",
        backgroundColor: "rgb(255 255 255 / 1)",
        gap: "1rem",
        gridTemplateColumns: "repeat(1, minmax(0, 1fr))",
        width: "24rem",
        display: "grid",
        overflow: "hidden",
        height: "100%"
    }

    return <div className="flex w-full justify-center items-center relative gap-8 h-fit" style={{
        display: "grid",
        gridTemplateColumns: "repeat(2, minmax(0,1fr))",
        gridTemplateRows: "repeat(1, minmax(0,1fr))",
        maxWidth: "800px",
        position: "relative",
        margin: "0 auto",
    }}>
        <For obj={testimonies} render={(value, i) => {
            const minHeight = (4.5/6*100) + "%"
            return <div key={i} data-side={[
                (value === (testimonies[activeTestimony-1] ?? testimonies[testimonies.length-1])) && "left",
                (value === testimonies[activeTestimony])  && "center",
                (value === (testimonies[activeTestimony+1] ?? testimonies[0]))  && "right"
            ].filter(Boolean)} style={{
                ...card,
                alignContent: "space-between",
                position: [
                    (value === (testimonies[activeTestimony-1] ?? testimonies[testimonies.length-1])) && "static",
                    (value === testimonies[activeTestimony]) && "absolute",
                    (value === (testimonies[activeTestimony+1] ?? testimonies[0])) && "static",
                    (value !== (testimonies[activeTestimony-1] ?? testimonies[testimonies.length-1])) && (value !== testimonies[activeTestimony]) && (value !== (testimonies[activeTestimony+1] ?? testimonies[0])) && "fixed"
                ].filter(Boolean)[0],

                boxShadow: [
                    (value === (testimonies[activeTestimony-1] ?? testimonies[testimonies.length-1])) && "0 0 #0000, 0 0 #0000, 0 1px 3px 0 rgb(0 0 0 / 0.1), 0 1px 2px -1px rgb(0 0 0 / 0.1)",
                    (value === testimonies[activeTestimony]) && "0 0 #0000, 0 0 #0000, 0 1px 6px 0 rgb(0 0 0 / 0.1), 0 1px 4px -1px rgb(0 0 0 / 0.1)",
                    (value === (testimonies[activeTestimony+1] ?? testimonies[0])) && "0 0 #0000, 0 0 #0000, 0 1px 3px 0 rgb(0 0 0 / 0.1), 0 1px 2px -1px rgb(0 0 0 / 0.1)",
                    (value !== (testimonies[activeTestimony-1] ?? testimonies[testimonies.length-1])) && (value !== testimonies[activeTestimony]) && (value !== (testimonies[activeTestimony+1] ?? testimonies[0])) && ""
                ].filter(Boolean)[0],

                display: [
                    (value === (testimonies[activeTestimony-1] ?? testimonies[testimonies.length-1])) && "grid",
                    (value === testimonies[activeTestimony]) && "grid",
                    (value === (testimonies[activeTestimony+1] ?? testimonies[0])) && "grid",
                    (value !== (testimonies[activeTestimony-1] ?? testimonies[testimonies.length-1])) && (value !== testimonies[activeTestimony]) && (value !== (testimonies[activeTestimony+1] ?? testimonies[0])) && "none"
                ].filter(Boolean)[0],
                zIndex: i === activeTestimony && 100,
                gridColumnStart : [
                    (value === (testimonies[activeTestimony-1] ?? testimonies[testimonies.length-1])) && "1",
                    (value === testimonies[activeTestimony]) && "0",
                    (value === (testimonies[activeTestimony+1] ?? testimonies[0])) && "2",
                    (value !== (testimonies[activeTestimony-1] ?? testimonies[testimonies.length-1])) && (value !== testimonies[activeTestimony]) && (value !== (testimonies[activeTestimony+1] ?? testimonies[0])) && "0"
                ].filter(Boolean)[0],
                gridRowStart : 1,
                filter: [
                    (value === (testimonies[activeTestimony-1] ?? testimonies[testimonies.length-1])) && "blur(1.5px)",
                    (value === testimonies[activeTestimony]) && "blur(0px)",
                    (value === (testimonies[activeTestimony+1] ?? testimonies[0])) && "blur(1.5px)",
                    (value !== (testimonies[activeTestimony-1] ?? testimonies[testimonies.length-1])) && (value !== testimonies[activeTestimony]) && (value !== (testimonies[activeTestimony+1] ?? testimonies[0])) && ""
                ].filter(Boolean)[0],
                opacity: [
                    (value === (testimonies[activeTestimony-1] ?? testimonies[testimonies.length-1])) && "0.8",
                    (value === testimonies[activeTestimony]) && "1",
                    (value === (testimonies[activeTestimony+1] ?? testimonies[0])) && "0.8",
                    (value !== (testimonies[activeTestimony-1] ?? testimonies[testimonies.length-1])) && (value !== testimonies[activeTestimony]) && (value !== (testimonies[activeTestimony+1] ?? testimonies[0])) && "0"
                ].filter(Boolean)[0],
                [value === (testimonies[activeTestimony-1] ?? testimonies[testimonies.length-1]) && 'gridColumnStart'] : "1",
                [value === (testimonies[activeTestimony-1] ?? testimonies[testimonies.length-1]) && 'margin'] : "0 0%",
                [value === (testimonies[activeTestimony+1] ?? testimonies[0]) && 'gridColumnStart'] : "3",
                [value === (testimonies[activeTestimony+1] ?? testimonies[0]) && 'margin'] : "0 0%",
                [value === testimonies[activeTestimony] && 'gridColumnStart'] : "2",

                height: (value === (testimonies[activeTestimony])) ? "100%" : minHeight,
                textOverflow: "ellipsis",
                whiteSpace: "nowrap",
            }} onClick={() => {
                const duration = 750;
                const anim = {
                    duration: duration,
                    iterations: 1,
                    easing: "cubic-bezier(0.68, -0.55, 0.27, 1.55)",
                };
                
                let move = {
                    l2C : document.querySelector('div[data-side="center"]').getBoundingClientRect().x - document.querySelector('div[data-side="left"]').getBoundingClientRect().x,
                    l2r : document.querySelector('div[data-side="right"]').getBoundingClientRect().x - document.querySelector('div[data-side="left"]').getBoundingClientRect().x,
                };
                move = {
                    l2C : move.l2C+"px",
                    l2r : move.l2r+"px",
                };

                if (value === (testimonies[activeTestimony-1] ?? testimonies[testimonies.length-1])) {
                    document.querySelector('div[data-side="left"]').animate([ {filter: "blur(1.5px)", transform: 'translateX(0%)', height: minHeight, zIndex: "0", opacity: "0.6"}, {filter: "blur(0px)", transform: 'translateX('+move.l2C+')', height: "100%", zIndex: "100", opacity: "1"}, ], anim);
                    document.querySelector('div[data-side="center"]').animate([ {filter: "blur(0px)", transform: 'translateX(0%)', height: "100%", zIndex: "100", opacity: "1"}, {filter: "blur(1.5px)", transform: 'translateX('+move.l2C+')', height: minHeight, zIndex: "0", opacity: "0.6"}, ], anim);
                    document.querySelector('div[data-side="right"]').animate([ {transform: 'translateX(0%)', zIndex: "0"}, {transform: 'translateX(-'+move.l2r+')', zIndex: "-100"}, ], anim);
                    setTimeout(() => { setActiveTestimony(testimonies.indexOf(testimonies[activeTestimony-1] ?? testimonies[testimonies.length-1])); }, duration);
                }
                if (value === (testimonies[activeTestimony+1] ?? testimonies[0])) { 
                    document.querySelector('div[data-side="right"]').animate([ {filter: "blur(1.5px)", transform: 'translateX(0%)', height: minHeight, zIndex: "0", opacity: "0.6"}, {filter: "blur(0px)", transform: 'translateX(-'+move.l2C+')', height: "100%", zIndex: "100", opacity: "1"}, ], anim);
                    document.querySelector('div[data-side="center"]').animate([ {filter: "blur(0px)", transform: 'translateX(0%)', height: "100%", zIndex: "100", opacity: "1"}, {filter: "blur(1.5px)", transform: 'translateX(-'+move.l2C+')', height: minHeight, zIndex: "0", opacity: "0.6"}, ], anim);
                    document.querySelector('div[data-side="left"]').animate([ {transform: 'translateX(0%)'}, {transform: 'translateX('+move.l2r+')'}, ], anim);
                    setTimeout(() => { setActiveTestimony(testimonies.indexOf(testimonies[activeTestimony+1] ?? testimonies[0])); }, duration);    
                }
            }}>
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 37.236 31.2">
                    <g id="Groupe_59" data-name="Groupe 59" transform="translate(-748.736 -3067.8)">
                        <path id="Tracé_71" data-name="Tracé 71" d="M15.152,0V6S8.82,6.344,9.29,16l5.927.065L15.152,31.2H.218S-3.111.6,15.152,0Z" transform="translate(770.756 3067.8)" fill="#06a13a"/>
                        <path id="Tracé_72" data-name="Tracé 72" d="M15.152,0V6S8.82,6.344,9.29,16l5.927.065L15.152,31.2H.218S-3.111.6,15.152,0Z" transform="translate(748.756 3067.8)" fill="#06a13a"/>
                    </g>
                </svg>

                <p className="overflow-hidden px-8 sm:px-0" style={{textWrap: "balance"}}>{testimonies[i].text}</p>

                <div className="grid grid-rows-2 items-center text-start gap-x-3 h-fit" style={{gridTemplateColumns: "auto minmax(0, 1fr)"}}>
                    <div className="w-12 h-fit aspect-square rounded-full row-span-2 bg-black"></div>
                    <b className="">Nom</b>
                    <span className="">Entreprise</span>
                </div>
            </div>
        }} />
        <button children={<Icons icon={"Right"} size={32} />} className="absolute right-0 bg-zinc-800 text-4xl p-4 z-[200] -mx-6 opacity-90" onClick={(e) => {
            const minHeight = (4.5/6*100) + "%"

            const duration = 750;
            const anim = {
                duration: duration,
                iterations: 1,
                easing: "cubic-bezier(0.68, -0.55, 0.27, 1.55)",
            };
            
            let move = {
                l2C : document.querySelector('div[data-side="center"]').getBoundingClientRect().x - document.querySelector('div[data-side="left"]').getBoundingClientRect().x,
                l2r : document.querySelector('div[data-side="right"]').getBoundingClientRect().x - document.querySelector('div[data-side="left"]').getBoundingClientRect().x,
            };
            move = {
                l2C : move.l2C+"px",
                l2r : move.l2r+"px",
            };
            e.target.disabled = true;

            document.querySelector('div[data-side="left"]').animate([ {filter: "blur(1.5px)", transform: 'translateX(0%)', height: minHeight, zIndex: "0", opacity: "0.6"}, {filter: "blur(0px)", transform: 'translateX('+move.l2C+')', height: "100%", zIndex: "100", opacity: "1"}, ], anim);
            document.querySelector('div[data-side="center"]').animate([ {filter: "blur(0px)", transform: 'translateX(0%)', height: "100%", zIndex: "100", opacity: "1"}, {filter: "blur(1.5px)", transform: 'translateX('+move.l2C+')', height: minHeight, zIndex: "0", opacity: "0.6"}, ], anim);
            document.querySelector('div[data-side="right"]').animate([ {transform: 'translateX(0%)', zIndex: "0"}, {transform: 'translateX(-'+move.l2r+')', zIndex: "-100"}, ], anim);
            setTimeout(() => { setActiveTestimony(testimonies.indexOf(testimonies[activeTestimony-1] ?? testimonies[testimonies.length-1])); e.target.disabled = false; }, duration);
        }} />
        <button children={<Icons icon={"Left"} size={32} />} className="absolute left-0 bg-zinc-800 text-4xl p-4 z-[200] -mx-6 opacity-90" onClick={(e) => {
            const minHeight = (4.5/6*100) + "%"

            const duration = 750;
            const anim = {
                duration: duration,
                iterations: 1,
                easing: "cubic-bezier(0.68, -0.55, 0.27, 1.55)",
            };
            
            let move = {
                l2C : document.querySelector('div[data-side="center"]').getBoundingClientRect().x - document.querySelector('div[data-side="left"]').getBoundingClientRect().x,
                l2r : document.querySelector('div[data-side="right"]').getBoundingClientRect().x - document.querySelector('div[data-side="left"]').getBoundingClientRect().x,
            };
            move = {
                l2C : move.l2C+"px",
                l2r : move.l2r+"px",
            };
            e.target.disabled = true;

            document.querySelector('div[data-side="right"]').animate([ {filter: "blur(1.5px)", transform: 'translateX(0%)', height: minHeight, zIndex: "0", opacity: "0.6"}, {filter: "blur(0px)", transform: 'translateX(-'+move.l2C+')', height: "100%", zIndex: "100", opacity: "1"}, ], anim);
            document.querySelector('div[data-side="center"]').animate([ {filter: "blur(0px)", transform: 'translateX(0%)', height: "100%", zIndex: "100", opacity: "1"}, {filter: "blur(1.5px)", transform: 'translateX(-'+move.l2C+')', height: minHeight, zIndex: "0", opacity: "0.6"}, ], anim);
            document.querySelector('div[data-side="left"]').animate([ {transform: 'translateX(0%)'}, {transform: 'translateX('+move.l2r+')'}, ], anim);
            setTimeout(() => { setActiveTestimony(testimonies.indexOf(testimonies[activeTestimony+1] ?? testimonies[0])); e.target.disabled = false; }, duration); 
        }} />
    </div>
}

export const Tabs = ({tabs}) => {
    const [activeTab, setActiveTab] = useState(0);

    return <div className="w-full flex flex-col gap-6 items-center text-base md:text-xl text-gray-400 max-w-[1340px] text-center px-12">
        <div className="bg-[#F2F2F2] w-full p-2 gap-2 flex max-md:flex-col md:max-lg:grid md:max-lg:grid-cols-2 md:max-lg:grid-rows-2">
            <For obj={tabs} render={(value, i) => {
                return <button key={i} className="w-full flex rounded-lg p-2 items-center" style={{color: archi.find(arc => "/"+value === arc.path).element.props.header.color, background: i === activeTab && "white"}} onClick={() => setActiveTab(i)}>
                    <img src={value.replace(value[0], value[0].toUpperCase())+".svg"} className="h-[50px] aspect-square w-fit rounded-full" />
                    <div className="w-full">{archi.find(arc => "/"+value === arc.path).title}</div>
                </button>
            }} />
        </div>
        <For obj={tabs} render={(value, i) => {
            return (i === activeTab && <div key={i} className="grid grid-cols-1 lg:grid-cols-2 w-full gap-8">
                <div className="aspect-[625/418] bg-black"></div>
                <div className="flex flex-col justify-center gap-4">
                    <button className="w-full flex rounded-lg p-2 items-center gap-4" style={{color: archi.find(arc => "/"+value === arc.path).element.props.header.color}} onClick={() => setActiveTab(i)}>
                        <img src={value.replace(value[0], value[0].toUpperCase())+".svg"} className="h-[50px] aspect-square w-fit rounded-full" />
                        <div className="">{archi.find(arc => "/"+value === arc.path).title}</div>
                    </button>
                    <p className="text-left">Nous mettons à votre disposition notre savoir et notre regard expert pour vous aider à voir plus loin qu'une marque de renom. En effet. nous vous aidons à trouver les services qui répondent le plus à vos attentes. Pour cela. nous nous appuyons sur nos partenaires méticuleusement sélectionnés.</p>
                    <div className="flex flex-wrap text-sm gap-2 uppercase">
                        <For obj={archi.find(arc => "/"+value === arc.path).dropdown} render={(tag, i) => <span key={i} className="px-16 py-2 border rounded-full" style={{color: archi.find(arc => "/"+value === arc.path).element.props.header.color, borderColor: archi.find(arc => "/"+value === arc.path).element.props.header.color}}>{tag.title}</span>} />
                    </div>
                </div>
            </div>)
        }} />
    </div>
}

export const SolutionsList = ({solutions}) => {
    return <Container>
        <For obj={solutions} render={({title, content, img}, key) => {
            return <div key={key} className='grid max-lg:grid-cols-1 grid-cols-2 items-center gap-8'>{key % 2 ?
                <>
                    <img src={img} alt="" className='w-full' />
                    <div className='w-full h-full flex flex-col gap-4'>        
                        <Title color='#08A03A' modifier="text-2xl">{title}</Title>
                        <div className='bg-white border-l-4 border-[#08A03A] p-4 h-full'>{content}</div>
                    </div>
                </> : <>
                    <div className='w-full h-full flex flex-col gap-4'>        
                        <Title color='#08A03A' modifier="text-2xl">{title}</Title>
                        <div className='bg-white border-l-4 border-[#08A03A] p-4 h-full'>{content}</div>
                    </div>
                    <img src={img} alt="" className='w-full' />
                </>}</div>
        }} />
    </Container>
}