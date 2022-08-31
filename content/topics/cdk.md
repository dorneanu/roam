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

Watch [AWS/CloudFormation]({{< relref "awscloudformation.md" >}}) events on the CLI using [tail-stack-events](https://www.npmjs.com/package/tail-stack-events).

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


## Resources {#resources}


### Articles {#articles}

-   2022-08-22 ◦ [amazon web services - How to create Elastic IP association with an EC2 instance using AWS CDK? - Stack Overflow](https://stackoverflow.com/questions/61955381/how-to-create-elastic-ip-association-with-an-ec2-instance-using-aws-cdk)
-   2022-08-16 ◦ [Create a bastion with AWS CDK](https://faun.pub/create-a-bastion-with-aws-cdk-d5ebfb91aef9)


### Docs {#docs}

-   2022-08-30 ◦ [class NestedStack (construct) · AWS CDK](https://docs.aws.amazon.com/cdk/api/v2/docs/aws-cdk-lib.NestedStack.html)

    -   might help us to get rid of

    > [Info at /xxx] Number of resources: xxx is approaching allowed maximum of 500