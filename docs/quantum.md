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

Special thanks to the following people for indulging many hours of questions

- Trevor Reutershan
- Mealaud Mokhtarzad
- Michael Seggebruch
  
## Fundamentals

Linear algebra is to quantum mechanics as multi-variable calculus is to the study of electrodynamics. There are a lot of unintuitive results and postulates that follow directly from examining the underlying structure. Consider the following statements: it is a postulate that $\\Braket{\alpha | \beta} = \\Braket{\beta | \alpha}^{\ast}$, every self-adjoint operator forms an eigen-basis which spans $\\mathcal{H}$, the map between position and momentum is the Fourier transform. The first statement is not a postulate but a corallary of Reiz's Representation theorem, the second statement is not true for degenerate or continuous spectrums, and the third statement can be derived from first principle; unfortunately, these are all statements from commonly used under-graduate and graduate quantum mechanics textbooks. My goal with these notes is to work through Sakuari's book, section by section, in enough detail to grasp from first principle undergraduate quantum mechanics.

This is the order of topics

- Probabilities and Hilbert spaces
- Kets, dual spaces, bras, and operators
- Eigen-functions and why a Hilbert space is insufficient
- The Gel'fand triple and Nuclear Spaces

We begin with a probability distribution and it's associated normalization condition

conservation of probability -> continuity equation

continuity equation -> Born representation -> Hilbert space

Hilbert space -> dual space -> operators and spectral theorem

spectral theorem -> degenerate and continuous spectra

degenerate and continuous spectra -> Gel'fand triple

Gel'fand triple -> Riesz Theorem

Riesz Theorem -> canonical commutation relations and the Fourier kernel

Examples
