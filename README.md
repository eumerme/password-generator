# password-generator
- an application that generates random passwords. Also, it's a poc to understand how docker and github actions work in fullstack apps hosted on AWS

## To try
- go to [Password Generator](http://ec2-3-88-7-227.compute-1.amazonaws.com/)

### In case it doesn't work 
- probably the AWS license has expired, but you can download and run locally with or without docker
 
## How to run
- clone this repository
- create a `.env` file as in `.env.example`, both in the front-end folder and in the back-end folder

### Docker
- run `docker compose up`

**🚨 Remember, before a new build delete the volumes**

- run `docker compose down -v`

### Locally
- run `npm i`
- run `npm run prisma:migrate:dev`
- run `npm run dev` to start the local server
