const express = require('express')
const app = express()
const cors = require('cors')
const { PrismaClient } = require("@prisma/client")

const prisma = new PrismaClient()

app.use(cors({
    origin: ["http://localhost:3000"],
    methods: ["GET", "POST", "PUT", "DELETE"],
    credentials: true,
}))

app.use(express.json())

app.get("/users", async (req, res) => {
    try {
        const users = await prisma.user.findMany()
        res.json(users)
    } catch (e) {
        res.status(500).json(e)
    }
})

app.post("/users", async (req, res) => {
    try {
        const newUser = await prisma.user.create({ data: req.body })
        res.json(newUser)
    } catch (e) {
        e.code === 'P2002' && res.status(500).json("This email already exists!")
    }
})

app.get("/coupons", async (req, res) => {
    try {
        const coupons = await prisma.coupon.findMany()
        res.json(coupons)
    } catch (e) {
        res.status(500).json(e)
    }
})

app.post("/coupons", async (req, res) => {
    try {
        const newCoupons = await prisma.coupon.create({ data: req.body })
        res.json(newCoupons)
    } catch (e) {
        e.code === 'P2002' && res.status(500).json("This coupon code already exists!")
    }
})

app.put("/coupons", async (req, res) => {
    try {
        const updatedCoupons = await prisma.coupon.update({ 
            where: {code: req.body.code},
            data: {amount: req.body.amount}
        })
        res.json(updatedCoupons)
    } catch (e) {
        res.status(500).json(e.message)
    }
})

app.delete("/coupons/:code", async (req, res) => {
    try {
        const deletedCoupon = await prisma.coupon.delete({ where: { code: req.params.code } })
        res.json(deletedCoupon)
    } catch (e) {
        res.status(500).json(e)
    }
})

app.listen(3001, () => console.log("Server is running"))