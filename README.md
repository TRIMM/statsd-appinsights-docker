# statsd-appinsights-docker

This repository contains a Dockerfile for StatsD with an Azure Application Insights backend.
To run it, change the values in docker-compose.yaml and execute

```sh
$ docker-compose up
```

After that, you should be able to connect to the StatsD backend at `localhost:8125`
