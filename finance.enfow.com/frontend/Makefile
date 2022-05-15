DEV_IMAGE = enfow.docker:dev
PROD_IMAGE = enfow.docker:prod

docker-build-dev:
	docker build -t ${DEV_IMAGE} .

docker-run-dev:
	docker run --rm -d --name finance-enfow-com-dev -p 50001:3000 ${DEV_IMAGE}
docker-build:
	docker build -t ${PROD_IMAGE} -f Dockerfile.prod .

docker-run:
	docker run --rm -d --name finance-enfow-com-prod -p 50001:3000 ${PROD_IMAGE} 
