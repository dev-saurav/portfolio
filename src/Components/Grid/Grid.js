import React from "react";
import { Grid } from '@material-ui/core';
import Container from '@material-ui/core/Container';
import { motion } from 'framer-motion';

const CardGrid = ({ list, section }) => {
    const no = section === "work" ? 6 : 3
    return (
        <Container maxWidth="md">
            <Grid container spacing={10}>
                {list.map(item => (
                    <Grid
                        style={{ textAlign: "center" }}
                        item
                        xs={12}
                        md={no}>
                        <motion.div initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ duration: 1 }}>{item}</motion.div>
                    </Grid>
                ))}
            </Grid>
        </Container>
    );
};

export default CardGrid;