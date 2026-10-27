# Integración numérica

Página web estática en español para explicar y resolver los nueve ejercicios de la guía de Métodos Numéricos. Incluye trapecio compuesto, Simpson 1/3, Simpson 3/8, Simpson combinado, tabla de pesos, gráfico y matriz de resultados.

## Uso local

Abre `index.html` en un navegador moderno. No requiere instalar paquetes ni ejecutar un servidor.

- Elige uno de los ejercicios para cargar sus datos de ejemplo.
- Puedes editar las parejas `x` y `f(x)`, o cambiar la función, los límites y `n`.
- Selecciona un método; la página valida el espaciamiento y las condiciones de `n`.
- El ejercicio 26 requiere ingresar las anchuras medidas, porque la guía no proporciona una tabla común.
- En el ejercicio 27 puedes cambiar entre volumen y superficie simplificada.
- Usa «Cargar prueba x²» para probar la integral de 0 a 2 con resultado exacto `8/3`.

Las funciones escritas por el usuario aceptan `x`, `pi`, `e`, las operaciones `+ - * / ^`, paréntesis y `sin`, `cos`, `tan`, `sinh`, `cosh`, `sqrt`, `exp`, `ln`, `log` y `abs`.

## Publicar en GitHub

El repositorio remoto previsto es `https://github.com/ADDIEF/metodos-todos.git`.

1. Abre PowerShell en la carpeta del proyecto.
2. Inicializa Git y configura el remoto:

   ```powershell
   git init
   git add index.html app.js styles.css README.md informe-tecnico.md
   git commit -m "Crear calculadora de integración numérica"
   git branch -M main
   git remote add origin https://github.com/ADDIEF/metodos-todos.git
   git push -u origin main
   ```

3. En GitHub, abre **Settings → Pages**, elige **Deploy from a branch**, selecciona `main` y la carpeta `/ (root)`, y guarda.
4. GitHub Pages publicará la página en `https://addief.github.io/metodos-todos/` después de completar la primera publicación.

Si Git informa que `origin` ya existe, comprueba con `git remote -v`; si apunta a otra dirección, actualízalo con:

```powershell
git remote set-url origin https://github.com/ADDIEF/metodos-todos.git
```

## Contenido

- `index.html`: interfaz y estructura de la página.
- `styles.css`: estilos adaptables a pantallas pequeñas.
- `app.js`: ejercicios, parser de funciones, validaciones y algoritmos de integración.
- `informe-tecnico.md`: informe breve con modelos, resultados, limitaciones y conclusiones.
