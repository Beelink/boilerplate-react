import { FunctionComponent, useState } from "react";
import ImageLoaderProps from "./props";
import Loader from "@components/atoms/Loader";
import { LoaderSize } from "@components/atoms/Loader/props";
import "./index.scoped.scss";
import cn from "classnames";

const ImageLoader: FunctionComponent<ImageLoaderProps> = ({
  src,
  alt = "",
  width,
  height,
}) => {
  const [loaded, setLoaded] = useState(false);

  const _imageLoaded = () => {
    setLoaded(true);
  };

  return (
    <div
      className="image-loader"
      style={{
        width,
        height,
      }}
    >
      {!loaded && <Loader size={LoaderSize.small} dark={false} />}
      <img
        className={cn({
          "image-loader__image": true,
          "image-loader__image--loaded": loaded,
        })}
        src={src}
        alt={alt}
        onLoad={_imageLoaded}
      />
    </div>
  );
};

export default ImageLoader;
