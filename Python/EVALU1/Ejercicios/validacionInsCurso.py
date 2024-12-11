# Datos de los estudiantes
estudiantes = [
    {'nombre': 'Juan', 'edad': 20, 'registrado': True, 'nota_entrada': 85},
    {'nombre': 'Ana', 'edad': 17, 'registrado': False, 'nota_entrada': 90},
    {'nombre': 'Luis', 'edad': 25, 'registrado': True, 'nota_entrada': 60},
    {'nombre': 'María', 'edad': 19, 'registrado': True, 'nota_entrada': 75}
]

# Requisitos mínimos
edad_minima = 18
nota_minima = 70

# Procesar y evaluar las solicitudes de inscripción
for estudiante in estudiantes:
    nombre = estudiante['nombre']
    edad = estudiante['edad']
    registrado = estudiante['registrado']
    nota = estudiante['nota_entrada']

    # Condicional complejo para validar la inscripción
    aceptado = (edad >= edad_minima and registrado and nota >= nota_minima)

    # Short Hand If ... Else con múltiples else statements en una sola línea
    print(f"{nombre}: Inscripción Aceptada" if aceptado else 
          f"{nombre}: Rechazada - No cumple con los requisitos de edad o no está registrado" 
          if edad < edad_minima or not registrado else 
          f"{nombre}: Rechazada - Nota de entrada insuficiente")