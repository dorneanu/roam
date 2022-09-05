+++
title = "SSH"
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


## Security {#security}

-   2022-09-05 ◦ [14 Best Practices to Secure SSH Bastion Host](https://goteleport.com/blog/security-hardening-ssh-bastion-best-practices/)
-   2022-09-05 ◦ [SSH Security Best Practices using Certificates, 2FA and Bastions](https://goteleport.com/blog/how-to-ssh-properly/)
    -   setup `CA` for authenticating users to hosts and hosts to users