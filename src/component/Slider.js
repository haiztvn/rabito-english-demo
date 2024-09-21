import React, { useState, useEffect } from 'react';

const Slider = ({ images, interval = 3000 }) => {
    const [currentIndex, setCurrentIndex] = useState(0);

    // Tạo mảng các giá trị dịch chuyển dựa trên số lượng ảnh với quy tắc đặc biệt
    const generateTranslateValues = (imageCount) => {
        const values = [];
        let currentValue = 0;

        for (let i = 0; i < imageCount; i++) {
            values.push(currentValue);
            if (i === 0) {
                // Khoảng cách giữa ảnh đầu và ảnh thứ hai là 70%
                currentValue += 70;
            } else {
                // Sau đó, khoảng cách là 80% cho mỗi ảnh tiếp theo
                currentValue += 80;
            }
        }
        return values;
    };

    // Tạo giá trị dịch chuyển dựa trên số lượng ảnh
    const translateValues = generateTranslateValues(images.length);

    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
        }, interval);

        return () => clearInterval(timer);
    }, [images.length, interval]);

    return (
        <div className="banner">
            <div
                className="slides"
                style={{ transform: `translateX(-${translateValues[currentIndex]}%)` }}
            >
                {images.map((image, index) => (
                    <div className={`slider ${index === currentIndex ? 'active' : ''}`} key={index}>
                        <img src={image} alt={`slider ${index}`} />
                    </div>
                ))}
            </div>
            <div className="indicators">
                {images.map((_, index) => (
                    <span
                        key={index}
                        className={`indicator ${index === currentIndex ? 'active' : ''}`}
                        onClick={() => setCurrentIndex(index)}
                    />
                ))}
            </div>
        </div>
    );
};

export default Slider;
