const verifySignUpController = require('../controllers').verifySignUp;
const verifySignController = require('../controllers').verifySign;
const roleController = require('../controllers').role;
const orderController = require('../controllers').order;
const laundryTypeController = require('../controllers').laundryType;
const paymentTypeController = require('../controllers').paymentType;
const verifyJwtTokenController = require('../controllers').verifyJwtToken;

module.exports = function (app) {

	//User Auth
	app.post('/api/auth/signup',
		[
			verifySignUpController.checkDuplicateUserNameOrEmail,
			verifySignUpController.checkRolesExisted
		],
		(req, res) => {
			verifySignController.signup(req, res);
	});

	app.post('/api/auth/signin', (req, res) => {
		verifySignController.signin(req, res);
	});

	//Role
	app.post('/api/role', [
		verifyJwtTokenController.verifyToken,
		verifyJwtTokenController.isAdmin
	], (req, res) => {
		roleController.createRole(req, res);
	});
	app.get('/api/role/:id', [
		verifyJwtTokenController.verifyToken,
		verifyJwtTokenController.isAdmin
	], (req, res) => {
		roleController.getRoleById(req, res);
	});
	app.get('/api/role', [
		verifyJwtTokenController.verifyToken,
		verifyJwtTokenController.isAdmin
	] , (req, res) => {
		roleController.getAllRole(req, res);
	})
	app.patch('/api/role/:id', [
		verifyJwtTokenController.verifyToken,
		verifyJwtTokenController.isAdmin
	], (req, res) => {
		roleController.updateRole(req, res);
	});
	app.delete('/api/role/:id', [
		verifyJwtTokenController.verifyToken,
		verifyJwtTokenController.isAdmin
	], (req, res) => {
		roleController.deleteRole(req, res);
	});

	//Laundry Type
	app.post('/api/laundrytype', [
		verifyJwtTokenController.verifyToken,
		verifyJwtTokenController.isAdmin
	], (req, res) => {
		laundryTypeController.createLaundryType(req, res);
	});
	app.get('/api/laundrytype/:id', [
		verifyJwtTokenController.verifyToken,
		verifyJwtTokenController.isAdmin
	], (req, res) => {
		laundryTypeController.getLaundryTypeById(req, res);
	});
	app.get('/api/laundrytype', [
		verifyJwtTokenController.verifyToken,
		verifyJwtTokenController.isAdmin
	], (req, res) => {
		laundryTypeController.getAllLaundryType(req, res);
	})
	app.patch('/api/laundrytype/:id', [
		verifyJwtTokenController.verifyToken,
		verifyJwtTokenController.isAdmin
	], (req, res) => {
		laundryTypeController.updateLaundryType(req, res);
	});
	app.delete('/api/laundrytype/:id', [
		verifyJwtTokenController.verifyToken,
		verifyJwtTokenController.isAdmin
	], (req, res) => {
		laundryTypeController.deleteLaundryType(req, res);
	});
	
	//Payment Type
	app.post('/api/paymenttype', [
		verifyJwtTokenController.verifyToken,
		verifyJwtTokenController.isAdmin
	], (req, res) => {
		paymentTypeController.createPaymentType(req, res);
	});
	app.get('/api/paymenttype/:id', [
		verifyJwtTokenController.verifyToken,
		verifyJwtTokenController.isAdmin
	], (req, res) => {
		paymentTypeController.getPaymentTypeById(req, res);
	});
	app.get('/api/paymenttype', [
		verifyJwtTokenController.verifyToken,
		verifyJwtTokenController.isAdmin
	], (req, res) => {
		paymentTypeController.getAllPaymentType(req, res);
	});
	app.patch('/api/paymenttype/:id', [
		verifyJwtTokenController.verifyToken,
		verifyJwtTokenController.isAdmin
	], (req, res) => {
		paymentTypeController.updatePaymentType(req, res);
	});
	app.delete('/api/paymenttype/:id', [
		verifyJwtTokenController.verifyToken,
		verifyJwtTokenController.isAdmin
	], (req, res) => {
		paymentTypeController.deletePaymentType(req, res);
	});
	
	//Orders
	app.post('/api/order', [
		verifyJwtTokenController.verifyToken,
		verifyJwtTokenController.isAdmin
	], (req, res) => {
		orderController.createOrder(req, res);
	});
	app.get('/api/paymenttype/:id', [
		verifyJwtTokenController.verifyToken,
		verifyJwtTokenController.isAdmin
	], (req, res) => {
		paymentTypeController.getPaymentTypeById(req, res);
	});
	app.get('/api/paymenttype', [
		verifyJwtTokenController.verifyToken,
		verifyJwtTokenController.isAdmin
	], (req, res) => {
		paymentTypeController.getAllPaymentType(req, res);
	});
	app.patch('/api/paymenttype/:id', [
		verifyJwtTokenController.verifyToken,
		verifyJwtTokenController.isAdmin
	], (req, res) => {
		paymentTypeController.updatePaymentType(req, res);
	});
	app.delete('/api/paymenttype/:id', [
		verifyJwtTokenController.verifyToken,
		verifyJwtTokenController.isAdmin
	], (req, res) => {
		paymentTypeController.deletePaymentType(req, res);
	});
}