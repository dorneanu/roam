+++
title = "MapReduce"
draft = false
+++

-   from Google
-   **Map** (C) -&gt; [(kx, vy)]: This extracts information from a record and generates key-value tuples.
-   **Reduce** (k, [vx,vy...[]) -&gt; (k,vagg): The reducer takes the key-value tuples generated in the map phase, grouped by the key, and generates an aggregate result.