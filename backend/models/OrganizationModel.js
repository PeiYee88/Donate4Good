import mongoose from "mongoose";

const OrganizationSchema = new mongoose.Schema({
    orgname: String,
    funds: Number,
    createdAt: {
        type: Date,
        default: Date.now(),
    },
    organization: {
        type: mongoose.Schema.Types.ObjectId,
        ref:"organizations",
    },
    food: Number,
    clothing: Number,
    stationeries: Number
})

const Organization = mongoose.model("Organization", OrganizationSchema);

export default Organization;


// module.exports = mongoose.model("Organization", OrganizationSchema);