import React from 'react'
import MaterialTable from 'material-table'


function List({finalData}) {
    // Format for Material Table
    const columns = [
        {title: 'Date', field: 'Date'}, 
        {title: 'Ticker', field: 'Ticker'},
        {title: 'Type' ,field: 'Type'},
        {title: 'Strike' ,field: 'Strike'},
        {title: 'Expiration' ,field: 'Expiration'},
        {title: 'Entry Price' ,field: 'EntryPrice'},
        {title: 'Quantity' ,field: 'Quantity'},
        {title: 'Cost' ,field: 'Cost'},
        {title: 'Risk-Reward' ,field: 'RiskReward'},
        {title: 'Close Date' ,field: 'CloseDate'},
        {title: 'Closing Price' ,field: 'ClosingPrice'},
        {title: 'Close Amount' ,field: 'CloseAmount'},
        {title: 'PL' ,field: 'PL'},
        {title: 'P/L%' ,field: 'PLPercent'},
    ]
    console.log(finalData);
    return (
        <div>
            <MaterialTable className="table" title="Trading Journal" columns= {columns} data = {finalData} />

            
            {/* <TableContainer style={{display: 'flex', justifyContent:'center', padding: '20px'}}>
            <Table border="1" style={{width:'70%', justifyContent:'center'}} size="small" aria-label="caption table">
                <TableHead>
                    <TableRow>
                        <TableCell>Date</TableCell>
                        <TableCell>Ticker</TableCell>
                        <TableCell>Type</TableCell>
                        <TableCell>Strike</TableCell>
                        <TableCell>Expiration</TableCell>
                        <TableCell>Entry Price</TableCell>
                        <TableCell>Quantity</TableCell>
                        <TableCell>Cost</TableCell>
                        <TableCell>Risk-Reward</TableCell>
                        <TableCell>Close Date</TableCell>
                        <TableCell>Closing Price</TableCell>
                        <TableCell>Close Amount</TableCell>
                        <TableCell>P/L</TableCell>
                        <TableCell>P/L%</TableCell>
                    </TableRow>   
                </TableHead>

                
                <TableBody>
                    {finalData.map((data) => (
                        <TableRow key= {data.Date}>
                        <TableCell>{data.Date}</TableCell>
                        <TableCell>{data.Ticker}</TableCell>
                        <TableCell>{data.Type}</TableCell>
                        <TableCell>{data.Strike}</TableCell>
                        <TableCell>{data.Expiration}</TableCell>
                        <TableCell>{data.EntryPrice}</TableCell>
                        <TableCell>{data.Quantity}</TableCell>
                        <TableCell>{data.Cost}</TableCell>
                        <TableCell>{data.RiskReward}</TableCell>
                        <TableCell>{data.CloseDate}</TableCell>
                        <TableCell>{data.ClosingPrice}</TableCell>
                        <TableCell>{data.CloseAmount}</TableCell>
                        <TableCell>{data.PL}</TableCell>
                        <TableCell>{data.PLPercent}</TableCell>
                        </TableRow>  
                            
                    
                    ))}
                </TableBody>     
            </Table>    
            </TableContainer>             */}
        </div>
    )
}

export default List
