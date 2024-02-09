export const productosList: Product[] = [
  { id: 1, name: 'Detergente multiusos', price: 12, description: "Botella de 1 litro"},
  { id: 2, name: 'Limpiador de vidrios', price: 8, description: "Tus vidrios transparentes" },
  { id: 3, name: 'Desengrasante de cocina', price: 15, description: "Brilla como el sol" },
  { id: 4, name: 'Jabón para manos', price: 5, description: "Tus manos sin bacterias" },
  { id: 5, name: 'Papel higiénico', price: 7, description: "Te quedan las nalgas como si fueran de bebe" },
  { id: 6, name: 'Toallas de papel', price: 6, description: "Llevalas a donde quieras" },
  { id: 7, name: 'Bolsas de basura', price: 4, description: "Recorda cuidar el ambiente, 50cm X 90cm" },
  { id: 8, name: 'Guantes de limpieza', price: 3, description: "No te mojan ni te manchan" },
  { id: 9, name: 'Esponjas', price: 2 }
];

export interface Product {
  id: number;
  name: string;
  price: number;
  description?: string;

}
