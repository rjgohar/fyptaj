import { Box, makeStyles, Typography } from "@material-ui/core";
import React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import TopSellerCard, { ArtistSkeltonCard } from ".";
import { getcreators } from "../../redux/creators/creators.action";

export default function Topsellers() {
  const classes = useStyle();
  const dispatch = useDispatch();
  const {
    Creators: { allCreators, getcreatorsGetting },
  } = useSelector((state) => state);

  useEffect(() => {
    dispatch(getcreators());
  }, [dispatch]);
  return (
    <div>
      <Box className={classes.outerContainer}>
        <Box className={classes.title}>
          <Typography variant="h1" className={classes.typo}>
            Top Sellers
          </Typography>
        </Box>

        <Box py={4}>
          <Box className={classes.ceatorsSec}>
            {getcreatorsGetting ? (
              <>
                {Array(8)
                  .fill(1)
                  .map((_, i) => {
                    return <ArtistSkeltonCard key={i} />;
                  })}
              </>
            ) : (
              allCreators.map(({ username, cover, walletAddress }, i) => {
                return (
                  <Box key={i}>
                    <TopSellerCard
                      username={username}
                      cover={cover}
                      walletAddress={walletAddress}
                    />
                  </Box>
                );
              })
            )}
          </Box>
        </Box>
      </Box>
    </div>
  );
}

const useStyle = makeStyles((theme) => ({
  outerContainer: {
    marginTop: 131,
    [theme.breakpoints.down("md")]: {
      marginTop: 100,
    },
  },

  title: {
    color: theme.palette.text.primary,
  },
  ceatorsSec: {
    display: "grid",
    gap: 20,
    gridTemplateColumns: "1fr 1fr 1fr 1fr 1fr",
    [theme.breakpoints.down("sm")]: {
      gridTemplateColumns: "1fr 1fr 1fr  ",
    },
    [theme.breakpoints.down("xs")]: {
      gridTemplateColumns: "1fr 1fr ",
    },
  },
  typo: {
    [theme.breakpoints.down("md")]: {
      fontSize: 42,
    },
  },
}));
