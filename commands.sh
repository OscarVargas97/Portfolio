#!/bin/bash
source ./config.sh
# Commands
shnodejs(){
	docker exec -it nodejs-dev-$project_name sh
}
pdownall(){
	compose clear clear
	pimageclearall
}
pdown(){
	compose down $1
	pimageclear $1
}
pstart(){
	compose up $1
}
pstop(){
	compose stop $1
}
pbuild(){
	compose build $1
}
