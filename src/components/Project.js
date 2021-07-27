function Project({ data }) {
    const { order, img, name, description, liveLink, githubLink, classType, bgColor } = data

    return (
        <section className={`${classType} d-md-flex ${bgColor} align-items-center`}>
            <div className="image">
                <small className="order d-block">.{order}</small>
                <img src={img} alt={name} className="img-fluid" />
            </div>

            <div className="project-desc pl-md-3">
                <h4 className="project-name pt-1">{name}</h4>
                <div className="m-0">{description}</div>
                <div className="project-links">
                    <a href={liveLink} className="live" target="blank">Live</a>
                    <span> | </span>
                    <a href={githubLink} className="github" target="blank">Github</a>
                </div>
            </div>
        </section>
    )
}

export default Project
