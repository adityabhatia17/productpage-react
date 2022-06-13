import * as React from 'react';
import Categories from './categories';
import "./sidebar.css";
export default function SideBar(props) {

  const processed_prices = props.price_ranges.map((value) => {
    if(value[1] === Infinity){
      return "More than Rs. " + (value[0] -1)
    } return "Rs. " + value[0] + "  to  Rs. " + value[1]
  })

  return (
    <>
    <div className='sidebar'>
      <h2 className='headings'>FILTERS</h2>
      <Categories name="product-category" header="CATEGORIES" categories={props.categories} updateFilters={props.updateFilters}/>
      <Categories name="colors" header="COLOR" categories={props.colors} updateFilters={props.updateFilters}/>
      <Categories name="price-range" header="PRICE" values={props.price_ranges} categories={processed_prices} updateFilters={props.updateFilters}/>
    </div>  
    </>
  );
}
