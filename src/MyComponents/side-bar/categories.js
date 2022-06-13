import React from 'react';
import Checkbox from '@mui/material/Checkbox';
import { FormGroup } from '@mui/material';
import { FormControlLabel } from '@mui/material';
import './sidebar.css'
import { useState } from 'react';

export default function Categories(props) {
    const [labels, setLabels] = useState([]);
    const [update, setUpdate] = useState(false);

    const removeItemFromLabels = (item,value) => {
        setLabels(item.filter((item) => {
            if(item !== value) {
                return true;
            }
            return false;
        }))
    }

    const removePriceFromLabels = (item, value, id) => {
        setLabels(labels.filter((item, index) => {
            if (item[0] !== props.values[parseInt(id)][0] && item[1] !== props.values[parseInt(id)][1]) {
                return true;
            }
            return false;
        }))
    }

    const updateLabels = (checked,value,id) => {
        if(props.name !== 'price-range'){
            checked ? setLabels([...labels,value]) : removeItemFromLabels(labels,value);
        } else {
            checked ? setLabels([...labels, props.values[id]]) : removePriceFromLabels(labels, value, id);
        }
        setUpdate(true)
    }

    if(update) {
        props.updateFilters(labels, props.name);
        setUpdate(false)
    }

    function handleEvent(event){
        var checked = event.target.checked
        var value = event.target.value
        var id = event.target.id
        updateLabels(checked,value,id)
    }

    return (
        <>
        <div className='categories'>
        <h3 className='headings'>{props.header}</h3>
        <div className='list'>
        <FormGroup>
            {props.categories.map((value, index) => {
                return (<FormControlLabel key={index} control={<Checkbox id={index.toString()} onChange={handleEvent} />}  label={value}  value={value} />);
            })}
        </FormGroup>
        </div>
        </div>
        </>
    );
    }