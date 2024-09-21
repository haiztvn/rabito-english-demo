import Slider from "../component/Slider";
import section2 from '../image/section2.png';
const images = [
    section2, section2, section2, section2, section2
    // Thêm nhiều ảnh nếu cần
];
function Section2() {
    return (
        <div class="section-2">
            <p class="diverse-multimedia">
                <span class="text-wrapper-7">Diverse</span>
                <span class="text-wrapper-8">Multimedia Content</span>
            </p>
            <p class="text-wrapper-9">
                Access a variety of video and audio materials, including hot trends, TOEIC, IELTS, TOEFL, and daily
                conversations for comprehensive English practice.
            </p>
            <div class="section-2-btn">DISCOVER NOW</div>
            <Slider images={images} />
        </div>
    );
}

export default Section2;
