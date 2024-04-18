+++
title = "Terraform"
author = ["Victor Dorneanu"]
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

-   2024-03-05 ◦ [How to Deploy AWS Config Conformance Packs Using Terraform | AWS Cloud Operations &amp; Migrations Blog](https://aws.amazon.com/blogs/mt/how-to-deploy-aws-config-conformance-packs-using-terraform/)
    -   Deploy AWS Config [conformance packs](https://github.com/awslabs/aws-config-rules/tree/master/aws-config-conformance-packs) using Terraform
-   2023-08-16 ◦ [The AWS IA Team's best practices for Terraform](https://aws-ia.github.io/standards-terraform/)
-   2023-08-02 ◦ [Create an AWS CloudWatch Metric Filter and Alarm in Terraform](https://spin.atomicobject.com/2021/04/07/aws-cloudwatch-metric-filter-alarm-terraform/)


### Best Practices {#best-practices}

-   2024-04-18 ◦ [(Almost) Every infrastructure decision I endorse or regret after 4 years running infrastructure at a startup · Jack's home on the web](https://cep.dev/posts/every-infrastructure-decision-i-endorse-or-regret-after-4-years-running-infrastructure-at-a-startup/)
-   2023-11-14 ◦ [What Terraform best practice isn't talked about enough?](https://www.reddit.com/r/Terraform/comments/17qkfwm/what_terraform_best_practice_isnt_talked_about/?rdt=34153)


### Layout {#layout}

-   2023-10-16 ◦ [Community | Automating Multiple Environments with Terraform](https://community.aws/tutorials/automating-multiple-environments-with-terraform)
-   2023-09-19 ◦ [Best practices for using Terraform (Google Cloud)](https://cloud.google.com/docs/terraform/best-practices-for-terraform)
-   2023-08-01 ◦ [How to Create Terraform Multiple Environments](https://getbetterdevops.io/terraform-create-infrastructure-in-multiple-environments/)
    -   separated directors vs workspaces
-   2023-08-01 ◦ [How to Manage Terraform State in AWS - DEV Community](https://dev.to/aws-builders/how-to-manage-terraform-state-in-aws-1001)
    -   Mentions [workspaces](https://developer.hashicorp.com/terraform/language/state/workspaces)
    -   Has a good project layout (where each deployment environment gets its own folder)


#### Mono-repo vs multi-repo {#mono-repo-vs-multi-repo}

-   2023-12-06 ◦ [Monorepo vs. multi-repo: Different strategies for organizing repositories | Thoughtworks](https://www.thoughtworks.com/en-de/insights/blog/agile-engineering-practices/monorepo-vs-multirepo)
-   2023-12-06 ◦ [Terraform Mono Repo vs. Multi Repo: The Great Debate](https://www.hashicorp.com/blog/terraform-mono-repo-vs-multi-repo-the-great-debate)


### Tagging {#tagging}

-   2023-08-01 ◦ [Best Practices for Terraform AWS Tags](https://engineering.deptagency.com/best-practices-for-terraform-aws-tags)


### Testing {#testing}

-   2024-01-03 ◦ [Implementing Unit and integration tests in AWS using Terraform, Terratest, and Golang](https://blog.playgroundtech.io/implementing-unit-and-integration-tests-in-aws-using-terraform-terratest-and-golang-5f92c676ede1)


### Security {#security}

-   2023-09-15 ◦ [Terraform - How do you handle secrets? (r/devops)](https://www.reddit.com/r/devops/comments/10a7j78/terraform_how_do_you_handle_secrets/)
