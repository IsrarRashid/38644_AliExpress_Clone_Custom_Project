const data = [
    {
        id: 0,
        name: "Shirt One",
        src: "./images/products/category_1/newp.jpg",
        description:`Lorem ipsum dolor sit amet consectetur, adipisicing elit. Fugiat
         quas, pariatur aut dolores omnis ipsam ipsa quo necessitatibus blanditiis.`,
        to:`/products/0`,
        price: 2500,
        piecesSold: 87,
        sale:"true",
        salePercent: `-${25}%`,
        salePrice: 1500
    },
    {
        id: 1,
        name: "Shirt Two",
        src: "./images/products/category_1/newp3.jpg",
        description:`Lorem ipsum dolor sit amet consectetur, adipisicing elit. Fugiat
        quas, pariatur aut dolores omnis ipsam ipsa quo necessitatibus blanditiis.`,
        to:`/products/1`,
        price: 2300,
        piecesSold: 872,
        sale:"false",
        salePercent: `-${85}%`,
        salePrice: 1500
    },
    {
        id: 2,
        name: "Shirt Three",
        src: "./images/products/category_1/newp.jpg",
        description:`Lorem ipsum dolor sit amet consectetur, adipisicing elit. Fugiat
        quas, pariatur aut dolores omnis ipsam ipsa quo necessitatibus blanditiis.`,
        to:`/products/2`,
        price: 3200,
        piecesSold: 65,
        sale:"true",
        salePercent: `-${55}%`,
        salePrice: 1500
    },
    {
        id: 3,
        name: "Shirt Four",
        src: "./images/products/category_1/newp3.jpg",
        to:`/products/3`,
        description:`Lorem ipsum dolor sit amet consectetur, adipisicing elit. Fugiat
        quas, pariatur aut dolores omnis ipsam ipsa quo necessitatibus blanditiis.`,
        price: 3500,
        piecesSold: 293,
        sale:"false",
        salePercent: `-${85}%`,
        salePrice: 1500
    },
    {
        id: 4,
        name: "Shower",
        src: "./images/products/category_1/newp.jpg",
        to:`/products/4`,
        description:`Lorem ipsum dolor sit amet consectetur, adipisicing elit. Fugiat
        quas, pariatur aut dolores omnis ipsam ipsa quo necessitatibus blanditiis.`,
        price: 1000,
        piecesSold: 35,
        sale:"true",
        salePercent: `-${85}%`,
        salePrice: 1500
    },
    {
        id: 5,
        name: "Blender",
        src: "./images/products/category_1/newp3.jpg",
        to:`/products/5`,
        description:`Lorem ipsum dolor sit amet consectetur, adipisicing elit. Fugiat
        quas, pariatur aut dolores omnis ipsam ipsa quo necessitatibus blanditiis.`,
        price: 5500,
        piecesSold: 68,
        sale:"true",
        salePercent: `-${85}%`,
        salePrice: 1500
    },
    {
        id: 6,
        name: "Umbrella",
        src: "./images/products/category_1/newp.jpg",
        to:`/products/6`,
        description:`Lorem ipsum dolor sit amet consectetur, adipisicing elit. Fugiat
        quas, pariatur aut dolores omnis ipsam ipsa quo necessitatibus blanditiis.`,
        price: 700,
        piecesSold: 73,
        sale:"true",
        salePercent: `-${35}%`,
        salePrice: 1500
    },
    {
        id: 7,
        name: "Cutter",
        src: "./images/products/category_1/newp3.jpg",
        to:`/products/7`,
        description:`Lorem ipsum dolor sit amet consectetur, adipisicing elit. Fugiat
        quas, pariatur aut dolores omnis ipsam ipsa quo necessitatibus blanditiis.`,
        price: 1300,
        piecesSold: 363,
        sale:"true",
        salePercent: `-${85}%`,
        salePrice: 1500
    },
    {
        id: 0,
        name: "Shirt One",
        src: "./images/products/category_1/newp.jpg",
        to:`/products/0`,
        description:`Lorem ipsum dolor sit amet consectetur, adipisicing elit. Fugiat
        quas, pariatur aut dolores omnis ipsam ipsa quo necessitatibus blanditiis.`,
        price: 2500,
        piecesSold: 87,
        sale:"true",
        salePercent: `-${75}%`,
        salePrice: 1500
    },
    {
        id: 1,
        name: "Shirt Two",
        src: "./images/products/category_1/newp3.jpg",
        to:`/products/1`,
        description:`Lorem ipsum dolor sit amet consectetur, adipisicing elit. Fugiat
        quas, pariatur aut dolores omnis ipsam ipsa quo necessitatibus blanditiis.`,
        price: 2300,
        piecesSold: 872,
        sale:"false",
        salePercent: `-${85}%`,
        salePrice: 1500
    },
    {
        id: 2,
        name: "Shirt Three",
        src: "./images/products/category_1/newp.jpg",
        to:`/products/2`,
        description:`Lorem ipsum dolor sit amet consectetur, adipisicing elit. Fugiat
        quas, pariatur aut dolores omnis ipsam ipsa quo necessitatibus blanditiis.`,
        price: 3200,
        piecesSold: 65,
        sale:"true",
        salePercent: `-${25}%`,
        salePrice: 1500
    },
    {
        id: 3,
        name: "Shirt Four",
        src: "./images/products/category_1/newp3.jpg",
        to:`/products/3`,
        description:`Lorem ipsum dolor sit amet consectetur, adipisicing elit. Fugiat
        quas, pariatur aut dolores omnis ipsam ipsa quo necessitatibus blanditiis.`,
        price: 3500,
        piecesSold: 293,
        sale:"false",
        salePercent: `-${85}%`,
        salePrice: 1500
    },
    {
        id: 4,
        name: "Shower",
        src: "./images/products/category_1/newp.jpg",
        to:`/products/4`,
        description:`Lorem ipsum dolor sit amet consectetur, adipisicing elit. Fugiat
        quas, pariatur aut dolores omnis ipsam ipsa quo necessitatibus blanditiis.`,
        price: 1000,
        piecesSold: 35,
        sale:"true",
        salePercent: `-${85}%`,
        salePrice: 1500
    },
    {
        id: 5,
        name: "Blender",
        src: "./images/products/category_1/newp3.jpg",
        to:`/products/5`,
        description:`Lorem ipsum dolor sit amet consectetur, adipisicing elit. Fugiat
        quas, pariatur aut dolores omnis ipsam ipsa quo necessitatibus blanditiis.`,
        price: 5500,
        piecesSold: 68,
        sale:"true",
        salePercent: `-${45}%`,
        salePrice: 1500
    },
    {
        id: 6,
        name: "Umbrella",
        src: "./images/products/category_1/newp.jpg",
        to:`/products/6`,
        description:`Lorem ipsum dolor sit amet consectetur, adipisicing elit. Fugiat
        quas, pariatur aut dolores omnis ipsam ipsa quo necessitatibus blanditiis.`,
        price: 700,
        piecesSold: 73,
        sale:"true",
        salePercent: `-${85}%`,
        salePrice: 1500
    },
    {
        id: 7,
        name: "Cutter",
        src: "./images/products/category_1/newp3.jpg",
        to:`/products/7`,
        description:`Lorem ipsum dolor sit amet consectetur, adipisicing elit. Fugiat
        quas, pariatur aut dolores omnis ipsam ipsa quo necessitatibus blanditiis.`,
        price: 1300,
        piecesSold: 363,
        sale:"true",
        salePercent: `-${55}%`,
        salePrice: 1500
    },
]
export default data;
