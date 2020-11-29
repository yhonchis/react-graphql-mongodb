import mongoose from "mongoose";
import { config } from "dotenv";
config();
const { G_USER, G_PASS, G_BD, G_CLUSTER } = process.env;

const getConnection = async () => {
  try {
    await mongoose.connect(
      `mongodb+srv://${G_USER}:${G_PASS}@${G_CLUSTER}.y3tsr.mongodb.net/${G_BD}`,
      {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useFindAndModify: true,
      }
    );
    console.log("> The database is conected.");
  } catch (error) {
    console.error(error);
  }
};

getConnection();
