"""
Tests para el ejercicio de Python
Ejecutar con: pytest tests/test_python.py -v
"""
import sys
import os

# Agregar el directorio ejercicio al path para importar el módulo
sys.path.insert(0, os.path.join(os.path.dirname(__file__), '..', 'ejercicio'))

from completar import saludar


class TestSaludar:
    """Tests para la función saludar()"""
    
    def test_saludar_nombre_simple(self):
        """Verifica el saludo con un nombre simple"""
        resultado = saludar("María")
        esperado = "¡Hola, María! Bienvenido/a a la prueba."
        assert resultado == esperado, f"Esperado: {esperado}, Obtenido: {resultado}"
    
    def test_saludar_otro_nombre(self):
        """Verifica el saludo con otro nombre"""
        resultado = saludar("Juan")
        esperado = "¡Hola, Juan! Bienvenido/a a la prueba."
        assert resultado == esperado, f"Esperado: {esperado}, Obtenido: {resultado}"
    
    def test_saludar_nombre_compuesto(self):
        """Verifica el saludo con un nombre compuesto"""
        resultado = saludar("Ana María")
        esperado = "¡Hola, Ana María! Bienvenido/a a la prueba."
        assert resultado == esperado, f"Esperado: {esperado}, Obtenido: {resultado}"
    
    def test_saludar_retorna_string(self):
        """Verifica que la función retorna un string"""
        resultado = saludar("Test")
        assert isinstance(resultado, str), f"La función debe retornar un string, retornó: {type(resultado)}"
