/**
 * Tests para el ejercicio de JavaScript
 * Ejecutar con: npm test
 */

const { sumar, esPar } = require('../ejercicio/completar');

describe('Función sumar', () => {
    test('suma dos números positivos correctamente', () => {
        expect(sumar(2, 3)).toBe(5);
    });

    test('suma con cero retorna el otro número', () => {
        expect(sumar(5, 0)).toBe(5);
        expect(sumar(0, 7)).toBe(7);
    });

    test('suma dos números negativos correctamente', () => {
        expect(sumar(-2, -3)).toBe(-5);
    });

    test('suma un número positivo y uno negativo correctamente', () => {
        expect(sumar(10, -3)).toBe(7);
        expect(sumar(-5, 8)).toBe(3);
    });
});

describe('Función esPar', () => {
    test('4 es un número par', () => {
        expect(esPar(4)).toBe(true);
    });

    test('7 es un número impar', () => {
        expect(esPar(7)).toBe(false);
    });

    test('0 es un número par', () => {
        expect(esPar(0)).toBe(true);
    });

    test('un número negativo par retorna true', () => {
        expect(esPar(-6)).toBe(true);
    });

    test('un número negativo impar retorna false', () => {
        expect(esPar(-3)).toBe(false);
    });
});
