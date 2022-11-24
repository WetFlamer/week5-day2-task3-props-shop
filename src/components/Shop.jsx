import styles from "./Shop.module.css";
function Shop(props) {
  return (
    <div class={styles.product_item}>
      <img src={props.image} />
      <div class={styles.product_list}>
        <h3>{props.title}</h3>
        <span class={styles.price}>₽ {props.cost}</span>
        <a href="#" class={styles.button}>
            Купить
        </a>
      </div>
    </div>
  );
}

export default Shop;
