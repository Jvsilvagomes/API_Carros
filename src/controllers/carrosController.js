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

const createCarros = (req, res) => {
    const { nome, modelo, ano, cor, qtdeVitorias, velocidadeMaxima, equipe } = req.body

    if(!nome || !modelo || !ano || !cor){
        return res.status(400).json({
            success: false,
            message: "Nome modelo ano e cor são obrigatórios"
        })
    }

    const novoCarro = {
        id: carros.length + 1,
        nome: nome,
        modelo: modelo,
        ano: parseInt(ano),
        cor: cor,
        qtdeVitorias: parseInt(qtdeVitorias),
        velocidadeMaxima: parseInt(velocidadeMaxima),
        equipe: equipe
    }

    carros.push(novoCarro);

    res.status(201).json({
        success: true,
        message: "Novo carro criado com sucesso!",
        carro: novoCarro
    })
}

const deleteCarros = (req, res) => {
    const id = parseInt(req.params.id);

    if( isNaN(id)){
        return req.status(400).json({
            success: false, 
            message: "O id deve ser válido!!"
        })
    }

    const carroRemovido = carros.find(b => b.id === id);

    if(!carroRemovido){
        return res.status(404).json({
            success: false,
            message: `Carro com o id ${id} não encontrado!`
        })
    }

    const carrosFiltrados = carros.filter(carro => carros.id !== id);
    
    carros.splice(0, carros.length, ...carrosFiltrados)

    res.status(200).json({
        success: false,
        message: `O carro ${id} foi DELETADO com sucesso!`
    })
}
export { getAllCarros, getCarrosById, createCarros, deleteCarros }
