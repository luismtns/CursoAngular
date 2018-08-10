class Spacecraft {

    constructor (public propulsor: string){}

    jumpIntoHyperspace() {
        console.log(`Entering hyperspace with ${this.propulsor}`)
    }
}

let ship = new Spacecraft('hyperdrive');

ship.jumpIntoHyperspace()

class MilleniumFalcon extends Spacecraft implements Containership{

    cargoContainers: number

    constructor(){
        super('hyperdrive')
        this.cargoContainers = 2
    }

    jumpIntoHyperspace(){
        if(Math.random() >= 0.5){
            super.jumpIntoHyperspace()
        }else{console.log('Failed to jump into hyperspace')}
    }
}

let falcon = new MilleniumFalcon()
falcon.jumpIntoHyperspace()

interface Containership{

    cargoContainers: number

}

let goodForTheJob = (ship: Containership) => ship.cargoContainers > 2

console.log(`Is falcon good for the job? ${goodForTheJob (falcon) ? 'yes':'no' }`)