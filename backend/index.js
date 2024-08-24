require('dotenv').config()
const express= require("express")

const app= express()
const port = process.env.PORT




app.get('/',(req,res)=>{
    res.send("Hello it's me");
})

app.get('/api/jokes',(req,res)=>{
    const joke = [
        {
            "id": 1,
            "joke": "Why don't scientists trust atoms? Because they make up everything!"
        },
        {
            "id": 2,
            "joke": "Why did the scarecrow win an award? Because he was outstanding in his field!"
        },
        {
            "id": 3,
            "joke": "Why don't skeletons fight each other? They don't have the guts."
        },
        {
            "id": 4,
            "joke": "What do you call fake spaghetti? An impasta!"
        },
        {
            "id": 5,
            "joke": "Why did the bicycle fall over? Because it was two-tired!"
        }
    ]
    res.send(joke)
})

app.listen(process.env.PORT,()=>{
    console.log(`App listening at ${port}`)
})