# Quantum Mechanics
Notes on undergraduate QM at UCLA

QM textbook sources in order of frequency referenced

- *Quantum Mechanics, A Modern Development* by Leslie E Ballentine
- *Modern Quantum Mechanics* by J.J. Sakuari
- *Introduction to Quantum Mechanics* by David J. Griffiths

Other sources referenced
- [*Generalized Functions* by Gel'fand and Vilenkin](https://ia802306.us.archive.org/33/items/gelfand-vilenkin-generalized-functions-vol-4-applications-of-harmonic-analysis/Gelfand%2C%20Vilenkin%20-%20Generalized%20Functions%20-%20Vol%204%20-%20Applications%20of%20Harmonic%20Analysis.pdf)
- [*Linear Algebra* by Hoffman and Kunze](https://www.math.pku.edu.cn/teachers/anjp/textbook.pdf)
- [Delta Distribution in $S^{\ast}$](https://math.stackexchange.com/questions/2569773/existence-of-the-dirac-%CE%B4-function-defined-as-a-distribution)
- [What's the point of defining our inner product on the dual?](https://physics.stackexchange.com/questions/694929/what-is-the-point-in-using-dual-spaces-for-quantum-mechanics)
- [Dual of infinite dimensional vector spaces](https://math.stackexchange.com/questions/35779/what-can-be-said-about-the-dual-space-of-an-infinite-dimensional-real-vector-spa)


Special thanks to the following people for indulging many hours of questions

- Trevor Reutershan
- Mealaud Mokhtarzad
- Michael Seggebruch
  
## Fundamentals
### Quick Thoughts
- You can't represent an exact state in the Ket space, it has to be represented as a Delta distribution, which only exists in the dual of a Schwarz space (proof?)
- You can construct the Schwarz space as a subspace of a Hilbert space with extra structure, this is where rigged Hilbert spaces comes from
- Riez's theorem only gives you an existence of a canonical isomorphism between a subspace of the dual of the Hilbert space (the space of bounded linear functionals), but the Fourier transform and the commutation relations gize you a constructive map???
- Does the subspace considered in Riez's theorem (bounded functionals) match the dual space of the Schwarz subspace???
- If we begin with the commutation relation, it seems like it's possible to naturally generate Rigged Hilbert Spaces, as well as the spectral theorem.
- The spectral theorem, gives a result for the outer product of bras and kets

### Bra Ket Notation

#### Hilbert Space
A Hilbert space $\\mathcal{H}$ is an inner product space over the real or complex field that is also a complete metric space. For the metric we consider the distance induced by the inner product.

#### Quantum State Space and Kets
Let $\\mathcal{H}$ be a seperable complex Hilbert space. Iff the Hilbert space is spanned by a set of vectors which represent our possible system states then we say $\\mathcal{H}$ is a quantum state space. We call elements of this state space state vectors and write them as a ket $\\ket{\alpha}$. The dimension of a state space is countable and not necessarily finite; for example the spin of a silver atom in the Stern Gerlach experiment has only two distinct states but there are an infinite number of discrete energy levels for a particle in an infinite well.

As a reminder, all kets are a superposition of base-kets.

$$\\ket{\alpha} = \sum c_n \\ket{\alpha_n}$$

#### Eigen-kets


#### Dual Space and Bras
A dual space on $\\mathcal{H}$ is the set of linear functionals from $\\mathcal{H} \rightarrow \\mathbb{C}$ denoted as $\\mathcal{H^{\ast}}=(\\mathcal{H},\mathbb{C})$. We refer to elements of the dual space as bras and denote them $\\bra{\alpha}$.

#### Outer Products and Self-Adjoint Operators
The outer product $\\ket{\alpha}\\bra{\beta}$ is an operator on the state space and a scalar on the dual, $\\bra{\psi}(\\ket{\alpha}\\bra{\beta})\\ket{\phi}=c\\braket{\beta | \phi} = c'\\braket{\psi | \alpha}$.

#### Generalized Spectral Theorem and Rigged Hilbert Spaces

#### Riesz's Representation Theorem and Inner Products
For every continuous $\\bra{\psi}$, there exists a unique $\\ket{\psi}$ such that the inner product $\\bra{\psi}(\\ket{\psi})=\\braket{\psi | \psi}$ is antilinear in it's first argument and linear in it's second argument.

### Measurements

### Change of Basis

### Position, Momentum, and Translation

### Wave Functions

## Quantum Dynamics
### Time-Evolution and the SE
### SE vs. Heisenberg
### Harmonic Oscillator
### Schrodinger's Wave Equation
### Eementary Solutions to Schrodinger's Equation
### Propagators and Feynman Path Integrals
### Potentials and Gauge Transformations
## Theory of Angular Momentum
### Rotations and Angular-Momentum Commutation Relations
