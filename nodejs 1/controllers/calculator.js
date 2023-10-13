module.exports.add = (req,res)=>{
    let sum = 0;
    let n1 = req.body.num1;
    let n2 = req.body.num2;
    sum = n1 + n2;
    res.send(`Sum = ${sum}`);
    console.log(sum);
};

module.exports.subtract = (req,res)=>{
    let diff = 0;
    let n1 = req.body.num1;
    let n2 = req.body.num2;
    diff = n1 - n2;
    res.send(`Difference = ${diff}`);
};

module.exports.multiply = (req,res)=>{
    let product = 0;
    let n1 = req.body.num1;
    let n2 = req.body.num2;
    product = n1 * n2;
    res.send(`Product = ${product}`);
};

module.exports.divide = (req,res)=>{
    let quotient = 0;
    let n1 = req.body.num1;
    let n2 = req.body.num2;
    quotient = n1 / n2;
    res.send(`Quotient = ${quotient}`);
};