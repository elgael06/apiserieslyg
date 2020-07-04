import React from 'react';
import {TextField} from '@material-ui/core';

const InputForm = ({
    value ='',
    event =e=>e,
    name  ='',
    disabled=false
}) =>(<div style={{margin:10,width:200,display:'inline-block'}}>
    <TextField 
        label={name}
        onChange={e=>event(e.target.value)}
        value={value}
        disabled={disabled}
        focused={value!=""}
    />
</div>);

export default InputForm;