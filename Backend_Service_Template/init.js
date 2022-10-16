/**
 * Initialization file.
 * All the deppendencies, connections , routers and 
 * configuration are initialized here.
 * That is the only function of this file.
 */

const express=require("express");
const config_loader=require("./config.js");
const router_loader=require("./routers.js");

function init_app(){
    let app=express(); // main server instance 
    CONFIG=config_loader.init(); // loading configuratio
    app=router_loader.init(app); // loading routers
    app.listen(CONFIG.port,CONFIG.host,() => { // start app on port:host
        console.log("Server running.");
        config_loader.show_app_env(CONFIG);
    });
}

module.exports={
    init_app
}