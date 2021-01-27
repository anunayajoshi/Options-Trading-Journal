import React, {useState, useEffect} from 'react'
import { Grid} from '@material-ui/core'
import Input from './Input'

function Stock( {setData}) {

    const initialSvalues = {
        Type: 'Stock',
        Date: '',
        Ticker: '',
        EntryPrice: '',
        Quantity: '',
        CloseDate: '',
        ClosingPrice: '',
    }

    const [values, setValues] = useState(initialSvalues);

    


    const handleChange = (e) => {
        const {name, value} = e.target
        setValues({...values, [name]: value});
        
        
    };
    setData(values);

    // const handleSubmit = (e) => {
    //     e.preventDefault();
    //     setData(values);
    //     console.log(values);
    // };        

    return (
        <form>
        <div>
            <Grid container className="stockcontainer" spacing={3}>
            <Grid item xs={6}>
            <Input value={values.Date} onChange = {handleChange} label="Date" name="Date"  />
            <Input value={values.EntryPrice} onChange = {handleChange} label="Entry Price" name="EntryPrice"  />
            <Input value={values.CloseDate} onChange = {handleChange} label="Close Date" name="CloseDate"  />
            </Grid>
            <Grid item xs={6}>
            <Input value={values.Ticker} onChange = {handleChange} label="Ticker" name="Ticker"  />
            <Input value={values.Quantity} onChange = {handleChange} label="Quantity" name="Quantity"  />
            <Input value={values.ClosingPrice} onChange = {handleChange} label="Closing Price" name="ClosingPrice"  />
            </Grid>
            </Grid>          
            
            {/* <input type="submit" value="Save Entry" className='btn btn-block'></input>  */}
        </div>
        </form>
    )
}

export default Stock
