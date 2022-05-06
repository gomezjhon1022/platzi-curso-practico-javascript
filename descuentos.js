//const precioOriginal=120;
//const descuento=18;

function calcularPrecioConDescuento(precio, descuento){
    const porcentajePrecioConDescuento=100-descuento;
    const precioConDescuento=(precio*porcentajePrecioConDescuento)/100;
    return precioConDescuento;
}
function onClickButtonPriceDiscount(){
    const inputPrice=document.getElementById("InputPrice");
    const priceValue=inputPrice.value;  
    //const inputDiscount=document.getElementById("InputDiscount");
    //const discountValue=inputDiscount.value;
    const inputCoupon=document.getElementById("InputCoupon");
    const couponValue=inputCoupon.value;
    
    //const precioConDescuento=calcularPrecioConDescuento(priceValue, discountValue);
    //const resultP=document.getElementById("ResultP");
    //resultP.innerText="El precio con descuento son: $"+precioConDescuento;
    let descuento;
        switch(couponValue){
            case coupons[0]:     //Platino
            descuento=15;
            break;
            case coupons[1]:     //Diamante
            descuento=30;
            break;
            case coupons[2]:     //Dorado
            descuento=45;
            break;
                          }
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

const coupons=[
    "Platino",
    "Diamante",
    "Dorado",
];