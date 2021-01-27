import React, { useState } from 'react'
import {Grid} from '@material-ui/core'
import Input from './Input'

const Call = ({setData} ) => {

    const initialCvalues = {
        Type: 'Call',
        Date: '',
        Ticker: '',
        Strike: '',
        Expiration: '',
        EntryPrice: '',
        Quantity: '',
        CloseDate: '',
        ClosingPrice: '',
    }

    const [values, setValues] = useState(initialCvalues);

    const handleChange = (e) => {
        const {name, value} = e.target;
        setValues({...values, [name]: value});
        
        
    };
    setData(values);
    
    return (
        <div>
            <form >
            <Grid container className="stockcontainer" spacing={3}>
            <Grid item xs={6}>
                <Input value={values.Date} onChange = {handleChange} label="Date" name="Date"  />
                <Input value={values.Strike} onChange = {handleChange} label="Strike" name="Strike"  />
                <Input value={values.EntryPrice} onChange = {handleChange} label="Entry Price" name="EntryPrice"  />
                <Input value={values.CloseDate} onChange = {handleChange} label="Close Date" name="CloseDate"  />
            </Grid>
            <Grid item xs={6}>
            <Input value={values.Ticker} onChange = {handleChange} label="Ticker" name="Ticker"  />
            <Input value={values.Expiration} onChange = {handleChange} label="Expiration" name="Expiration"  />
            <Input value={values.Quantity} onChange = {handleChange} label="Quantity" name="Quantity"  />
            <Input value={values.ClosingPrice} onChange = {handleChange} label="Closing Price" name="ClosingPrice"  />
            </Grid>
            </Grid>
        
            </form>
        </div>



    )
}

export default Call
