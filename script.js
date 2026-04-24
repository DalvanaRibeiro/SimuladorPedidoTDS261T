// Função que será chamada quando clicar no botão
// Função: um bloco de código reutilizável que executa uma tarefa específica 
function calcular(){
    // =============================
    // 1. PEGAR OS ELEMENTOS DA TELA
    //==============================

    // Aqui pegamos cada checkbox pelo Id
    let hamburguer = document.getElementById("hamburguer")
    let batata = document.getElementById("batata")
    let refri = document.getElementById("coca")
    let nuggts = document.getElementById("nuggets")
    let sorvete = document.getElementById("sorvete")
    let pizza = document.getElementById("pizza")
    // =========================================
    // 2. VARIÁVEIS INICIAIS
    //============================================
    // Total começa com 0
    let total = 0
    // String para guardar os itens escolhidos
    let itens = ""
    //===================================
    // 3. VERIFICAR CADA PRODUTO
    //==================================
    // Se o checkbox estiver marcado (true)
    if(hamburguer.checked){
        total = total +25 // soma o valor do hambúrguer
        itens = itens +"Hambúrguer 🍔<br>" // adiciona ao texto dos produtos
    }
    if(batata.checked){
        total = total + 12
        itens = itens + " Batata frita🍟 <br>"
    }
    if(refri.checked){
        total = total + 6
        itens = itens + " Coquinha zero 🥤 <br>"
    }
    if(nuggts.checked){
        total = total + 20
        itens = + " Nuggets 🥟 <br>"
    }
    if(pizza.checked){
        total = total + 15
        itens = itens + " Pizza 🍕 <br>"
    }
    if( sorvete.checked){
        total = total + 10
        itens = itens  + " Sorvete 🍨 <br>"
    }
    // =======================================
    // 4. PEGAR DIV DO RESULTADO
    //======================================
    let resultado = document.getElementById("resultado")

    //============================================
    // 5. VALIDAÇÃO
    //=============================================
    // Se não escolheu nada 
    if(total === 0){
        resultado.innerHTML = "Escolha pelo menos um item!"
        return // para função aqui
    }

    //===============================================
    // 6. DESCONTO
    //==============================================
    let subtotal = total
    let desconto = 0
    // Se o valor for maior ou igual a 30, aplicamos o desconto de 10%
    if(subtotal >= 30){
        desconto = subtotal * 0.10 // 10% 
    }
    //==============================================
    // 7. ENTREGA
    //=============================================
    let entrega = 5
    // Se passar 50 -> entrega grátis 😎
    if( subtotal - desconto >= 50){
        entrega = 0
    }
    // ================================================
    // 8. TOTAL FINAL
    //==================================================
    let totalFinal = subtotal - desconto + entrega

    //==================================================
    // 9. MOSTRAR O RESULTADO
    //=================================================
    resultado.innerHTML =
    "<strong>Itens:</strong><br>"+
    itens +
    "<br> Subtotal: R$ " + subtotal.toFixed(2)+
    "<br> Desconto: R$ " + desconto.toFixed(2)+
    "<br> Entrega: R$ " + entrega.toFixed(2)+
    "<br><strong> Total: R$  " + totalFinal.toFixed(2) + "</strong>"


}
