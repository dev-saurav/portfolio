import React from "react";
import { Grid } from '@material-ui/core';
import Container from '@material-ui/core/Container';
import { motion } from 'framer-motion';
import FlipCard from '../FlipCard/FlipCard';



const CardGrid = ({ list, section }) => {
    const no = section === "work" ? 6 : 3
    const renderListItem = (item) => {
        return (
            <Grid
                style={{ textAlign: "center" }}
                item
                xs={12}
                md={no}>
                <motion.div initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ duration: 1 }}>{item}</motion.div>
            </Grid>
        )
    }

    const renderFlipItem = (item) => {
        return (
            <Grid
                style={{ textAlign: "center" }}
                item
                xs={12}
                md={no}>
                <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ duration: 1 }}
                >{FlipCard(item, "back")}</motion.div>
            </Grid>
        )

    }
    const spacing = section === "work" ? 5 : 10
    return (
        <Container maxWidth="md">
            <Grid container spacing={spacing}>
                {list.map(item => section === "work" ? renderFlipItem(item) : renderListItem(item)
                )}
            </Grid>
        </Container>
    );
};

export default CardGrid;