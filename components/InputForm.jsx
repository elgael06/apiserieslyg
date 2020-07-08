import React from 'react';
import {TextField} from '@material-ui/core';

const InputForm = props =>{
    const {
        value ='',
        event =e=>e,
        name  ='',
        type='text',
        disabled=false
    }   = props;

    return(<div style={{margin:10,width:200,display:'inline-block'}}>
        <TextField
            label={name}
            onChange={e=>event(e.target.value)}
            value={value}
            disabled={disabled}
            focused={value!=""}
            type={type}
            {...props} 
        />
</div>);
}

export default InputForm;