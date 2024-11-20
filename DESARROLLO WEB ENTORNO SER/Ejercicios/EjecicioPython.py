#Numero 1 
from sqlalchemy import create_engine
from sqlalchemy.orm import sessionmaker
from sqlalchemy.orm import declarative_base
engine = create_engine('postgresql://miusuario:erick@localhost/mydb')

#Numero 2
Base = declarative_base()
from sqlalchemy import Column, Integer, String
class TablaNueva(Base):
    __tablename__ = 'Nuevaaaaa'
    id = Column(Integer, primary_key=True)
    nombre = Column(String)
Base.metadata.create_all(engine)

#Numero 3
Sesion = sessionmaker(bind=engine)
sesion = Sesion()
nuevo_registro = TablaNueva(nombre="Alex")
sesion.add(nuevo_registro)
sesion.commit()
sesion.close()
print()