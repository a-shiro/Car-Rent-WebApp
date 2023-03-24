import styles from "./CarDetails.module.css";

export const CarDescription = ({ car }) => {
  return (
    <div className={styles.ConditionalContainer}>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis iste
        adipisci obcaecati nulla voluptatibus exercitationem nihil corrupti
        atque doloribus illo, nam neque praesentium est voluptas totam rem et
        eius tempora? Accusantium sit quaerat voluptas illo minus, incidunt
        voluptatibus dolorem eligendi nihil nobis. Molestiae aspernatur
        obcaecati ratione corporis aliquid maiores dicta aperiam mollitia!
        Beatae, placeat laborum sunt iste fugiat velit sint porro voluptas
        quaerat totam. Cum, atque neque sequi dolor corrupti est magnam a ullam
        in quisquam illo animi assumenda reiciendis cupiditate deserunt hic
        provident explicabo esse sint exercitationem architecto voluptatum
        temporibus quis? Cumque est at exercitationem aliquam. Repellendus eaque
        facilis, nesciunt ducimus assumenda, iure sint non numquam nulla optio
        soluta eum esse itaque atque laboriosam corporis quo debitis vero
        veritatis! Enim a voluptatibus fugiat, at hic eius veritatis expedita
        facere consequatur modi laudantium ullam delectus consectetur tenetur
        quas repellendus ab explicabo impedit laboriosam dolores dolore atque
        sunt. Saepe eaque libero fugiat explicabo inventore nisi optio sint
        dolor laudantium alias minima temporibus delectus velit distinctio ipsam
        voluptatum, corporis deleniti! Aperiam sed beatae, deleniti totam optio,
      </p>

      <h1>
        Advantages of renting {car.brand} {car.model}
      </h1>

      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis iste
        adipisci obcaecati nulla voluptatibus exercitationem nihil corrupti
        atque doloribus illo, nam neque praesentium est voluptas totam rem et
        eius tempora? Accusantium sit quaerat voluptas illo minus, incidunt
        voluptatibus dolorem eligendi nihil nobis. Molestiae aspernatur
        obcaecati ratione corporis aliquid maiores dicta aperiam mollitia!
        Beatae, placeat laborum sunt iste fugiat velit sint porro voluptas
        quaerat totam. Cum, atque neque sequi dolor corrupti est magnam a ullam
        in quisquam illo animi assumenda reiciendis cupiditate deserunt hic
        provident explicabo esse sint exercitationem architecto voluptatum
        temporibus quis? Cumque est at exercitationem aliquam. Repellendus eaque
        facilis, nesciunt ducimus assumenda, iure sint non numquam nulla optio
        soluta eum esse itaque atque laboriosam corporis quo debitis vero
        veritatis! Enim a voluptatibus fugiat, at hic eius veritatis expedita
        facere consequatur modi laudantium ullam delectus consectetur tenetur
        quas repellendus ab explicabo impedit laboriosam dolores dolore atque
        sunt. Saepe eaque libero fugiat explicabo inventore nisi optio sint
        dolor laudantium alias minima temporibus delectus velit distinctio ipsam
        voluptatum, corporis deleniti! Aperiam sed beatae, deleniti totam optio,
      </p>
    </div>
  );
};
