import{chiffrebouton,math,boutonegale,boutoneffacer,calculatrice} from './Fonction.js'




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

