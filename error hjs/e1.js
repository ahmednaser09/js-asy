

function placeOrder(order, callback) {
    console.log(`تم وضع الطلب لـ: ${order}`);
    setTimeout(() => {
      console.log(`تم وضع الطلب لـ ${order}.`);
      callback(order); 
    }, 2000);
  }
  

  function prepareOrder(order, callback) {
    console.log(`يتم تحضير: ${order}`);
    setTimeout(() => {
      console.log(`${order} جاهز.`);
      callback(order); 
    }, 3000);
  }
  
  function packageOrder(order, callback) {
    console.log(`يتم تعبئة: ${order}`);
    setTimeout(() => {
      console.log(`${order} تم تعبئته.`);
      callback(order); 
    }, 2000);
  }
  
  function deliverOrder(order, callback) {
    console.log(`يتم توصيل: ${order}`);
    setTimeout(() => {
      console.log(`${order} تم توصيله.`);
      callback(); 
    }, 4000);
  }
  
  function processOrder(order) {
    placeOrder(order, (order) => {
      prepareOrder(order, (order) => {
        packageOrder(order, (order) => {
          deliverOrder(order, () => {
            console.log('تم إتمام عملية الطلب بنجاح.');
          });
        });
      });
    });
  }
  
  processOrder('بيتزا');
  