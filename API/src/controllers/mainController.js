const mainController = {
    index: (req, res) => {
        res.send('Estás en el INDEX!')
        console.log('Este es el index');
    },
    api: (req, res) => {
        res.send('Esta puede ser después la ruta de API')
    }
}

module.exports = mainController