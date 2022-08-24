+++
title = "Dijkstra's rules of structured programming"
draft = false
+++

-   **Structured programming imposes discipline on direct transfer of control.**
-   every function, every block within a function, should have one entry and one exit.
-   therefore there should be only one return statement in a function, no break or continue statements in a loop, and never, ever, any goto statements
-   Dijkstra showed that the use of unrestrained jumps (goto statements) is harmful to program structure.
    -   he replaced those jumps with the more familiar if/then/else and do/while/until constructs.