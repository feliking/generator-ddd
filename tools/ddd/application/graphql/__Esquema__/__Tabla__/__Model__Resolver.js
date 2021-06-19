"use strict";

module.exports = function setupResolver(services, res) {
  const { __Model__Service } = services;

  return {
    Query: {
      __Tabla__s: async (_, args, context) => {
        let items = await __Model__Service.findAll(args);
        return res(items);
      },
      __Tabla__: async (_, args, context) => {
        let item = await __Model__Service.findById(args.id);
        return res(item);
      },
    },
    Mutation: {
      __Tabla__Add: async (_, args, context) => {
        args.__Tabla__._user_created = context.id_usuario;
        let item = await __Model__Service.createOrUpdate(args.__Tabla__);
        return res(item);
      },
      __Tabla__Edit: async (_, args, context) => {
        args.__Tabla__._user_updated = context.id_usuario;
        args.__Tabla__._updated_at = new Date();
        args.__Tabla__.id = args.id;
        let item = await __Model__Service.createOrUpdate(args.__Tabla__);
        return res(item);
      },
      __Tabla__Delete: async (_, args, context) => {
        let deleted = await __Model__Service.deleteItem(args.id);
        return { deleted: res(deleted) };
      },
    },
  };
};
