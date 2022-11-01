/**
 * Initialization file.
 * All the deppendencies, connections , routers and 
 * configuration are initialized here.
 * That is the only function of this file.
 */

const express=require("express");
const config=require("./config.js");
const routers=require("./routing/routing.js");

function init_app(){
    let app=express(); // main server instance 
    APP_CONFIG=config.init(); // loading configuratio
    app=routers.init(app); // loading routers
    app.listen(APP_CONFIG.port,APP_CONFIG.host,() => { // start app on port:host
        console.log("Server running.");
        config.show_app_env(APP_CONFIG); // logging conf variables on dev/test
    });
}

module.exports={
    init_app
}