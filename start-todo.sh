#/bin/bash
cd docker
if [[ $1 == "dev" ]]; then  
  docker-compose --project-name "template" --env-file ./environments/mysql.env -f docker-compose.yml -f docker-compose.dev.yml up --no-deps  
else
  docker-compose --project-name "template" --project-name "template" --env-file ./environments/mysql.env -f docker-compose.yml -f docker-compose.prod.yml up --no-deps
fi 



