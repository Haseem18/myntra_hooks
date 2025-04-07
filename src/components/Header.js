const links = ["Mens", "Womens", "Kids", "Home", "Beauty", "GENZ"];

const Header = ({ onInput }) => {
    return (
        <header>
            <nav>
                <img src="data:image/png;base64,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" />
                <ul className="nav_left">
                    {
                        links.map((link, index) => {
                            return (
                                <li key={index}>{link.toUpperCase()}</li>
                            )
                        })
                    }
                    <li>STUDIO<sup>NEW</sup></li>
                </ul>
                <div className="searchbar">
                    <input type="text" placeholder="Search for products, brand and more" onChange={onInput} />
                </div>
                <ul className="nav_right">
                    <li>Profile</li>
                    <li>Wishlist</li>
                    <li>Bag</li>
                </ul>
            </nav>
        </header>
    )
}

export default Header;