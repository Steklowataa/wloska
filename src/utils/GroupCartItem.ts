type CartItem = {
    name: string;
    image: string;
    quantity: number;
    description: string;
    type?: string;
    basePrice: number;
    sauces?: any[];
    extras?: any[];
    totalPrice: number;
  };
  
  function groupCartItems(items: CartItem[]) {
    console.log("=== GROUPING DEBUG START ===");
    console.log("Input items:", items);
    
    const grouped: { [key: string]: CartItem & { additions: string[] } } = {};
    
    for (const item of items) {
      console.log(`\n--- Processing item: ${item.name} ---`);
      console.log("Raw sauces:", item.sauces);
      console.log("Raw extras:", item.extras);
      
      // Better handling of sauces and extras - handle both string and object formats
      const sauces = item.sauces?.map((s) => {
        console.log("Processing sauce:", s, "type:", typeof s);
        return typeof s === 'string' ? s : s?.name || 'Unknown sauce';
      }) || [];
      
      const extras = item.extras?.map((e) => {
        console.log("Processing extra:", e, "type:", typeof e);
        return typeof e === 'string' ? e : e?.name || 'Unknown extra';
      }) || [];
      
      console.log("Processed sauces:", sauces);
      console.log("Processed extras:", extras);
      
      // Sort the additions to ensure consistent grouping
      const sortedSauces = [...sauces].sort();
      const sortedExtras = [...extras].sort();
      
      // Create a more reliable key that includes the base name and sorted additions
      const key = `${item.name}::sauces[${sortedSauces.join(";")}]::extras[${sortedExtras.join(";")}]`;
      
      console.log(`Generated key: ${key}`);
      
      if (!grouped[key]) {
        console.log("Creating new group for key:", key);
        grouped[key] = {
          ...item,
          additions: [...sauces, ...extras], // Keep original order for display
          sauces: item.sauces || [],
          extras: item.extras || [],
          quantity: item.quantity || 1,
          totalPrice: item.totalPrice,
        };
      } else {
        console.log("Adding to existing group for key:", key);
        // Item with same name and same additions - increment quantity and price
        grouped[key].quantity += item.quantity || 1;
        grouped[key].totalPrice += item.totalPrice;
      }
      
      console.log("Current grouped state:", grouped[key]);
    }
    
    const result = Object.values(grouped);
    console.log("=== FINAL GROUPING RESULT ===");
    console.log("Final grouped items:", result);
    console.log("=== GROUPING DEBUG END ===");
    return result;
  }
  
  export default groupCartItems;