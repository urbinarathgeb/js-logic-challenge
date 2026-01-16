# 🤝 Guía de Contribución

El objetivo de este repositorio es practicar nuestra lógica de programación y aprender de las soluciones de los demás.

Para mantener el orden y que todos podamos colaborar, sigue estos pasos:

## 🛠️ Guía paso a paso para participar

Sigue estas instrucciones para configurar tu entorno y enviar tus soluciones correctamente:

## Preparación del Repositorio

Antes de empezar, debes tener una copia del proyecto en tu cuenta de GitHub y en tu pc.

### 1. Haz un Fork

Haz clic en el botón `Fork` en la parte superior derecha de este repositorio para copiarlo a tu cuenta de GitHub.

### 2. Clona tu repositorio

Copia la URL de tu fork y clónalo en tu equipo:

```bash
git clone https://github.com/TU_USUARIO/js-logic-challenge.git
```

> Chequea que `TU_USUARIO` sea tu nombre de usuario de GitHub

Una vez clonado, entra a la carpeta del proyecto:

```bash
cd js-logic-challenge
```

### 3. Crear una rama específica para el ejercicio (Branches)

Nunca trabajes directamente sobre la rama main. Antes de escribir código, crea una rama específica para el ejercicio que vas a resolver. Esto es una buena práctica profesional.

- **Crea y cambia de rama:**

  ```bash
  git switch -c solucion/reto-XX-nombreApellido
  ```

  > El comando -c crea la rama. Cambia XX por el número del reto y nombreApellido por tu nombre y apellido.

### 4. Resuelve el ejercicio

1. Ve a la carpeta del ejercicio correspondiente, por ejemplo: `challenges/01-par-o-impar/`.
2. Entra a la carpeta `solutions/`.
3. Crea un archivo nuevo siguiendo esta nomenclatura: `nombreApellido_solution.js`.

   > Ejemplo: `pedroPascal_solution.js`

4. Copia el contenido de `template.js` en tu nuevo archivo.
5. Escribe tu código y asegúrate de que funcione correctamente.

### 5. Guarda y sube tus cambios

Cuando termines, guarda los cambios y súbelos a tu repositorio en GitHub siguiendo estos tres comandos:

1. **Prepara el archivo:**

   ```bash
   git add .
   ```

2. **Realiza el commit:**

   ```bash
   git commit -m "Solución de [Tu Nombre] para el reto XX"
   ```

3. **Sube los cambios a GitHub:**

   ```bash
   git push origin solucion/reto-XX-nombreApellido
   ```

### 6. Crea un Pull Request (PR)

Finalmente, para que tu solución sea integrada al repositorio principal:

1. Entra al "repositorio original" en GitHub (desde donde creaste con el Fork).

2. Aparecerá un recuadro amarillo indicando que subiste una rama reciente. Haz clic en el botón `Compare & pull request`.

3. Escribe un breve comentario sobre cómo resolvió el reto y dale a "Create pull request".

### 7. ¿Cómo continuar con otro reto?

Una vez que hayas enviado tu PR, **no necesitas fusionar (merge) nada localmente**. El `merge` se hará en el repositorio original cuando se revise tu solución.

Para comenzar el siguiente ejercicio:

1. **Vuelve a la rama principal (`main`):**

   ```bash
   git switch main
   ```

   > ⚠️ Es muy importante que siempre partas desde `main` limpia para evitar mezclar soluciones de diferentes retos.

2. **Crea una nueva rama para el nuevo reto:**
   Repite el paso 3 con el nuevo nombre:

   ```bash
   git switch -c solucion/reto-02-nombreApellido
   ```

3. **¡Resuelve y repite!**

---

## ⚠️ Reglas de convivencia

- **Nombres de archivos:** Usa siempre el formato `nombreApellido_solution.js` dentro de la carpeta `solutions`.
- **Comentarios:** Si tu código es complejo, añade comentarios explicando tu lógica. ¡Ayuda a otros a entender tu pensamiento!
- **Respeta el trabajo ajeno:** No modifiques ni borres los archivos de otros compañeros.
- **Se amable:** Si comentas en el Pull Request de alguien más, hazlo de forma constructiva.

¡Estamos aquí para aprender juntos!
