import { useState } from "react";
import "./Gallery.css";

export default function Gallery({ images }) {
  const [focusImg, setFocusImg] = useState(images[0].id);
  const imgFocus = images.find((img) => img.id === focusImg);
  return (
    <div className="gallery-wrapper">
      <div className="gallery">
        <div className="previews">
          {images.map((img) => (
            <img
              src={img.url}
              alt={img.alt}
              key={img.id}
              onMouseOver={() => {
                setFocusImg(img.id);
              }}
              className={`${img.id === focusImg ? "prew-on-focus" : ""}`}
            />
          ))}
        </div>
        <div className="main-img">
          <img src={imgFocus.url} alt={imgFocus.alt} />
        </div>
      </div>
    </div>
  );
}
