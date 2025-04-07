const products = [
    {
        "id": 1,
        "title": "Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops",
        "price": 8796,
        "description": "Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday",
        "category": "men's clothing",
        "image": "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg",
        "rating": {
            "rate": 3.9,
            "count": 120
        },
        "offer": 12
    },
    {
        "id": 2,
        "title": "Mens Casual Premium Slim Fit T-Shirts",
        "price": 1784,
        "description": "Slim-fitting style, contrast raglan long sleeve, three-button henley placket, lightweight & soft fabric for breathable and comfortable wearing. And solid stitched shirts with round neck made for durability and a great fit for casual fashion wear and diehard baseball fans.",
        "category": "men's clothing",
        "image": "https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_.jpg",
        "rating": {
            "rate": 4.1,
            "count": 259
        },
        "offer": 18
    },
    {
        "id": 3,
        "title": "Mens Cotton Jacket",
        "price": 4479,
        "description": "Great outerwear jackets for Spring/Autumn/Winter, suitable for many occasions, such as working, hiking, camping, mountain/rock climbing, cycling, traveling or other outdoors.",
        "category": "men's clothing",
        "image": "https://fakestoreapi.com/img/71li-ujtlUL._AC_UX679_.jpg",
        "rating": {
            "rate": 4.7,
            "count": 500
        },
        "offer": 34
    },
    {
        "id": 4,
        "title": "Mens Casual Slim Fit",
        "price": 1279,
        "description": "The color could be slightly different between on the screen and in practice.",
        "category": "men's clothing",
        "image": "https://fakestoreapi.com/img/71YXzeOuslL._AC_UY879_.jpg",
        "rating": {
            "rate": 2.1,
            "count": 430
        },
        "offer": 32
    },
    {
        "id": 5,
        "title": "John Hardy Women's Legends Naga Gold & Silver Dragon Station Chain Bracelet",
        "price": 55600,
        "description": "From our Legends Collection, the Naga was inspired by the mythical water dragon that protects the ocean's pearl.",
        "category": "jewelery",
        "image": "https://fakestoreapi.com/img/71pWzhdJNwL._AC_UL640_QL65_ML3_.jpg",
        "rating": {
            "rate": 4.6,
            "count": 400
        },
        "offer": 25
    },
    {
        "id": 6,
        "title": "Solid Gold Petite Micropave",
        "price": 13440,
        "description": "Satisfaction Guaranteed. Return or exchange any order within 30 days.",
        "category": "jewelery",
        "image": "https://fakestoreapi.com/img/61sbMiUnoGL._AC_UL640_QL65_ML3_.jpg",
        "rating": {
            "rate": 3.9,
            "count": 70
        },
        "offer": 20
    },
    {
        "id": 7,
        "title": "White Gold Plated Princess",
        "price": 799,
        "description": "Classic Created Wedding Engagement Solitaire Diamond Promise Ring for Her.",
        "category": "jewelery",
        "image": "https://fakestoreapi.com/img/71YAIFU48IL._AC_UL640_QL65_ML3_.jpg",
        "rating": {
            "rate": 3,
            "count": 400
        },
        "offer": 28
    },
    {
        "id": 8,
        "title": "Pierced Owl Rose Gold Plated Stainless Steel Double",
        "price": 879,
        "description": "Rose Gold Plated Double Flared Tunnel Plug Earrings.",
        "category": "jewelery",
        "image": "https://fakestoreapi.com/img/51UDEzMJVpL._AC_UL640_QL65_ML3_.jpg",
        "rating": {
            "rate": 1.9,
            "count": 100
        },
        "offer": 22
    },
    {
        "id": 9,
        "title": "WD 2TB Elements Portable External Hard Drive - USB 3.0",
        "price": 5120,
        "description": "USB 3.0 and USB 2.0 Compatibility.",
        "category": "electronics",
        "image": "https://fakestoreapi.com/img/61IBBVJvSDL._AC_SY879_.jpg",
        "rating": {
            "rate": 3.3,
            "count": 203
        },
        "offer": 16
    },
    {
        "id": 10,
        "title": "SanDisk SSD PLUS 1TB Internal SSD - SATA III 6 Gb/s",
        "price": 8938,
        "description": "Easy upgrade for faster boot up, shutdown, application load and response (As compared to 5400 RPM SATA 2.5” hard drive; Based on published specifications and internal benchmarking tests using PCMark vantage scores) Boosts burst write performance, making it ideal for typical PC workloads The perfect balance of performance and reliability Read/write speeds of up to 535MB/s/450MB/s (Based on internal testing; Performance may vary depending upon drive capacity, host device, OS and application.)",
        "category": "electronics",
        "image": "https://fakestoreapi.com/img/61U7T1koQqL._AC_SX679_.jpg",
        "rating": {
            "rate": 2.9,
            "count": 470
        },
        "offer": 37
    },
    {
        "id": 11,
        "title": "Silicon Power 256GB SSD 3D NAND A55 SLC Cache Performance Boost SATA III 2.5",
        "price": 8938,
        "description": "3D NAND flash are applied to deliver high transfer speeds Remarkable transfer speeds that enable faster bootup and improved overall system performance. The advanced SLC Cache Technology allows performance boost and longer lifespan 7mm slim design suitable for Ultrabooks and Ultra-slim notebooks. Supports TRIM command, Garbage Collection technology, RAID, and ECC (Error Checking & Correction) to provide the optimized performance and enhanced reliability.",
        "category": "electronics",
        "image": "https://fakestoreapi.com/img/71kWymZ+c+L._AC_SX679_.jpg",
        "rating": {
            "rate": 4.8,
            "count": 319
        },
        "offer": 29
    },
    {
        "id": 12,
        "title": "WD 4TB Gaming Drive Works with Playstation 4 Portable External Hard Drive",
        "price": 9348,
        "description": "Expand your PS4 gaming experience, Play anywhere Fast and easy, setup Sleek design with high capacity, 3-year manufacturer's limited warranty",
        "category": "electronics",
        "image": "https://fakestoreapi.com/img/61mtL65D4cL._AC_SX679_.jpg",
        "rating": {
            "rate": 4.8,
            "count": 400
        },
        "offer": 35
    },
    {
        "id": 13,
        "title": "Acer SB220Q bi 21.5 inches Full HD (1920 x 1080) IPS Ultra-Thin",
        "price": 49118,
        "description": "21. 5 inches Full HD (1920 x 1080) widescreen IPS display And Radeon free Sync technology. No compatibility for VESA Mount Refresh Rate: 75Hz - Using HDMI port Zero-frame design | ultra-thin | 4ms response time | IPS panel Aspect ratio - 16: 9. Color Supported - 16. 7 million colors. Brightness - 250 nit Tilt angle -5 degree to 15 degree. Horizontal viewing angle-178 degree. Vertical viewing angle-178 degree 75 hertz",
        "category": "electronics",
        "image": "https://fakestoreapi.com/img/81QpkIctqPL._AC_SX679_.jpg",
        "rating": {
            "rate": 2.9,
            "count": 250
        },
        "offer": 10
    },
    {
        "id": 14,
        "title": "Samsung 49-Inch CHG90 144Hz Curved Gaming Monitor (LC49HG90DMNXZA) – Super Ultrawide Screen QLED ",
        "price": 81999,
        "description": "49 INCH SUPER ULTRAWIDE 32:9 CURVED GAMING MONITOR with dual 27 inch screen side by side QUANTUM DOT (QLED) TECHNOLOGY, HDR support and factory calibration provides stunningly realistic and accurate color and contrast 144HZ HIGH REFRESH RATE and 1ms ultra fast response time work to eliminate motion blur, ghosting, and reduce input lag",
        "category": "electronics",
        "image": "https://fakestoreapi.com/img/81Zt42ioCgL._AC_SX679_.jpg",
        "rating": {
            "rate": 2.2,
            "count": 140
        },
        "offer": 20
    },
    {
        "id": 15,
        "title": "Men's Vintage Leather Jacket",
        "price": 6499,
        "description": "Stylish vintage leather jacket made from premium quality leather. Perfect for winter and casual wear.",
        "category": "men's clothing",
        "image": "https://fakestoreapi.com/img/71HblAHs5xL._AC_UY879_-2.jpg",
        "rating": {
          "rate": 4.3,
          "count": 185
        },
        "offer": 27
      },
      {
        "id": 16,
        "title": "Elegant Pearl Necklace Set",
        "price": 7399,
        "description": "Beautiful handcrafted pearl necklace set with matching earrings. Ideal for weddings and parties.",
        "category": "jewelery",
        "image": "data:image/jpeg;base64,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",
        "rating": {
          "rate": 4.5,
          "count": 230
        },
        "offer": 30
      },
      {
        "id": 17,
        "title": "NoiseFit Halo Smartwatch",
        "price": 3999,
        "description": "Smartwatch with AMOLED display, heart rate monitor, sleep tracking, and 100+ sports modes.",
        "category": "electronics",
        "image": "https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcSiI-6RaisMvixzAF5vRG_huVFkKulpraZLQLTCm4zX__eMKeJEwcJTutB-f05-perLgehoSfFAcjHVzU2KS833ukP02KMuJ9yY7p8APVksJpWm7Rg2dcLaaS4AynDzH-hEyEw3&usqp=CAc",
        "rating": {
          "rate": 4.2,
          "count": 520
        },
        "offer": 33
      },
      
];

export default products;
