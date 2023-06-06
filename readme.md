___
Base Project
___


BUAT SATU PROJECT API DENGAN FEATURE BERIKUT:

1. ADA API/ROUTE UNTUK CRUD UNTUK MASING-MASING TABLE

2. PROSES SYNC DATABASE MENGGUNAKAN FILE MIGRASI

3. ADA RELASI ANTAR TABLE DAN IMPLEMENTASI DI MODEL CLASS

4. ADA HOOK/TRIGGER DI SETIAP MODEL UNTUK PROSES AUDIT LOG

5. PROJECT NYA MENGGUNAKAN KONFIGURASI BERUPA ENVIRONTMENT FILE (.env)

6. DATABASE MENGGUNAKAN MYSQL

7. MENGGUNAKAN DESIGN PATTERN MVC (MODEL, VIEW(x), CONTROLLER)

8. API MEMAKAI JWT AUTHENTICATION 

9. SEMUA API / ROUTE WAJIB MENGGUNAKAN TOKEN UNTUK AKSES NYA

10. ADA API UNTUK LOGIN & SIGN UP

11. TEMA NYA LAUNDRY-API

 

*** PENGUMPULAN TUGAS: 

 - DI BUAT DALAM REPOSITORI DENGAN NAMA FOLDER LAUNDRY-API


___
Database
___

User : name, email, password
Role : name
userRoles : userId, roleId
Laundry Type : itemName, price
orderStatus : status
orderDetail : orderId, laundryTypeId, qty, status
Payment Type : itemName
orderPayment : paymentTypeId, status
Order : userId, orderDetailId, orderStatusId, orderPaymentId

___
Relations
___

User :  - OnetoMany => Order
        - OnetoMany => UserRoles
Role : - ManytoMany => User
       - ManytoMany => UserRoles
UserRoles : - ManytoMany => User
            - ManytoMany => Role
LaundryType : OnetoMany => OrderDetail
OrderStatus : OnetoMany => Order
OrderDetail : - ManytoOne => Order
              - ManytoOne => LaundryType
PaymentType : OnetoMany => OrderPayment
OrderPayment : - OnetoMany => Order
               - ManytoOne => PaymentType
Order : - OnetoOne => OrderDetail
        - OnetoOne => OrderStatus
        - OnetoOne => OrderPayment

___
Sequelize Model
___

```php
User:
npx sequelize-cli model:generate --name User --attributes name:string,email:string,password:string

Role:
npx sequelize-cli model:generate --name Role --attributes name:string

userRoles:
npx sequelize-cli model:generate --name userRoles --attributes userId:integer,roleId:integer

laundryType:
npx sequelize-cli model:generate --name laundryType --attributes itemName:string,price:integer

orderStatus:
npx sequelize-cli model:generate --name orderStatus --attributes status:string

orderDetail:
npx sequelize-cli model:generate --name orderDetail --attributes orderId:integer,laundryTypeId:integer,qty:integer,status:string

PaymentType:
npx sequelize-cli model:generate --name PaymentType --attributes itemName:string

orderPayment:
npx sequelize-cli model:generate --name orderPayment --attributes paymentTypeId:integer,status:string

Order:
npx sequelize-cli model:generate --name Order --attributes userId:integer,orderDetailId:integer,orderStatusId:integer,orderPaymentId:integer

```

___
Sequelize Relations
___

```js
// User model
User.hasMany(models.Order, { foreignKey: 'userId' });
User.belongsToMany(models.userRoles, { through: 'userRoles', foreignKey: 'userId' });

// Role model
Role.belongsToMany(models.userRoles, { through: 'userRoles', foreignKey: 'roleId' });

// userRoles model
User.belongsToMany(models.Role, { through: 'userRoles', foreignKey: 'userId' });
Role.belongsToMany(models.User, { through: 'userRoles', foreignKey: 'roleId' });

// Order model
Order.belongsTo(models.User, { foreignKey: 'userId' });
Order.hasOne(models.orderDetail, { foreignKey: 'orderId' });
Order.hasOne(models.orderStatus, { foreignKey: 'orderId' });
Order.hasOne(models.orderPayment, { foreignKey: 'orderId' });

// OrderDetail model
orderDetail.belongsTo(models.Order, { foreignKey: 'orderId' });
orderDetail.belongsTo(models.laundryType, { foreignKey: 'laundryTypeId' });

// OrderStatus model
orderStatus.belongsTo(models.Order, { foreignKey: 'orderId' });

// OrderPayment model
orderPayment.belongsTo(models.Order, { foreignKey: 'orderId' });
orderPayment.belongsTo(models.paymentType, { foreignKey: 'paymentTypeId' });

// PaymentType model
paymentType.hasMany(models.orderPayment, { foreignKey: 'paymentTypeId' });

// LaundryType model
laundryType.hasMany(models.orderDetail, { foreignKey: 'laundryTypeId' });
```
___
Done
___

- Order Crud (halfway done)
- Role Crud
- Laundry Type Crud
- Payment Type Crud