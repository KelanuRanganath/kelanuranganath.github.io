# Quantum Mechanics

## Fundamentals
### Bra Ket Notation
#### Definition 0.0: Hilbert Space
A Hilbert space $\\mathcal{H}$ is an inner product space over the real or complex field that is also a complete metric space. For the metric we consider the distance induced by the inner product.

#### Definition 0.1: Quantum State Space
Let $\\mathcal{H}$ be a seperable complex Hilbert space and $A$ be a hermetian operator on $\\mathcal{H}$. From theorem 0.2 we know that $A$ has an eigenbasis, if these eigen-vectors represent the distinct states that our quantum system could be in then we say $\\mathcal{H}$ is a quantum state space. We call elements of this state space state vectors and write them as a ket $\\ket{\alpha}$.

Naturally, we can say that any arbitrary state vector $\\ket{\alpha}$ is a superposition of an eigenbasis that spans our quantum state space, 
$\\ket{\alpha} = \sum C_n \\ket{\alpha}$. This of course means that for a given system, we have multiple operators $A$ that are hermetian, we call these observables. For each of these observables we can expand our state and transform between them.

We'll assume from now on, unless otherwise noted that $\mathcal{H}$ refers not just to any Hilbert space but a finite-dimensional quantum state space.

#### Theorem 0.2: Hermetian Operators
Hermetian operators have an eigenbasis.
Let $A$ be a hermetian operator.
The eigenvalues are real.

#### Definition 0.3: Dual Space and Bras
A dual space on $\\mathcal{H}$ is the set of linear functionals from $\\mathcal{H} \rightarrow \\mathbb{C}$ denoted as $\\mathcal{H^{\ast}}=(\\mathcal{H},\mathbb{C})$. From theorem 0.4 $dim \\mathcal{H} = dim \\mathcal{H^{\ast}}$ and if we fix a particular eigenbasas of $\\mathcal{H}$ then there exists a unique dual basis such that there is an isomorphism between the basis vectors. If $\\mathcal{H}$ is infinite dimensional, then we have the weaker condition that there exists a subspace of the dual which is isomorphic to $\\mathcal{H}$. We refer to elements of the dual space as bras and denote them $\\bra{\alpha}$.

For a finite dimensional state space there is a unique bra $\\bra{\alpha}$ for each ket $\ket{\alpha}$ such that $\\braket{\alpha | \alpha} = 1$

$$\\bra{\beta} = \sum \\braket{\beta|\alpha_n}\\bra{\alpha_n}$$

$$\\ket{\alpha} = \sum \\braket{\beta_n|\alpha}\\ket{\alpha_n}$$

$$\\ket{\alpha} = \sum \\braket{\alpha_n | \alpha}\\ket{\alpha_n}$$

th

#### Theroem 0.4: Dimension of a Dual Space is the Dimension of the Original Space

#### Theorem 0.5: Isomorphic Subspace of an Space Dual to an Infinite Dimeninsional Vector Space

#### Definition 0.6: Operations on Bras and Kets
First we define the inner product $\\braket{\alpha | \beta}$, it's just the application of $\\ket{\beta}$ to the linear functional $\\bra{\alpha}$ which is just an element of the field $\mathbb{C}$. Physically, we're projecting $\\ket{\beta}$ onto $\\ket{\alpha}$, we postulate that $\\braket{\alpha | \beta} = $. The outer product $\\ket{\alpha}\\bra{\beta}$ is an operator by associativity on both the state space and it's dual, $\\bra{\psi}(\\ket{\alpha}\\bra{\beta})\\ket{\phi}=c\\braket{\beta | \phi} = c'\\braket{\psi | \alpha}$.

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
