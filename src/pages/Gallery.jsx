import "../styles.css";

import Header from "../components/Header";
import Footer from "../components/Footer";
import { images } from "./gallery";

const Gallery = () => {
  return (
    <div className="pt-[4.75rem] lg:pt-[5.25rem] overflow-hidden">
      <Header />
      <div className="gallery-container">
        <div className="gallery-grid">
          {images.map((src, index) => (
            <div key={index} className="gallery-item hover:scale-110 transition-transform duration-300 ease-in-out">
              <img src={src} alt={`Gallery Image ${index + 1}`} />
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Gallery;