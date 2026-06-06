use ('Coffee');

// db.sales.getIndexes()
// o/p[ { v: 2, key: { _id: 1 }, name: '_id_' } ]

// db.sales.find({
//    item: 'Americanos'
// })
// o/p{
//   _id: NumberInt('1'),
//   item: 'Americanos',
//   price: NumberInt('5'),
//   size: 'Short',
//   quantity: NumberInt('22'),
//   date: ISODate('2022-01-15T08:00:00.000Z')
// }{
//   _id: NumberInt('5'),
//   item: 'Americanos',
//   price: NumberInt('10'),
//   size: 'Grande',
//   quantity: NumberInt('12'),
//   date: ISODate('2022-02-18T21:06:00.000Z')
// }{
//   _id: NumberInt('8'),
//   item: 'Americanos',
//   price: NumberInt('10'),
//   size: 'Grande',
//   quantity: NumberInt('21'),
//   date: ISODate('2022-02-22T14:09:00.000Z')
// }{
//   _id: NumberInt('10'),
//   item: 'Americanos',
//   price: NumberInt('8'),
//   size: 'Tall',
//   quantity: NumberInt('15'),
//   date: ISODate('2022-02-25T14:09:00.000Z')
// }

// db.sales.createIndex({ date: 1 })
// o/pdate_1

// db.sales.getIndexes()
// o/p[
//   {
//     v: NumberInt('2'),
//     key: {
//       _id: NumberInt('1')
//     },
//     name: '_id_'
//   },
//   {
//     v: NumberInt('2'),
//     key: {
//       date: NumberInt('1')
//     },
//     name: 'date_1'
//   }
// ]

// db.sales.insertOne({ email: "test@example.com", name: "John" })
// db.sales.insertOne({ email: "test@example.com", name: "Jane" })

// db.users.insertMany([
//    { email:  "john@test.com", name: "john"},
//    { email:  "jane@test.com", name: "jane"},
// ]);

// db.users.createIndex({email:1},{unique:true});
// o/p email_1

// db.users.insertOne(
//    { email:  "john@test.com", name: "johny"}
// );
// 

// db.users.insertMany([
//    { email:  "john@test.com", name: "john"},
//    { email:  "john@test.com", name: "johny"},
//    { email:  "jane@test.com", name: "jane"},
// ])
// db.users.createIndex({email: 1},{unique:true})
// MongoServerError: Index build failed: 95f78956-d5d0-4882-bfe0-2d856df18c61: Collection mflix.users ( 6da472db-2884-4608-98b6-95a003b4f29c ) :: caused by :: E11000 duplicate key error collection: mflix.users index: email_1 dup key: { email: "john@test.com" }

// db.users.deleteOne({name:'johny', email: 'john@test.com'});
// o/p{
//   acknowledged: true,
//   deletedCount: NumberInt('1')
// }

// db.users.createIndex({email: 1},{unique:true})
// o/p email_1

// db.locations.insertOne({
// 	address: "Downtown San Jose, CA, USA",
// 	lat: 37.335480,
// 	long: -121.893028
// })
// o/p{
//   acknowledged: true,
//   insertedId: ObjectId('6a2428dcef40cd70adb309b1')
// }

// db.locations.createIndex({
// 	lat: 1,
// 	long: 1
// },{ unique: true });
// o/p lat_1_long_1

// db.locations.insertOne({
// 	address: "Dev Bootcamp, San Jose, CA, USA",
// 	lat: 37.335480,
// 	long: -122.893028
// })
// o/p{
//   acknowledged: true,
//   insertedId: ObjectId('6a2429197bf9eb436baa76c8')
// }

// db.locations.insertOne({
// 	address: "Central San Jose, CA, USA",
// 	lat: 37.335480,
// 	long: -121.893028
// })
// o/p MongoServerError: E11000 duplicate key error collection: mflix.locations index: lat_1_long_1 dup key: { lat: 37.33548, long: -121.893028 }

// db.sales.createIndex({ email: 1}, {unique: true});

// db.sales.find()
// o/p{
//   _id: NumberInt('1'),
//   item: 'Americanos',
//   price: NumberInt('5'),
//   size: 'Short',
//   quantity: NumberInt('22'),
//   name: 'Aarav Sharma',
//   email: 'aarav.sharma@gmail.com',
//   date: ISODate('2022-01-15T08:00:00.000Z')
// }{
//   _id: NumberInt('2'),
//   item: 'Cappuccino',
//   price: NumberInt('6'),
//   size: 'Short',
//   quantity: NumberInt('12'),
//   name: 'Priya Verma',
//   email: 'priya.verma@gmail.com',
//   date: ISODate('2022-01-16T09:00:00.000Z')
// }{
//   _id: NumberInt('3'),
//   item: 'Lattes',
//   price: NumberInt('15'),
//   size: 'Grande',
//   quantity: NumberInt('25'),
//   name: 'Rohan Gupta',
//   email: 'rohan.gupta@gmail.com',
//   date: ISODate('2022-01-16T09:05:00.000Z')
// }{
//   _id: NumberInt('4'),
//   item: 'Mochas',
//   price: NumberInt('25'),
//   size: 'Tall',
//   quantity: NumberInt('11'),
//   name: 'Ananya Singh',
//   email: 'ananya.singh@gmail.com',
//   date: ISODate('2022-02-17T08:00:00.000Z')
// }{
//   _id: NumberInt('5'),
//   item: 'Americanos',
//   price: NumberInt('10'),
//   size: 'Grande',
//   quantity: NumberInt('12'),
//   name: 'Karan Mehta',
//   email: 'karan.mehta@gmail.com',
//   date: ISODate('2022-02-18T21:06:00.000Z')
// }{
//   _id: NumberInt('6'),
//   item: 'Cappuccino',
//   price: NumberInt('7'),
//   size: 'Tall',
//   quantity: NumberInt('20'),
//   name: 'Sneha Patel',
//   email: 'sneha.patel@gmail.com',
//   date: ISODate('2022-02-20T10:07:00.000Z')
// }{
//   _id: NumberInt('7'),
//   item: 'Lattes',
//   price: NumberInt('25'),
//   size: 'Tall',
//   quantity: NumberInt('30'),
//   name: 'Rahul Kapoor',
//   email: 'rahul.kapoor@gmail.com',
//   date: ISODate('2022-02-21T10:08:00.000Z')
// }{
//   _id: NumberInt('8'),
//   item: 'Americanos',
//   price: NumberInt('10'),
//   size: 'Grande',
//   quantity: NumberInt('21'),
//   name: 'Neha Joshi',
//   email: 'neha.joshi@gmail.com',
//   date: ISODate('2022-02-22T14:09:00.000Z')
// }{
//   _id: NumberInt('9'),
//   item: 'Cappuccino',
//   price: NumberInt('10'),
//   size: 'Grande',
//   quantity: NumberInt('17'),
//   name: 'Vikram Rao',
//   email: 'vikram.rao@gmail.com',
//   date: ISODate('2022-02-23T14:09:00.000Z')
// }{
//   _id: NumberInt('10'),
//   item: 'Americanos',
//   price: NumberInt('8'),
//   size: 'Tall',
//   quantity: NumberInt('15'),
//   name: 'Pooja Nair',
//   email: 'pooja.nair@gmail.com',
//   date: ISODate('2022-02-25T14:09:00.000Z')}

// db.sales.getIndexes()
// o/p[
//   {
//     v: NumberInt('2'),
//     key: {
//       _id: NumberInt('1')
//     },
//     name: '_id_'
//   },
//   {
//     v: NumberInt('2'),
//     key: {
//       email: NumberInt('1')
//     },
//     name: 'email_1',
//     unique: true
//   }
// ]

//DROP
// db.sales.dropIndex('name')
// o/p { nIndexesWas: 3, ok: 1 }

// db.sales.getIndexes()
// o/p [
//   { v: 2, key: { _id: 1 }, name: '_id_' },
//   { v: 2, key: { email: 1 }, name: 'email_1', unique: true },
//   { v: 2, key: { name: 1, email: 1 }, name: 'name_1_email_1' }
// ]

// db.sales.createIndex({runtime: -1})
// o/p runtime_-1

// db.sales.getIndexes()
//o/p [
//   { v: 2, key: { _id: 1 }, name: '_id_' },
//   { v: 2, key: { email: 1 }, name: 'email_1', unique: true },
//   { v: 2, key: { name: 1, email: 1 }, name: 'name_1_email_1' },
//   { v: 2, key: { runtime: -1 }, name: 'runtime_-1' }
// ]

// db.sales.dropIndex({runtime: -1});
//o/p { nIndexesWas: 4, ok: 1 }

// db.sales.getIndexes()
// [
//   { v: 2, key: { _id: 1 }, name: '_id_' },
//   { v: 2, key: { email: 1 }, name: 'email_1', unique: true },
//   { v: 2, key: { name: 1, email: 1 }, name: 'name_1_email_1' }
// ]


