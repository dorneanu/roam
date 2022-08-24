+++
title = "SOLID"
draft = false
+++

-   S: [SOLID/Single Responsability Principle](#single-responsability-principle)
-   O: [SOLID/Open-Close Principle](#open-close-principle)
-   L: [SOLID/Liskov Substitution Principle](#liskov-substitution-principle)
-   I:
-   D: [SOLID/Dependency Inversion Principle](#dependency-inversion-principle)
-   tells us basically how to arrange _functions_ and _data structures_ into [OOP/Class]({{< relref "oopclass.md" >}})es
    -   the word "class" doesn't mean that these principles are only applicable to [OOP]({{< relref "oop.md" >}}) software


## Single Responsability Principle {#single-responsability-principle}

-   Single Responsability Principle
-   a class or module should have one and only one reason to change
-   systems should be composed of many small classes, not a few larger ones
    -   use UNIX philosophy
        -   combine sharp tools to solve larger tasks
-   each small class encapsulates a single responsability, has a single reason to change, and collaborates with a few others to achive the desired system behaviours
-   structure functions, types, methods into packages that have "natural" cohesion
-   functions serve a single purpose


## Open-Close Principle {#open-close-principle}

-   Open-Closed Principle
-   defined by Bertrand Meyer in 1988
-   compose simple types into more complex ones using embedding
-   classes should be open for extension but closed for modification
-   the goal is minimize coupling

    -   loosely coupled
        -   change to one service should not require a change to another
    -   a loosely coupled services knows as little as it needs about the services it communicates with
        -   limitation of number of different types of calls is important
    -   make the system easy to extend without having a high impact of change
    -   this done by partitioning the system into 'components' and aranging these into a dependency hiearchy that protects the higher-level components in lower-level components

    > This essentially means that classes should be open for extension but closed
    > for modification, so it should be possible to extend or override class
    > behavior without having to modify code. Behavior change should be pluggable
    > into the class, either through overriding some methods or injecting some
    > configuration. One excellent example of a framework exhibiting this principle
    > is the Spring Framework ( )
-   also leads to SOLID/Dependency Inversion Principle


## Liskov Substitution Principle {#liskov-substitution-principle}

-   Liskov Substitution Principle
-   express dependencies between packages in terms of interfaces and not concrete types
-   This is a slight variation of the SOLID/Open-Close Principle, and states it as follows:
    -   "Derived types must be substitutable for their base types."
-   This principle is called Liskov because it was first written by [Barbara Liskov](https://en.wikipedia.org/wiki/Barbara_Liskov):
    -   "What is wanted here is something like the following substitution property: If for each object o1 of type S there is an object o2 of type T such that for all programs P defined in terms of T, the behavior of P is unchanged when o1 is substituted for o2---then S is a subtype of T.
    -   basically a specification for an abstract base class with various concrete subtypes
-   Examples
    -   Golang's Reader interface

        > Because io.Reader's deal with anything that can be expressed as a stream of bytes, we can construct readers over just about anything; a constant string, a byte array, standard in, a network stream, a gzip'd tar file, the standard out of a command being executed remotely via ssh. And all of these implementations are substitutable for one another because they fulfil the same simple contract. -- [Source](https://dave.cheney.net/2016/08/20/solid-go-design)


## Dependency Inversion Principle {#dependency-inversion-principle}

-   Dependency Inversion Principle
-   classes should depend upon abstractions and not concrete details

    > High-level modules should not depend on low-level modules. Both should depend
    > on abstractions. Abstractions should not depend on details. Details should
    > depend on abstractions. --Robert C. Martin
-   every package should have interfaces that describe functionality without the implementation
-   when a package needs a depedency, it should take that depedency as a parameter (use interfaces not concrete implementations)
-   high-level concepts (such as ) know nothing of lower-level concepts (such as )
    -   instead the lower-level uses cases know about the high-level entities