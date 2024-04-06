import express from "express";
import cors from "cors";
import bodyParser from "body-parser";
import * as db from "./db.js";
import router from "./routes/OrganizationRoutes.js";

const PORT = 3001;
const app = express();

//Middlewares
app.use(bodyParser.json({ limit: "50mb"}));
app.use(bodyParser.urlencoded({extended:true, limit:"50mb"}));

//cors
app.use((req, res, next) => {
    req.header("Access-Control-Allow-Origin", "*");
    req.header("Access-Control-Allow-Headers", "*");
    next();
});


app.use(cors());
app.use('/api', router);

db.connect();

app.listen(PORT, () => {
    console.log('Server running on port ' + PORT);
});