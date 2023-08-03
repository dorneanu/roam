+++
title = "Concurrency in Python"
draft = false
+++

-   <https://pymotw.com/2/threading/>
-   <https://www.pythonforthelab.com/blog/starting-and-synchronizing-threads/>


## Shared resources {#shared-resources}

> Python's built-in data structures (lists, dictionaries, etc.) are thread-safe as a side-effect of having atomic byte-codes for manipulating them (the GIL is not released in the middle of an update). Other data structures implemented in Python, or simpler types like integers and floats, don't have that protection. To guard against simultaneous access to an object, use a Lock object. ([source](https://pymotw.com/2/threading/)

otherwise:

-   use `Locks`
