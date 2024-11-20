from wsgiref.simple_server import make_server
from urllib.parse import parse_qs
import vistasAlex
import modeloAlex

datosJson = modeloAlex.JsonRead("data/alumnos.json")
# datosJson es una lista de diccionarios
print(datosJson)
nuevaListaDic = []
for dic in datosJson:
    if 'Pedro' in dic.values() or 'Juan' in dic.values():
        nuevaListaDic.append(dic)

sesion = modeloAlex.abrir_sesion()
for nuevoDic in nuevaListaDic:
    alumno = modeloAlex.Alumnos()
    alumno.nombre = nuevoDic['nombre']
    alumno.apellido = nuevoDic['apellido']
    alumno.nota = nuevoDic['nota']
    #alumno.create(sesion)  # Crear un nuevo alumno

consulta = {"nota" : 6}
alumnosNota = modeloAlex.Alumnos.read(sesion, **consulta)
for alumnoNota in alumnosNota:
    print(alumnoNota.nombre, alumnoNota.apellido, alumnoNota.nota)

modeloAlex.cerrar_sesion(sesion)

# Definir la función app que manejará las solicitudes.
def app(environ, start_response):
    path = environ.get('PATH_INFO')
    global sesion
    # print('path: ', path)
    if path == '/':
        return vistasAlex.handle_index(environ, start_response)
    
    elif path == '/login':
        sesion = modeloAlex.abrir_sesion()
        return vistasAlex.handle_login(start_response)
    elif path == '/logout':
        modeloAlex.cerrar_sesion(sesion)
        return vistasAlex.handle_logout(start_response)
    elif path == '/alumnos':
        consulta = {"nota" : 5}
        alumnosNota = modeloAlex.Alumnos.read(sesion, **consulta)
        return vistasAlex.handle_alumnos(environ, start_response, alumnosNota)
    
    else:
        return vistasAlex.handle_404(environ, start_response)
    
if __name__ == "__main__":
    host = 'localhost'
    port = 8000

    httpd = make_server(host, port, app)
    print(f"Servidor en http://{host}:{port}")
    httpd.serve_forever()