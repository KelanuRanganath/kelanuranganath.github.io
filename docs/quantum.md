# Quantum Mechanics
Notes on undergraduate QM at UCLA

Textbook sources in order of frequency referenced

- *Quantum Mechanics, A Modern Development* by Leslie E Ballentine
- *Modern Quantum Mechanics* by J.J. Sakuari
- *Introduction to Quantum Mechanics* by David J. Griffiths
- *Quantum Theory: A Hilbert Space Formalism for Probability Theory* by R. E. Collins

Other sources referenced
- [Delta Distribution](https://math.stackexchange.com/questions/2569773/existence-of-the-dirac-%CE%B4-function-defined-as-a-distribution)
- [What's the point of defining our inner product on the dual?](https://physics.stackexchange.com/questions/694929/what-is-the-point-in-using-dual-spaces-for-quantum-mechanics)
- [Dual of infinite dimensional vector spaces](https://math.stackexchange.com/questions/35779/what-can-be-said-about-the-dual-space-of-an-infinite-dimensional-real-vector-spa)
- [Momentum Fourier Transform](https://physics.stackexchange.com/questions/39442/intuitive-explanation-of-why-momentum-is-the-fourier-transform-variable-of-posit)
- [The Role of Rigged Hilbert Spaces](https://arxiv.org/pdf/quant-ph/0502053.pdf)
- [Groups, Special Functions, and Rigged Hilbert Spaces]
- [The Spectral Representation of Normal Operators on a Rigged Hilbert Space]

Special thanks to the following people for indulging many hours of questions

- Trevor Reutershan
- Mealaud Mokhtarzad
- Michael Seggebruch
  
The following proof is nearly directly from *The Spectral Representation of Normal Operators on a Rigged Hilbert Space* by G. Gould. I'm writing it out to add my own notation and exposition and to go with the rest of my quantum notes. We start by defining some terms regarding topological vector spaces.

#### Definition: Topological Vector Spaces (Rudin)
A topological space is a set $S$ with a collection of subsets (open sets) called a topology $\tau$ wich has the following properties
- $S \in \tau$ is open
- $\emptyset \in \tau$ is open
- for all $x,y \in \tau$ the intesection $x \cap y \in \tau$ is open
- the union of all subsets $\bigcup_{x_n \in \tau} x_n \in \tau$ is open

If $S$ is a vector space with a topology $\tau$, then $\tau$ is a vector topology on $S$. $S$ is a topological vector space if
- every point of $S$ is a closed set
- the vector space operations are continuous with respect to $\tau$

#### Definiton: Locally Convex Vector Spaces
A locally convex vector space is a vector space $V$ and a family of seminorms $\\mathcal{P}$ on $V$.

A seminorm on $V$ is a map $p:V \rightarrow \\mathbb{R}$, such that for all $x,y\in V$
- $p(x) \geq 0$
- $p(sx) = |s|p(x)$ for all $s \in \\mathbb{R}$
- $p(x+y) \leq p(x) + p(y)$

The family of seminorms induces the initial topology by requiring the family of seminorms to be continuous. This topology doesn't induce continuous vector operations and thus $v$ is not a topological vector space.

Consider the relation $x \sim y$ iff $p(x-y) = 0$ for some fixed seminorm in $V$. This is an eq. relation
- $p(x - x) = p(x + -x) = p(0) = |0|p(0) = 0$
- $p(x-y) = p(-1(y-x)) = |-1|p(y-x) = p(y-x)$
- suppose $p(x-y) = p(y-z) = 0$, then $p(x-y + y - z) \leq p(x-y) + p(y-z)$, which simplifies to $0 \leq p(x-z) \leq 0$, thus $x \sim z$

So we can partition $V$ by it's seminorms, forming quotient spaces, formally refered to as $V/ ker(p) = V_p$. Each of these quotient spaces admits a norm defined by it's respective seminorm.

The special feature of a locally convex vector space is that is that using only a family of seminorms we can approximate a normed space by creating a norm from our seminorms.

##### Postulate: There is a metric induced by the family of seminorms
$$d(x,y) = \sum_n 2^{-n}\frac{p_n(x-y)}{1+p(x-y}$$

First we'll prove convergence, consider the sequence $\sum_n 2^{-n}$, this is a geometric series which converges to $2(1-\frac{1}{2}^{j+1})$ or $2$, where $j$ is the cardinality of $\\mathcal{P}$ if finite. Since $\frac{p_n(x-y)}{1+p(x-y} < 1$ for all $n$ it our original sequence is strictly larger term by term, so our smaller sum also convergences.

- $d(x,x)$
- $x \neq y \implies d(x,y)>0$
- $d(x,y) = d(y,x)$
- $d(x,z) \leq d(x,y) + d(y,z)$

We can take the completion of a locally convex vector space $V$ with respect to this new metric induced by $\\mathcal{P}$. This new complete locally convex vector space is called a Frechet space; here's the catch, Banach and more importantly Hilbart spaces are Frechet spaces and the operators we define on our Hilbert space will only be defined on a locally convex subset.

##### Frechet Lifting Lemma
We postulate that if $\chi: E_p \rightarrow E_q$ is the canonical map between quotient spaces, we can lift $\hat{\chi}: \hat{E_p} \rightarrow \hat{E_q}$, such that $\chi$ is the unique continuous extension of $\chi$.

##### Aside: Completeness
A complete metric space just says that all Cauchy sequences converge within the space.

#### Definition: Nuclear Mapping
A mapping $T: E \rightarrow F$ is nuclear if
- $E$ is locally convex on the field $\\mathbb{K}$
- $F$ is a Frechet space on the field $\\mathbb{K}$
- $T = \sum_n \lambda_n f_n \otimes y_n$
  - $\lambda_n \in \\mathbb{R}_{\geq 0}$
  - $\sum \lambda_n < \infty$
  - $f_n \in E^{\ast}$, $f_n$ is a sequence of functionals in the dual of $E$, $E^{\ast}$
  - $y_n \in F$, $y_n$ is a bounded sequence in $F$
  - $f_n \otimes y_n:E \rightarrow F$ is defined elementwise by $g_{f_n,y_n}(x) = f_n(x)y_n$ which is a scaled vector of the Frechet space.

A nuclear mapping and the following theorems give us maps between our approximate normed locally convex space and it's associated complete Frechet space. As motivation, we'll see

#### Definition: Nuclear Space
A locally convex space E is nuclear if for all $p \in \\mathcal{P}$ there exists a $q \in \\mathcal{P}$ where $q > p$, such that the map $\hat{E}_q \rightarrow \hat{E}_p$ is nuclear.

#### Theorem
A locally convex space $E$ is nuclear iff every continuous linear map from $E$ into any Banach space is nuclear.

"The proof of this standard result..." bro what no one has heard of a nuclear space until now.

