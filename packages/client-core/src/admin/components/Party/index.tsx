import React from 'react';
import Grid from "@material-ui/core/Grid";
import Button from '@material-ui/core/Button';
import Search from "./SearchParty";
import PartyTable from './PartyTable';
import CreateParty from "./CreateParty";
import { useStyle, useStyles } from "./style";


const Party = () => {
    const classes = useStyle();
    const classex = useStyles();
    const [partyModelOpen, setPartyModelOpen] = React.useState(false);


    const openModalCreate = () => {
        setPartyModelOpen(true);
    };

    const handleCreatePartyClose = () => {
        setPartyModelOpen(false);
    };

    return (
        <div>
            <Grid container spacing={3} className={classes.marginBottm}>
                <Grid item xs={9}>
                    <Search />
                </Grid>
                <Grid item xs={3}>
                    <Button
                        className={classex.createBtn}
                        type="submit"
                        variant="contained"
                        color="primary"
                        onClick={openModalCreate}
                    >
                        Create New Party
                    </Button>
                </Grid>
            </Grid>
            <div className={classex.rootTable}>
                <PartyTable />
            </div>
            <CreateParty
                open={partyModelOpen}
                handleClose={handleCreatePartyClose}
            />
        </div>
    );
};


export default Party;