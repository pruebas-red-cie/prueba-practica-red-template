# 📋 Instrucciones Detalladas

Esta guía te llevará paso a paso por todo el proceso de la prueba de familiarización.

---

## 📥 Paso 1: Clonar el Repositorio

Después de aceptar el assignment, GitHub creará una copia del repositorio para ti. Ahora debes clonarlo a tu computadora.

### Opción A: Usando la terminal

```bash
# Copia la URL de tu repositorio desde GitHub (botón verde "Code")
git clone https://github.com/TU-USUARIO/TU-REPOSITORIO.git

# Entra a la carpeta del proyecto
cd TU-REPOSITORIO
```

### Opción B: Usando VS Code

1. Abre VS Code
2. Presiona `Ctrl+Shift+P` (Windows/Linux) o `Cmd+Shift+P` (Mac)
3. Escribe "Git: Clone" y selecciona esa opción
4. Pega la URL de tu repositorio
5. Selecciona una carpeta donde guardarlo

---

## ✅ Paso 2: Verificar tu Ambiente

Abre una terminal en la carpeta del proyecto y ejecuta estos comandos:

```bash
# Verificar Python
python --version
# Debe mostrar Python 3.9 o superior

# Verificar Node.js
node --version
# Debe mostrar v18 o superior

# Verificar npm
npm --version
```

Si alguno de estos comandos falla, revisa la sección de [Requisitos Técnicos en el README](README.md#-requisitos-técnicos).

---

## ✏️ Paso 3: Completar los Ejercicios

### Ejercicio Python (`ejercicio/completar.py`)

Abre el archivo y encontrarás una función `saludar` que debes completar:

```python
def saludar(nombre):
    # TODO: Implementa esta función
    # Debe retornar: "¡Hola, {nombre}! Bienvenido/a a la prueba."
    pass  # <- Reemplaza esto con tu código
```

**Solución esperada:**
```python
def saludar(nombre):
    return f"¡Hola, {nombre}! Bienvenido/a a la prueba."
```

Para probar localmente:
```bash
python ejercicio/completar.py
```

### Ejercicio JavaScript (`ejercicio/completar.js`)

Abre el archivo y encontrarás dos funciones que debes completar:

```javascript
function sumar(a, b) {
    // TODO: Retorna la suma de a + b
    return null;  // <- Reemplaza esto
}

function esPar(numero) {
    // TODO: Retorna true si el número es par, false si es impar
    return null;  // <- Reemplaza esto
}
```

**Solución esperada:**
```javascript
function sumar(a, b) {
    return a + b;
}

function esPar(numero) {
    return numero % 2 === 0;
}
```

Para probar localmente:
```bash
node ejercicio/completar.js
```

---

## 💾 Paso 4: Hacer Commit de tus Cambios

Después de completar los ejercicios, guarda tus cambios en Git:

```bash
# Ver qué archivos has modificado
git status

# Agregar todos los archivos modificados
git add .

# Crear un commit con un mensaje descriptivo
git commit -m "Completé los ejercicios de Python y JavaScript"
```

### Si es tu primera vez usando Git

Es posible que Git te pida configurar tu nombre y email:

```bash
git config --global user.name "Tu Nombre"
git config --global user.email "tu@email.com"
```

---

## 🚀 Paso 5: Hacer Push

Envía tus cambios al repositorio en GitHub:

```bash
git push origin main
```

O simplemente:
```bash
git push
```

---

## 👀 Paso 6: Ver Resultados en Actions

1. Ve a tu repositorio en GitHub (en el navegador)
2. Haz clic en la pestaña **"Actions"** (está junto a "Pull requests")
3. Verás un workflow en ejecución (círculo amarillo) o completado (✅ verde o ❌ rojo)
4. Haz clic en el workflow para ver los detalles
5. Revisa cada job:
   - **verificar-python**: Resultados de los tests de Python
   - **verificar-javascript**: Resultados de los tests de JavaScript
   - **resultado-final**: Resumen general

### ¿Qué significan los iconos?

| Icono | Significado |
|-------|-------------|
| 🟡 | En ejecución... |
| ✅ | Todos los tests pasaron |
| ❌ | Hay tests que fallaron |

---

## 📊 Comparación: Práctica vs Prueba Real

| Aspecto | Práctica | Prueba Real |
|---------|----------|-------------|
| ⏰ Tiempo | Sin límite | 90 minutos |
| 📝 Ejercicios | 2 triviales | ~5 de complejidad variable |
| 💯 Puntaje | No tiene | 100 puntos |
| 🔄 Intentos | Ilimitados | Un solo intento |
| 📚 Lenguajes | Python y JavaScript | Fullstack (Python/JS + frameworks) |

---

## ❓ Preguntas Frecuentes

### ❌ "No puedo hacer push"

**Error:** `Permission denied` o `Authentication failed`

**Solución:**
1. Asegúrate de haber aceptado el assignment en GitHub Classroom
2. Verifica que estás usando la URL correcta del repositorio
3. Si usas HTTPS, configura un Personal Access Token:
   - Ve a GitHub → Settings → Developer settings → Personal access tokens
   - Genera un token con permisos de `repo`
   - Usa el token como contraseña al hacer push

### ❌ "El workflow falla pero mi código está bien"

**Posibles causas:**
1. Verifica que no hay errores de sintaxis en tu código
2. Asegúrate de que la función retorna exactamente lo esperado
3. Revisa los logs del workflow en la pestaña Actions para ver el error específico

### ❌ "No veo la pestaña Actions"

**Solución:**
1. Asegúrate de que estás en tu repositorio (el que tiene tu nombre de usuario)
2. Si acabas de hacer push, espera unos segundos y recarga la página
3. La pestaña Actions debería aparecer automáticamente después del primer push

### ❌ "Mi código funciona localmente pero falla en Actions"

**Posibles causas:**
1. Diferencia de versiones de Python/Node.js
2. Caracteres especiales o encoding diferente
3. Revisa que los nombres de archivos y funciones sean exactos

---

## 🎉 ¡Listo!

Si llegaste hasta aquí y tus tests pasan, ¡felicidades! Ya estás preparado/a para la prueba técnica real.

**Recuerda para la prueba real:**
- ⏰ Tendrás exactamente **90 minutos**
- 💯 La prueba vale **100 puntos**
- 🔄 Solo tienes **un intento**
- 📝 Lee bien cada ejercicio antes de empezar a programar
- 💾 Haz commits frecuentes para no perder tu progreso

**¡Mucho éxito! 🚀**
