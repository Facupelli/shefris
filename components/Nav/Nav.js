import CartIcon from "./CartIcon";
import s from "./Nav.module.scss";

export default function Nav() {
  return (
    <nav className={s.container}>
      <p>SHEFRIS</p>
      <div>
        <CartIcon />
      </div>
    </nav>
  );
}
