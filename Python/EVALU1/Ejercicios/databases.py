import psycopg2
try:
    conn = psycopg2.connect("dbname='mydb' user='miusuario' host='localhost' port=5432 password='erick'")
except psycopg2.Error as e:
    print("I am unable to connect to the database")
    print(e)
conn.autocommit = True
with conn.cursor() as curs:
    try:        
        # create a table with a multi-line Python string surrounded by 3 double quotes
        curs.execute("""
                CREATE TABLE tabla_postgresql (
                    page_id SERIAL PRIMARY KEY,
                    page_name VARCHAR(255) NOT NULL
                )
                """)
        # Confirmar la transacción
        # conn.commit()
        # o poner arriba conn.autocommit = True
    except (Exception, psycopg2.DatabaseError) as error:
        print(error)

with conn.cursor() as curs:
    try:
        curs.execute("INSERT INTO tabla_postgresql ( page_name ) VALUES ( 'página 1' )")
        curs.execute("INSERT INTO tabla_postgresql ( page_name ) VALUES ( 'página 2' )")
        curs.execute("INSERT INTO tabla_postgresql ( page_name ) VALUES ( 'página 1.com' )")
        curs.execute("INSERT INTO tabla_postgresql ( page_name ) VALUES ( 'página 2.org' )")
        
        curs.execute("SELECT * FROM tabla_postgresql")

        curs_rows = curs.fetchall()

        print(f"{curs_rows}")
    except (Exception, psycopg2.DatabaseError) as error:
            print(error)
