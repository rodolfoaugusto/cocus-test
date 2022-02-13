# API
- [x] Triangle sides cannot be equal or lower than 0.
- [x] It should be a REST API with a single POST endpoint that receives a JSON containing the lengths of the 3 sides of the triangle.
- [x] It should answer a JSON response with the triangle type (equilateral, isosceles, or scalene)
- [x] Must be created an API endpoint to get history from database
- [x] Bonus points if it is on AWS API Gateway
- [x] Bonus points if authentication is implemented
- [x] Bonus point if some requests limitation / throttling mechanism is implemented (on AWS, e.g., max 100 requests per second)

# Code
- [x] Implement the solution using Java, Typescript, NodeJS, Golang or Python
- [x] Create validation for input values
- [x] Tests must be implemented
- [x] Unit or functional (bonus points for both)
- [x] Bonus points if tests are “BDD-style”

# Database
- [x] Each result must be saved on a database table
- [x] Bonus points if it is saved on an AWS managed database (RDS, DynamoDB, etc.)

# Monitoring
- [x] The application must have logs (especially for errors)
- [x] It must be on AWS CloudWatch
- [x] Bonus points if retention time is configured
- [x] Bonus points if at least 1 alarm is created for errors

# Infrastructure
- [x] Bonus points if it is represented by code (plan, code, build, test, release, deploy, operate) / Dev / PROD (CloudFormation)

# Documentation
- [x] How to run the application
- [x] How to run tests
- [x] API endpoints description

# Consideration the software development good practices
- [x] Test are very welcome! E2E and unit tests are essential for us at least!
- [x] We will assess the code structure, organization and of course, quality. We enjoy a clean and well organized code!
- [x] Bare in mind the documentation, we will analyse your challenge and we want to understand the flow!
- [x] Don’t forget to implement an authentication and a secret manager!
- [x] Our preference in terms of the infrastructure framework is Terraform or AWS CDK
- [x] We will validate the HTTP status codes and have in consideration the REST API principles
- [x] Consider the limit of requests per IP.
 
## References
[CloudFormation & Terraform & Serverless Framework](https://miro.medium.com/max/1400/1*GCmJZ4r1cpmEuPYldDFrxw.png)