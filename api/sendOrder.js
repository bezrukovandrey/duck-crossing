export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).end(); 
  }

  const { cartItems, cartSum, deliveryOption, contacts, comment } = req.body;

  const token = process.env.TELEGRAM_BOT_TOKEN;
  const chatId = process.env.TELEGRAM_CHAT_ID;

  const message = `
🛒 Новый заказ!
  
🧸 Товары:
${cartItems.map(item => `• ${item.name} — ${item.price} ₽`).join('\n')}

💰 Итого: ${cartSum} ₽

🚚 Способ доставки: ${deliveryOption}
👤 Контакты: ${contacts || 'Без контактов'}
📝 Комментарий: ${comment || 'Без комментария'}
`;

  
  await fetch(`https://api.telegram.org/bot${token}/sendMessage`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      chat_id: chatId,
      text: message
    })
  });

  res.status(200).json({ success: true });
}