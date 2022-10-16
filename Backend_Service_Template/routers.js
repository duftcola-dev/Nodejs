/**
 * This the applications routers.
 * Each application can have multiple routers that are imported as a collection.
 * The collections of routers are stored in apps.
 * Each router of each app loaded here and added to the main node app server instance.
 */
const example_app_routers=require("./applications/example/routers");
//Place your applications routers here
const apps={
    0:example_app_routers
}

function init(app){
    const total_apps=Object.keys(apps).length;
    for (let apps_id=0;apps_id < total_apps;apps_id++){

        let routers=apps[apps_id];
        let total_routers=Object.keys(apps[apps_id]).length;

        for(let router=0;router < total_routers;router++){
            app.use(routers[router].path,routers[router].router);
        }
    }
    return app;
}

module.exports={
    init
}