import React, { useState } from "react";
import ReactDOM from "react-dom/client";
import products from "./utils/data.js";
import Header from "./components/Header.js";
import Card from "./components/Card.js";


const App = () => {

    const [renderProducts, setRenderProducts] = useState(products);
    const [showPopUp, setShowPopUp] = useState(false);

    const sortByAsc = () => {
        const sortedProducts = [...products].sort((a, b) => a.price - b.price);
        setRenderProducts(sortedProducts);        
    };

    const sortByDsc = () => {
        const sortedProducts = [...products].sort((a, b) => b.price - a.price);
        setRenderProducts(sortedProducts);
    }

    const above5000 = () => {
        const expensiveProducts = products.filter((product) => product.price >= 5000);
        setRenderProducts(expensiveProducts)
    }

    const below5000 = () => {
        const cheapProducts = products.filter((product) => product.price < 5000);
        setRenderProducts(cheapProducts)
    }

    const sortByOffer = () => {
        const offerProducts = [...products].sort((a, b) => a.offer - b.offer);
        setRenderProducts(offerProducts);
    }
    
    const filterBtn = () => {
        setShowPopUp(!showPopUp);
    }

    const filterCategory = () => {
        const categoryInput = document.querySelector("input[name='category']:checked")?.value;
        const selectedCategory = products.filter((product) => product.category === categoryInput);
        setRenderProducts(selectedCategory);
        setShowPopUp(false);
    }

    const onSearch = (event) => {
        const searchTerm = event.target.value.toLowerCase();
        const filterTerms = products.filter((product) => product.title.toLowerCase().includes(searchTerm));
        setRenderProducts(filterTerms);
    }
    
    return (
        <>
            <Header onInput={onSearch}/>
            <main>
                <section id="card_section">
                    <div className="filtered_btn">
                        <button onClick={sortByAsc}>Sort By Asc</button>
                        <button onClick={sortByDsc}>Sort By Dsc</button>
                        <button onClick={above5000}>Above 5000</button>
                        <button onClick={below5000}>Below 5000</button>
                        <button onClick={sortByOffer}>Sort By Offer</button>
                        <button onClick={filterBtn}>Filter</button>
                    </div>
                    <div className="card_container">
                        {
                            renderProducts.map((product, index) => <Card key={index} image={product.image} rating={product.rating.rate} title={product.title} price={product.price} offer={product.offer} />)
                        }
                    </div>
                    {
                        showPopUp &&
                        <div className="category_section">
                            <div className="category_top">
                                <h1>Category By:</h1>
                                <button onClick={() => setShowPopUp(false)}>X</button>
                            </div>
                            <div className="line"></div>
                            <div className="category_bottom">
                                <div>
                                    <input type="radio" id="mens" name="category" value="men's clothing" />
                                    <label htmlFor="mens">Mens Clothing</label>
                                </div>
                                <div>
                                    <input type="radio" id="jewelery" name="category" value="jewelery" />
                                    <label htmlFor="jewelery">Jewelery</label>
                                </div>
                                <div>
                                    <input type="radio" id="electronics" name="category" value="electronics" />
                                    <label htmlFor="electronics">Electronics</label>
                                </div>
                                <button className="submit" onClick={filterCategory}>Submit</button>
                            </div>      
                        </div>
                    }
                </section>
            </main>
        </>
    )
}

const root = ReactDOM.createRoot(document.querySelector("#root"));
root.render(<App />)