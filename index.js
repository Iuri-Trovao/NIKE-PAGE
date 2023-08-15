function verificarTamanhoDaTela() {
    const larguraTela = window.innerWidth;
  
    if (larguraTela <= 584) {
      const elemento = document.getElementById('img-iconnike');
      elemento.style.display = 'none'; // Oculta o elemento
    } else {
      const elemento = document.getElementById('img-iconnike');
      elemento.style.display = 'block'; // Exibe o elemento
    }
  }
  verificarTamanhoDaTela();
  window.addEventListener('resize', verificarTamanhoDaTela);