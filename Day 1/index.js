const express = require('express');
require('dotenv').config();
const app = express();
const PORT = process.env.PORT;

const ApiData = [{
    "name": "John Smith",
    "sku": "20223",
    "price": 23.95,
    "shipTo": {
        "name": "Jane Smith",
        "address": "123 Maple Street",
        "city": "Pretendville",
        "state": "NY",
        "zip": "12345"
    },
    "billTo": {
        "name": "John Smith",
        "address": "123 Maple Street",
        "city": "Pretendville",
        "state": "NY",
        "zip": "12345"
    }
},
{
    "name": "Alice Brown",
    "sku": "54321",
    "price": 199.95,
    "shipTo": {
        "name": "Bob Brown",
        "address": "456 Oak Lane",
        "city": "Pretendville",
        "state": "HI",
        "zip": "98999"
    },
    "billTo": {
        "name": "Alice Brown",
        "address": "456 Oak Lane",
        "city": "Pretendville",
        "state": "HI",
        "zip": "98999"
    }
},
{
    "type": "object",
    "properties": {
        "name": { "type": "string" },
        "sku": { "type": "string" },
        "price": { "type": "number", "minimum": 0 },
        "shipTo": {
            "type": "object",
            "properties": {
                "name": { "type": "string" },
                "address": { "type": "string" },
                "city": { "type": "string" },
                "state": { "type": "string" },
                "zip": { "type": "string" }
            }
        },
        "billTo": {
            "type": "object",
            "properties": {
                "name": { "type": "string" },
                "address": { "type": "string" },
                "city": { "type": "string" },
                "state": { "type": "string" },
                "zip": { "type": "string" }
            }
        }
    }
},
{ "given": "John", "surname": "Smith", "sku": "20223", "price": 23.95 },
{ "given": "Alice", "surname": "Brown", "sku": "54321", "price": 199.95 },
{ "given": "John", "surname": "Smith", "sku": "23420", "price": 104.95 },
{ "given": "Bob", "surname": "Green", "sku": "90231", "price": 300.00 },
{ "given": "Scott", "surname": "Jones", "sku": "54321", "price": 199.95 },
{ "given": "Jim", "surname": "Lee", "sku": "89820", "price": 46.50 }
]

app.get('/', (req, res) => {
    res.send('Hello!');
});
app.get('/twitter', (req, res) => {
    res.send('Welcome to Twitter');
});

app.get('/login', (req, res) => {
    res.send('<h1>Login</h1>')
})

app.get('/api/data', (req, res) => {
    res.json(ApiData);
})



app.listen(process.env.PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
