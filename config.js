/*
 README

 --Configuration--
 This is file responsible to load the app configuration.
 The configuration files are stored at config/
 The are many configuration files only one is loaded while the app is running.
 Which configuration is used/loaded deppends on the environment variable NODE_ENV=

 --Environment--
 You can set environment variables with export ENV_VAR_NAME=something_something
 Or you can set you environment variables at env/.env
 The variables will becom available the moment the app starts running
 Call your environment variables with process.env.YOUR_ENV_VAR_NAME 
*/

const load_env=require("dotenv").config({path:'./env/.env'})
const load_config=require("config");

global.default_middleware=(req,res,next)=>{
    /**
     * Default middleware for routers
     */
    if((process.env.NODE_ENV=="dev")||(process.env.NODE_ENV=="test")){
        let method=req.method;
        let url=req.url;
        let date=new Date();
        let day=date.getDate();
        let month=date.getMonth()+1;
        let year=date.getFullYear();
        console.log(`${day}/${month}/${year} | ${method} | ${url}`);
    }
    next();
}

function init(){
    /**
     * Load the configuration according to NODE_ENV
     */
    let CONFIG ={
        tag:load_config.get("configuration.tag"),
        port:load_config.get("server.port"),
        host:load_config.get("server.host"),
        secret:load_config.get("server.secret"),
        cluster:load_config.get("server.cluster"),
        secure_headers:load_config.get("server.secure_headers"),
        services:load_config.get("services"),
    }
    return CONFIG;
}

module.exports={
    init,
}