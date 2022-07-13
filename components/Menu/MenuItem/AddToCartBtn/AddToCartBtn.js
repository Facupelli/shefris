import LabelIcon from '../../../../icons/LabelIcon'
import s from "./AddToCartBtn.module.scss";

export default function AddToCartBtn() {
  return (
    <div className={s.container}>
      <div className={s.order_btn}>
        <button>Ordenar <LabelIcon /> </button>
      </div>
      <p>1</p>
      <div className={s.quantity_btn_container}>
        <button className={s.cart_button}>+</button>
        <button className={s.cart_button}>-</button>
      </div>
    </div>
  );
}
