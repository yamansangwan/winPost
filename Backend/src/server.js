require("node:dns").setServers(["8.8.8.8", "8.8.4.4"]); // dns fix only

const path = require("path");

require("dotenv").config({
    path: path.resolve(__dirname, "../.env")
});

const app = require("./app");
const connectDB = require("./database/db");

const PORT = process.env.PORT || 3000;

const start = async () => {
    try {
        await connectDB();
        
        app.listen(PORT, () => {
            console.log(`Server running on port ${PORT}`);
        });
    } catch (error) {
        console.log(error);
        
        process.exit(1);
    }
};

start();
