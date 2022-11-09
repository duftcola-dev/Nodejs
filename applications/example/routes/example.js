/**
 * This is router.
 * A base class for creating and group endpoints
 * belonging to a certain aspect of the application.
 * All routers require a middleware that displays data with 
 * each income request.
 * Router default_middleware is silent in production by default but
 * you can change that by changing the default_middleware definition or 
 * writting your own middleware.
 * You can find what a middleware function is at config.js
 */
 const example_router=require("express").Router();
 
 example_router.use(default_middleware);
 
  example_router.get("/ping",function(req,res){
     res.statusCode=200;
     res.statusMessage="OK";
     res.setHeader("Content-Type","text/html");
     res.render("index.html");
   
  });
 
 module.exports=example_router;