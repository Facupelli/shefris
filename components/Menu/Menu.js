import MenuItem from "./MenuItem/MenuItem";
import s from "./Menu.module.scss";

export default function Menu({ pizzas }) {

  return (
    <section className={s.container}>
      <h1>MENU</h1>
      <div>
        {pizzas.length > 0 && pizzas.map((pizza) => <MenuItem key={pizza.id} pizza={pizza} />)}
      </div>
    </section>
  );
}
