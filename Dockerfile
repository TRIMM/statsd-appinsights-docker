FROM statsd/statsd:latest

RUN npm install appinsights-statsd-deo --save

COPY appinsights.js /usr/src/app/config.js

ENV DEBUG false
