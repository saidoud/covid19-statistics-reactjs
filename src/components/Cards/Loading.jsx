import { Grid, Card, Typography, CardContent } from "@material-ui/core";
import React from "react";
import styles from "./Cards.module.css";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

function Loading() {
  const data = [1, 2, 3];
  return (
    <div className={styles.container}>
      <Grid
        container
        spacing={4}
        justify="center"
        style={{ marginBottom: "200px" }}
      >
        {data.map((item) => (
          <Grid key={item} item xs={12} md={3} style={{ margin: "25px" }}>
            <Card style={{ maxWidth: 345 }}>
              <Skeleton width={350} height={218} />

              <CardContent>
                <Typography color="textSecondary" gutterBottom>
                  <Skeleton width={70} />
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </div>
  );
}

export default Loading;
