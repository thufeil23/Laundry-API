const paymentType = require('../models').paymentType;

module.exports = {
    createPaymentType: async (req, res) => {
        try {
          const docs = await paymentType.create({
            itemName: req.body.itemName,
            price: req.body.price
        });
          res.status(201).send({
            docs,
            errors: null,
            message: 'Payment Type created successfully'            
        });
        } catch (error) {
            console.error('Error creating laundry type: ', error);
          res.status(500).send({
            message: 'Internal Server Error', 
            error: error 
        });
        }
      },
      
      getPaymentTypeById: async (req, res) => {
        try {
          const docs = await paymentType.findByPk(req.params.id, {
            limit: 10,
            include: [],
            order: [['createdAt', 'DESC']]
         });
          if (!docs) {
            return res.status(404).send({ 
                status_response: 'Not Found',
                errors: 'Payment Type not found' 
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

      getAllPaymentType: async (req, res) => {
        try {
          const docs = await paymentType.findAll({
            limit: 10,
            include: [],
            order: [['createdAt', 'DESC']]
         });
          if (!docs || docs.length === 0) {
            return res.status(404).send({ 
                status_response: 'Not Found',
                errors: 'There is no payment type yet' 
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
      
      updatePaymentType: async (req, res) => {
        try {
          const docs = await paymentType.findByPk(req.params.id);
          if (!docs) {
            return res.status(404).send({ 
                status_response: 'Bad Request',
                message: 'Payment Type not found' 
            });
          }
          await docs.update({
            itemName: req.body.itemName,
            price: req.body.price
          });
          res.status(200).send({
			docs,
			errors: null,
            message: 'Payment Type updated successfully'
		});
        } catch (error) {
          res.status(500).send({ 
            message: "Internal Server Error",
			errors: error
        });
        }
      },
      
      deletePaymentType: async (req, res) => {
        try {
          const docs = await paymentType.findByPk(req.params.id);
          if (!docs) {
            return res.status(404).send({ 
                status_response: 'Bad Request',
                message: 'Payment Type not found'
             });
          }
          await docs.destroy();
          res.status(204).send({
            status_response: 'Content Deleted',
            message: 'Payment Type deleted successfully'
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

