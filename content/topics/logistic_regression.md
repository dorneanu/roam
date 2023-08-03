+++
title = "Logistic Regression"
draft = false
+++

## Disadvantages {#disadvantages}

-   it is vulnerable to


## Model {#model}

We want:

\\[ 0 \leqslant h\_\theta x \leqslant 1 \\]

We have following hypothesis function:

\\[ h\_\theta(x) = g(\theta^Tx) \\]

And the sigmoid/logistic function:

\\[ g(z) = \frac{1}{1 + e^{-z}} \\]

Therefore we have:

\\[ h\_\theta(x) = \frac{1}{1 + e^{-\theta^Tx}} \\]


## Interpretation {#interpretation}

\\[h\_\theta(x) = \\] estimated probability that y = 1 on input x. That means:

\\[ h\_\theta(x) = P(y = 1 | x; \theta) \\]

(probability that y = 1, given x, parametrized by \\[\theta\\])


## Decision boundary {#decision-boundary}

Suppose:

\\[ h\_\theta(x) = g(\theta\_0 + \theta\_1x\_1 + \theta\_2x\_2) \\]

let's take: \\[\theta\_0 = -3, \theta\_1 = 1, \theta\_2 = 1\\]

Predict y = 1 if \\[ -3 + x\_1 + x\_2 \geqslant 0 \\]

that is: \\[ x\_1 + x\_2 \geqslant 3 \\]

**and** predict y = 0 if

\\[ x\_1 -+ x\_2 < 3 \\]

Examples:

<Logistic%20Regression%20-%20Decision%20Boundary>

Non-linear decision boundaries: ![](Logistic%20Regression%20-%20Non-linear%20decision%20boundaries.png)


## Cost function {#cost-function}

$$ Cost(h_&theta;(x), y) = \\\\ a) -log(h_&theta;(x)) if y = 1 \\\\ b) -log(1 - h_&theta;(x)) if y = 0

$$

even **better** (instead of having 2 lines):

\\[ Cost(h\_\theta(x), y) = -y\*log(h\_\theta(x))-(1-y)l\*og(1-h\_\theta(x)) \\]

Therefore the **logistic regression cost function** is:

\\[ \begin{array}{lll} J(\theta) &=& \frac{1}{m}\sum\_{i=1}^{m}Cost(h\_\theta(x^i), y^i)\\\ &=& -\frac{1}{m}[\sum\_{i=1}^{m}y^i log(h\_\theta(x^i))+(1-y^i)log(1-h\_\theta(x^i))] \end{array} \\]


### Gradient descent {#gradient-descent}

\\[ J(\theta)=-\frac{1}{m}[\sum\_{i=1}^{m}y^i log(h\_\theta(x^i))+(1-y^i)log(1-h\_\theta(x^i))] \\]

Want \\[min\_\theta J(\theta)\\]:

\\[ \begin{array}{lll} \text{Repeat and update simultaneously all } \theta\_j:\\\\\\ \theta\_j &:=& \theta\_j - \alpha\frac{\alpha}{\alpha\theta\_j}J(\theta)\\\ &:=& \theta\_j -\alpha\frac{1}{m}\sum\_{i=1}^{m}(h\_\theta(x^i))-y^i)x\_j^i\\\ &:=& \theta\_j -\alpha\sum\_{i=1}^{m}(h\_\theta(x^i))-y^i)x\_j^i\\\ \end{array} \\]

Algorithm looks identical to . But still there is a difference: The definition of \\[h\_\theta(x)\\]:

-   linear regression: \\[h\_\theta(x) = \theta^T x\\]
-   logistic regression: \\[h\_\theta(x) = \frac{1}{1 + e^{-\theta^Tx}}\\]


## Good articles {#good-articles}

-   [https://medium.com/[cite/t:@anishsingh20/logistic-regression-in-python-423c8d32838b](https://medium.com/@anishsingh20/logistic-regression-in-python-423c8d32838b)]
-   <https://www.datacamp.com/community/tutorials/understanding-logistic-regression-python>
