+++
title = "CDK"
draft = false
+++

## Tips {#tips}


### Describe instances ([source](https://faun.pub/create-a-bastion-with-aws-cdk-d5ebfb91aef9)) {#describe-instances--source}

```sh
  export BASTION_INSTANCE_ID=$(aws ec2 describe-instances \
                          --region=$AWS_REGION \
                          --filter "Name=tag:Name,Values=my-bastion" \
                          --query "Reservations[].Instances[?State.Name == 'running'].InstanceId[]" \
                          --output text)
```


### tail-stack-events {#tail-stack-events}

Watch AWS/CloudFormation events on the CLI using [tail-stack-events](https://www.npmjs.com/package/tail-stack-events).

```sh
tail-stack-events -f -s <stack name>
```


## Snippets {#snippets}


### Load environment based configuration file {#load-environment-based-configuration-file}

In `app.py:`

```python
# Load configuration file
env = app.node.try_get_context("env")
with open(f"config.{env}.yaml", "r") as cfg:
    try:
        config = yaml.safe_load(cfg)
    except yaml.YAMLError as exc:
        print(exc)

# Create stack
Stack(
    app,
    "stack-name",
    cdk.Environment(account=config["aws"]["account"], region=config["aws"]["region"]),
    config=config
)
```

Then on the CLI you can use:

```sh
$ cdk deploy -c env=prod
```

And this will load config from `config.prod.yaml`.

The stack itself can be defined as:

```python
class CDKStack(Stack):
    def __init__(self, scope: Construct, construct_id: str, env, **kwargs) -> None:
        # Save config
        self.config = kwargs.pop("config")

        super().__init__(scope, construct_id, **kwargs)

        ...
```


### Override logical IDs {#override-logical-ids}

-   2022-08-30 ◦ [How to Override Logical IDs of Resources in AWS CDK | bobbyhadz](https://bobbyhadz.com/blog/override-logical-id-aws-cdk)

<!--listend-->

```python
cfn_assignment = sso.CfnAssignment(...)
cfn_assignment.override_logical_id(unique_id)
```


### Add conditions {#add-conditions}

In this example add [conditions](https://docs.aws.amazon.com/cdk/api/v2/python/aws_cdk.aws_iam/PolicyStatement.html#aws_cdk.aws_iam.PolicyStatement.add_condition) to S3 bucket policies:

```python
listBucketPolicy = aws_iam.PolicyStatement(
    actions=[
        "s3:ListBucket",
    ],
    resources=["arn:aws:s3:::my-bucket"],
)
listBucketPolicy.add_condition("StringEquals", {"s3:prefix": ["prod"], "s3:delimiter": ["/"]})
bucket.policy.document.add_statements(listBucketPolicy)
```

Also check:

-   2022-09-06 ◦ [Amazon S3 condition key examples - Amazon Simple Storage Service](https://docs.aws.amazon.com/AmazonS3/latest/userguide/amazon-s3-policy-keys.html#bucket-keys-in-amazon-s3-policies)
-   2022-09-06 ◦ [aws cdk - create aws user with s3 permissions with aws cdk - Stack Overflow](https://stackoverflow.com/questions/62880797/create-aws-user-with-s3-permissions-with-aws-cdk)
-   2022-09-06 ◦ [List all Files in an S3 Bucket with AWS CLI | bobbyhadz](https://bobbyhadz.com/blog/aws-cli-list-all-files-in-bucket)
    -   for using `s3api` and `list-objects`


## Resources {#resources}


### Articles {#articles}

-   2023-06-05 ◦ [Cloud, why so difficult? 🤷‍♀️ | Wing](https://docs.winglang.io/blog/2022/11/23/manifesto)
    -   Elad ben-israel, the mind behind the cdk, shares his love for the cloud, but
        also his frustrations with the complexity of building cloud applications.
-   2022-10-26 ◦ [NestedStack — AWS Cloud Development Kit 2.47.0 documentation](https://docs.aws.amazon.com/cdk/api/v2/python/aws_cdk/NestedStack.html)
-   2022-10-26 ◦ [GitHub - bobbyhadz/aws-cdk-nested-stack](https://github.com/bobbyhadz/aws-cdk-nested-stack)
    -   how to provision nested stacks using AWS CDK
-   2022-10-26 ◦ [How I prefer to organize my AWS CDK and NestedStack code](https://medium.com/devops-techable/how-i-prefer-to-organize-my-aws-cdk-stack-and-nestedstack-code-infrastructure-as-code-iac-3d4e3c519949)
-   2022-09-06 ◦ [Linux EC2 Bastion Host with AWS CDK](https://dev.to/airmonitor/linux-ec2-bastion-host-with-aws-cdk-55ie)
    -   initialize EC2 bastion hosts by specific sets of commands
    -   create Route53 record for bastion host
    -   pre-populate `.ssh/authorized_keys` with keys using ansible
    -   upload `ansible` runbook to [AWS/S3]({{< relref "awss3.md" >}})
-   2022-08-22 ◦ [amazon web services - How to create Elastic IP association with an EC2 instance using AWS CDK?](https://stackoverflow.com/questions/61955381/how-to-create-elastic-ip-association-with-an-ec2-instance-using-aws-cdk)
-   2022-08-16 ◦ [Create a bastion with AWS CDK](https://faun.pub/create-a-bastion-with-aws-cdk-d5ebfb91aef9)


#### Testing {#testing}

-   2022-09-06 ◦ [Testing CDK Applications in Any Language | AWS Developer Tools Blog](https://aws.amazon.com/blogs/developer/testing-cdk-applications-in-any-language/)
-   2022-09-06 ◦ [CDK Integration Testing | Ben's Blog](https://thebenforce.com/post/cdk-integration-testing)
-   2022-09-06 ◦ [Infrastructure Tests with CDK | kreuzwerker](https://kreuzwerker.de/en/post/infrastructure-tests-with-cdk)
    2022-09-06 ◦ [AWS CDK: Running Integration Tests in real AWS cloud environment using Github Actions](https://lucasfsantos.com/aws-cdk-integration-tests)
    -   [Github Repository](https://github.com/lucashfreitas/aws-cognito-auth)


### Docs {#docs}

-   2022-08-30 ◦ [class NestedStack (construct) · AWS CDK](https://docs.aws.amazon.com/cdk/api/v2/docs/aws-cdk-lib.NestedStack.html)

    -   might help us to get rid of

    > [Info at /xxx] Number of resources: xxx is approaching allowed maximum of 500
