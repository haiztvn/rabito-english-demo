function Footer() {
    return (
        <footer className="footer">
            <div className="footer-top">
                <div className="logo">
                    <div className="text-wrapper">RABITO ENGLISH</div>
                    <p className="p">Our vision is to provide convenience and help improve your English learning.</p>
                </div>
                <div className="contact">
                    <div className="column">
                        <div className="column-title">About</div>
                        <div className="column-links">
                            <div>How to use</div>
                            <div>Featured</div>
                            <div>Partnership</div>
                            <div>Business Relation</div>
                        </div>
                    </div>
                    <div className="column">
                        <div className="column-title">Community</div>
                        <div className="column-links">
                            <div>Events</div>
                            <div>Blog</div>
                            <div>Invite a friend</div>
                        </div>
                    </div>
                    <div className="column">
                        <div className="column-title">Socials</div>
                        <div className="column-links">
                            <div>Discord</div>
                            <div>Instagram</div>
                            <div>Twitter</div>
                            <div>Facebook</div>
                        </div>
                    </div>
                </div>
            </div>
            <img className="footer-line" src="img/line.svg" alt="Footer line" />
            <div className="footer-bottom">
                <div className="footer-copyright">©2024 RABITO English. All rights reserved</div>
                <div className="footer-privacy">
                    <p>Privacy & Policy</p>
                    <p>Terms & Condition</p>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
