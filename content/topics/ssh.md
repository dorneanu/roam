+++
title = "SSH"
author = ["Cyneox"]
draft = false
+++

## Config {#config}


### Use of bastion hosts {#use-of-bastion-hosts}

Configure your hosts to use another host as a jump host

```sh
host my-machine
  user <username>
  hostname <hostname>
  ProxyCommand ssh -q -W %h:%p <bastion-host>
```


### Use AWS SSM {#use-aws-ssm}

Using AWS SSM configure SSH:

```sh
Host bastion
    HostName <host name>
    User ec2-user
    IdentityFile <identity file>
    ProxyCommand sh -c "aws ssm start-session --target %h --document-name AWS-StartSSHSession --parameters 'portNumber=%p'"
```

Then you can use:

```sh
$ ssh bastion
```


## Ansible {#ansible}

-   2022-10-24 ◦ [SSH Bastion/Jumphost + Ansible configuration.](https://blog.keyboardinterrupt.com/ansible-jumphost/)
-   2022-10-24 ◦ [Using Ansible with a jump host – LeftAsExercise](https://leftasexercise.com/2019/12/23/using-ansible-with-a-jump-host/)


## Fun {#fun}

-   2023-11-30 ◦ [Explaining SSH to my Uber Driver](https://dev.to/therubberduckiee/explaining-ssh-to-my-uber-driver-38a)


## Security {#security}

-   2022-09-05 ◦ [14 Best Practices to Secure SSH Bastion Host](https://goteleport.com/blog/security-hardening-ssh-bastion-best-practices/)
-   2022-09-05 ◦ [SSH Security Best Practices using Certificates, 2FA and Bastions](https://goteleport.com/blog/how-to-ssh-properly/)
    -   setup `CA` for authenticating users to hosts and hosts to users


## General {#general}

-   2023-08-29 ◦ [An Excruciatingly Detailed Guide To SSH (But Only The Things I Actually Find Useful)](https://grahamhelton.com/blog/ssh-cheatsheet/)
