// const express = required('express'); // common js (syncronously)
import express from 'express';  // module js (asyncronously)

const app = express();
const PORT = process.env.PORT || 4000;
app.get('/', (req, res) =>{
    res.send("Hello!");
});

// get a list of five jokes
app.get('/api/jokes', (req, res) => {
    const jokes = [
        {
            id: 1,
            title: "Joke 1",
            content: "Why don't scientists trust atoms? Because they make up everythings"
        },
        {
            id: 2,
            title: "Joke 2",
            content: "Why did the scarecrow win an award? Because he was outstanding in his field!"
        },
        {
            id: 3,
            title: "Joke 3",
            content: "Why don't skeletons fight each other? They don't have the guts."
        },
        {
            id: 4,
            title: "Joke 4",
            content: "Why did the bicycle fall over? Because it was two-tired!"
        },
        {
            id: 5,
            title: "Joke 5",
            content: "Why did the tomato turn red? Because it saw the salad dressing!"
        }
    ]
    res.json(jokes);
});

app.listen(PORT, () => {
    console.log(`server is running at http://localhost:${PORT}`);
});