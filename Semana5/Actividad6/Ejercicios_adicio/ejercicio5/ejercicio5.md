# Ejercicio 5: Uso de enum en lugar de tipos literales

Este ejercicio refactoriza el código para usar un **enum** en lugar de tipos literales para manejar los diferentes estados del pedido.

### Objetivos:
- Definir un enum para los estados del pedido (`OrderStatus`).
- Refactorizar el código para usar el enum.

### Código:
```typescript
enum OrderStatus {
  Pending = 'pending',
  Shipped = 'shipped',
  Delivered = 'delivered',
}

type OrderType = {
  id: number;
  status: OrderStatus;
  items: string[];
};

function getOrders(): OrderType[] {
  return [
    { id: 1, status: OrderStatus.Pending, items: ['item1', 'item2'] },
    { id: 2, status: OrderStatus.Shipped, items: ['item3', 'item4'] },
  ];
}
