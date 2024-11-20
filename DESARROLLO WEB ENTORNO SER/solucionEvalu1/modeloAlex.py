import json
from sqlalchemy import create_engine, Column, Float, Integer, String
from sqlalchemy.orm import sessionmaker
from sqlalchemy.orm import declarative_base

# engine = create_engine('postgresql://usuario:contraseña@localhost/nombre_de_la_bd')
#engine = create_engine('postgresql://user1:password1@localhost/eval1')
engine = create_engine('postgresql://user1:password1@localhost/eval1?port=5433')

# Crear una sesión para interactuar con la base de datos
Session = sessionmaker(bind=engine)

def abrir_sesion():
    return Session()

def cerrar_sesion(session):
    # Cerrar la sesión al terminar
    session.close()

def JsonRead(jsonFile):
    with open(jsonFile, encoding="utf-8") as f:
        datos = json.load(f)
    return datos

Base = declarative_base()
# Clase que representa la tabla 'productos'
class Alumnos(Base):
    __tablename__ = 'alumnos'
    id = Column(Integer, primary_key=True)
    nombre = Column(String)
    apellido = Column(String)
    nota = Column(Float)

    @classmethod
    def read(cls, session, **consulta):        
        return session.query(cls).filter_by(**consulta).all()
    
    def create(self, session):
        session.add(self)
        session.commit()

# Crear la tabla en la base de datos (esto solo se hace una vez)
#Base.metadata.create_all(engine)