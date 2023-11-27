import styles from "./imageBox.module.scss";

interface ImageBoxProps {
  image: string;
  width: "full" | "half";
}

export const ImageBox = ({ image, width }: ImageBoxProps) => {
  return (
    <div className={`${styles.imageBox} ${width == "full" ? "" : styles.half}`}>
      <img src={image} alt="" />
    </div>
  );
};
