import express from "express";
import * as OrganizationRoutes from "./OrganizationRoutes.js";
const router = express.Router();

router.get("/", (req, res) => {
    res.send("Wel!");
})

router.use("/organization", OrganizationRoutes);

// module.exports = router;
export default router;