# Vamos a hacerlo usando un diccionario
# Si la suma de la fila+columna es par -> azul
dicNumLetras = {'a': 1, 'b': 2, 'c': 3, 'd': 4, 'e': 5, 'f': 6, 'g': 7, 'h': 8}
while True:
    inp = input('Introduce la casilla (por ej. b2), "*" para terminar: ')
    # Primero verificamos si el usuario quiere terminar
    # '*' es el denominado 'dato centinela'.
    if (inp == '*'):
        print("El usuario ha decidido terminar el juego.")
        break    
    # Si no, tenemos que convertir a entero el número en formato string que introduce el usuario
    # Si no es un número, la conversión fallará y se producirá un error, lo gestiono con 'try/except/else'
    try:
        num1 = int(inp[1]) # Si da error, pasaremos al bloque except. Si no, pasa al else después del bloque 'try'.
        letra = inp[0] # recogemos también la letra. 
    except:
        print('Número de celda mal introducido')
    else:            
        # Verificamos que el usuario escribe una celda del tablero.
        # Ahora que sabemos que el número introducido es efectivamente un número,
        # vamos a ver si la letra introducida es efectivamente una letra.       
        if not letra.isalpha():
            print('Letra de celda mal introducida')
        # Si letra correcta, vamos a ver ahora que la letra está en el intervalo [a,h]
        elif not (letra in dicNumLetras):
            print('La letra debe estar en el intervalo de la "a" a la "h", ambas inclusive.')            
        # Si letra en intervalo correcto, vamos a ver si los números están en el intervalo [0,8] -> range(1,9)        
        elif not (num1 in range(1,9)):
            print('El número debe estar en el intervalo comprendido entre el 1 y el 8, ambos inclusive')
        # Si todo es correcto, cogemos del diccionario el número de columna y salimos del bucle  
        else:
            num2 = dicNumLetras[letra]
            if (num1+num2)%2 == 0: # num%2 es el resto de num/2
                print('azul')
            else:
                print('gris')
            break

prueba1 = '''
Introduce la casilla (por ej. b2), "*" para terminar: ab
Número de celda mal introducido
Introduce la casilla (por ej. b2), "*" para terminar: 25
Letra de celda mal introducida
Introduce la casilla (por ej. b2), "*" para terminar: z5
La letra debe estar en el intervalo de la "a" a la "h", ambas inclusive.
Introduce la casilla (por ej. b2), "*" para terminar: h9
El número debe estar en el intervalo comprendido entre el 1 y el 8, ambos inclusive
Introduce la casilla (por ej. b2), "*" para terminar: h5
gris
'''