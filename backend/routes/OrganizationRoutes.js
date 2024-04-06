import express from "express";
import Organization from "../models/OrganizationModel.js";
const router = express.Router();
import { MongoClient } from "mongodb";

router.post("/", async (req, res) => {
    const uri = "mongodb+srv://melissacheng15:melissacheng15@donate4good.hkncjwe.mongodb.net/?retryWrites=true&w=majority&appName=Donate4Good";
    const client = new MongoClient(uri, {
      tls: true,
    });

    try {
        await client.connect();
        const database = client.db('Donate4Good');
        const collection = database.collection('organization');
        // Insert data into MongoDB
        const result = await collection.insertMany([
            { name: "11", funds: 1, food: true, clothing: true, stationeries: true }
        ]);

        res.status(201).send({
            status: true,
            sta: true,
            message: "Questionessfully",
            insertedCount: result.insertedCount
        });
    } catch (error) {
        console.error("Error adding question:", error);
        res.status(500).send({
            status: false,
            message: "Server error",
            error: error.message
        });
    } 
});

router.get("/", async (req, res) => {
    try {
        await Organization
        .aggregate([
            {
                $lookup: {
                    from:"organizations",
                    localField: "_id",
                    foreignField:"organizationId",
                    as:"allAnswers",
                },
            },
        ])
        .exec()
        .then((doc) => {
            res.status(200).send(doc);
        })
        .catch((error) => {
            res.status(500).send({
                status:false,
                message: "Unable to get the questions",
            });
        });
    } catch (err) {
        res.status(500).send({
            status:false,
            message : "Server error",
        });
    }
});

export default router;