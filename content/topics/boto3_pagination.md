+++
title = "Boto3 Pagination"
draft = false
+++

## Using paginator {#using-paginator}

```text
import boto3

s3 = boto3.client('s3')

paginator = s3.get_paginator('list_objects_v2')
pages = paginator.paginate(Bucket='my-bucket')

for page in pages:
    for object in page['Contents']:
        print(object['Key'])
```


## Using collections {#using-collections}

```text
import boto3

s3 = boto3.resource('s3')
bucket = s3.Bucket('my-buycket')
objects = bucket.objects.all()

for object in objects:
    print(object.key)
```
