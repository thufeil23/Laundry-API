const { Order, orderDetail, orderStatus, orderPayment  } = require('../models');

module.exports = {
  createOrder: async (req, res) => {
    try {
      // Create the order Detail
      const docsOrderDetail = await orderDetail.create({ 
        orderId: req.orderId,
        laundryTypeId: req.body.laundryTypeId,
        qty: req.body.qty,
      });
      // Create the order payment
      const docsOrderPayment = await orderPayment.create({
        orderId: req.orderId,
        paymentTypeId: req.body.paymentTypeId
      })

      // Create the order
      const docsOrder = await Order.create({ 
        userId: req.userId,
        orderPaymentId: req.body.orderPaymentId,
       });
       res.status(201).send({
         docsOrder,
         errors: null,
         message: 'Order created successfully'
       });
    } catch (error) {
      console.error('Error creating order: ', error);
      res.status(500).send({
          message: 'Internal Server Error', 
          error: error 
      });
    }
  },

  updateOrder: async (req, res) => {
    try {
      const { orderId } = req.params;
      const { orderDetails } = req.body;

      // Update the order details
      await orderDetail.destroy({ where: { orderId } });

      await orderDetail.bulkCreate(
        orderDetails.map((detail) => ({
          orderId,
          laundryTypeId: detail.laundryTypeId,
          qty: detail.qty,
          status: detail.status,
        }))
      );

      // Fetch the updated order with its details
      const updatedOrder = await Order.findByPk(orderId, {
        include: [
          {
            model: orderDetail,
            include: [laundryType],
          },
        ],
      });

      const response = {
        status_response: 'OK',
        order: updatedOrder,
        errors: null,
      };

      res.status(200).send(response);
    } catch (error) {
      res.status(500).send({
        message: 'Internal Server Error',
        errors: error,
      });
    }
  },

  deleteOrder: async (req, res) => {
    try {
      const { orderId } = req.params;

      // Delete the order
      await Order.destroy({ where: { id: orderId } });

      res.status(204).send();
    } catch (error) {
      res.status(500).send({
        message: 'Internal Server Error',
        errors: error,
      });
    }
  },
  
  listOrders: async (req, res) => {
    try {
      const orders = await Order.findAll({
        include: [
          {
            model: orderDetail,
            include: [laundryType],
          },
        ],
        order: [['createdAt', 'DESC']],
      });

      const response = {
        status_response: 'OK',
        count: orders.length,
        orders: orders,
        errors: null,
      };

      res.status(200).send(response);
    } catch (error) {
      res.status(500).send({
        message: 'Internal Server Error',
        errors: error,
      });
    }
  },
};
