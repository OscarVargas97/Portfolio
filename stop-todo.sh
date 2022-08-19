#/bin/bash
cd docker
if [[ $1 == "dev" ]]; then  
  docker-compose --project-name "template"  --project-name --env-file ./docker/environments/mysql.env -f docker-compose.yml -f docker-compose.dev.yml stop --no-deps  
else
  docker-compose --project-name "template" --env-file ./docker/environments/mysql.env -f docker-compose.yml -f docker-compose.prod.yml stop --no-deps
fi 
