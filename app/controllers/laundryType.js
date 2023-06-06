const laundryType = require('../models').laundryType;

module.exports = {
    createLaundryType: async (req, res) => {
        try {
          const docs = await laundryType.create({
            itemName: req.body.itemName,
            price: req.body.price
        });
          res.status(201).send({
            docs,
            errors: null,
            message: 'Laundry type created successfully'            
        });
        } catch (error) {
            console.error('Error creating laundry type: ', error);
          res.status(500).send({
            message: 'Internal Server Error', 
            error: error 
        });
        }
      },
      
      getLaundryTypeById: async (req, res) => {
        try {
          const docs = await laundryType.findByPk(req.params.id, {
            include: [],
         });
          if (!docs) {
            return res.status(404).send({ 
                status_response: 'Not Found',
                errors: 'Laundry type not found' 
            });
          }
          res.status(200).send(docs);
        } catch (error) {
            res.status(500).send({ 
                message: "Internal Server Error",
                errors: error
            });
        }
      },

      getAllLaundryType: async (req, res) => {
        try {
          const docs = await laundryType.findAll({
            limit: 10,
            include: [],
            order: [['createdAt', 'DESC']]
         });
          if (!docs || docs.length === 0) {
            return res.status(404).send({ 
                status_response: 'Not Found',
                errors: 'There is no laundry type yet' 
            });
          }
          res.status(200).send(docs);
        } catch (error) {
            res.status(500).send({ 
                message: "Internal Server Error",
                errors: error
            });
        }
      },
      
      updateLaundryType: async (req, res) => {
        try {
          const docs = await laundryType.findByPk(req.params.id);
          if (!docs) {
            return res.status(404).send({ 
                status_response: 'Bad Request',
                message: 'Laundry type not found' 
            });
          }
          await docs.update({
            itemName: req.body.itemName,
            price: req.body.price
          });
          res.status(200).send({
			docs,
			errors: null,
            message: 'Laundry type updated successfully'
		});
        } catch (error) {
          res.status(500).send({ 
            message: "Internal Server Error",
			errors: error
        });
        }
      },
      
      deleteLaundryType: async (req, res) => {
        try {
          const docs = await laundryType.findByPk(req.params.id);
          if (!docs) {
            return res.status(404).send({ 
                status_response: 'Bad Request',
                message: 'Laundry type not found'
             });
          }
          await docs.destroy();
          res.status(204).send({
            status_response: 'Content Deleted',
            message: 'Laundry type deleted successfully'
          });
        } catch (error) {
            console.log(error);
          res.status(500).send({ 
            message: "Internal Server Error",
            errors: error
          });
        }
      },      
    
}

