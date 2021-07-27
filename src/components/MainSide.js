function MainSide() {
    return (
        <main>
            <div className="about-content">
                <h1 className="title font-weight-bold">
                    Full-Stack
            <br />
            Developer. <br />
            Passionate
            <br />
            &amp; Creative.
          </h1>
                <p className="description">
                    Hi! My name is{' '}
                    <span className="keyword">
                        <b>@Eric Mbouwe</b>
                    </span>
            , I am passionate about new technologies and business growth.
            Graduate in economics, I am a problem solver and my favorite{' '}
                    <span className="keyword">
                        <b>@stack</b>
                    </span>{' '}
            is{' '}
                    <span className="keyword">
                        <b>React</b>
                    </span>
                    <span className="keyword">|</span>
                    <span className="keyword">
                        <b>Ruby on Rails</b>
                    </span>
            . I am enthusiastic and a good team player.
            <br />
            Follow my work below
          </p>
                <div className="social-links">
                    <ul className="d-flex justify-content-start">
                        <li>
                            <a
                                href="https://www.linkedin.com/in/ericmbouwe/"
                                target="blank"
                            >
                                <i className="fa fa-linkedin" aria-hidden="true" />
                            </a>
                        </li>
                        <li>
                            <a href="https://github.com/EricMbouwe" target="blank">
                                <i className="fa fa-github" aria-hidden="true" />
                            </a>
                        </li>
                        <li>
                            <a href="https://twitter.com/EricMbouwe" target="blank">
                                <i className="fa fa-twitter" aria-hidden="true" />
                            </a>
                        </li>
                        <li className="file">
                            <a
                                href="assets/images/RESUME-ERIC-EN.pdf"
                                data-toggle="tooltip"
                                data-placement="top"
                                title="Download resume"
                                download
                            >
                                <i className="fa fa-file-text" aria-hidden="true" />
                            </a>
                        </li>
                    </ul>
                </div>
                <a
                    className="hello-btn d-block"
                    href="mailto:ericmbouwe@gmail.com"
                    target="blank"
                >
                    Get in Touch!
                </a>
            </div>
        </main>
    );
}

export default MainSide
