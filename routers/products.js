import { Router } from "express";

const productsRouter = Router()
const products = [
    {
        category: "túi xách",
        listProducts: [
            {
                title: "xách đỏ sexy",
                image_bg: "",
                origin: 300000,
                sale: 25,
                total_price: function () {
                    return this.origin - this.origin / 100 * this.sale
                },
            },
            {
                title: "xách đỏ sexy",
                image_bg: "",
                origin: 300000,
                sale: 25,
                total_price: function () {
                    return this.origin - this.origin / 100 * this.sale
                },
            },
            {
                title: "xách đỏ sexy",
                image_bg: "",
                origin: 300000,
                sale: 25,
                total_price: function () {
                    return this.origin - this.origin / 100 * this.sale
                }
            },
            {
                title: "xách đỏ sexy",
                image_bg: "",
                origin: 300000,
                sale: 25,
                total_price: function () {
                    return this.origin - this.origin / 100 * this.sale
                },
            },
        ]
    },
    {
        category: "váy đầm",
        listProducts: [
            {
                title: "váy đỏ hở bím sexy",
                image_bg: "",
                origin: 300000,
                sale: 25,
                total_price: function () {
                    return this.origin - this.origin / 100 * this.sale
                },
            },
            {
                title: "váy đỏ hở bím sexy",
                image_bg: "",
                origin: 300000,
                sale: 25,
                total_price: function () {
                    return this.origin - this.origin / 100 * this.sale
                },

            },
            {
                title: "váy đỏ hở bím sexy",
                image_bg: "",
                origin: 300000,
                sale: 25,
                total_price: function () {
                    return this.origin - this.origin / 100 * this.sale
                },
            },
            {
                title: "váy đỏ hở bím sexy",
                image_bg: "",
                origin: 300000,
                sale: 25,
                total_price: function () {
                    return this.origin - this.origin / 100 * this.sale
                },
            },
        ]
    },
    {
        category: "giày dép",
        listProducts: [
            {
                title: "giày đỏ hở bím sexy",
                image_bg: "",
                origin: 300000,
                sale: 25,
                total_price: function () {
                    return this.origin - this.origin / 100 * this.sale
                },
            },
            {
                title: "giày đỏ hở bím sexy",
                image_bg: "",
                origin: 300000,
                sale: 25,
                total_price: function () {
                    return this.origin - this.origin / 100 * this.sale
                },

            },
            {
                title: "giày đỏ hở bím sexy",
                image_bg: "",
                origin: 300000,
                sale: 25,
                total_price: function () {
                    return this.origin - this.origin / 100 * this.sale
                },
            },
            {
                title: "giày đỏ hở bím sexy",
                image_bg: "",
                origin: 300000,
                sale: 25,
                total_price: function () {
                    return this.origin - this.origin / 100 * this.sale
                },
            },
        ]
    }
]

productsRouter.get("/", (req, res) => {
    const productsQuery = req.query.category
    const data = productsQuery ? products.find(item => item.category === productsQuery) : products
    res.json(data) 
})


export default productsRouter