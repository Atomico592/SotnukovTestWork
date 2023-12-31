import React from 'react';
import {FormControl, InputLabel, NativeSelect} from "@mui/material";
import {nanoid} from "nanoid";

const Select = ({items, handleChange, defaultValue}) => {
    return (
        <FormControl fullWidth>
            <NativeSelect
                value={defaultValue}
                onChange={handleChange}
                label="Количество постов"
                inputProps={{
                    id: 'uncontrolled-native',
                }}
            >
                {items.map(item => (
                    <option key={nanoid()} value={item}>{item}</option>
                ))}
            </NativeSelect>
        </FormControl>
    );
};

export default Select;