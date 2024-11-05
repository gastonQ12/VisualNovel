function partida() {
  // OBTENIENDO VIDA Y MANA DEL JUGADOR Y DEL ENEMIGO
  const vida_enemigo = $('#vida-enemigo');
  const vida_jugador = $('#vida-jugador');
  const mana_jugador = $('#mana-jugador');
  // OBTENIENDO BOTONES DE ACCIONES
  const botonAtaque = $('#atacar');
  const botonDefensa = $('#defender');
  const botonCura = $('#curar');
  const botonCambiarArma = $('#cambiar-arma');

  var paginaAnterior = new URL(document.referrer).pathname;

  // OBJETO ENEMIGO
  const enemigo = Object.seal({
    vida: 200,
    enemigoMana: 10,
    puñoMana: 3,
  });
  // OBJETO JUGADOR
  const jugador = Object.seal({
    vida: 100,
    Mana: 10,
    curaciones: 3,
    armaActual: 'garrote',
    mana_acciones: {
      garrote: 3,
      pistola: 5,
      cambiarArma: 4,
      curacion: 2,
    },
  });
  // GUARDANDO LAS ESTADISTICAS DE LA PARTIDA
  const datos_partida = Object.seal({
    jugador:{
      dañoRecibio: 0,
      dañoHecho: 0,
      ataquesAcertados: 0,
      
    },
    enemigo:{
      
    }
  });

  // FUNCION PARA ACTUALIZAR EL MANA Y CIRCULOS
  const actualizarMana = () => {
    mana_jugador.text(`Maná: ${jugador.Mana}`);
    const circulosMana = $('#mana-circles-container');
    circulosMana.empty();
    for (let i = 0; i < 10; i++) {
      const circulo = $('<div></div>').addClass('mana-circle');
      if (i >= jugador.Mana) {
        circulo.addClass('empty');
      }
      circulosMana.append(circulo);
    }
  };
  // EVENTOS DE LOS BOTONES CON FUNCIONES
  botonAtaque.on('click', () => {
    if (jugador.armaActual === 'garrote') {
      if (jugador.Mana >= jugador.mana_acciones.garrote) {
        jugador.Mana -= jugador.mana_acciones.garrote;
        actualizarMana();
        const probabilidadFallida = Math.random();
        if (probabilidadFallida > 0.8) {
          mostrarMensaje('¡Fallaste el ataque con el garrote!');
        } else {
          const daño = 10;
          enemigo.vida -= daño;
          vida_enemigo.text(`${enemigo.vida} HP`);
          mostrarMensaje(`Atacaste al enemigo con el garrote por ${daño} HP.`);
          
        }
        actualizar_vida()
      } else {
        mostrarMensaje('No tienes suficiente maná para usar el garrote.');
        jugador.Mana = 0;
      }
    } else if (jugador.armaActual === 'pistola') {
      if (jugador.Mana >= jugador.mana_acciones.pistola) {
        jugador.Mana -= jugador.mana_acciones.pistola;
        actualizarMana();
        const probabilidadFallida = Math.random();
        if (probabilidadFallida > 0.45) {
          mostrarMensaje('¡Fallaste el disparo con la pistola!');
        } else {
          const daño = Math.floor(Math.random() * 16) + 20; // Daño entre 20-35
          enemigo.vida -= daño;
          vida_enemigo.text(`${enemigo.vida} HP`);
          mostrarMensaje(`Atacaste al enemigo con la pistola por ${daño} HP.`);
          
        }
      } else {
        mostrarMensaje('No tienes suficiente maná para usar la pistola.');
        jugador.Mana = 0;
      }
      
    }

    if (jugador.Mana <= 0) {
      setTimeout(() => {
        enemigoAtaca();
        verificarVictoria();
      }, 1000);
    }
    
  });
  botonDefensa.on('click', () => {
    jugador.Mana = 10;
    actualizarMana();
    mostrarMensaje('Te has defendido y tu maná se ha restablecido.');

    const ataque_enemigo = Math.floor(Math.random() * 10) + 2;
    jugador.vida -= ataque_enemigo;
    vida_jugador.text(`${jugador.vida} HP`);
    mostrarMensaje(`Recibiste ${ataque_enemigo} HP de daño al defenderte.`);
    verificarVictoria();
    actualizar_vida();
  });
  botonCura.on('click', () => {
    if (jugador.curaciones > 0 && jugador.vida < 100) {
      if (jugador.Mana >= jugador.mana_acciones.curacion) {
        jugador.Mana -= jugador.mana_acciones.curacion;
        actualizarMana();
        
        const cantCuracion = Math.floor(Math.random() * 20) + 10;
        jugador.vida += cantCuracion;
        if (jugador.vida > 100){
          jugador.vida = 100;
        }
        vida_jugador.text(`${jugador.vida} HP`);
        actualizar_vida();
        jugador.curaciones--;
        mostrarMensaje(`Te has curado por ${cantCuracion} HP. Curaciones restantes: ${jugador.curaciones}.`);
        
      } else {
        mostrarMensaje('No tienes suficiente maná para curarte.');
        return;
      }
      // actualizar_vida();
    } else if (jugador.curaciones === 0) {
      mostrarMensaje('No te quedan más curaciones.');
      return;
    } else {
      mostrarMensaje('Ya tienes la salud completa.');
      
    }
    
    verificarVictoria();

  });
  botonCambiarArma.on('click', () => {
    if (jugador.Mana >= jugador.mana_acciones.cambiarArma) {
      jugador.Mana -= jugador.mana_acciones.cambiarArma;
      actualizarMana();
      jugador.armaActual = jugador.armaActual === 'garrote' ? 'pistola' : 'garrote';
      mostrarMensaje(`Has cambiado a ${jugador.armaActual}. Maná restante: ${jugador.Mana}.`);
    } else {
      mostrarMensaje('No tienes suficiente maná para cambiar de arma.');
    }
    actualizar_arma();
  });
  // LLAMAR A LA FUNCIÓN actualizarMana AL INICIAR
  function enemigoAtaca() {
    let ataquesRealizados = 0;

    function realizarAtaque() {
      if (enemigo.enemigoMana >= enemigo.puñoMana && jugador.vida > 0) {
        enemigo.enemigoMana -= enemigo.puñoMana;
        const probabilidadFallida = Math.random();
        if (probabilidadFallida > 0.75) {
          mostrarMensaje('¡El enemigo falló el ataque con el puño!');
        } else {
          const ataque_enemigo = 12;
          jugador.vida -= ataque_enemigo;
          vida_jugador.text(`${jugador.vida} HP`);
          mostrarMensaje(`El enemigo te ha atacado con su puño por ${ataque_enemigo} HP.`);
        }
        ataquesRealizados++;
        if (jugador.vida <= 0) {
          verificarVictoria();
          return;
        }
        setTimeout(realizarAtaque, 1000);
      } else {
        mostrarMensaje(`El enemigo realizó ${ataquesRealizados} ataques.`);
        enemigo.enemigoMana = 10;
        mostrarMensaje('El enemigo ha recuperado su maná.');
        jugador.Mana = 10;
        actualizarMana();
        verificarVictoria();
      }
      actualizar_vida();
    }
    
    realizarAtaque();
  }
  function mostrarMensaje(message) {
    const mensajes = $('#mensajes');
    const mensaje_P = $('<p></p>').text(message);
    mensajes.append(mensaje_P);
    mensajes.scrollTop(mensajes[0].scrollHeight);
  }
  function verificarVictoria() {
    if (enemigo.vida <= 0) {
      localStorage.setItem("GanadorPelea", "true");
      mostrarMensaje('¡Has ganado!');
      disableButtons();

      //remplacen la ruta de regreso a la historia aca
      setTimeout(() => {
        location.href = "../clubEdgard/index.html";
    }, 3000);

    } else if (jugador.vida <= 0) {
      mostrarMensaje('¡Te ha derrotado el enemigo!');
      disableButtons();
      setTimeout(() => {
        location.href = "../muerteREMASTER/Morir.html";
    }, 3000);
    }
  }
  function disableButtons() {
    botonAtaque.prop('disabled', true);
    botonDefensa.prop('disabled', true);
    botonCura.prop('disabled', true);
    botonCambiarArma.prop('disabled', true);
  }
  function actualizar_arma() {
    if (jugador.armaActual === 'garrote') {
      botonAtaque.css('background-image', "url('img/garrote-img.svg')");
    } else {
      botonAtaque.css('background-image', "url('img/pistola-img.png')");
    }
  }
  // BARRA DE VIDA
  function actualizar_vida() {
    if(jugador.vida < 100 || enemigo.vida < 200){
      const PorcenVidaJug = $('#barra-vida');
      const PorcenVidaEnem = $('#barra-vida-enemigo');
      PorcenVidaJug.css('width', `${jugador.vida}%`);
      PorcenVidaEnem.css('width', `${enemigo.vida-(enemigo.vida/2)}%`);
      console.log(enemigo.vida-(enemigo.vida/2));
    }
  }
  
  actualizar_arma();
  actualizarMana();
  
}
partida();