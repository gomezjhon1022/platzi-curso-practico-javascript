//const precioOriginal=120;
//const descuento=18;

function calcularPrecioConDescuento(precio, descuento){
    const porcentajePrecioConDescuento=100-descuento;
    const precioConDescuento=(precio*porcentajePrecioConDescuento)/100;
    return precioConDescuento;
}
function onClickButtonPriceDiscount1(){
    const inputPrice=document.getElementById("InputPrice");
    const priceValue=inputPrice.value;
    const inputDiscount=document.getElementById("InputDiscount");
    const discountValue=inputDiscount.value;
    const precioConDescuento=calcularPrecioConDescuento(priceValue, discountValue);
    const resultP=document.getElementById("ResultP");
    resultP.innerText="El precio con descuento es: $"+precioConDescuento;

}



function onClickButtonPriceDiscount(){
    const inputPrice=document.getElementById("InputPrice");
    const priceValue=inputPrice.value;  
   
    const inputCoupon=document.getElementById("InputCoupon");
    const couponValue=inputCoupon.value;
    
  
         let descuento;
            if (!coupons.includes(couponValue)){
               alert("El cupón "+ couponValue+" no es valido");
               } else if(couponValue==="Platino"){
                  descuento=15;
                } else if(couponValue==="Diamante"){
                 descuento=25;
               } else if(couponValue==="Dorado"){
                 descuento=35;
         }


    //  const isCouponValueValid=function(coupon){
    //      return coupon.name===couponValue;
    //  }
    //  const userCoupon=coupons.find(isCouponValueValid);
    //  if (!userCoupon){
    //      alert("El cupón "+ couponValue+" no es valido");
    //  } else {
    //      const descuento=userCoupon.discount;
    //      const precioConDescuento=calcularPrecioConDescuento(priceValue, descuento);

    //      const resultP=document.getElementById("ResultP");
    //      resultP.innerText="El precio con descuento es: $ "+precioConDescuento;
    //  }
    const precioConDescuento=calcularPrecioConDescuento(priceValue, descuento);
    const resultP=document.getElementById("ResultP");
    resultP.innerText="El precion con descuento es: $"+ precioConDescuento;
        }
//console.log({
//    precioOriginal,
//    descuento,
//    porcentajePrecioConDescuento,
//    precioConDescuento,
//});
// const coupons=[
//     {
//       name:"Platino",
//       discount:15,
//     },
//     {
//       name:"Diamante",
//       discount:25,
//     },
//     {
//       name:"Dorado",
//       discount:35,}
// ];

   const coupons=[
       "Platino",
       "Diamante",
        "Dorado",
       
 ];