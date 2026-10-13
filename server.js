const express = require('express');
const app = express();

const PORT = 3000;
app.use(express.json());

const vacancies = [
    {id:1, title: "Desarrollador Bancked Jr", company: "Tech Andes", node: "remoto", salary:900 },
    {id:2, title: "Analista de Datos", company: "DataSur", node: "hibrida", salary:1500 }
];

// Endopint -get

app.get('/vacancies', (req, res)=>{
    res.json(vacancies);
});

// endopoint -post
app.post('/vacancies', (req, res)=>{
    const {title, company, mode, salary }= req.body;
    if (!title || !company ){
        return res.status(400).json({error: "Titutlo y empresa son obligatorios"});
    }

    // nuevo objeto para el arreglo
    const newVacant = { id: vacancies.length + 1, title, company, mode, salary };
    vacancies.push(newVacant);
    res.status(201).json(newVacant);
});


    // enciende el servidor
    if (require.main === module){
app.listen(PORT, ()=>{
    console.log(`Servidor escuchando en http://localhost:${PORT}`);
});
    }

    modelu .exports = app;
