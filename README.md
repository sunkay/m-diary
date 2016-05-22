# React Redux app to record medical events
This repo is to slowly build a redux application with sound architectural designs. TDD is hard and TDD with react/redux is not that easy either. This is an attempt to build this from scratch and document the journey on medium as much as possible

##Testing react components using enzyme
Create a mocha test harness which uses enzyme to test react components. Testing redux actions is fairly straightforward, but it gets tricky when it is using async actions. Utilized the excellent 'nock' library to intercept http requests. Sinon spy to stub out core functions. Still do not have a good way to test firebase integrations. The best way to test firebase is to create a separate database with test data.


###Getting Started with this repo###

There are two methods for getting started with this repo.

####Familiar with Git?#####
Checkout this repo, install depdencies, then start the process with the following:

```
	git clone https://github.com/sunkay/m-diary.git

	git clone https://github.com/sunkay/k-auth.git

```

#### Docker container instructions ####
This application depends on microservices.
 - m-diary (web-app)
 - k-auth (auth microservice)
 -

 ```

	cd m-diary
	npm start
	# docker does not work with webpack since there is an issue with volumes and watch functionality
	# Issue: https://github.com/docker/docker/issues/18246
	# Until I find the right solution it is better to use plain old npm start
	#docker-compose up

	cd k-auth
	docker-compose up
 ```
