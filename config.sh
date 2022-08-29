#!/bin/bash
#Seccion editar
project_name=portfolio
##Docker images
dockerfile=(react nodejs)
download_image=(phpmyadmin/phpmyadmin mysql:5.7.38)


#Preferentemente no editar, a menos que desees cambiar la posicion de archivos
##Env
env=./config/.env
##Docker compose files
base=./docker/docker-compose.yml 
dev=./docker/docker-compose.dev.yml
prod=./docker/docker-compose.prod.yml
test=""

command(){
	docker-compose --project-name $project_name --env-file $env -f $base -f $1 $2
}

compose(){
	if [[ $2 == "dev" ]]; then
		command $dev $1
	elif [[ $2 == "test" ]] then
		command $test $1
	elif [[ $2 == "clear" ]] then
		command $dev down
		command $prod down
		command $test down
	else
		command $prod $1
	fi 
}

pimageclear(){
	if [[ $1 == "" ]]; then  
		for i in "${dockerfile[@]}"
		do
			docker rmi  $i-prod-$project_name
		done
	else
		for i in "${dockerfile[@]}"
		do
			docker rmi  $i-$1-$project_name
		done
	fi
}

pimageclearall(){
	for a in "${download_image[@]}"
	do
		docker rmi $a
	done
	for i in "${dockerfile[@]}"
	do
		docker rmi  $i-dev-$project_name $i-test-$project_name $i-prod-$project_name $i-base-$project_name
	done
}