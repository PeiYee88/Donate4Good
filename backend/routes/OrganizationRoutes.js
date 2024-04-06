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
        const database = client.db('Organization');
        const collection = database.collection('organizations');
        const result = await collection.insertMany([
            { name: req.body.name, funds: req.body.funds, items: req.body.items }
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