# generator-spring-boot-ms
The yeoman generator for spring boot based microservices

### Installation
Currently only installation from source code is available
* Clone this repository
* Run `npm install` and `npm link`
* Navigate to service folder and run `yo spring-boot-ms` (The `generator-` might be omitted for npm linked generators)

### Features list
- [x] Gradle / Maven build tool
- [x] Allow operations components selection (actuator and actuator docs)

### TODO
- [ ] Multiple Spring Boot versions (only `1.5.18` supported at this moment)
- [ ] Multiple Java versions (only `Java 8` supported at this moment)
- [ ] Extend core components selection (`DevTools`, `Security`, `Session`, `Cache`, `Aspects`, `Retry`)
- [ ] Extend web components selection (`Reactive Web`, `Web Services`, `Websocket`)
- [ ] Extend SQL components selection (`JPA`, `MySQL`, `PostgreSQL`, `JDBC`, `Liquibase`, `Flyway`, `JOOQ`)
- [ ] Extend NoSQL components selection (`Redis`, `Reactive Redis`, `MongoDB`, `Reactive MongoDB`)