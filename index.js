import axios from "axios";
import express  from "express";
// import bodyParser from "body-parser";

const app = express()
const port = 3000
// const API_URL = "https://api.breakingbadquotes.xyz"

app.use(express.static("public"))
// app.use(bodyParser.urlencoded({ extended: true}))



app.get("/", async (req, res, next) => {
    try{
        const result = await axios.get("https://riddles-api.vercel.app/random");
      
        res.render("index.ejs", { 
            quote : result.data.riddle,
            author: result.data.answer,
        })
        console.log("dvsd"+ author)
    } catch (error) {
        console.log(error.message);
        res.status(500);
      }
})



app.listen(port, () => {
    console.log(`Listening on port ${port}`)
})

