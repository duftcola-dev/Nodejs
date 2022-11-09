#!/usr/bin/env node

/**
 * This is the app entrypoint. 
 */
const express=require("express");
const config=require("./config.js");
const routers=require("./routing/routing.js");
const app_core=require("./core/server.js");
const security=require("./core/security.js");


//-----------------------------------------------------

/**
 * All the deppendencies, connections , routers and 
 * configuration are initialized here.
 */
function init_app(){
    let app=express(); // main server instance 
    const app_config=config.init(); // loading configuration
    app.use(express.urlencoded({limit:app_config.max_mb,extended:false})); // set payload limit 
    app.use(express.json({limit:app_config.max_mb})) // enable json
    app=security.init(app,app_config); // load security options **must be loaded before core and routers
    app=routers.init(app); // loading routers
    app_core.init(app,app_config); // cluster | single instance
}

//-----------------------------------------------------

init_app();