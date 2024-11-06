import dotenv from "dotenv";
import connectDB from "./db/index.js";
import express from "express";
const app = express();

dotenv.config({
    path: './env'
})

connectDB()
    .then(() => {
        app.listen(process.env.PORT || 8000, () => {
            console.log(`Server running on port ${process.env.PORT}`);
        })
    })
    .catch((err) => {
        console.log("MONGODB connect failed", err);
    })


























// import express from "express";
// const app = express();
// (async () => {

//     try {
//         await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`);
//         app.on('error', (error) => {
//             console.log('Err:', error);
//             throw error;
//         })

//         app.listen(process.env.PORT, () => {
//             console.log(`app is listening on port ${process.env.PORT}`);
//         })
//     } catch (error) {
//         console.error("Failed to connect to MongoDB:", error);
//         throw error;
//     }
// })()