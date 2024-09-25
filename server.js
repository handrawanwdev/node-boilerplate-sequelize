require("dotenv").config();

const express=require("express");
const app=express();

const { Server }=require("socket.io");
const http=require("http");

const PORT=process.env.PORT||8001;

// register request form 
app.use(express.urlencoded({extended:true}));
app.use(express.json());
// register request form

// cors
const cors=require("cors");
app.use(cors("*"));
// cors

// helmet
const helmet=require("helmet");
app.use(helmet());
app.use(helmet.hidePoweredBy("PHP 7.2.0"))
// helmet


const compression=require("compression");
app.use(compression());

// const device = require('express-device');
// app.use(device.capture());

// register request form 
app.use(express.urlencoded({extended:true}));
app.use(express.json());
// register request form

const toobusy=require("toobusy-js");
app.use(function(req, res, next) {
    if (toobusy()) {
      res.status(503).json({
          code:503,
          message:"Server is busy, please try again later"
      });
    } else {
      next();
    }
});

const morgan = require("morgan");
app.use(morgan("dev"))

app.use("/",require("./routes/index"));
app.use("/",require("./middleware/error_handler"));

app.listen(PORT,(err)=>{
  if(err) throw err;
  console.log(`Server is running ${PORT}`);
});