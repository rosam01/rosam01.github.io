window.MathJax = {
  tex: {
    inlineMath: [["\\(", "\\)"], ["$", "$"]],
    displayMath: [["\\[", "\\]"], ["$$", "$$"]],
    processEscapes: true,
    processEnvironments: true
  },
  options: {
    // This allows MathJax to look everywhere, 
    // but specifically targets Arithmatex blocks.
    ignoreHtmlClass: "tex2jax_ignore",
    processHtmlClass: "arithmatex|tex2jax_process"
  }
};