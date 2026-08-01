/* ============================================================
   DATOS DEL SITIO — Nuevo Oriente Supermercados
   ------------------------------------------------------------
   Este es el ÚNICO archivo que hay que tocar para actualizar
   promociones, precios, sucursales o categorías.
   No hace falta saber programar: solo respetar las comillas "
   y las comas , entre cada dato. Guardá el archivo y refrescá
   la página para ver los cambios.
   ============================================================ */

const DATOS = {

  // ---- Datos generales del negocio ----
  negocio: {
    nombre: "Nuevo Oriente Supermercados",
    telefonoWsp1: "5493853143920",   // formato para WhatsApp: cod. país + área + número, sin 0 ni 15
    telefonoWsp2: "5493853143921",
    telefonoTexto: "385 314-3920 / 314-3921",
    email: "centrosrl@gmail.com",
    instagram: "https://www.instagram.com/nuevooriente.sgo",
    facebook: "#"
  },

  // ---- Carrusel de imágenes (arriba de todo, deslizante) ----
  // Poné tus imágenes reales dentro de la carpeta assets/slider/
  // (podés usar tus flyers/banners de Instagram tal cual).
  // "texto" es opcional: un cartelito que aparece abajo de la imagen. Dejalo "" si no querés texto.
  // Para agregar o sacar imágenes, sumá o borrá bloques { } dentro de los corchetes [ ].
  slides: [
    { imagen: "assets/slider/slide-1.jpg", alt: "Súper Ofertas: Harina, Puré de tomate y Polenta", texto: "" },
    { imagen: "assets/slider/slide-2.jpg", alt: "Promoción 2", texto: "" },
    { imagen: "assets/slider/slide-3.jpg", alt: "Promoción 3", texto: "" }
  ],

  // ---- Medios de pago (se muestran como chips en la sección de promos) ----
  mediosDePago: [
    { plan: "Plan Z", detalle: "4 cuotas sin interés" },
    { plan: "Tarjeta Naranja", detalle: "1 y 4 cuotas sin interés" },
    { plan: "Sucrédito Única", detalle: "3 cuotas sin interés" }
  ],

  // ---- Sucursales ----
  // Agregá o quitá objetos { } dentro de los corchetes [ ] para sumar/restar sucursales.
  sucursales: [
    {
      nombre: "Sucursal Centro",
      direccion: "Avellaneda 271, Santiago del Estero",
      telefono: "385 314-3920",
      horario: "Lun a vie 8:00–13:30 y 17:30–21:30 · Sáb 8:30–13:30"
    },
    {
      nombre: "Sucursal Av. Belgrano",
      direccion: "Av. Belgrano (S) 3196 (esq. Hernandarias), Santiago del Estero",
      telefono: "385 314-3921",
      horario: "Lun a vie 8:00–13:30 y 17:30–21:30 · Sáb 8:30–13:30 · Dom 8:30–13:30"
    }
  ],

  // ---- Promociones ----
  // "precioAntes" es opcional: si no hay descuento previo, dejalo en 0 y no se muestra tachado.
  // PLACEHOLDER: reemplazar por productos y precios reales.
  promociones: [
    {
      categoria: "Almacén",
      producto: "Harina Favorita 000 1kg",
      precioAntes: 0,
      precioAhora: 1200,
      vigencia: "Súper ofertas"
    },
    {
      categoria: "Almacén",
      producto: "Puré de tomate Noel 530gr",
      precioAntes: 0,
      precioAhora: 1000,
      vigencia: "Súper ofertas"
    },
    {
      categoria: "Almacén",
      producto: "Polenta Española 500gr",
      precioAntes: 0,
      precioAhora: 800,
      vigencia: "Súper ofertas"
    }
  ],

  // ---- Categorías del catálogo ----
  // "link" podés apuntarlo a una página, PDF o catálogo online cuando lo tengan.
  categorias: [
    { emoji: "🧃", nombre: "Almacén", desc: "Fideos, arroz, aceites, conservas y más.", link: "#" },
    { emoji: "🥬", nombre: "Verdulería", desc: "Fruta y verdura fresca todos los días.", link: "#" },
    { emoji: "🥩", nombre: "Carnicería", desc: "Cortes vacunos, pollo y cerdo.", link: "#" },
    { emoji: "🧴", nombre: "Limpieza", desc: "Todo para la casa, de la cocina al baño.", link: "#" },
    { emoji: "🧼", nombre: "Perfumería", desc: "Cuidado personal e higiene diaria.", link: "#" },
    { emoji: "🥤", nombre: "Bebidas", desc: "Gaseosas, jugos, aguas y cervezas.", link: "#" }
  ]
};
