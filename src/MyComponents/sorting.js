import React from "react";
import { Select, FormControl, InputLabel, MenuItem,  } from "@mui/material";


export default function Sorting (props){
    return(
    <>
       <div className="sort">
           <div>
            <FormControl >
                <InputLabel id="demo-simple-select-label">Size</InputLabel>
                    <Select label="Size" defaultValue={50} className="size-dropdown">
                        <MenuItem value={10}><b>XS</b></MenuItem>
                        <MenuItem value={20}><b>S</b></MenuItem>
                        <MenuItem value={30}><b>M</b></MenuItem>
                        <MenuItem value={40}><b>L</b></MenuItem>
                        <MenuItem value={50}><b>XL</b></MenuItem>
                        <MenuItem value={60}><b>XXL</b></MenuItem>
                    </Select>
            </FormControl>
            </div>
            <div className="sorticon">
            <FormControl >
                <InputLabel id="demo-simple-select-label">Sort By</InputLabel>
                    <Select label="Sort By" defaultValue={'Popularity'} className="sort-dropdown">
                        <MenuItem value={'Popularity'}>Sort By: <b>Popularity</b></MenuItem>
                        <MenuItem value={'New'}>Sort By: <b>New</b></MenuItem>
                        <MenuItem value={'Price ASC'}>Sort By: <b>Price ASC</b></MenuItem>
                        <MenuItem value={'Price DESC'}>Sort By: <b>Price DESC</b></MenuItem>
                        <MenuItem value={'Rating'}>Sort By: <b>Rating</b></MenuItem>
                    </Select>
            </FormControl>
            </div>
       </div>

    </>
    )
}