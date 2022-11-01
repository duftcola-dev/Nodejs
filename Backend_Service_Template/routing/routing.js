/**
 * This file initialized all the routers in the application or
 * at least or the routers place in ../applications/routers during the 
 * booting process.
 * Each application can have multiple routers each of then stored in a
 * collection of objects at ../applications/routers routers_collector.
 */
const routers=require("../applications/routers.js");

function init(app){
    const n=Object.keys(routers).length;
    for (let i=0;i < n;i++){
        app.use(routers[i].path,routers[i].router);
    }
    return app;
}

module.exports={
    init
}