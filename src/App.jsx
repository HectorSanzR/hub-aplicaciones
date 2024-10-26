import React, { useState,useEffect } from 'react';
import "./App.css";
import Modal  from "./Modal"
// import React, { useState, useEffect } from 'react';
import ScrollButtons from './assets/Components/ScrollButton';


// const ScrollButtons = () => {
//     const [showScrollTop, setShowScrollTop] = useState(false);
  
//     const handleScroll = () => {
//       if (window.scrollY > 300) {
//         setShowScrollTop(true);
//       } else {
//         setShowScrollTop(false);
//       }
//     };
  
//     useEffect(() => {
//       window.addEventListener('scroll', handleScroll);
//       return () => window.removeEventListener('scroll', handleScroll);
//     }, []);
  
//     const scrollToBottom = () => {
//       window.scrollTo({ top: document.documentElement.scrollHeight, behavior: 'smooth' });
//     };
  
//     const scrollToTop = () => {
//       window.scrollTo({ top: 0, behavior: 'smooth' });
//     };
  
//     return (
//       <div>
//         <button onClick={scrollToBottom}>Bajar</button>
//         {showScrollTop && <button onClick={scrollToTop}>Subir</button>}
//       </div>
//     );
//   };

const App = () => {
    const [modalContent, setModalContent] = useState(null);

    const apps = [
        { id: 'app1', title: 'BUSINESS INTELLIGENCE', description: 'Descripción de la aplicación 1.', images: [{ src: 'src/assets/Imagenes/SAPAC.png', link: 'https://sempertex.br10.hcs.cloud.sap/approuter', Text:"Prueba"}, { src: 'https://via.placeholder.com/100', link: 'https://www.facebook.com' }, { src: 'https://via.placeholder.com/100', link: 'https://www.twitter.com' }] },
        { id: 'app2', title: 'COMERCIAL - SIPO', description: 'Descripción de la aplicación 2.', images: [{ src: 'https://via.placeholder.com/100', link: 'https://www.instagram.com' }, { src: 'https://via.placeholder.com/100', link: 'https://www.youtube.com' }, { src: 'https://via.placeholder.com/100', link: 'https://www.spotify.com' }] },
        { id: 'app3', title: 'AUTOSERVICIO', description: 'Descripción de la aplicación 3.', images: [{ src: 'https://via.placeholder.com/100', link: 'https://www.amazon.com' }, { src: 'https://via.placeholder.com/100', link: 'https://www.linkedin.com' }, { src: 'https://via.placeholder.com/100', link: 'https://www.google.com/calendar' }] },
        { id: 'app4', title: 'MARKETING Y EDUCACION', description: 'Descripción de la aplicación 4.', images: [{ src: 'https://via.placeholder.com/100', link: 'https://www.netflix.com' }, { src: 'https://via.placeholder.com/100', link: 'https://www.reddit.com' }, { src: 'https://via.placeholder.com/100', link: 'https://www.twitch.tv' }] },
        { id: 'app5', title: 'GESTION HUMANA', description: 'Descripción de la aplicación 5.', images: [{ src: 'https://via.placeholder.com/100', link: 'https://www.github.com' }, { src: 'https://via.placeholder.com/100', link: 'https://www.stackoverflow.com' }, { src: 'https://via.placeholder.com/100', link: 'https://www.medium.com' }] },
        { id: 'app6', title: 'APROBACINES FINANCIERAS', description: 'Descripción de la aplicación 6.', images: [{ src: 'https://via.placeholder.com/100', link: 'https://www.dropbox.com' }, { src: 'https://via.placeholder.com/100', link: 'https://www.drive.google.com' }, { src: 'https://via.placeholder.com/100', link: 'https://www.onedrive.com' }] },
        { id: 'app7', title: 'HERRAMIENTAS', description: 'Descripción de la aplicación 7.', images: [{ src: 'https://via.placeholder.com/100', link: 'https://www.slack.com' }, { src: 'https://via.placeholder.com/100', link: 'https://www.zoom.us' }, { src: 'https://via.placeholder.com/100', link: 'https://www.microsoft.com/teams' }] },
    ];

    const openModal = (app) => {
        setModalContent(app);
    };

    const closeModal = () => {
        setModalContent(null);
    };

    return (
        <div>
            
            <header>
                <h1>Hub de Aplicaciones</h1>
            </header>
            <div className="nav-container ">
                {apps.map(app => (
                    <a key={app.id} href="#" onClick={() => openModal(app)}>{app.title}</a>
                ))}
            </div>
            <div className="app-sections-container">
                {apps.map(app => (
                    <div key={app.id} className="app-section">
                        <h2>{app.title}</h2>
                        <p>{app.description}</p>
                        <div className="image-container">
                            {app.images.map((image, index) => (
                                <a key={index} href={image.link} target="_blank" rel="noopener noreferrer">
                                    <img src={image.src} alt={`Imagen ${index + 1}`} className="image" />
                                </a>
                            ))}
                        </div>
                    </div>
                ))}
               
            </div>
            {modalContent && <Modal app={modalContent} closeModal={closeModal} />}
            <ScrollButtons />
        </div>
    );
};

export default App;
