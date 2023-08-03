+++
title = "Terraform"
draft = false
+++

## Articles {#articles}

-   2023-06-20 ◦ [loops - How to for_each through a list(objects) in Terraform 0.12 - Stack Overflow](https://stackoverflow.com/questions/58594506/how-to-for-each-through-a-listobjects-in-terraform-0-12)

    > Using for_each on a list of strings
    > Using for_each on a list of objects
    > Using for_each to combine two lists
    > Using for_each in a nested block
    > Using for_each as a conditional
-   2023-06-13 ◦ [Terraform Files - How to Structure Terraform Project](https://spacelift.io/blog/terraform-files)
-   2023-06-13 ◦ [4 Tips to better structure Terraform projects](https://xebia.com/blog/four-tips-to-better-structure-terraform-projects/)
    Which files:

    > -   `provider.tf`: contains the terraform block and provider block
    > -   `data.tf`: contains all data sources
    > -   `variables.tf:` contains all defined variables
    > -   `locals.tf`: contains all local variables
    > -   `output.tf`: contains all output resources

    Locals vs variables:

    > -   **variable blocks**: should be used for values that are not known beforehand, such IDs that are defined at runtime.
    > -   **Local blocks**: should be used for values that are known beforehand, but are good to abstract as variables, such as constants

    Use `yamldecode` to load a YAML file with all the settings (instead of defining everything in the TF file)


### AWS {#aws}

-   2023-08-02 ◦ [Create an AWS CloudWatch Metric Filter and Alarm in Terraform](https://spin.atomicobject.com/2021/04/07/aws-cloudwatch-metric-filter-alarm-terraform/)


### Layout {#layout}

-   2023-08-01 ◦ [How to Create Terraform Multiple Environments](https://getbetterdevops.io/terraform-create-infrastructure-in-multiple-environments/)
    -   separated directors vs workspaces
-   2023-08-01 ◦ [How to Manage Terraform State in AWS - DEV Community](https://dev.to/aws-builders/how-to-manage-terraform-state-in-aws-1001)
    -   Mentions [workspaces](https://developer.hashicorp.com/terraform/language/state/workspaces)
    -   Has a good project layout (where each deployment environment gets its own folder)


### Tagging {#tagging}

-   2023-08-01 ◦ [Best Practices for Terraform AWS Tags](https://engineering.deptagency.com/best-practices-for-terraform-aws-tags)
