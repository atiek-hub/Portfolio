build:
	docker compose ${DOCKER_COMPOSE_FILE_PATH} ${PROJECT_FLAG} exec ${USER_FLAG} workspace bash -c 'cd ${WORKDIR}/src && npm run build'
	echo > ./docs/.nojekyll
