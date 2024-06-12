import { preloadImage } from "./imagePreloader";
import { useEffect } from "react";

const ImageComponent = ({ src }) => {
  useEffect(() => {
    preloadImage(src).then(() => console.log("Image preloaded"));
  }, [src]);

  return <img src={src} alt="Preloaded" />;
};

export default ImageComponent;
