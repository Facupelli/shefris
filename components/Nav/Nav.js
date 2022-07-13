import CartIcon from "../../icons/CartIcon.js";
import s from "./Nav.module.scss";

export default function Nav() {
  return (
    <nav className={s.container}>
      <p>SHEFRI'S</p>
      <div className={s.links_wrapper}>
        <CartIcon />
      </div>
    </nav>
  );
}
