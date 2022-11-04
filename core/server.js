const cluster=require("cluster");
const http=require("http");
const n_cpus=require("os").cpus().length;
/**
 * The purpose of this file is to define how the application 
 * will function as a whole. If in the configuration file is defined
 * cluster=true then the application will run in 
 * cluster mode creating n instances  of itself = n CPUs of the host machine. Otherwise
 * if cluster=false only one server instance will be created.
*/

function show_app_env(CONFIG){
    /**
     * This shows what parameters and 
     * NODE_ENV the app is using currently.
     */
   
        
    if (CONFIG.tag=="dev"){
        configuration="development";
    }
    if (CONFIG.tag=="test"){
        configuration="testing";
    }
    if (CONFIG.tag=="prod"){
        configuration="production";
    }
    if (CONFIG.tag=="default"){
        configuration="default";
    }
    console.log(`- config:${configuration}`);
    console.log(`- hots:${CONFIG.host}`);
    console.log(`- port:${CONFIG.port}`);
    console.log(`- env:${process.env.NODE_ENV}`);
    console.log(`- process pid:${process.pid}`);
    console.log(`- platform:${process.platform}`);
}

//------------------------------------------------------------------------------------------

function cluster_mode(app,CONFIG){
    /*Cluster mode.
    Creates n instances of your Nodejs application based on the ammount of CPUs in
    the host machine in order to distribute workloads. These instances
    are isolated processes but they share host and port.
    Use this option when developing application that handle hihg amounts of traffic
    */
    if (cluster.isMaster){
        console.log("Running on cluster mode.")
        console.log(`Number of Cpus: ${n_cpus}`)
        console.log(`Master process: ${process.pid} is running`) 
        show_app_env(CONFIG); 
        for(let i = 0; i < n_cpus; i++){
            cluster.fork();
        }
        cluster.on("exit",(worker,code,signal)=>{
            console.log(`"Worker ${worker.process.pid} died"`)
        });
    }else{
        app.listen(CONFIG.port,CONFIG.host,() => { // start worker on port:host | pid
            console.log(`Worker process: ${process.pid}`)
        });
    }
}

//------------------------------------------------------------------------------------------

function single_instance_mode(app,CONFIG){
    /*Single instance mode.
    This is the default operational behavior of a Nodejs application.
    A single server instance listening through a single port in a host machine.
    When in production mode PM2 wrapps the application and is responsible of create
    the cluster.
    */
    app.listen(CONFIG.port,CONFIG.host,() => { // start app on port:host
        console.log("Server running.");
        show_app_env(CONFIG);
    });
}

//------------------------------------------------------------------------------------------

function init(app,CONFIG){

    if (CONFIG.cluster==true){
        cluster_mode(app,CONFIG);
    }else{
        single_instance_mode(app,CONFIG);
    }
}

module.exports={
    init
}