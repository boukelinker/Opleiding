//Hey Kiddo
const checkAge = function (age) {
    if (age >= 18) {
        return true
    };
    return false
};

const howtoGreet = function (age) {
    const greeting = checkAge(age);
    if (greeting == true) {
        return "Hello there"
    };
    return "Hey Kiddo"
};

console.log(howtoGreet(2));

//VAT calculations
//VAT exercise 1
const amountVAT = function (baseprice) {
    console.log("Baseprice: " + baseprice);
    result = baseprice * 0.21;
    console.log("VAT amount: " + result)
    return result;
};
const priceIncludedVAT = function (baseprice) {
    const VAT = amountVAT(baseprice);
    result = baseprice + VAT;
    return result;
};
console.log("Price included VAT: " + priceIncludedVAT(1000));


//VAT exercise 2
const caculateVATamount = function (priceIncludedVAT, VATpercentage) {
    console.log("price included VAT: " + priceIncludedVAT);
    console.log("VAT percentage: " + VATpercentage);
    const VATamount = (priceIncludedVAT - (priceIncludedVAT / (1 + VATpercentage)));
    return VATamount;
};

const caculateBack = function (priceIncludedVAT, VATpercentage) {
    const VATamount = caculateVATamount(priceIncludedVAT, VATpercentage);
    const baseprice = (priceIncludedVAT - VATamount);
    return ["Baseprice: " + baseprice, "VAT amount: " + VATamount];
};

console.log(caculateBack(1210, 0.21));