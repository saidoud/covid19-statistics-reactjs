import React from "react";
import { Card, Typography, CardContent, Grid } from "@material-ui/core";
import styles from "./Cards.module.css";
import CountUp from "react-countup";
import cx from "classnames";
import Loading from "./Loading";
import Skeleton from "react-loading-skeleton";

const Cards = ({ data: { confirmed, recovered, deaths, lastUpdate } }) => {
  if (!confirmed) {
    return <Loading />;
  }

  return (
    <div className={styles.container}>
      <Grid container spacing={4} justify="center">
        {/* Infected Card */}
        <Grid
          item
          component={Card}
          xs={12}
          md={3}
          className={cx(styles.card, styles.infected)}
        >
          <CardContent>
            <Typography color="textSecondary" gutterBottom>
              {confirmed ? "Infected" : <Skeleton width={70} height={10} />}
            </Typography>
            <Typography variant="h5" component="h2">
              <CountUp start={0} end={confirmed.value} separator="," />
            </Typography>
            <Typography color="textSecondary" gutterBottom>
              {new Date(lastUpdate).toDateString()}
            </Typography>
            <Typography variant="body2" component="p">
              Number of active case of coronavirus
            </Typography>
          </CardContent>
        </Grid>
        {/* Recovered Card */}
        <Grid
          item
          component={Card}
          xs={12}
          md={3}
          className={cx(styles.card, styles.recovered)}
        >
          <CardContent>
            <Typography color="textSecondary" gutterBottom>
              Recovered
            </Typography>
            <Typography variant="h5" component="h2">
              <CountUp start={0} end={recovered.value} separator="," />
            </Typography>
            <Typography color="textSecondary" gutterBottom>
              {new Date(lastUpdate).toDateString()}
            </Typography>
            <Typography variant="body2" component="p">
              Number of recoveries from coronavirus
            </Typography>
          </CardContent>
        </Grid>
        {/* Deaths Cards */}
        <Grid
          item
          component={Card}
          xs={12}
          md={3}
          className={cx(styles.card, styles.deaths)}
        >
          <CardContent>
            <Typography color="textSecondary" gutterBottom>
              Deaths
            </Typography>
            <Typography variant="h5" component="h2">
              <CountUp start={0} end={deaths.value} separator="," />
            </Typography>
            <Typography color="textSecondary" gutterBottom>
              {new Date(lastUpdate).toDateString()}
            </Typography>
            <Typography variant="body2" component="p">
              Number of deaths caused by coronavirus
            </Typography>
          </CardContent>
        </Grid>
      </Grid>
    </div>
  );
};
export default Cards;
