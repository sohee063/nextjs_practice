import React from "react";
import { Grid, Image } from "semantic-ui-react";
import styles from "./ItemList.module.css";
import Link from "next/link";

export const ItemList = ({ list }) => {
  return (
    <div>
      <Grid columns={3}>
        <Grid.Row>
          {list.map((item) => (
            <Grid.Column key={item.id}>
              <Link href={`/detail/${item.id}`}>
                <Image
                  src={item.image_link}
                  alt={item.name}
                  className={styles.img_item}
                />
                <strong>{item.name}</strong>
                <span>
                  {item.category} {item.product_type}
                </span>
                <strong>${item.price}</strong>
              </Link>
            </Grid.Column>
          ))}
        </Grid.Row>
      </Grid>
    </div>
  );
};
