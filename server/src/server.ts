import express from 'express';

const app = express();

app.get('/ads', (request, response) => {
    return response.json([
        {
            id: 1,
            name: 'Free Fire'
        },
        {
            id: 2,
            name: 'Free Fire'
        },
        {
            id: 3,
            name: 'Free Fire'
        },
        {
            id: 4,
            name: 'apx'
        }
    ])
})

app.listen(3333);