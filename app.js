const express = require("express");
const app = express();
const mongoose = require("mongoose");
const port = 8080;
const Listing = require("./models/listing.js");
const path = require("path");


async function main(){
    await mongoose.connect("mongodb://127.0.0.1:27017/wanderlust");
}

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));
app.use(express.urlencoded({extended: true}));


main().then(()=>{
    console.log("connect to db");

})
.catch((err)=>{
    console.log(err);
})


app.get("/", (req,res)=>{
    res.send("root is working");
})

app.get("/listing", async(req,res)=>{
     const allListings = await Listing.find({});

     res.render("\listing/index.ejs", {allListings});

})

// app.get("/testListing", async (req,res)=>{
//     let sampleListing = new Listing({
//         title: "my New Villa",
//         description: "You can have a best view of the sea",
//         price: 1200,
//         location: "washington DC",
//         country: "Usa",
//     });
//      await sampleListing.save();
//     console.log("sample was saved");
//     res.send("sucessfully saved");

// });

//show route

//new route
app.get("/listings/new", (req,res)=>{
 res.render("listings/new.ejs");

});


app.get("/listings/:id", async (req, res)=>{
    let {id}= req.params;
    const listing = await Listing.findById(id);
    res.render("listing/show.ejs", {listing});
});

app.listen(port, ()=>{
    console.log(`app is listening to port ${port}`);

});