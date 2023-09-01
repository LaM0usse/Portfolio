import React, { useState, useEffect } from 'react'
import projectData from '../data/projectdata.json'

function Carousel() {
    const [projects, setProjects] = useState([])
    const [currentIndex, setCurrentIndex] = useState(0)
    const [isModalOpen, setIsModalOpen] = useState(false)

    useEffect(() => {
        setProjects(projectData)
    }, [])
    
    const [selectedImageIndex, setSelectedImageIndex] = useState(currentIndex)
    const prevIndex = (currentIndex - 1 + projects.length) % projects.length
    const nextIndex = (currentIndex + 1) % projects.length

    const goToPrevSlide = () => {
        const newIndex = (currentIndex - 1 + projects.length) % projects.length
        setCurrentIndex(newIndex);
        setSelectedImageIndex(newIndex)
    }

    const goToNextSlide = () => {
        const newIndex = (currentIndex + 1) % projects.length
        setCurrentIndex(newIndex);
        setSelectedImageIndex(newIndex)
    }

    const openModal = () => {
        setIsModalOpen(true)
    }

    const closeModal = () => {
        setIsModalOpen(false)
    }

    const projectInModal = projects[currentIndex]

    const stopPropagation = (e) => { e.stopPropagation()}


    const goToSlide = (index) => {
    setCurrentIndex(index)
    setSelectedImageIndex(index)
}

    return (
        <section id="project" className="scrolled">
            <h2 className="subtitle-section">WHAT I HAVE DONE</h2>
            <h3 className="title-section">MES PROJETS</h3>
            <div className="carousel">
                <div className="prev-image" onClick={goToPrevSlide}>
                    <img src={projects[prevIndex]?.image} alt={projects[prevIndex]?.caption} />
                    <i className="fa-solid fa-angle-left arrow-left"></i>
                </div>
                <div className="current-image" onClick={openModal}>
                    <img src={projects[currentIndex]?.image} alt={projects[currentIndex]?.caption} />
                    <div className="image-overlay"></div>
                </div>
                <div className="next-image" onClick={goToNextSlide}>
                    <img src={projects[nextIndex]?.image} alt={projects[nextIndex]?.caption} />
                    <i className="fa-solid fa-angle-right arrow-right"></i>
                </div>
                <p className="caption">{projects[currentIndex]?.caption}</p>
            </div>
            <div className="carousel-indicators">
        {projects.map((project, index) => (
            <p key={index}
                className={`indicator-button ${index === selectedImageIndex ? 'active' : ''}`}
                onClick={() => goToSlide(index)}>
                
            </p>
        ))}
    </div>
 

            {isModalOpen && (
                <div className="modal-overlay" onClick={closeModal}>
                    <div className="modal" onClick={stopPropagation}>
                        <span className="close-modal" onClick={closeModal}><i className="fa-solid fa-xmark"></i></span>
                        <div className="modal-row">
                            <img className="modal-img" src={projectInModal.imagesproject} alt="Projet"></img>
                            <div className="modal-text">
                                <h4>{projectInModal.name}</h4>
                                <p>Année : {projectInModal.year}</p>
                                <p>Mission : {projectInModal.description}</p>
                                <p>{projectInModal.details}</p>
                                <p>Technologies utilisées : <span className="modal-skill">{projectInModal.skill}</span></p>
                                <div className="modal-link">
                                {projectInModal.link && <a href={projectInModal.link} target="blank" className="app-link">Visiter le site</a>}
                                {projectInModal.git && <a href={projectInModal.git} target="blank"><i className="fa-brands fa-github gh-link"></i></a>}
                            </div>
                            </div>
                        </div>
                        <div className="modal-second-row">
                            {projectInModal.imagesproject1 && <img className="modal-img" src={projectInModal.imagesproject1} alt="Projet"></img>}
                            {projectInModal.imagesproject2 && <img className="modal-img" src={projectInModal.imagesproject2} alt="Projet"></img>}
                            {projectInModal.imagesproject3 && <img className="modal-img" src={projectInModal.imagesproject3} alt="Projet"></img>}
                        </div>
                    </div>
                </div>
            )}
        </section>
    )
}

export default Carousel