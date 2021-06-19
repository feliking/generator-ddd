"use strict";

const debug = require("debug")("app:service:__Tabla__");
const Service = require("../Service");

module.exports = function __Tabla__Service(repositories, valueObjects, res) {
  const { __Model__Repository } = repositories;
  const {
		// Importación de value-objects(validaciones), ejemplo NombreModeloCampo
	} = valueObjects;

  async function findAll(params = {}) {
    debug("Lista de __Model__|filtros");

    return Service.findAll(params, __Model__Repository, res, "__Model__");
  }

  async function findById(id) {
    debug("Buscando __Tabla__ por ID", id);

    return Service.findById(id, __Model__Repository, res, "__Model__");
  }

  async function createOrUpdate(data) {
    debug("Crear o actualizar __Tabla__");

    //validate(data); // Descomentar si se va a realizar una validación de campos

    return Service.createOrUpdate(data, __Model__Repository, res, "__Model__");
  }

  async function deleteItem(id) {
    debug("Eliminando __Tabla__");

    return Service.deleteItem(id, __Model__Repository, res, "__Model__");
  }

  function validate(data) {
    Service.validate(data, {
      // Campos a validar, ejemplo: campo: NombreModeloCampo,
    });
  }

  return {
    findAll,
    findById,
    createOrUpdate,
    deleteItem,
  };
};
