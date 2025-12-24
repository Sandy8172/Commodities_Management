let products = [
  { id: 1, name: "Laptop", price: 1000, view: 100, revenue: 200 },
  { id: 2, name: "Phone", price: 500, view: 2000, revenue: 56000 },
  { id: 3, name: "Tablet", price: 300, view: 1500, revenue: 450000 },
  { id: 4, name: "Smartwatch", price: 200, view: 1200, revenue: 240000 },
  { id: 5, name: "Headphones", price: 150, view: 800, revenue: 120000 },
  { id: 6, name: "Keyboard", price: 80, view: 600, revenue: 48000 },
  { id: 7, name: "Mouse", price: 50, view: 700, revenue: 35000 },
  { id: 8, name: "Monitor", price: 400, view: 500, revenue: 200000 },
  { id: 9, name: "Printer", price: 250, view: 300, revenue: 75000 },
  { id: 10, name: "Camera", price: 800, view: 450, revenue: 360000 },
  { id: 11, name: "Speakers", price: 180, view: 650, revenue: 117000 },
  { id: 12, name: "Router", price: 120, view: 400, revenue: 48000 },
  { id: 13, name: "External HDD", price: 100, view: 550, revenue: 55000 },
  { id: 14, name: "SSD", price: 150, view: 700, revenue: 105000 },
  { id: 15, name: "Graphics Card", price: 600, view: 350, revenue: 210000 },
  { id: 16, name: "Motherboard", price: 250, view: 300, revenue: 75000 },
  { id: 17, name: "RAM", price: 120, view: 500, revenue: 60000 },
  { id: 18, name: "Power Bank", price: 90, view: 800, revenue: 72000 },
  { id: 19, name: "Drone", price: 1000, view: 200, revenue: 200000 },
  { id: 20, name: "VR Headset", price: 700, view: 150, revenue: 105000 },
  { id: 21, name: "Projector", price: 500, view: 220, revenue: 110000 },
  { id: 22, name: "Smart TV", price: 1200, view: 300, revenue: 360000 },
  { id: 23, name: "Microwave", price: 400, view: 250, revenue: 100000 },
  { id: 24, name: "Refrigerator", price: 1500, view: 180, revenue: 270000 },
  { id: 25, name: "Washing Machine", price: 1000, view: 200, revenue: 200000 },
  { id: 26, name: "Air Conditioner", price: 1800, view: 150, revenue: 270000 },
  { id: 27, name: "Dishwasher", price: 1200, view: 100, revenue: 120000 },
  { id: 28, name: "Coffee Maker", price: 200, view: 400, revenue: 80000 },
  { id: 29, name: "Vacuum Cleaner", price: 350, view: 300, revenue: 105000 },
  { id: 30, name: "Electric Scooter", price: 900, view: 250, revenue: 225000 },
  { id: 31, name: "Gaming Console", price: 500, view: 600, revenue: 300000 },
  { id: 32, name: "Smart Light", price: 60, view: 700, revenue: 42000 },
];

export const GET = async () => {
  try {
    return Response.json(products);
  } catch (error) {
    return Response.json(
      {
        message: "something went wrong!",
      },
      { status: 500 }
    );
  }
};

export const POST = async (req) => {
  try {
    const body = await req.json();
    const newProduct = { id: Date.now(), ...body };
    products.unshift(newProduct);
    return Response.json(newProduct, { status: 201 });
  } catch (error) {
    return Response.json(
      {
        message: "something went wrong!",
      },
      { status: 500 }
    );
  }
};

export async function PUT(req) {
  try {
    const body = await req.json();
    products = products.map((p) => (p.id === body.id ? body : p));
    return Response.json(body);
  } catch (error) {
    return Response.json(
      {
        message: "something went wrong!",
      },
      { status: 500 }
    );
  }
}

export async function DELETE(req) {
  try {
    const { id } = await req.json();
    products = products.filter((p) => p.id !== id);
    return Response.json({ success: true });
  } catch (error) {
    return Response.json(
      {
        message: "something went wrong!",
      },
      { status: 500 }
    );
  }
}
