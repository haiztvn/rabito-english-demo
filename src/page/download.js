function Download() {
    return (
        <div className="download">
            <div className="phone-container">
                <img src={require(`../image/phone-frame.png`)} alt="Phone Frame" className="phone-frame" />
            </div>
            <div className="text-container">
                <h1 className="title1">Take Your English Journey</h1>
                <h1 className="title2">On the Go</h1>
                <p>
                    Keep learning, anytime, anywhere.
                    <br />
                    Download the app now!
                </p>
            </div>
            <div className="down-container">
                <h3>SCAN QR-CODE TO DOWNLOAD:</h3>
                <img src={require(`../image/qr.png`)} alt="QR Code" className="qr-code" />
                <h3>DOWNLOAD NOW ON:</h3>
                <div className="download-buttons">
                    <div className="download-button-1">
                        <a href="#" className="google-play">
                            <img src={require(`../image/google-store.png`)} alt="Google Play" />
                        </a>
                    </div>
                    <div className="download-button-2">
                        <a href="#" className="app-store">
                            <img src={require(`../image/apple-store.png`)} alt="App Store" />
                        </a>
                    </div>
                </div>
            </div>

        </div>
    );
}

export default Download;
