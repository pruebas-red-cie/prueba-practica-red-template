/**
 * 📦 Ejercicio de JavaScript - Prueba de Familiarización
 * =======================================================
 * 
 * Tu tarea es completar las funciones sumar() y esPar() que aparecen abajo.
 * 
 * Función sumar(a, b):
 * - Debe retornar la suma de a + b
 * - Ejemplo: sumar(2, 3) → 5
 * 
 * Función esPar(numero):
 * - Debe retornar true si el número es par
 * - Debe retornar false si el número es impar
 * - Ejemplo: esPar(4) → true
 * - Ejemplo: esPar(7) → false
 */


/**
 * Retorna la suma de dos números.
 * @param {number} a - Primer número
 * @param {number} b - Segundo número
 * @returns {number} La suma de a + b
 */
function sumar(a, b) {
    // TODO: Implementa esta función
    // Reemplaza 'return null' con tu código
    return null;
}


/**
 * Determina si un número es par.
 * @param {number} numero - El número a verificar
 * @returns {boolean} true si es par, false si es impar
 */
function esPar(numero) {
    // TODO: Implementa esta función
    // Reemplaza 'return null' con tu código
    // Hint: Usa el operador módulo (%) para verificar si es divisible por 2
    return null;
}


// Exportar funciones para los tests
module.exports = { sumar, esPar };


// ============================================
// Código de verificación - NO MODIFICAR
// Ejecuta: node ejercicio/completar.js
// ============================================
if (require.main === module) {
    console.log("🧪 Probando las funciones...\n");
    
    let todosLosTestsPasaron = true;
    
    // Tests para sumar()
    console.log("--- Función sumar() ---");
    
    const resultado1 = sumar(2, 3);
    if (resultado1 === 5) {
        console.log("✅ Test 1 PASÓ: sumar(2, 3) = 5");
    } else {
        console.log(`❌ Test 1 FALLÓ: sumar(2, 3)`);
        console.log(`   Esperado: 5`);
        console.log(`   Obtenido: ${resultado1}`);
        todosLosTestsPasaron = false;
    }
    
    const resultado2 = sumar(-1, 1);
    if (resultado2 === 0) {
        console.log("✅ Test 2 PASÓ: sumar(-1, 1) = 0");
    } else {
        console.log(`❌ Test 2 FALLÓ: sumar(-1, 1)`);
        console.log(`   Esperado: 0`);
        console.log(`   Obtenido: ${resultado2}`);
        todosLosTestsPasaron = false;
    }
    
    // Tests para esPar()
    console.log("\n--- Función esPar() ---");
    
    const resultado3 = esPar(4);
    if (resultado3 === true) {
        console.log("✅ Test 3 PASÓ: esPar(4) = true");
    } else {
        console.log(`❌ Test 3 FALLÓ: esPar(4)`);
        console.log(`   Esperado: true`);
        console.log(`   Obtenido: ${resultado3}`);
        todosLosTestsPasaron = false;
    }
    
    const resultado4 = esPar(7);
    if (resultado4 === false) {
        console.log("✅ Test 4 PASÓ: esPar(7) = false");
    } else {
        console.log(`❌ Test 4 FALLÓ: esPar(7)`);
        console.log(`   Esperado: false`);
        console.log(`   Obtenido: ${resultado4}`);
        todosLosTestsPasaron = false;
    }
    
    console.log("\n" + "=".repeat(50));
    if (todosLosTestsPasaron) {
        console.log("🎉 ¡Todos los tests pasaron! Tus funciones están correctas.");
    } else {
        console.log("💡 Revisa tu implementación y vuelve a intentar.");
    }
}
