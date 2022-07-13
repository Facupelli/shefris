import Link from "next/link";
import InstagramIcon from "../../icons/Instagram";
import s from "./Footer.module.scss";

export default function Footer() {
  return (
    <footer className={s.container}>
      <p>shefris@gmail.com</p>
      <p>264 7455332</p>
      <p>Barrio Puyuta, 876</p>
      <Link
        href="https://www.instagram.com/shefrispizzanapoletana/"
        target="_blank"
      >
        <div className={s.instagram_wrapper}>
          <InstagramIcon /> INSTAGRAM
        </div>
      </Link>
      <div className={s.facupelli_wrapper}>
        <Link href="https://linkedin.com/in/facundopellicer" target="_blank">
          made with love by Facupelli
        </Link>
      </div>
    </footer>
  );
}
