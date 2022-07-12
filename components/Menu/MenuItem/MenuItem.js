import Image from "next/image";
import AddToCartBtn from "./AddToCartBtn/AddToCartBtn";
import s from "./MenuItem.module.scss";

export default function MenuItem({ pizza }) {
  return (
    <article className={s.container}>
      <div className={s.img_container}>
        <Image src="/pizza.png" width="300" height="300" objectFit="cover" />
      </div>
      <div className={s.product_info}>
        <h3 className={s.name}>{pizza.name}</h3>
        <p>{pizza.description}</p>
        <p className={s.price}>
          {new Intl.NumberFormat("es-AR", {
            style: "currency",
            currency: "ARS",
          }).format(pizza.price)}
        </p>
      </div>
      <AddToCartBtn />
    </article>
  );
}
