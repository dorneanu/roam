+++
title = "Domain Driven Design Quickly"
author = ["Victor Dorneanu"]
date = 2024-02-05
tags = ["architecture", "ddd", "book"]
draft = false
+++

## Notes {#notes}


### Waterfall {#waterfall}

> There are different approaches to software design. One is the
> waterfall design method. This method involves a number of
> stages. The business experts put up a set of requirements which
> are communicated to the business analysts. The analysts create a
> model based on those requirements, and pass the results to the
> developers, who start coding based on what they have received.
> It’s a one way flow of knowledge. While this has been a
> traditional approach in software design, and has been used with a
> certain level of success over the years, it has its flaws and limits.
> The main problem is that there is no feedback from the analysts
> to the business experts or from the developers to the analysts.


### Modelling the domain {#modelling-the-domain}

> A better approach is to closely relate domain modeling and
> design. The model should be constructed with an eye open to the
> software and design considerations. Developers should be
> included in the modeling process. The main idea is to choose a
> model which can be appropriately expressed in software, so that
> the design process is straightforward and based on the model.
> Tightly relating the code to an underlying model gives the code
> meaning and makes the model relevant.
>
> Those who write the code should know the model very well, and
> should feel responsible for its integrity. They should realize that
> a change to the code implies a change to the model; otherwise
> they will refactor the code to the point where it no longer
> expresses the original model. If the analyst is separated from the
> implementation process, he will soon lose his concern about the
> limitations introduced by development. The result is a model
> which is not practical.
>
> Any technical person contributing to the model must spend some
> time touching the code, whatever primary role he or she plays on
> the project. Anyone responsible for changing code must learn to
> express a model through the code. Every developer must be
> involved in some level of discussion about the model and have
> contact with domain experts. Those who contribute in different
> ways must consciously engage those who touch the code in a
> dynamic exchange of model ideas through the Ubiquitous
> Language.


### Modules and cohesion {#modules-and-cohesion}

> Another reason for using modules is related to code quality. It is widely accepted that
> software code should have a high level of cohesion and a low level of coupling. While
> cohesion starts at the class and method level, it can be applied at module level. It is
> recommended to group highly related classes into modules to provide maximum cohesion
> possible. There are several types of cohesion. Two of the most used are communicational
> cohesion and functional cohesion. Communicational cohesion is achieved when parts of the
> module operate on the same data. It makes sense to group them, because there is a strong
> relationship between them. The functional cohesion is achieved when all parts of the
> module work together to perform a well-defined task. This is considered the best type of
> cohesion.


### Aggregates {#aggregates}

> Terefore, use Aggregates. An Aggregate is a group of
> associated objects which are considered as one unit with regard
> to data changes. The Aggregate is demarcated by a boundary
> which separates the objects inside from those outside. Each
> Aggregate has one root. The root is an Entity, and it is the only
> object accessible from outside. The root can hold references to
> any of the aggregate objects, and the other objects can hold
> references to each other, but an outside object can hold
> references only to the root object. If there are other Entities
> inside the boundary, the identity of those entities is local,
> making sense only inside the aggregate.
>
> How is the Aggregate ensuring data integrity and enforcing the
> invariants? Since other objects can hold references only to the
> root, it means that they cannot directly change the other objects
> in the aggregate. All they can do is to change the root, or ask the
> root to perform some actions. And the root will be able to
> change the other objects, but that is an operation contained
> inside the aggregate, and it is controllable. If the root is deleted
> and removed from memory, all the other objects from the
> aggregate will be deleted too, because there is no other object
> holding reference to any of them. When any change is done to
> the root which indirectly affects the other objects in the


### Factories {#factories}

> Therefore, a new concept is necessary to be introduced, one that
> help to encapsulate the process of complex object creation. This
> is called Factory. Factories are used to encapsulate the
> knowledge necessary for object creation, and they are especially
> useful to create Aggregates. When the root of the Aggregate is
> created, all the objects contained by the Aggregate are created
> along with it, and all the invariants are enforced


### Repositories {#repositories}

-   [ ] TODO why it's a bad idea to combine infrastructure code with domain model


### Bounded contexts {#bounded-contexts}

> The main idea is to define the scope of a model, to draw up the
> boundaries of its context, then do the most possible to keep the
> model unified. It is hard to keep a model pure when it spans the
> entire enterprise project, but it is much easier when it is limited
> to a specified area. Explicitly define the context within which a
> model applies. Explicitly set boundaries in terms of team
> organization, usage within specific parts of the application, and
> physical manifestations such as code bases and database
> schemas. Keep the model strictly consistent within these bounds,
> but don’t be distracted or confused by issues outside.


#### Continuous Integration {#continuous-integration}

> ctionality.
> A model is not fully defined from the beginning. It is created,
> then it evolves continuously based on new insight in the domain
> and feedback from the development process. That means that
> new concepts may enter the model, and new elements are added
> to the code. All these need are to be integrated into one unified
> model, and implemented accordingly in code. That’s why
> Continuous Integration is a necessary process within a Bounded
> Context. We need a process of integration to make sure that all
> the new elements which are added fit harmoniously into the rest
> of the model, and are implemented correctly in code. We need to
> have a procedure used to merge the code. The sooner we merge
> the code the better. For a single small team, daily merges are
> recommended. We also need to have a build process in place.
> The merged code needs to be automatically built so it can be
> tested. Another necessary requirement is to perform automated
> tests. If the team has a test tool, and has created a test suite, the
> test can be run upon each build, and any errors are signaled. The
> code can be easily changed to fix the reported errors, because
> they are caught early, and the merge, build, and test process is
> started again.
> Continuous Integration is based on integration of concepts in the
> model, then finding its way into the implementation where it is
> tested. Any inconsistency of the model can be spotted in the


### Context maps {#context-maps}

> An enterprise application has multiple models, and each model
> has its own Bounded Context. It is advisable to use the context
> as the basis for team organization. People in the same team can
> communicate more easily, and they can do a better job
> integrating the model and the implementation. While every team
> works on its model, it is good for everyone to have an idea of the
> overall picture. A Context Map is a document which outlines the
> different Bounded Contexts and the relationships between them.
> A Context Map can be a diagram like the one below, or it can be
> any written document. The level of detail may vary. What it is
> important is that everyone working on the project shares and
> understands it.


#### <span class="org-todo todo TODO">TODO</span> Shared Kernel {#shared-kernel}


#### <span class="org-todo todo TODO">TODO</span> Customer-Suppler {#customer-suppler}


#### <span class="org-todo todo TODO">TODO</span> Conformist {#conformist}


#### <span class="org-todo todo TODO">TODO</span> Anticorruption Layer {#anticorruption-layer}


#### <span class="org-todo todo TODO">TODO</span> Separate Ways {#separate-ways}


#### <span class="org-todo todo TODO">TODO</span> Open Host Service {#open-host-service}
