# Quantum Mechanics

## Fundamentals
### Bra Ket Notation
#### Definition 0.0: Hilbert Space
A Hilbert space $\\mathcal{H}$ is an inner product space over the real or complex field that is also a complete metric space. For the metric we consider the distance induced by the inner product.

#### Definition 0.1: Quantum State Space
Let $\\mathcal{H}$ be a seperable complex Hilbert space and $A$ be a hermetian operator on $\\mathcal{H}$. From theorem 0.2 we know that $A$ has an eigenbasis, if these eigen-vectors represent the distinct states that our quantum system could be in then we say $\\mathcal{H}$ is a quantum state space. We call elements of this state space state vectors and write them as a ket $\\ket{\alpha}$.

Naturally, we can say that any arbitrary state vector $\\ket{\alpha}$ is a superposition of an eigenbasis that spans our quantum state space, 
$\\ket{\alpha} = \sum C_n \\ket{\alpha}$. This of course means that for a given system, we have multiple operators $A$ that are hermetian, we call these observables. For each of these observables we can expand our state and transform between them.

We'll assume from now on, unless otherwise noted that $\mathcal{H}$ refers not just to any Hilbert space but a quantum state space.

#### Theorem 0.2: All Hermetian Operators Have an Eigenbasis
Let $A$ be a hermetian operator.

#### Definition 0.3: Dual Space and Bras
A dual space on $\\mathcal{H}$ is the set of linear functionals from $\\mathcal{H} \rightarrow \\mathbb{C}$ denoted as $\\mathcal{H^{\ast}}=(\\mathcal{H},\mathbb{C})$. From theorem 0.4 $dim \\mathcal{H} = dim \\mathcal{H^{\ast}}$ and if we fix a particular eigenbasas of $\\mathcal{H}$ then there exists a unique dual basis such that there is an isomorphism between the basis vectors. If $\\mathcal{H}$ is infinite dimensional, then we have the weaker condition that there exists a subspace of the dual which is isomorphic to $\\mathcal{H}$. We refer to elements of the dual space as bras and denote them $\\bra{\alpha}$.

#### Theroem 0.4: Dimension of a Dual Space is the Dimension of the Original Space

#### Theorem 0.5: Isomorphic Subspace of an Space Dual to an Infinite Dimeninsional Vector Space

#### Postulate 0.6: Reality Strikes
First we define the mysterious inner product $\\braket{\alpha | \beta}$, it's just the application of $\\ket{\beta}$ to the linear functional $\\bra{\alpha}$ which is just an element of the field $\mathbb{C}$. Physically, we're projecting $\\ket{\beta}$ onto $\\ket{\alpha}$,.

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
