import './App.css';
import { useState } from "react";
import Header from './MyComponents/header';
import ProductDisplay from './MyComponents/productdisplay';
import Logo from "./images/logo.png";
import SideBar from "./MyComponents/side-bar/Sidebar";
import database from './database';
import Sorting from './MyComponents/sorting'

export default function App() {
    const colors = ["Black", "Blue", "Red", "Maroon", "Yellow", "Blue", "Pink", "White"];
    const categories = ["Shirt", "T-shirt", "Blazer", "Sandos"];
    const price_ranges = [[0, 1000], [1001, 3000], [3001, 5000], [5001, 10000], [10001, 15000], [15001, 25000], [25001, Infinity]];



    const [dataFilters, setDataFilters] = useState({});
    const [filteredData, setFilteredData] = useState(database);

    function hasCommon(array_1, array_2) {
        for (let i = 0; i < array_1.length; ++i) {
            for (let j = 0; j < array_2.length; ++j) {
                if (array_1[i] === array_2[j]) {
                    return true
                }
            }
        }
        return false;
    }

    const updateFilters = (filters,name) => {
        var newFilters = dataFilters;
        newFilters[name] = filters;
        setDataFilters(newFilters);
        setFilteredData(filtering(database));
    }

    function filtering(data) {
        if (Object.getOwnPropertyNames(dataFilters).length === 0) {
            return data
        }

        for (const [key, val] of Object.entries(dataFilters)) {
            if(val.length > 0) {
                if (key === 'colors') {
                    data = data.filter((product) => {
                        return hasCommon(product["product-colors"], val)
                    })
                }
                else if (key === 'price-range') {
                    var price_filtered_data = []
                    data.forEach((product) => {
                        val.forEach((prices) => {
                            if (prices[0] <= product["product-current-price"] && product["product-current-price"] <= prices[1]) {
                                price_filtered_data.push(product);
                            }
                        })
                        return false
                        }
                    )
                    data = price_filtered_data

                }
                else if (key === 'product-category') {
                    data = data.filter((product) => {
                        return val.includes(product["product-type"])
                    })
                }
            }
        }
        return data
    }

    return (
        <>
            <Header logo={Logo} />
            <div className='page-view'>
                <SideBar updateFilters={updateFilters} categories={categories} colors={colors} price_ranges={price_ranges}/>
                <div className='product-display'>
                    <Sorting />
                    {filteredData.map((value, index) => {
                        return <ProductDisplay key={index} productImage={value["product-image"]}
                            productName={value["product-name"]}
                            productPrice={value["product-current-price"]}
                            productMRP={value["product-mrp"]}/>
                        }
                    )}
                </div>
            </div>
        </>
    );
}
