import {RadioGroup, FormControlLabel, Radio, FormControl} from '@material-ui/core'
import {useState, useEffect} from 'react'
import Call from './Call';
import Stock from './Stock';
import Spread from './Spread';

const FilterForm = ({setFinalData}) => {


    // Intermediate state between form components, and List component
    const [data, setData] = useState("");

    // States for radio button's checked field
    const [stockState, setstockState] = useState(false)

    const [callState, setcallState] = useState(false)

    const [spreadState, setspreadState] = useState(false)


    // Checks what radio button is clicked and returns the value.
    const type = () => {
        if (stockState) {
             return 'Stock'; }
        else if  (callState) {
             return 'Call';}
        else if  (spreadState) {
             return 'Spread';}

    }
    // Calculates based on data collected from form, and updates the data array with new fields. 
    const Calculator = () => {
        const Cost = data['EntryPrice'] * data['Quantity']
        const CloseAmount = data['ClosingPrice'] * data['Quantity']
        data['Cost'] = Cost;
        data['CloseAmount'] = CloseAmount
        const PL = data['CloseAmount'] - data['Cost']
        const PLPercent = (PL/Cost * 100).toFixed(2) + `%`
        data['PLPercent'] = PLPercent
        data['PL'] = PL;
        data['Type'] = type()
    }

    // Upon button clicked, sends data to finaldata state, and restarts the form.
    const handleSubmit = (e) => {
        e.preventDefault();
        Calculator();
        setData(data);
        console.log(data);

        setFinalData(prevData => [...prevData, data]);
        setstockState(false)
        setcallState(false)
        setspreadState(false)
        
    }
    // Had problems with multiple radio buttons being chceked, and not being able to uncheck, so this solves the problem. 
    const handleChange = (a,b,c) => {
        setstockState(a);
        setcallState(b);
        setspreadState(c);
    }


    return (
        <div className="radio-row">
            <FormControl>
            <RadioGroup row>
                <FormControlLabel checked= {stockState} value="Stock" className="formrow" control={<Radio/>}  label="Stock" onChange={() => (handleChange(true,false,false))} />
                <FormControlLabel  checked = {callState} value="Call" className="formrow"control={<Radio/>} label="Call / Put" onChange={() => (handleChange(false,true,false))} />
                <FormControlLabel  checked = {spreadState} value="Spread" className="formrow"control={<Radio />} label="Vertical Spread" onChange={ ()=> (handleChange(false,false,true))} />
            </RadioGroup>

            </FormControl>

         
            {(stockState) && <Stock setData={setData}/>}
            {(callState) && <Call setData={setData}/>}
            {(spreadState) && <Spread setData={setData}/>}

            {(stockState === false && callState === false && spreadState === false) ? '' : <input type="submit" value="Save Entry" onClick={handleSubmit} className='btn btn-block'></input> }
        </div>
    )
}

export default FilterForm
