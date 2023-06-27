import React from 'react';
import {SpeedDial, SpeedDialAction, SpeedDialIcon} from "@mui/material";
import FavoriteIcon from "@mui/icons-material/Favorite";
import DeleteIcon from "@mui/icons-material/Delete";


const actions = [
    { icon: <FavoriteIcon />, name: 'ToFavorite'},
    { icon: <DeleteIcon />, name: 'Delete'},
];


const Dial = ({deleteOrToFavorite}) => {
    return (
        <SpeedDial
            ariaLabel="SpeedDial basic example"
            sx={{ position: 'fixed', bottom: 16, right: 16 }}
            icon={<SpeedDialIcon />}
        >
            {actions.map((action) => (
                <SpeedDialAction
                    onClick={() => deleteOrToFavorite(action.name)}
                    key={action.name}
                    icon={action.icon}
                    tooltipTitle={action.name}
                />
            ))}
        </SpeedDial>
    );
};

export default Dial;