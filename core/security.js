const helmet=require("helmet");

/**
 * This file initializes the security settings of the application.
 */

function init(app,CONFIG){
    // Enable secure headers
    if (CONFIG.secure_headers==true){
        app.use(helmet());
    }
    return app;
}

module.exports={
    init
}