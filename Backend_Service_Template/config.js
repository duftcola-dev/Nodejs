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
        port:load_config.get("server.port"),
        host:load_config.get("server.host"),
        secret:load_config.get("server.secret"),
        database_type:load_config.get("database.type"),
        database_name:load_config.get("database.name"),
        database_user:load_config.get("database.user"),
        database_password:load_config.get("database.password"),
        database_host:load_config.get("database.host"),
        database_port:load_config.get("database.port"),
    }
    return CONFIG;
}

function show_app_env(CONFIG){
    /**
     * Show the main parameters of the app.
     * This is used to check what parameter the app is using to run.
     * Only used in dev and test
     */

    if((process.env.NODE_ENV=="dev")||(process.env.NODE_ENV=="test")){
        let mode="";
        if (process.env.NODE_ENV=="dev"){
            mode="development";
        }
        if (process.env.NODE_ENV=="test"){
            mode="testing";
        }
        console.log(`
        - mode:${mode} \n
        - hots:${CONFIG.host} \n 
        - port:${CONFIG.port} \n 
        - env:${process.env.NODE_ENV} \n
        `);
    }else{
        console.log("Server up");
    }
}
module.exports={
    init,
    show_app_env
}