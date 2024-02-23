Nodejs backend application with Postgres

## API

- /api/v1/\*

## OpenAPI specification

- [openapi.yaml](./openapi/openapi.yaml)

## NPM scripts

- `npm install` - Install dependencies
- `npm run lint` - Lint code
- `npm run start` - Start application

## Environment configuration

Clone `.env-sample` to `.env` and update value for following environment variables

| Variable Name        | Default value  | Description               |
| -------------------- | -------------- | ------------------------- |
| `PORT`               | 3000           | Application port name     |

## curl command test
curl -X GET http://localhost:4002/api/v1/healthz  
curl -X GET http://localhost:4002/api/v1/books  
curl -d '{"name":"buybook", "author": "", "title": "ben","pages": 10}' -X POST http://localhost:4002/api/v1/books -H 'Content-Type: application/json'  
curl -X DELETE http://localhost:4002/api/v1/books/6406bd9794c5b4ed9f6f2048  
curl -d '{"name":"sellbook", "author": {"firstName":"alex", "lastName":"mopoko"},"title": "pen","pages": 10}' -X POST http://localhost:4002/api/v1/books -H 'Content-Type: application/json'  

## docker build command
docker build --progress=plain -t victoryeo00/nodejsprog:latest .
## docker push command
docker push victoryeo00/nodejsprog:latest
## docker run command (without detached)
docker run -u node -p 4002:4002  victoryeo00/nodejsprog:latest

## deploy and delete k8s
```
kubectl apply -f create-deployment.yaml
kubectl delete deployment nodejsprog
kubectl delete svc nodejsprog-service
```
## deploy helm chart
```
helm create <helmname>
helm install <appname> <helmname>/
helm uninstall <appname>
```
## api key setting
set in .env file or pass the api key to docker commmand
```
docker run -u node --env API_KEY=testkey -p 4002:4002 victoryeo00/nodejsprog:latest
```