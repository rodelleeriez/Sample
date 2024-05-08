// File: server.js

const express = require('express');
const { PrismaClient } = require('@prisma/client');

const prisma = new PrismaClient();
const app = express();
const PORT = process.env.PORT || 3000;

// Middleware setup
app.use(express.json());

// Example route for getting all items
app.get('/items', async (req, res) => {
    try {
        const items = await prisma.item.findMany();
        res.json(items);
    } catch (error) {
        res.status(500).json({ error: 'Internal Server Error' });
    }
});

// Add other CRUD routes (POST, PUT, DELETE) similarly

// Start server
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
