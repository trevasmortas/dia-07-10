const nome = "MarcosBetintha";
const idade = 18;
const cidade = "Londrina";
const frase = `meu nome é ${nome}, tenho ${idade} anos e moro em ${cidade}`;
const hobby = "assistir animes"

console.log(frase);

const IdadeEmDias = idade * 365;
console.log("idade dele em dias é: " + IdadeEmDias)
const IdadeEmDécadas = idade / 10
console.log("idade dele em décadas é " + IdadeEmDécadas)
const PorcentagemDaIdadeEsseAno = 1 / 1 * 18 / 100
console.log("a porcentagem da idade dele esse ano é " + PorcentagemDaIdadeEsseAno)

Number % 2 == 0

const preçoUnit = 20;
const quantidade = 20;
const subtotal = preçoUnit * quantidade;
const valorminimoparaterdesconto = 100; 
const temdesconto = subtotal >= valorminimoparaterdesconto

const cidadecliente = Londrina
const cidadeloja = Londrina

const fretegratis = temdesconto && (cidadecliente == cidadeloja)

const resultado = `subtotal: R$ ${subtotal}
Tem desconto: ${temdesconto}
frete gratis: ${fretegratis}`

console.log(resultado)
console.log(temdesconto)