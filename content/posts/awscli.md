+++
title = "AWS/CLI"
draft = false
+++

Some currated list of useful [aws CLI](https://aws.amazon.com/cli/) commands.


## API Gateway {#api-gateway}

| desc             | command                               |
|------------------|---------------------------------------|
| get-domain-names | `$ aws apigatewayv2 get-domain-names` |


## SSM {#ssm}

| desc          | command                                                                                           |
|---------------|---------------------------------------------------------------------------------------------------|
| get parameter | `$ aws --profile default ssm get-parameter --with-decryption --name "<ssm path>"`                 |
| put parameter | `$ aws ssm put-parameter --name <path> --value <value> --type SecureString --key-id <KMS key ID>` |


## Cloudformation {#cloudformation}

| desc               | command                                                              |
|--------------------|----------------------------------------------------------------------|
| tail for CF events | `$tail-stack-events -f --die -n 5 --region <region> -s <stack name>` |


## SQS {#sqs}

| desc                    | command                                                                                          |
|-------------------------|--------------------------------------------------------------------------------------------------|
| receive one message     | `$ aws sqs receive-message --queue-url <queue url> --region <region>`                            |
| get attributes of queue | `$ aws sqs get-queue-attributes --queue-url <queue url> --region <region> --attribute-names All` |


##  {#dynamodb}

| desc        | command                                                                                                 |
|-------------|---------------------------------------------------------------------------------------------------------|
| put item    | `aws dynamodb put-item --table-name tiddlers --item file://items.json --endpoint http://127.0.0.1:8000` |
| list tables | `aws dynamodb list-tables --endpoint-url http://localhost:8000`                                         |
| scan        | `aws dynamodb scan --table-name tiddlers --endpoint http://127.0.0.1:8000`                              |