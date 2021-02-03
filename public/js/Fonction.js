

class Calculatrice {
    constructor(premierelement, elementactuel) {
    this.premierelement = premierelement
    this.elementactuel = elementactuel
    this.effacer()
    }

    effacer() {
    this.operateur2 = ''
    this.operateur1 = ''
    this.operation = undefined
    }

    ajouter(number) {
    if (number === '.' && this.operateur2.includes('.')) return
    this.operateur2 = this.operateur2.toString() + number.toString()
    }

    choisiroperation(operation) {
    if (this.operateur2 === '') return
    if (this.operateur1 !== '') {
        this.calcul()
    }
    this.operation = operation
    this.operateur1 = this.operateur2
    this.operateur2 = ''
    }

    calcul() {
    let calcul
    let a = parseFloat(this.operateur1)
    let b = parseFloat(this.operateur2)
    if (isNaN(a) || isNaN(b)) return
    switch (this.operation) {
    case '+':
        calcul = a + b
        break
    case '-':
        calcul = a - b
        break
    case '*':
        calcul = a * b
        break
    case '÷':
        calcul = a / b
        break
    default:
        return
    }
    this.operateur2 = calcul
    this.operation = undefined
    this.operateur1 = ''
}

    affichernombre(number) {
    let stringNumber = number.toString()
    let nbrentier = parseFloat(stringNumber.split('.')[0])
    let nbrdecimal = stringNumber.split('.')[1]
    let chiffreecran
    if (isNaN(nbrentier)) {
    chiffreecran = ''
    } else {
    chiffreecran = nbrentier.toLocaleString('en', { maximumFractionDigits: 0 })
    }
    if (nbrdecimal != null) {
    return `${chiffreecran}.${nbrdecimal}`
    } else {
    return chiffreecran
    }
}

majecran() {
    this.elementactuel.innerText =
    this.affichernombre(this.operateur2)
    if (this.operation != null) {
    this.premierelement.innerText =
        `${this.affichernombre(this.operateur1)} ${this.operation}`
    } else {
    this.premierelement.innerText = ''
    }
}
}


let chiffrebouton = document.querySelectorAll('[data-number]')
let math = document.querySelectorAll('[data-operation]')
let boutonegale = document.querySelector('[data-equals]')
let boutoneffacer = document.querySelector('[data-all-clear]')
let premierelement = document.querySelector('[data-previous-operand]')
let elementactuel = document.querySelector('[data-current-operand]')

let calculatrice = new Calculatrice(premierelement, elementactuel)

chiffrebouton.forEach(button => {
button.addEventListener('click', () => {
    calculatrice.ajouter(button.innerText)
    calculatrice.majecran()
})
})

math.forEach(button => {
button.addEventListener('click', () => {
    calculatrice.choisiroperation(button.innerText)
    calculatrice.majecran()
})
})

boutonegale.addEventListener('click', button => {
calculatrice.calcul()
calculatrice.majecran()
})

boutoneffacer.addEventListener('click', button => {
    calculatrice.effacer()
    calculatrice.majecran()
})


