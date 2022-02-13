<div align="center">
  <a href="https://github.com/rodolfoaugusto/cocus-test">
    <img src="https://www.cocus.com/wp-content/uploads/2020/07/cocus-logo-verlauf.svg" alt="Logo" width="80" height="80">
  </a>

  <h3 align="center">Cocus Test - Triangle API</h3>

  <p align="center">
    <br />
    <a href="https://github.com/rodolfoaugusto/cocus-test/raw/main/tools/Cocus%20Triangle.postman_collection.json" download><strong>API Postman Collection »</strong></a>
  </p>
</div>

# Preparing development enviroment


## Requirements
- [Yarn](https://classic.yarnpkg.com/lang/en/docs/install/#debian-stable)
- [Docker](https://docs.docker.com/engine/install/ubuntu/#install-using-the-repository)
- [Docker Compose](https://docs.docker.com/compose/install/#install-compose-on-linux-systems)

## Quicky development setup
```bash
yarn && cd tools && sh start_dev.sh
```

# REST API 
Download the [Postman collection](https://github.com/rodolfoaugusto/cocus-test/raw/main/tools/Cocus%20Triangle.postman_collection.json) and check out the endpoints.
<br>⚠️ The authentication type is Bearer token.

```
📂{stage}/api/v1
     |     |   |_📂 API version
     |     |_📂 API project Reference
     |_📂 API Stage
```

### Triangle API Structure

| HTTP METHOD | POST              | GET                        | PUT               | DELETE      |
| ----------- | ----------------- | -------------------------- | ----------------- | ----------- |
| CRUD OP     | CREATE            | READ                       | UPDATE            | DELETE      |
| /triangle   | Get triangle type | List triangle type records | Error (404)       | Error (404) |


# How to run tests
The tests will run automated integration and unit tests.
```bash
yarn test
```

# AWS

## CloudWatch
### Alarms
- [Duration](https://console.aws.amazon.com/cloudwatch/home?region=us-east-1#alarmsV2:alarm/cocus-triangle-prod-api-Duration-Alarm)
- [Throttles](https://console.aws.amazon.com/cloudwatch/home?region=us-east-1#alarmsV2:alarm/cocus-triangle-prod-api-Throttles-Alarm)
- [Errors](https://console.aws.amazon.com/cloudwatch/home?region=us-east-1#alarmsV2:alarm/cocus-triangle-prod-api-Errors-Alarm)
- [Invocations](https://console.aws.amazon.com/cloudwatch/home?region=us-east-1#alarmsV2:alarm/cocus-triangle-prod-api-Invocations-Alarm)

# Important develoment tools

## 🕵 _linter_

- Recommend running before commit and pull-request main br anch.

In order to lint and automatically fix some errors run:

```bash
yarn lint
```

## 💅 _prettier_

- Recommended running before every commit to keep the same code style.

```bash
yarn prettier
```