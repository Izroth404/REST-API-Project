let express = require('Express');
let app = express();
var PORT = process.env.PORT || 6969
let apiRoutes = require("./router")
let connectDB = require('./config/db');
// var bodyParser = require('body-parser');
require('dotenv').config({ path: './config/.env' });

//Database Connection 
connectDB();

// Body Parser
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

//calling api
app.use('/api',apiRoutes);


//server runs last

// Server Setup
app.get('/',(req,res)=>res.send("Welcome to express"));
app.listen(PORT,function(){console.log("Server is running at: "+ PORT)});




// app.use(bodyparser.urlencoded({extended : true })); 


// app.use(express.bodyParser());


