const Role = require('../models').Role;

module.exports = {
    createRole: async (req, res) => {
        try {
          const docs = await Role.create({
            name: req.body.name
          });
          res.status(201).send({
            docs,
            errors: null,
            message: 'Role created successfully'            
        });
        } catch (error) {
          res.status(500).send({ 
            message: 'Internal Server Error', 
            error: error 
          });
        }
      },
    
      getRoleById: async (req, res) => {
        try {
          const docs = await Role.findByPk(req.params.id, {
            include: [],
          });
          if (!docs) {
            return res.status(404).send({ 
              status_response: 'Not Found',
              errors: 'Role not found'
            });
          }
          res.status(200).send(docs);
        } catch (error) {
          res.status(500).send({ 
            message: 'Internal Server Error', 
            error: error
          });
        }
      },

      getAllRole: async (req, res) => {
        try {
          const docs = await Role.findAll({
            limit: 10,
            include: [],
            order: [['createdAt', 'DESC']]
          });
          if (!docs || docs.length === 0) {
            return res.status(404).send({ 
              status_response: 'Not Found',
              errors: 'There is no role yet'
            });
          }
          res.status(200).send(docs);
        } catch (error) {
          res.status(500).send({ 
            message: 'Internal Server Error', 
            error: error
          });
        }
      },
    
      updateRole: async (req, res) => {
        try {
          const docs = await Role.findByPk(req.params.id);
          if (!docs) {
            return res.status(404).send({ 
              status_response: 'Bad Request',
              errors: 'Role not found'
             });
          }
          await docs.update({
            name: req.body.name
          });
          res.status(200).send({
            docs,
            errors: null,
            message: 'Role updated successfully'
          });
        } catch (error) {
          res.status(500).send({ 
            message: 'Internal Server Error', 
            error: error
          });
        }
      },
    
      deleteRole: async (req, res) => {
        try {
          const docs = await Role.findByPk(req.params.id);
          if (!docs) {
            return res.status(404).send({
              status_response: 'Not Found',
              errors: 'Role not found'
            });
          }
          await docs.destroy();
          res.status(204).send();
        } catch (error) {
          res.status(500).send({ 
            message: 'Internal Server Error', 
            error: error
          });
        }
      },
    
}