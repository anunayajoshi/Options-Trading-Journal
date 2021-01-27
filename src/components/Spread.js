import React, {useState} from 'react'
import { Grid} from '@material-ui/core'
import Input from './Input'

function Spread({setData}) {

    const initialSpvalues = {
        Type: 'Spread',
        Date: '',
        Ticker: '',
        FrontStrike: '',
        BackStrike: '',
        RiskReward: '',
        Expiry: '',
        EntryPrice: '',
        Quantity: '',
        CloseDate: '',
        ClosingPrice: '',
    };

    const [values, setValues] = useState(initialSpvalues);

    
    const handleChange = (e) => {
        const {name, value} = e.target
        setValues({...values, [name]: value});
        
    };
    setData(values);

    return (
        <form >
        <div className="spread">
            <Grid container className="stockcontainer" spacing={3}>
            <Grid item xs={6}>   
            <Input value={values.Date} onChange = {handleChange} label="Date" name="Date"  />
            <Input value={values.FrontStrike} onChange = {handleChange} label="FrontStrike" name="FrontStrike"  />
            <Input value={values.Expiration} onChange = {handleChange} label="Expiration" name="Expiration"  />
            <Input value={values.Quantity} onChange = {handleChange} label="Quantity" name="Quantity"  />
            <Input value={values.CloseDate} onChange = {handleChange} label="CloseDate" name="CloseDate"  /> 

            </Grid>
            <Grid item xs={6}>

            <Input value={values.Ticker} onChange = {handleChange} label="Ticker" name="Ticker"  />
            <Input value={values.BackStrike} onChange = {handleChange} label="BackStrike" name="BackStrike"  />
            <Input value={values.EntryPrice} onChange = {handleChange} label="EntryPrice" name="EntryPrice"  />
            <Input value={values.RiskReward} onChange = {handleChange} label="RiskReward" name="RiskReward"  /> 
            <Input value={values.ClosingPrice} onChange = {handleChange} label="Closing Price" name="ClosingPrice"  />
            </Grid>
            </Grid>

        </div>
        </form>
    )
}

export default Spread
