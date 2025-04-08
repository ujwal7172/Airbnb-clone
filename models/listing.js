const mongoose  = require("mongoose");

const Schema = mongoose.Schema;

const ListingSchema = new Schema({
    title: {
        type: String,
        require: true,
    },
    description: String,
    image: {
        type: String,
        default: "https://images.unsplash.com/photo-1742472194018-44f79dee11ff?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        set: (v)=>v === ""? 
        "https://images.unsplash.com/photo-1742472194018-44f79dee11ff?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" :v,

    },
    price: Number,
    location: String,
    country: String,
});
const Listing = mongoose.model("Listing", ListingSchema);

module.exports = Listing;