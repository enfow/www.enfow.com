DEV_IMAGE = enfow.docker:dev
PROD_IMAGE = enfow.docker:prod
DB_NAME = postgresql

setup:
	pip install -r requirements.txt

format:
	black src/
	isort src/

run:
	PYTHONPATH=./src/ uvicorn main:app --reload 

docker-build-dev:
	docker build -t ${DEV_IMAGE} .

docker-run-dev:
	docker run --rm -d --name finance-enfow-com-dev -p 50001:3000 ${DEV_IMAGE}

docker-build:
	docker build -t ${PROD_IMAGE} -f Dockerfile.prod .

docker-run:
	docker run --rm -d --name finance-enfow-com-prod -p 50001:3000 ${PROD_IMAGE} 

run-postgres:
	docker run -d -p 5432:5432 --name ${DB_NAME} -e POSTGRES_PASSWORD=${PW} --rm postgres 
