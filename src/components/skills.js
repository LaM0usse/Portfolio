import skillsData from '../data/skills.json'

export default function Skills() {
    const frontendSkills = skillsData.find(item => item.category === 'Frontend').skills
    const backendSkills = skillsData.find(item => item.category === 'Backend').skills
    const otherSkills = skillsData.find(item => item.category === 'Autres').skills

    const renderSkills = (skills) => {
        return skills.map((data, index) => (
            <div className="skill-logo" key={index}>
                <img src={data.image} alt={data.name + " logo"}/>
                <div>{data.name}</div>
            </div>
        ))
    }

    return (
        <section id="skills" className="scrolled">
                <h2 className="subtitle-section">WHAT I DO</h2>
                <h3 className="title-section">Mes competences</h3>
                <div className="skills-container">
                    <div className="category">
                        <h4 className="skill-pink skills-title">Frontend</h4>
                        <div className="skills">{renderSkills(frontendSkills)}</div>
                    </div>
                    <div className="category">
                        <h4 className="skill-blue skills-title">Backend</h4>
                        <div className="skills">{renderSkills(backendSkills)}</div>
                    </div>
                    <div className="category">
                        <h4 className="skill-orange skills-title">Autres</h4>
                        <div className="skills">{renderSkills(otherSkills)}</div>
                    </div>
                </div>
        </section>
    )
}