 const stripe = Stripe('pk_test_51P7sHGL0h2GKfLviWWJmcQ1cUKAK3VNDolmk1bIfkr6cocxLptskinmBH9lHtC0XRUsKBmfxmrlwSOsqJJ6xHyhs00E3LrWpWW');
 const paymentButton = document.querySelector('#paymentButton');
 
 paymentButton.addEventListener('click', () => {
   stripe.redirectToCheckout({
     sessionId: sessionId
   })
 });