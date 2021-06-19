"use strict";

const { getQuery } = require("../../lib/util");
const Repository = require("../Repository");

module.exports = function __Tabla__Repository(models, Sequelize) {
  const { __Tabla__ } = models;
  const Op = Sequelize.Op;

  function findAll(params = {}) {
    let query = getQuery(params);
    query.where = {};

    return __Tabla__.findAndCountAll(query);
  }

  return {
    findAll,
    findById: (id) => Repository.findById(id, __Tabla__),
    createOrUpdate: (item, t) => Repository.createOrUpdate(item, __Tabla__, t),
    deleteItem: (id, t) => Repository.deleteItem(id, __Tabla__, t),
  };
};
