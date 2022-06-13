import React from "react";
import { AppBar, Toolbar, Typography } from "@mui/material";
import { FavoriteBorder, PersonOutline, WorkOutline } from "@mui/icons-material";
import SearchBar from "material-ui-search-bar";




export default function Header(props) {

    return (
        <>
            <div className="navbar">
                <AppBar position="static" color="common" className="appbar">
                    <Toolbar>

                        <div>
                            <img src={props.logo} alt={"Header Logo"} className="logo" />
                        </div>

                        <div class="navbar-items">
                            <div className="dropdown">
                                <Typography component={"span"}><button className="men bg-trans font-sixteen">Men</button></Typography>
                                <div class="dropdown-content men-content">
                                    <div className="dropdown-menu">
                                        <ul className="dropdown-list">
                                            <li>
                                                <a href="#">Footwear</a>
                                                <a href="#">Accessories</a>
                                                <a href="#">Apparels</a>
                                            </li>
                                            <li>
                                                <a href="#">Footwear</a>
                                                <a href="#">Accessories</a>
                                                <a href="#">Apparels</a>
                                            </li>
                                            <li>
                                                <a href="#">Footwear</a>
                                                <a href="#">Accessories</a>
                                                <a href="#">Apparels</a>
                                            </li>

                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div className="dropdown">
                                <Typography component={"span"}><button className="women bg-trans font-sixteen">Women</button></Typography>
                                <div class="dropdown-content women-content">
                                    <div className="dropdown-menu">
                                        <ul className="dropdown-list">
                                            <li>
                                                <a href="#">Footwear</a>
                                                <a href="#">Accessories</a>
                                                <a href="#">Apparels</a>
                                            </li>
                                            <li>
                                                <a href="#">Footwear</a>
                                                <a href="#">Accessories</a>
                                                <a href="#">Apparels</a>
                                            </li>
                                            <li>
                                                <a href="#">Footwear</a>
                                                <a href="#">Accessories</a>
                                                <a href="#">Apparels</a>
                                            </li>

                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div className="dropdown">
                                <Typography component={"span"}><button className="kids bg-trans font-sixteen">Kids</button></Typography>
                                <div class="dropdown-content kids-content">
                                    <div className="dropdown-menu">
                                        <ul className="dropdown-list">
                                            <li>
                                                <a href="#">Footwear</a>
                                                <a href="#">Accessories</a>
                                                <a href="#">Apparels</a>
                                            </li>
                                            <li>
                                                <a href="#">Footwear</a>
                                                <a href="#">Accessories</a>
                                                <a href="#">Apparels</a>
                                            </li>
                                            <li>
                                                <a href="#">Footwear</a>
                                                <a href="#">Accessories</a>
                                                <a href="#">Apparels</a>
                                            </li>

                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div>
                            <SearchBar placeholder="Search for products" className="searchbar" />
                        </div>

                        <div className="icons-bar">
                            <div className="heart"> <FavoriteBorder />Wishlist</div>
                            <div className="bag"> <WorkOutline />Bag</div>
                            <div className="person"> <PersonOutline />Profile</div>
                        </div>
                    </Toolbar>
                </AppBar>
            </div>
        </>
    )
}


