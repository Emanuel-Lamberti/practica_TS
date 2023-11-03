//console.log("hola mundo")

let mensaje: string = "Hola mundo"
mensaje = "Fer chiquito"

mensaje = "chau"
console.log(mensaje)
console.log(typeof [])

let extincionDinosaurios = 76000000
let dinosaurioFavorito = "T-Rex"
let extintos = true

let miVariable //tipo any -- no se usa, porque se puede modificar todo el tiempo el tipo de valor
miVariable = "fer chiquito"
miVariable = 42

// PLAN A
function chanchito(config: any) {
    return config
}

// PLAN B - desactivando TS mediante configuracion, último recurso
/*function chanchitoFeliz(config) {
    return config
}*/

let animales: string[] = ['chancho', 'feliz', 'felipe']
let nums: number[] = [1, 2, 3]
let number2 = [] //any - no queremos que ocurra

let nums2: boolean[] = [] // una solucion al anterior caso

let numeros2: Array<number> = [] //tipo de arreglo Number

// nums.map(x => x.) //el autocompletado sugiere el metodo de datos

// TUPLAS - variable que contiene una serie de datos que se encuentran ordenados
// permiten guardar datos que esten definidos ahi
// tratar de mantener la cantidad minima de datos para trabajar
// 1, edad, nombre, animales[]

let tupla1: [number, string] = [1, 'felipe']
let tupla2: [number, string[]] = [1, ['chancho', 'chancho felipe']]

tupla1.push(12) // esto genera un error, pese a que no se subraye en rojo



// ENUM - tipo enumerado, una lista
// 4 estados de carga: aun no se llama a la API: IDLE; se llama a la API: Loading; Respuesta exitosa: SUCESS; Error en la respuesta: ERROR

const chica = 's'
const mediana = 'm'
const grande = 'l'
const extragrande = 'xl'

//PascalCase
enum Talla { Chica, Mediana, Grande, ExtraGrande } //el compilador define valores por defecto

enum Talla2 { Chica = 2, Mediana, Grande, ExtraGrande } // esto define un valor manualmente

enum Talla3 { Chica = 's', Mediana = 'm', Grande = 'l', ExtraGrande = 'xl' } //esto con string

const variable1 = Talla3.Grande
console.log(variable1)

const enum LoadingState { Idle, Loading, Success, Error }
const estado = LoadingState.Success


//OBJETOS

const objeto = { id: 1, nombre: '' }
objeto.nombre = 'José'

const objeto2: {
    readonly id: number, // readonly hace que no se modifique el valor
    nombre: string,  // opcional ----> nombre?: string,
} = { id: 1, nombre: 'Carlos' }


const objeto3: {
    readonly id: number,
    nombre: string,
    talla: Talla3,
} = { 
    id: 1, 
    nombre: 'Cesar',
    talla: Talla3.Chica 
}


// MANERA ORDENADA DE TRABAJAR OBJETOS EN TS
type Persona = {
    readonly id: number,
    nombre: string,
    talla: Talla3,
}

const objeto4: Persona = { 
    id: 1, 
    nombre: 'Cesar',
    talla: Talla3.Chica 
}


// es muy útil y recomendado a la hora de trabajar con una base de datos
type Direccion = {
    numero: number,
    calle: string,
    pais: string
}

type Persona2 = {
    readonly id: number,
    nombre: string,
    talla: Talla3,
    direccion: Direccion
}

const objeto5: Persona2 = { 
    id: 1, 
    nombre: 'Cesar',
    talla: Talla3.Chica,
    direccion: {
        numero: 1010,
        calle: 'Cabral',
        pais: 'Mexico'
    }
}

//crear un arreglo que tenga objetos
const arr: Persona2[] = []