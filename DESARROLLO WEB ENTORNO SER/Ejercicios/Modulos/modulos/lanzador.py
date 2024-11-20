from paquete import restar as mrest
from paquete import sumar as msum


if __name__ == "__main__":
	 a = int(input('Introduzca el primer número'))
	 b = int(input('Introduzca el segundo número'))
	 resta = mrest.frestar(a,b)
	 suma = msum.fsumar(a,b)
	 print(f"la resta es {resta}")
	 print(f"la suma es {suma}")	 