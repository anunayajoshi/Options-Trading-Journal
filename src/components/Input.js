import React from 'react'
import {TextField} from '@material-ui/core'

function Input(props) {
    
    const {name, label, value, onChange} = props;

    return (
        <div>
            <div><TextField 
            className="textfield" 
            value={value} 
            onChange = {onChange} 
            label={label} 
            name={name} 
            margin="normal"
            variant="outlined"
            color="primary" 
            autoComplete="off"/>
            </div>
        </div>
    )
}

export default Input
