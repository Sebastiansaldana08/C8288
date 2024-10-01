// Definición del enum OrderStatus
enum OrderStatus {
    Pending = 'pending',
    Shipped = 'shipped',
    Delivered = 'delivered',
  }
  
  // Definición del tipo OrderType
  type OrderType = {
    id: number;
    status: OrderStatus;
    items: string[];
  };
  
  // Ejemplo de una función que devuelve los pedidos
  function getOrders(): OrderType[] {
    return [
      { id: 1, status: OrderStatus.Pending, items: ['item1', 'item2'] },
      { id: 2, status: OrderStatus.Shipped, items: ['item3', 'item4'] },
    ];
  }
  
  console.log(getOrders());
  