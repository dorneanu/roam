+++
title = "Software Testing"
draft = false
+++

-   Benefits
    -   unit tests keep code flexible, maintainable and reusable
    -   without tests every change feels like a possible bug
    -   no matter how flexible your architecture/design is, without tests it's hard to make changes because of the fear that bugs will be introduced into the code

        > The problem with testing code is that you have to isolate that code. It is often difficult to test a function if that function calls other functions. To write that test you've got to figure out some way to decouple the function from all the others. In other words, the need to test first forces you to think about good design.

-   tests follow [Dependency Inversion Principle]({{< relref "solid.md#dependency-inversion-principle" >}})
    -   they are detailed and concrete
    -   and always depend inward toward the code being tested
    -   in fact it is the outermost circle in the
-   Rules how to write tests
    -   [F.I.R.S.T.]({{< relref "f.i.r.s.t..md" >}})
-   Types
    -
    -
    -
-   [TDD]({{< relref "tdd.md" >}})
-


## Unit tests {#unit-tests}


### Documentation {#documentation}

-   The AAA pattern
    -   _Arrange_
    -   _Act_
    -   _Assert_
    -   2022-09-08 ◦ [Making Better Unit Tests: part 1, the AAA pattern - Manning](https://freecontent.manning.com/making-better-unit-tests-part-1-the-aaa-pattern/)
