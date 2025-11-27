"""
🐍 Ejercicio de Python - Prueba de Familiarización
===================================================

Tu tarea es completar la función saludar() que aparece abajo.

La función debe:
- Recibir un parámetro 'nombre' (string)
- Retornar un saludo con el formato: "¡Hola, {nombre}! Bienvenido/a a la prueba."

Ejemplo:
- saludar("María") → "¡Hola, María! Bienvenido/a a la prueba."
- saludar("Juan")  → "¡Hola, Juan! Bienvenido/a a la prueba."
"""


def saludar(nombre):
    """
    Retorna un saludo personalizado para el nombre dado.
    
    Args:
        nombre (str): El nombre de la persona a saludar
        
    Returns:
        str: Un saludo con el formato "¡Hola, {nombre}! Bienvenido/a a la prueba."
    """
    # TODO: Implementa esta función
    # Reemplaza 'pass' con tu código
    # Hint: Usa f-strings para formatear el string de salida
    pass


# ============================================
# Código de verificación - NO MODIFICAR
# Ejecuta: python ejercicio/completar.py
# ============================================
if __name__ == "__main__":
    print("🧪 Probando la función saludar()...\n")
    
    # Test 1
    resultado1 = saludar("María")
    esperado1 = "¡Hola, María! Bienvenido/a a la prueba."
    if resultado1 == esperado1:
        print("✅ Test 1 PASÓ: saludar('María')")
    else:
        print(f"❌ Test 1 FALLÓ: saludar('María')")
        print(f"   Esperado: {esperado1}")
        print(f"   Obtenido: {resultado1}")
    
    # Test 2
    resultado2 = saludar("Juan")
    esperado2 = "¡Hola, Juan! Bienvenido/a a la prueba."
    if resultado2 == esperado2:
        print("✅ Test 2 PASÓ: saludar('Juan')")
    else:
        print(f"❌ Test 2 FALLÓ: saludar('Juan')")
        print(f"   Esperado: {esperado2}")
        print(f"   Obtenido: {resultado2}")
    
    print("\n" + "="*50)
    if resultado1 == esperado1 and resultado2 == esperado2:
        print("🎉 ¡Todos los tests pasaron! Tu función está correcta.")
    else:
        print("💡 Revisa tu implementación y vuelve a intentar.")
