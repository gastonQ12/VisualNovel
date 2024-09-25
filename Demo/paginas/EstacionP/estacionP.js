        function arrayListSospechosos() {

            var pistaBasura = false;
            var pistaDialogo = false;
            var pistaTaxi = false;
            var pistaRadio = false;
            var pistaCadaver = false;

            const EdgardM = [
                pistaBasura, pistaDialogo
            ];

            localStorage.setItem('EdgardM', JSON.stringify(EdgardM));
        }

        var urlAnterior = new URL(window.location);
        var rutaAnterior = urlAnterior.pathname;

        localStorage.removeItem('ub');
        localStorage.setItem('ub', rutaAnterior);

        var arrayConvertido = localStorage.getItem('EdgardM');
        arrayConvertido = JSON.parse(arrayConvertido);

        console.log(arrayConvertido);


        function apagarSonido(event) {
            const toggleMusicButton = document.getElementById('callar');
            const musica = document.getElementById('musicaA');
            toggleMusicButton.addEventListener('click', () => {
                if (musica.paused) {
                    musica.play();
                } else {
                    musica.pause();
                }
            });
        }

        function getCookie(cname) {
            var name = cname + "=";
            var ca = document.cookie.split(';');
            for (var i = 0; i < ca.length; i++) {
                var c = ca[i];
                while (c.charAt(0) == ' ') c = c.substring(1);
                if (c.indexOf(name) == 0) return unescape(c.substring(name.length, c.length));

            }
            return "";
        }

        function crearCookies(aux) {
            document.cookie = "progresoDialogo=" + aux;
        }

        function cargadoPistas(aux) {
            var pistas = document.getElementById("pistas");
            var boxD = document.getElementById('cuadroDialogo');
            var pj1 = document.getElementById("derecha");
            var pj2 = document.getElementById("izquierda");

            var contador = 0;

            pistaBasura.addEventListener("click", encontrarPistaBasurero);
            taxi.addEventListener("click", encontrarPistaTaxi);
            cuerpo.addEventListener("click", encontrarPistaCadaver);
            radio.addEventListener("click", encontrarPistaRadio);

            if (aux == 30) {
                SaltarPistas.style.display = 'block';
                pj1.style.display = 'none';
                pj2.style.display = 'none';
                boxD.style.display = 'none';
                pistas.style.display = 'block';
                document.cookie = "boxD=" + 'none';

                document.cookie = "estadoPJs=" + 'none';
                document.cookie = "estadoNPCs=" + 'none';
                document.cookie = "boxD=" + 'none';
                document.cookie = "pistas=" + 'block';

                var basureroC = null;
                var taxiC = null;
                var cadaverC = null;
                var radioC = null;

                var basureroC = null;
                var taxiC = null;
                var cadaverC = null;
                var radioC = null;

                pistaBasura.addEventListener("click", function () {
                    basureroC = getCookie("opacidadPBasurero");
                    if (basureroC == "100%" && cadaverC == "100%" && radioC == "100%" && taxiC == "100%") {
                        recargoPag();
                    }
                });

                taxi.addEventListener("click", function () {
                    taxiC = getCookie("opacidadPTaxi");
                    if (basureroC == "100%" && cadaverC == "100%" && radioC == "100%" && taxiC == "100%") {
                        recargoPag();
                    }
                });

                cuerpo.addEventListener("click", function () {
                    cadaverC = getCookie("opacidadPCadaver");
                    if (basureroC == "100%" && cadaverC == "100%" && radioC == "100%" && taxiC == "100%") {
                        recargoPag();
                    }
                });

                radio.addEventListener("click", function () {
                    radioC = getCookie("opacidadPRadio");
                    if (basureroC == "100%" && cadaverC == "100%" && radioC == "100%" && taxiC == "100%") {
                        recargoPag();
                    }
                });

                function recargoPag() {
                    setTimeout(() => {
                        document.location.reload();
                    }, 1000);
                    aux += 2;
                    document.cookie = "progresoDialogo=" + aux;
                }


                SaltarPistas.addEventListener("click", function () {
                    setTimeout(() => {
                        document.location.reload();
                    }, "1000");
                    aux = aux + 1;
                    document.cookie = "progresoDialogo=" + aux;

                });


            } else {
                pistas.style.display = 'none';
            }
        }


            const pagina = document.querySelectorAll('.pagina');
            let numeroPagina = 0;
            function mostrarPagina(index) {
                pagina.forEach((pagina) => {
                    pagina.classList.remove('active');
                })
                pagina[index].classList.add('active');
            }
            
            function cambioPaginaT(event) {
                if (event.key === 'ArrowRight') {
                    numeroPagina = (numeroPagina + 1) % pagina.length;
                    mostrarPagina(numeroPagina);
                } else if (event.key === 'ArrowLeft') {
                    numeroPagina = (numeroPagina - 1 + pagina.length) % pagina.length;
                    mostrarPagina(numeroPagina);
                }
            }
            document.addEventListener('keydown', cambioPaginaT);
        
