<script type="text/javascript" async
  src="https://cdnjs.cloudflare.com/ajax/libs/mathjax/2.7.7/MathJax.js?config=TeX-MML-AM_CHTML">
</script>
<script type="text/javascript" src="path-to-your-mathjax-config.js"></script>

# Quantum Mechanics

## Fundamentals
### Bra Ket Notation
#### Definition 0.0: Hilbert Space
A Hilbert space $\\mathcal{H}$ is an inner product space over the real or complex field that is also a complete metric space. For the metric we consider the distance induced by the inner product.

#### Definition 0.1: Quantum State Space
Let $\\mathcal{H}$ be a seperable complex Hilbert space and $A$ be a hermetian operator on $\\mathcal{H}$. From theorem 0.2 we know that $A$ has an eigenbasis, if these eigen-vectors represent the distinct states that our quantum system could be in then we say $\\mathcal{H}$ is a quantum state space. We call elements of this state space state vectors and write them as a ket $\\ket{\alpha}$.

Naturally, we can say that any arbitrary state vector $\\ket{\alpha}$ is a superposition of an eigenbasis that spans our quantum state space, $\\ket{\alpha} = \sum C_n \\ket{\alpha_n}$. This of course means that for a given system, we have multiple operators $A$ that are hermetian, we call these observables. For each of these observables we can expand our state and transform between them.

#### Theorem 0.2: All Hermetian Operators Have an Eigenbasis
Let $A$ be a hermetian operator.
