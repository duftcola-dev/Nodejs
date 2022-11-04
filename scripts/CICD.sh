
Blue='\033[0;34m'         # Blue
readonly image=nodeservice/backend

# Build docker image for development/test
if [ "$1" = "build" ];then
    echo "Building docker image: "$image
    mv ./docker/dockerfile ./dockerfile
    mv ./docker/.dockerignore ./.dockerignore
    docker build -t $image .  
    mv ./dockerfile ./docker/dockerfile 
    mv ./.dockerignore ./docker/.dockerignore 
fi 

# Run docker container
if [ "$1" = "docker" ];then
    docker run -td -p 0.0.0.0:8000:8000 -e CI=true -e NODE_ENV=dev --name node_service $image
fi
# Run docker compose
if [ "$1" = "compose" ];then
    mv ./docker/docker-compose.yaml ./docker-compose.yaml
    docker-compose up -d
fi 

# Stop container
if [ "$1" = "stop" ];then
   docker stop node_service
   docker-compose down
   mv ./docker-compose.yaml ./docker/docker-compose.yaml 
fi

# Delete container , delete image
if [ "$1" = "clear" ];then
   docker rm node_service
   docker rmi $image
fi