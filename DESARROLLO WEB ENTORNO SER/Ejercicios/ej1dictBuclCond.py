# Definición del menú del restaurante
menu = {
    'Hamburguesa': 8.50,
    'Pizza': 12.00,
    'Ensalada': 7.00,
    'Sopa': 5.00,
    'Refresco': 2.50,
    'Café': 1.80
}

# Definición de los pedidos de los clientes
pedidos = {
    'Juan': {'Hamburguesa': 2, 'Refresco': 1},
    'Ana': {'Pizza': 1, 'Café': 2},
    'Luis': {'Sopa': 3, 'Ensalada': 1, 'Refresco': 1}
}

# Mostrar el menú
print("Menú del Restaurante:")
for plato, precio in menu.items():
    print(f"{plato}: {precio} €")
print("\n")

# Procesar y mostrar cada pedido
for cliente, pedido in pedidos.items():
    print(f"Pedido de {cliente}:")
    total_cliente = 0  # Inicializar el total del cliente

    # Recorrer los platos pedidos por el cliente
    for plato, cantidad in pedido.items():
        if plato in menu:
            precio = menu[plato]
            subtotal = precio * cantidad
            total_cliente += subtotal
            print(f"- {cantidad}x {plato}: {subtotal:.2f} €")
        else:
            print(f"- {plato} no está disponible en el menú.")

    print(f"Total a pagar: {total_cliente:.2f} €\n")
