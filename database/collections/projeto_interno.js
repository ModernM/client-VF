const Projeto_Interno = require("../models/projeto_interno.js");

function insert(data, callback)
{
    const obj = {};

    if (typeof data.comissao !== "undefined") 
    obj["comissao"] = data.comissao;

    if (typeof data.voluntario !== "undefined") 
    obj["voluntario"] = data.voluntario;

    if (typeof data.nome !== "undefined") 
    obj["nome"] = data.nome;

    if (typeof data.pessoa_contacto !== "undefined") 
    obj["pessoa_contacto"] = data.pessoa_contacto;

    if (typeof data.email !== "undefined") 
    obj["email"] = data.email;

    if (typeof data.telemovel !== "undefined") 
    obj["telemovel"] = data.telemovel;

    if (typeof data.resumo_projeto !== "undefined") 
    obj["resumo_projeto"] = data.resumo_projeto;

    if (typeof data.area_intervencao !== "undefined") 
    obj["area_intervencao"] = data.area_intervencao;

    if (typeof data.publico_alvo !== "undefined") 
    obj["publico_alvo"] = data.publico_alvo;

    if (typeof data.objetivos !== "undefined") 
    obj["objetivos"] = data.objetivos;

    if (typeof data.descricao_atividades !== "undefined") 
    obj["descricao_atividades"] = data.descricao_atividades;

    if (typeof data.formacao_especifica !== "undefined") 
    obj["formacao_especifica"] = data.formacao_especifica;

    if (typeof data.tipo_formacao !== "undefined") 
    obj["tipo_formacao"] = data.tipo_formacao;

    if (typeof data.data_horario !== "undefined") 
    obj["data_horario"] = data.data_horario;

    if (typeof data.areas_interesse !== "undefined") 
    obj["areas_interesse"] = data.areas_interesse;

    if (typeof data.entidades_envolvidas !== "undefined") 
    obj["entidades_envolvidas"] = data.entidades_envolvidas;

    if (typeof data.observacoes !== "undefined") 
    obj["observacoes"] = data.observacoes;

    if (typeof data.candidatos !== "undefined") 
    obj["candidatos"] = data.candidatos;

    if (typeof data.participantes !== "undefined") 
    obj["participantes"] = data.participantes;

    if (typeof data.concluido !== "undefined") 
    obj["concluido"] = data.concluido;

    if (typeof data.em_destaque !== "undefined") 
    obj["em_destaque"] = data.em_destaque;

    if (typeof data.aprovado !== "undefined") 
    obj["aprovado"] = data.aprovado;

    if (typeof data.data_criacao !== "undefined") 
    obj["data_criacao"] = data.data_criacao;

    callback(insertObj(obj));
}

function insertObj(obj)
{
    let projeto_interno = new Projeto_Interno(obj);

    projeto_interno.save(function (error)
    {
        if (error) return console.error(error);
        console.log("INSERT Projeto_Interno:", obj);
    });

    return projeto_interno;
}

function update(data, callback)
{
    const filter = { _id: data._id };
    const dataToUpdate = {};

    if (typeof data.comissao !== "undefined") 
    dataToUpdate["comissao"] = data.comissao;

    if (typeof data.voluntario !== "undefined") 
    dataToUpdate["voluntario"] = data.voluntario;

    if (typeof data.nome !== "undefined") 
    dataToUpdate["nome"] = data.nome;

    if (typeof data.pessoa_contacto !== "undefined") 
    dataToUpdate["pessoa_contacto"] = data.pessoa_contacto;

    if (typeof data.email !== "undefined") 
    dataToUpdate["email"] = data.email;

    if (typeof data.telemovel !== "undefined") 
    dataToUpdate["telemovel"] = data.telemovel;

    if (typeof data.resumo_projeto !== "undefined") 
    dataToUpdate["resumo_projeto"] = data.resumo_projeto;

    if (typeof data.area_intervencao !== "undefined") 
    dataToUpdate["area_intervencao"] = data.area_intervencao;

    if (typeof data.publico_alvo !== "undefined") 
    dataToUpdate["publico_alvo"] = data.publico_alvo;

    if (typeof data.objetivos !== "undefined") 
    dataToUpdate["objetivos"] = data.objetivos;

    if (typeof data.descricao_atividades !== "undefined") 
    dataToUpdate["descricao_atividades"] = data.descricao_atividades;

    if (typeof data.formacao_especifica !== "undefined") 
    dataToUpdate["formacao_especifica"] = data.formacao_especifica;

    if (typeof data.tipo_formacao !== "undefined") 
    dataToUpdate["tipo_formacao"] = data.tipo_formacao;

    if (typeof data.data_horario !== "undefined") 
    dataToUpdate["data_horario"] = data.data_horario;

    if (typeof data.areas_interesse !== "undefined") 
    dataToUpdate["areas_interesse"] = data.areas_interesse;

    if (typeof data.entidades_envolvidas !== "undefined") 
    dataToUpdate["entidades_envolvidas"] = data.entidades_envolvidas;

    if (typeof data.observacoes !== "undefined") 
    dataToUpdate["observacoes"] = data.observacoes;

    if (typeof data.candidatos !== "undefined") 
    dataToUpdate["candidatos"] = data.candidatos;

    if (typeof data.participantes !== "undefined") 
    dataToUpdate["participantes"] = data.participantes;

    if (typeof data.concluido !== "undefined") 
    dataToUpdate["concluido"] = data.concluido;

    if (typeof data.em_destaque !== "undefined") 
    dataToUpdate["em_destaque"] = data.em_destaque;

    if (typeof data.aprovado !== "undefined") 
    dataToUpdate["aprovado"] = data.aprovado;

    if (typeof data.data_criacao !== "undefined") 
    dataToUpdate["data_criacao"] = data.data_criacao;

    Projeto_Interno.findOneAndUpdate(filter, { $set: dataToUpdate }, function(error, result)
    {
        if (error) console.log(error);
        else callback(result);
    });
}

function remove(id, callback)
{
    Projeto_Interno.findOneAndDelete({_id: id }, function(error, result)
    {
        if (error) console.log(error);
        else callback(result);
    });
}

function findAll(callback)
{
    Projeto_Interno.find({})
    .populate({path: "areas_interesse", model: "Area_Interesse"})
    .populate({path: "candidatos", model: "Voluntario", populate: {path: "concelho", path: "tipo_membro", path: "area_interesse", path: "razoes_voluntario"}})
    .populate({path: "participantes", model: "Voluntario", populate: {path: "concelho", path: "tipo_membro", path: "area_interesse", path: "razoes_voluntario"}})
    .exec(function(error, results)
    {
        if (error) return console.error(error);
        callback(results);
    });
}

function find(column, value, one, callback)
{
    let search = {};
    search[column] = value;

    if (one)
    {
        Projeto_Interno.findOne(search)
        .populate({path: "areas_interesse", model: "Area_Interesse"})
        .populate({path: "candidatos", model: "Voluntario", populate: {path: "concelho", path: "tipo_membro", path: "area_interesse", path: "razoes_voluntario"}})
        .populate({path: "participantes", model: "Voluntario", populate: {path: "concelho", path: "tipo_membro", path: "area_interesse", path: "razoes_voluntario"}})
        .exec(function(error, result)
        {
            if (error) return console.error(error);
            callback(result);
        });
    }
    else
    {
        Projeto_Interno.find(search)
        .populate({path: "areas_interesse", model: "Area_Interesse"})
        .populate({path: "candidatos", model: "Voluntario", populate: {path: "concelho", path: "tipo_membro", path: "area_interesse", path: "razoes_voluntario"}})
        .populate({path: "participantes", model: "Voluntario", populate: {path: "concelho", path: "tipo_membro", path: "area_interesse", path: "razoes_voluntario"}})
        .exec(function(error, results)
        {
            if (error) return console.error(error);
            callback(results);
        });
    }  
}

function model()
{
    return Projeto_Interno;
}

module.exports.insert = insert;
module.exports.insertObj = insertObj;
module.exports.update = update;
module.exports.remove = remove;
module.exports.findAll = findAll;
module.exports.find = find;
module.exports.model = model;