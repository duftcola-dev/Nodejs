#!/usr/bin/env node

/**
 * This is the app entrypoint. 
 */
const express=require("express");
const config=require("./config.js");
const routers=require("./routing/routing.js");
const app_core=require("./core/core.js");

//-----------------------------------------------------

/**
 * All the deppendencies, connections , routers and 
 * configuration are initialized here.
 */
function init_app(){
    let app=express(); // main server instance 
    APP_CONFIG=config.init(); // loading configuration
    app=routers.init(app); // loading routers
    app_core.init(app,APP_CONFIG); // cluster | single instance
}

//-----------------------------------------------------

init_app();