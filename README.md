# Galería Neon React Puro

Una galería de imágenes interactiva hecha con **React puro** (sin frameworks como Create React App ni herramientas externas), con efectos *neón*, navegación en modal y fondo adaptable a cualquier pantalla.

---

🖼️ Vista previa

![Gallery_Neon](preview.gif)

--- 

✨ Pruebalo Online

[Galería_Neon](https://jcduro.bexartideas.com/proyectos/gallery_react/index.html)

--- 

## 🚀 Características

- **React sin frameworks** – Cargado con CDN, ideal para aprender y experimentar.
- Galería horizontal con imágenes miniatura.
- **Modal ampliado** al hacer clic en una imagen.
- **Navegación con flechas** dentro del modal (adelante/atrás).
- Efectos visuales *neón* en las imágenes y botones.
- **Fondo completamente adaptable**, fácil de personalizar.
- Estructura 100% personalizable.

## 📁 Estructura del Proyecto

    
```
/tu-proyecto
│
├── img/
│ ├── 01.jpg
│ ├── 02.jpg
│ └── ... # Tus imágenes
│
├── app.js # Código principal de React (JSX)
├── index.html # HTML base
├── style.css # Estilos neon y responsivos
└── README.md # Este archivo
  ```

## 📦 Instalación y Uso

1. **Clona o descarga** este repositorio.

    ```
    git clone https://github.com/tuusuario/tu-repo-galeria-neon.git
    cd tu-repo-galeria-neon
    ```

2. Coloca tus **imágenes** en la carpeta `/img`.

3. Cambia la ruta del **fondo** en `style.css`:

    ```
    body {
      background: url('img/mi-fondo.jpg') no-repeat center center fixed;
      background-size: cover;
      min-height: 100vh;
    }
    ```

4. Abre `index.html` en tu navegador… ¡y listo!

## 🛠️ Personalización

- Cambia las imágenes editando el array en `app.js`:
    ```
    const imagenes = [
      'img/01.jpg',
      'img/02.jpg',
      // ...
    ];
    ```
- Personaliza el fondo editando la ruta en el CSS.
- Modifica los colores neon en `style.css` según tu estilo.


---

📊 Lenguajes y Herramientas

[![My Skills](https://skillicons.dev/icons?i=html,css,react,github,vscode,windows,&theme=light&perline=8)](https://skillicons.dev)

---


## 🌈 Créditos y Licencia

- Imágenes de ejemplo: [Unsplash](https://unsplash.com/) (utiliza tus propias imágenes para producción).
- Proyecto educativo con fines de aprendizaje.
- Licencia: MIT

---

## ✨ Captura / Demo

Agrega capturas de cómo se ve la galería o un GIF animado para lucir los efectos.

---

## 🤖 ¿Preguntas/Sugerencias?

Abre un issue o haz un fork para mejorar la galería.

---

**¡Disfruta creando galerías modernas solo con React puro y mucho CSS neon!**



