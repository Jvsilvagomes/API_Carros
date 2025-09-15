import dados from "../models/dados.js";

const { carros } = dados;
let resultado = carros;

const getAllCarros = (req, res) => {
    res.status(200).json({
        total: resultado.length,
        barbies: resultado
    });
}

const getCarrosById = (req, res) => {
    const id = parseInt(req.params.id);

    const carro = carros.find(c => c.id === parseInt(id));

    if(!carro){
        res.status(404).json({
            success: false,
            message: "Carro não existe"
        })
    }

    res.status(200).json({
        total: resultado.length,
        carro: carro
    })
}

export { getAllCarros, getCarrosById }
