/**
 * This is the application routers module.
 * Every router you create in routes/ should be imported here.
 * An application can have many routers each of them representing a group
 * of endpoints with related functionalities.
 * 
 * - It is advisable to use the following notation for the object
 *   that contains the routers :
 *      <your_app_name>_app_routers 
 *  
 *      example: my_app_app_routers
 * 
 * - Routers are stored using 
 *      - an id 
 *      - a  prefix path 
 *      - and the router itself
 *      
 *      example:1:{path:"my_path/",router:myrouter}
 *      
 * Therefore the final path to myrouter will be: localhost/my_path/ping
 *  
 */
const example_router=require("./routes/example.js");

// Place your routers here
const example_app_routers={
    0:{path:"/example",router:example_router}
};

module.exports=example_app_routers;