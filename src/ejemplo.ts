const sumar = (n1 : number, n2 : number) => {
    const resp = n1 + n2
    return resp
}

const sumarAsync = async (n1 : number, n2 : number) => {
    const resp = n1 + n2

    return resp
}

const resultado = sumar(4, 9) // sincrona
console.log(resultado)

const resp = await sumarAsync(2, 4)