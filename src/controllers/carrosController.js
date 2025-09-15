import dados from "../models/dados.js";

const { carros } = dados;
let resultado = carros;

const getAllCarros = (req, res) => {
    res.status(200).json({
        total: resultado.length,
        barbies: resultado
    });
}


export {getAllCarros}
