#/bin/bash
cd docker
docker-compose --project-name "template" --env-file ./environments/mysql.env -f docker-compose.yml -f docker-compose.dev.yml down
docker-compose --project-name "template" --env-file ./environments/mysql.env -f docker-compose.yml -f docker-compose.prod.yml down 
docker rmi mysql:5.7.37@sha256:66d52e6baa8093820c09fec56992a5ee734f17e9fad8ef5ffc31597b231bd048 phpmyadmin/phpmyadmin
docker rmi nodejs-dev nodejs-prod nodejs-test
docker rmi react-dev react-prod react-test
