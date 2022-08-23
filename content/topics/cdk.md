+++
title = "CDK"
draft = false
+++

## Tips {#tips}

-   Describe instances ([source](https://faun.pub/create-a-bastion-with-aws-cdk-d5ebfb91aef9))

    ```sh
      export BASTION_INSTANCE_ID=$(aws ec2 describe-instances \
                              --region=$AWS_REGION \
                              --filter "Name=tag:Name,Values=my-bastion" \
                              --query "Reservations[].Instances[?State.Name == 'running'].InstanceId[]" \
                              --output text)
    ```


## Resources {#resources}


### Articles {#articles}

-   2022-08-22 ◦ [amazon web services - How to create Elastic IP association with an EC2 instance using AWS CDK? - Stack Overflow](https://stackoverflow.com/questions/61955381/how-to-create-elastic-ip-association-with-an-ec2-instance-using-aws-cdk)
-   2022-08-16 ◦ [Create a bastion with AWS CDK](https://faun.pub/create-a-bastion-with-aws-cdk-d5ebfb91aef9)