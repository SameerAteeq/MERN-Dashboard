import express from "express";
import bodyParser from "body-parser";
import cors from "cors";
import helmet from "helmet";
import mongoose from "mongoose";
import dotenv from "dotenv";
import morgan from "morgan";
import clientRoute from "./routes/client.js";
import managementRoute from "./routes/management.js";
import salesRoute from "./routes/sales.js";
import generalRoute from "./routes/general.js";

//Importing data to database
import User from "./models/User.js";
import Product from "./models/Product.js";
import ProductState from "./models/ProductState.js";
import Transactions from "./models/Transactions.js";
import OverallStat from "./models/OverallStat.js";
import AffiliateStat from "./models/AffilateStat.js";
import {
  dataUser,
  dataProduct,
  dataProductStat,
  dataTransaction,
  dataOverallStat,
  dataAffiliateStat,
} from "./data/index.js";

//CONFIGURATION
dotenv.config();
const app = express();
app.use(express.json());
app.use(helmet());
app.use(helmet.crossOriginResourcePolicy({ policy: "cross-origin" }));
app.use(morgan("common"));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cors());

//ROUTES
app.use("/client", clientRoute);
app.use("/general", generalRoute);
app.use("/sales", salesRoute);
app.use("/management", managementRoute);

//MONGOOSE SETUP
const PORT = process.env.PORT || 9000;

mongoose
  .connect(process.env.MONGO_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    app.listen(PORT, () => console.log("Listning"));

    //Add data one time
    // User.insertMany(dataUser);
    // Product.insertMany(dataProduct);
    // ProductState.insertMany(dataProductStat);
    // Transactions.insertMany(dataTransaction);
    // OverallStat.insertMany(dataOverallStat);
    // AffiliateStat.insertMany(dataAffiliateStat);
  })
  .catch((error) => {
    console.log(error);
  });
