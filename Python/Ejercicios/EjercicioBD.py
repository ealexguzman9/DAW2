from sqlalchemy import create_engine 
from sqlalchemy.orm import sessionmaker 
from sqlalchemy.orm import declarative_base
engine = create_engine('postgresql://bryanBlu:bryan007@localhost/Biblioteca2?port=5433')#crear conexión
Base = declarative_base() # mapa para poder navegar en la bbdd
from sqlalchemy import Column, Integer, String, Date, ForeignKey, DateTime #Datos de las tablas
from sqlalchemy.orm import relationship #Relaciones

class Usuarios(Base): #Tabla y atributos de Usuario
    __tablename__='Usuario'
    idUsuario=Column(Integer, primary_key=True)
    email=Column(String)
    nombre=Column(String)
    relPrestamoUs= relationship('Prestamos', back_populates='relUsuario')

class Autor(Base):
    __tablename__ = 'autores' # Nombre de la tabla en la base de datos
    idAutor = Column(Integer, primary_key=True)
    nombre = Column(String)
    biografia=Column(String)
    relA_libros = relationship('Libros',back_populates='relAutores')

class Libros(Base): #Tabla y atributos de libro
    __tablename__='Libro'
    idLibro=Column(Integer, primary_key=True)
    titulo= Column(String)
    fecha_publicacion=Column(Date)
    isbn=Column(Integer)  
    idAutor=Column(Integer, ForeignKey('autores.idAutor'))  
    relAutores = relationship('Autor', back_populates='relA_libros')
    relPrestamo = relationship('Prestamos', back_populates='relLibro')

class Prestamos(Base):
    __tablename__='Prestamo'
    idPrestamo=Column(Integer, primary_key=True)
    fecha_prestamo=Column(Date)
    fecha_limite=Column(Date)
    idLibro = Column(Integer, ForeignKey('Libro.idLibro'))
    idUsuario = Column(Integer, ForeignKey('Usuario.idUsuario'))
    relLibro = relationship('Libros', back_populates='relPrestamo')
    relUsuario= relationship('Usuarios', back_populates='relPrestamoUs')

Base.metadata.create_all(engine)

Sesion = sessionmaker(bind=engine) # para especificar el motor de la base de datos asociado a esta sesión.
sesion = Sesion() # instanciamos para iniciar la sesión de trabajo

#Añadir autores
nuevo_Autor1 = Autor(nombre="Aaronson", biografia="Hondureño, escritor de libros para niños") #id9
nuevo_Autor2 = Autor(nombre="Erickson", biografia="Hondureño, actor y escritor de novelas para adultos") #id10
nuevo_Autor3 = Autor(nombre="Andopin", biografia="Angentino/Peruano, escritor comediante") #id11
nuevo_Autor4 = Autor(nombre="Rebollinchi", biografia="Español, escritor Megalomano") #id12

sesion.add_all([nuevo_Autor1, nuevo_Autor2, nuevo_Autor3, nuevo_Autor4])

nuevo_Usuario1 = Usuarios(email="Bry@aulanz.com", nombre="Bryan")
nuevo_Usuario2 = Usuarios(email="Eri@aulanz.com", nombre="Erick")
nuevo_Usuario3 = Usuarios(email="Ped@aulanz.com", nombre="Pedro")
nuevo_Usuario4 = Usuarios(email="Ale@aulanz.com", nombre="Alexander")

sesion.add_all([nuevo_Usuario1, nuevo_Usuario2, nuevo_Usuario3, nuevo_Usuario4])

nuevo_Libro1 = Libros(titulo="Un peregrino", fecha_publicacion="1999-07-11", isbn=33333, relAutores=nuevo_Autor1)
nuevo_Libro2 = Libros(titulo="Zombie de elite", fecha_publicacion="1894-03-01", isbn=55555, relAutores=nuevo_Autor2)
nuevo_Libro3 = Libros(titulo="El sol perdido", fecha_publicacion="2003-06-17", isbn=88888, relAutores=nuevo_Autor3)
nuevo_Libro4 = Libros(titulo="Luna roja", fecha_publicacion="2000-07-13", isbn=22222, relAutores=nuevo_Autor4)
nuevo_Libro5 = Libros(titulo="Caperucita Azul", fecha_publicacion="1993-09-10", isbn=44444, relAutores=nuevo_Autor2)
nuevo_Libro6 = Libros(titulo="Lince de montaña", fecha_publicacion="2010-05-25", isbn=99999, relAutores=nuevo_Autor3)

sesion.add_all([nuevo_Libro1, nuevo_Libro2, nuevo_Libro3, nuevo_Libro4, nuevo_Libro5, nuevo_Libro6])

# Crear préstamos
nuevo_Prestamo1 = Prestamos(fecha_prestamo="2020-11-19", fecha_limite="2024-10-23", relUsuario=nuevo_Usuario1, relLibro=nuevo_Libro1)
nuevo_Prestamo2 = Prestamos(fecha_prestamo="2020-11-19", fecha_limite="2024-11-23", relUsuario=nuevo_Usuario2, relLibro=nuevo_Libro2)
nuevo_Prestamo3 = Prestamos(fecha_prestamo="2020-11-19", fecha_limite="2024-09-23", relUsuario=nuevo_Usuario3, relLibro=nuevo_Libro3)
nuevo_Prestamo4 = Prestamos(fecha_prestamo="2020-11-19", fecha_limite="2024-07-23", relUsuario=nuevo_Usuario4, relLibro=nuevo_Libro4)
nuevo_Prestamo5 = Prestamos(fecha_prestamo="2020-11-19", fecha_limite="2024-04-23", relUsuario=nuevo_Usuario2, relLibro=nuevo_Libro5)
nuevo_Prestamo6 = Prestamos(fecha_prestamo="2020-11-19", fecha_limite="2024-12-23", relUsuario=nuevo_Usuario4, relLibro=nuevo_Libro6)

sesion.add_all([nuevo_Prestamo1, nuevo_Prestamo2, nuevo_Prestamo3, nuevo_Prestamo4, nuevo_Prestamo5, nuevo_Prestamo6])


# Consulta para obtener los libros prestados por un usuario
def obtener_libros_prestados_por_usuario(email_usuario):
    libros_prestados = sesion.query(Libros.titulo, Prestamos.fecha_prestamo).join(Prestamos).join(Usuarios).filter(Usuarios.email == email_usuario).all()
    
    if libros_prestados:
        for libro, fecha_prestamo in libros_prestados:
            print(f"Libro: {libro}, Fecha de préstamo: {fecha_prestamo}")
    else:
        print(f"No hay libros prestados por el usuario con email: {email_usuario}")

# Ejemplo de uso
obtener_libros_prestados_por_usuario("Bry@aulanz.com")

# Consulta para obtener los libros disponibles (no prestados)
def obtener_libros_disponibles():
    libros_disponibles = sesion.query(Libros).outerjoin(Prestamos).filter(Prestamos.idPrestamo == None).all()
    
    if libros_disponibles:
        for libro in libros_disponibles:
            print(f"Libro disponible: {libro.titulo}")
    else:
        print("No hay libros disponibles.")

# Ejemplo de uso
obtener_libros_disponibles()




# Consulta para actualizar la biografía de un autor
def actualizar_biografia_autor(nombre_autor, nueva_biografia):
    autor = sesion.query(Autor).filter(Autor.nombre == nombre_autor).first()
    
    if autor:
        autor.biografia = nueva_biografia
        sesion.commit()  # Confirmamos los cambios
        print(f"Biografía del autor {nombre_autor} actualizada.")
    else:
        print(f"Autor {nombre_autor} no encontrado.")

# Ejemplo de uso
actualizar_biografia_autor("Erickson", "Biografía actualizada para Erickson")



# Consulta para obtener los libros prestados por un usuario
def obtener_libros_prestados_por_usuario(email_usuario):
    libros_prestados = sesion.query(Libros.titulo, Prestamos.fecha_prestamo).join(Prestamos).join(Usuarios).filter(Usuarios.email == email_usuario).all()
    
    if libros_prestados:
        for libro, fecha_prestamo in libros_prestados:
            print(f"Libro: {libro}, Fecha de préstamo: {fecha_prestamo}")
    else:
        print(f"No hay libros prestados por el usuario con email: {email_usuario}")

# Ejemplo de uso
obtener_libros_prestados_por_usuario("Bry@aulanz.com")




# Consulta para obtener los libros disponibles (no prestados)
def obtener_libros_disponibles():
    libros_disponibles = sesion.query(Libros).outerjoin(Prestamos).filter(Prestamos.idPrestamo == None).all()
    
    if libros_disponibles:
        for libro in libros_disponibles:
            print(f"Libro disponible: {libro.titulo}")
    else:
        print("No hay libros disponibles.")

# Ejemplo de uso
obtener_libros_disponibles()



# Consulta para actualizar la biografía de un autor
def actualizar_biografia_autor(nombre_autor, nueva_biografia):
    autor = sesion.query(Autor).filter(Autor.nombre == nombre_autor).first()
    
    if autor:
        autor.biografia = nueva_biografia
        sesion.commit()  # Confirmamos los cambios
        print(f"Biografía del autor {nombre_autor} actualizada.")
    else:
        print(f"Autor {nombre_autor} no encontrado.")

# Ejemplo de uso
actualizar_biografia_autor("Erickson", "Biografía actualizada para Erickson")



# Consulta para eliminar un préstamo cuando un usuario devuelve un libro
def eliminar_prestamo(email_usuario, titulo_libro):
    prestamo = sesion.query(Prestamos).join(Usuarios).join(Libros).filter(Usuarios.email == email_usuario, Libros.titulo == titulo_libro).first()
    
    if prestamo:
        sesion.delete(prestamo)  # Eliminamos el préstamo
        sesion.commit()  # Confirmamos los cambios
        print(f"Préstamo del libro '{titulo_libro}' para el usuario {email_usuario} eliminado.")
    else:
        print(f"No se encontró un préstamo para el libro '{titulo_libro}' y el usuario {email_usuario}.")

# Ejemplo de uso
eliminar_prestamo("Bry@aulanz.com", "Un peregrino")

sesion.commit()
sesion.close()