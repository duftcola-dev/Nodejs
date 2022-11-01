/**
 * This is where the routers pf the applications are agathered
 * An application can have many routers each of them representing a group
 * of endpoints with related functionalities.
 *
 * - Routers are stored using 
 *      - an id 
 *      - a  prefix path 
 *      - and the router object itself
 * 
 * - It is advisable to use the following notation ro each element in
 *   the routers collector:
 *      <index>:{path:<prefix_path>,router:<router_object>} 
 *  
 *      example: 0:{path:"/example",router:example_router}
 * 
 * Therefore the final path to myrouter will be: localhost/my_path/ping
 *  
 */
// Import your routers here
const example_router=require("./example/routes/example.js");

// Place your routers here
const routers_collector={
    0:{path:"/example",router:example_router}
};

module.exports=routers_collector;