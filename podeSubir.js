function podeSubir(altura, acompanhada) {
  if (altura < 200 && altura >= 140) {
    console.log("pode subir");
  } else if (altura < 140 && altura >= 120 && acompanhada == true) {
    console.log("pode subir com acompanhante");
  } else {
    console.log("não podera subir");
  }
}

// podeSubir(altura em cm, true ou false)
podeSubir(210, true);
podeSubir(180, true);
podeSubir(130, true);
podeSubir(130, false);
podeSubir(110, true);
