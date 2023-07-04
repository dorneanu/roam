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
