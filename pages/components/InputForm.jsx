import React from 'react';

const InputForm = ({
    value ='',
    event =e=>e,
    name  ='',
    disabled=false
}) =>(<div style={{margin:10,width:200,display:'inline-block'}}>
    <label style={{display:'block',textAlign:'start'}}>{name}</label>
    <input
        disabled={disabled}
        style={{width:'100%'}}
        onChange={e=>event(e.target.value)}
        value={value}
    />
</div>);

export default InputForm;