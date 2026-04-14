async function sendShoppingItem(itemName) {
  try {
    const response = await fetch('http://localhost:3000/api/items', {
      method: 'POST', 
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ name: itemName })
    });

    if (!response.ok) throw new Error('Falha na requisição');
    
    const data = await response.json();
    console.log('Item criado:', data);
  } catch (error) {
    console.error('Erro ao enviar item:', error);
  }
}