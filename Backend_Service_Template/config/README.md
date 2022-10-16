# Configuration folder 

    - Configurations files are stored here.
    - By default, the default.json configuration file is used.
    - Which configuration file is used at run time deppends on the ENV variable NODE_ENV.
    - If NODE_ENV has no value then default.json is used.

    exmaple :

        if : 

            NODE_ENV=dev ---> dev.json is used at run time 
            NODE_ENV=prod---> prod.json is used etc ...
        
    - To start the app with an especific configuration file :

        export NODE_ENV=dev 
        npm index
    
    - You can also store your environment variables at env/.env
      in which case they are loaded enmediately.