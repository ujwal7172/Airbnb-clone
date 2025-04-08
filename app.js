const express = require("express");
const app = express();
const mongoose = require("mongoose");
const port = 8080;
const listing = require("./models/listing.js");
const Listing = require("./models/listing.js");


async function main(){
    await mongoose.connect("mongodb://127.0.0.1:27017/wanderlust");
}
main().then(()=>{
    console.log("connect to db");

})
.catch((err)=>{
    console.log(err);
})
app.get("/", (req,res)=>{
    res.send("root is working");
})

app.get("/testListing", async (req,res)=>{
    const sampleListing = new Listing({
        title: "my New Villa",
        description: "You can have a best view of the sea",
        price: 1200,
        location: "washington DC",
        country: "Usa",
    });
     await sampleListing.save();
    console.log("sample was saved");
    res.send("sucessfully saved");

});


app.listen(port, ()=>{
    console.log(`app is listening to port ${port}`);

});