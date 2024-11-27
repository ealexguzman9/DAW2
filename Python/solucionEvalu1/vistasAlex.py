from jinja2 import Environment, FileSystemLoader
import os

env = Environment(loader=FileSystemLoader('templates'))
template = env.get_template('index.html')
template2 = env.get_template('alumnos.html')
 
# Funciones para manejar las rutas específicas
def handle_index(environ, start_response):
    response = template.render().encode('utf-8') #renderizar 'index.html'
    status = '200 OK'
    response_headers = [('Content-type', 'text/html')]
    start_response(status, response_headers)
    # return [b'Hola, Mundo en Espanol!']
    return [response]

def handle_login(start_response):
    start_response('303 See Other', [('Location', '/alumnos')])
    return [b'']

def handle_logout(start_response):
    start_response('303 See Other', [('Location', '/')])
    return [b'']


def handle_alumnos(environ, start_response, alumnos):
    # Lógica para la ruta '/es'
    response = template2.render(alumnos=alumnos).encode('utf-8') #renderizar 'index.html' con los productos recogidos de la BD
    status = '200 OK'
    response_headers = [('Content-type', 'text/html')]
    start_response(status, response_headers)
    # return [b'Hola, Mundo en Espanol!']
    return [response]


def handle_404(environ, start_response):
    # Lógica para manejar una ruta no reconocida (404)
    status = '404 Not Found'
    response_headers = [('Content-type', 'text/html')]
    start_response(status, response_headers)
    return [b'Page not found']
