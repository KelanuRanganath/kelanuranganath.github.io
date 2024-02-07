# Quantum Mechanics
Sources:

- *Quantum Mechanics, A Modern Development* by Leslie E Ballentine
- *Modern Quantum Mechanics* by J.J. Sakuari
- *Introduction to Quantum Mechanics* by David J. Griffiths
- *Principles of Quantum Mechanics* by R. Shankar
## Fundamentals
### Bra Ket Notation
#### Hilbert Space
A Hilbert space $\\mathcal{H}$ is an inner product space over the real or complex field that is also a complete metric space. For the metric we consider the distance induced by the inner product.

#### Quantum State Space and Kets
Let $\\mathcal{H}$ be a seperable complex Hilbert space. Iff the Hilbert space is spanned by a set of vectors which represent our possible system states then we say $\\mathcal{H}$ is a quantum state space. We call elements of this state space state vectors and write them as a ket $\\ket{\alpha}$. The dimension of a state space is countable and not necessarily finite; for example the spin of a silver atom has only two possible options but there are an infinite number of discrete energy levels for a particle in an infinite well.

As a reminder, all kets are a superposition of base-kets.

$$\\ket{\alpha} = \sum c_n \\ket{\alpha_n}$$

#### Dual Space and Bras
A dual space on $\\mathcal{H}$ is the set of linear functionals from $\\mathcal{H} \rightarrow \\mathbb{C}$ denoted as $\\mathcal{H^{\ast}}=(\\mathcal{H},\mathbb{C})$. We refer to elements of the dual space as bras and denote them $\\bra{\alpha}$.

#### Riesz's Representation Theorem and Inner Products
For every continuous $\\bra{\psi}$, there exists a unique $\\ket{\psi}$ such that the inner product $\\bra{\psi}(\\ket{\psi})=\\braket{\psi | \psi}$ is antilinear in it's first argument and linear in it's second argument.

The canonical map from $\Omega: \\mathcal{H} \rightarrow \\mathcal{H^{\ast}$ simply sends $\\ket{\alpha} \rightarrow \\bra{\alpha}$

#### Outer Products
The outer product $\\ket{\alpha}\\bra{\beta}$ is an operator on the state space and a scalar on the dual, $\\bra{\psi}(\\ket{\alpha}\\bra{\beta})\\ket{\phi}=c\\braket{\beta | \phi} = c'\\braket{\psi | \alpha}$.

#### Eigen-kets
Suppose $A$ is a Hermetian operator on

#### Continuous Spectra and Rigged Hilbert Spaces

From theorem 0.4 $dim \\mathcal{H} = dim \\mathcal{H^{\ast}}$ and if we fix a particular eigenbasas of $\\mathcal{H}$ then there exists a unique dual basis such that there is an isomorphism between the basis vectors. If $\\mathcal{H}$ is infinite dimensional, then we have the weaker condition that there exists a subspace of the dual which is isomorphic to $\\mathcal{H}$.

For a finite dimensional state space there is a unique bra $\\bra{\alpha}$ for each ket $\ket{\alpha}$ such that $\\braket{\alpha | \alpha} = 1$

$$\\bra{\beta} = \sum \\braket{\beta|\alpha_n}\\bra{\alpha_n}$$

$$\\ket{\alpha} = \sum \\braket{\alpha_n | \alpha}\\ket{\alpha_n}$$

th



### Base Kets

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
