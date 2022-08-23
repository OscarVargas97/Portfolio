#/bin/bash
cd docker
if [[ $1 == "dev" ]]; then  
  docker-compose --project-name "template"  --project-name --env-file ./environments/mysql.env -f docker-compose.yml -f docker-compose.dev.yml stop 
else
  docker-compose --project-name "template" --env-file ./environments/mysql.env -f docker-compose.yml -f docker-compose.prod.yml stop
fi 
