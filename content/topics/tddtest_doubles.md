+++
title = "TDD/Test doubles"
draft = false
+++

-   Test doubles
    -   Traditionally, there are five types of **test doubles**:
        -   Dummies: Types without any behavior at all, provided only because the signature of the unit under test requires them.
        -   Stubs: Types implementing the minimum amount of behavior to satisfy a test.
        -   Mocks: Partial implementations for which you can define expectations on how their methods will be called.
        -   Spies: Partial implementations on which you can assert that specific methods have been called.
        -   **Fakes**: Full, lightweight implementations such as in-memory databases.