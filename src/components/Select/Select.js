import React from 'react';
import {FormControl, NativeSelect} from "@mui/material";
import {nanoid} from "nanoid";

const Select = ({items}) => {
    return (
        <FormControl fullWidth>
            <NativeSelect
                defaultValue={items[0]}
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