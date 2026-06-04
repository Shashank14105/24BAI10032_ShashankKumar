//-----------------------------------------$mul operator to update documents------------------------------------------

use("Vitcampus");
// db.products.drop()

// db.products.updateOne({ _id: 5 }, { $mul: { price: 1.1 } })
// o/p{
//   acknowledged: true,
//   insertedId: null,
//   matchedCount: NumberInt('1'),
//   modifiedCount: NumberInt('1'),
//   upsertedCount: NumberInt('0')
// }

// db.products.find({
//     _id: 5
// }, {
//     name: 1,
//     price: 1
// })
// o/p{
//   _id: NumberInt('5'),
//   name: 'SmartPhone',
//   price: Double('658.9000000000001')
// }

// db.products.updateOne({
//     _id: 1
// }, {
//     $mul: {
//         "storage.0": 2,
//         "storage.1": 2,
//         "storage.2": 2
//     }
// })
// o/p{
//   acknowledged: true,
//   insertedId: null,
//   matchedCount: NumberInt('1'),
//   modifiedCount: NumberInt('1'),
//   upsertedCount: NumberInt('0')
// }

// db.products.findOne({ _id: 1 }, { name: 1, storage: 1 })
// o/p{
//   _id: NumberInt('1'),
//   name: 'xPhone',
//   storage: [
//     NumberInt('128'),
//     NumberInt('256'),
//     NumberInt('512')
//   ]
// }

// db.products.updateMany({}, {
//     $mul: {
//         "spec.ram": 2
//     }
// })
// o/p{
//   acknowledged: true,
//   insertedId: null,
//   matchedCount: NumberInt('5'),
//   modifiedCount: NumberInt('5'),
//   upsertedCount: NumberInt('0')
// }

// db.products.find({}, { name: 1, "spec.ram": 1 })
// o/p[
//   { _id: 1, name: 'xPhone', spec: { ram: 8 } },
//   { _id: 2, name: 'xTablet', spec: { ram: 32 } },
//   { _id: 3, name: 'SmartTablet', spec: { ram: 24 } },
//   { _id: 4, name: 'SmartPad', spec: { ram: 16 } },
//   { _id: 5, name: 'SmartPhone', spec: { ram: 8 } }
// ]

//--------------------------------------$unset operator to remove a field from a document---------------------------------------------------
// db.products.updateOne({
//     _id: 1
// }, {
//     $unset: {
//         price: ""
//     }
// })
// o/p{
//   acknowledged: true,
//   insertedId: null,
//   matchedCount: NumberInt('1'),
//   modifiedCount: NumberInt('1'),
//   upsertedCount: NumberInt('0')
// }

// db.products.find({}, { name: 1, price: 1 })
// o/p[
//   { _id: 1, name: 'xPhone' },
//   { _id: 2, name: 'xTablet', price: 899 },
//   { _id: 3, name: 'SmartTablet', price: 899 },
//   { _id: 4, name: 'SmartPad', price: 699 },
//   { _id: 5, name: 'SmartPhone', price: 599 }
// ]

// db.products.updateMany({}, {
//     $unset: {
//         "spec.ram": ""
//     }
// })
// o/p{
//   acknowledged: true,
//   insertedId: null,
//   matchedCount: 5,
//   modifiedCount: 5,
//   upsertedCount: 0
// }

// db.products.find({}, {
//     spec: 1
// })
// o/p
// [
//   { _id: 1, spec: { screen: 6.5, cpu: 2.66 } },
//   { _id: 2, spec: { screen: 9.5, cpu: 3.66 } },
//   { _id: 3, spec: { screen: 9.7, cpu: 3.66 } },
//   { _id: 4, spec: { screen: 9.7, cpu: 1.66 } },
//   { _id: 5, spec: { screen: 5.7, cpu: 1.66 } }
// ]

// db.products.updateMany({}, { $unset: { "storage.0": "" } })
// o/p{
//   acknowledged: true,
//   insertedId: null,
//   matchedCount: 5,
//   modifiedCount: 5,
//   upsertedCount: 0
// }


// db.products.find({}, {
//     name: 1,
//     storage: 1,
//     releaseDate: 1,
//     spec: 1
// })
// o/p[
//   { _id: 1, name: 'xPhone', storage: [ null, 128, 256 ] },
//   { _id: 2, name: 'xTablet', storage: [ null, 256, 512 ] },
//   { _id: 3, name: 'SmartTablet', storage: [ null, 64, 128 ] },
//   { _id: 4, name: 'SmartPad', storage: [ null, 256, 1024 ] },
//   { _id: 5, name: 'SmartPhone', storage: [ null, 256 ] }
// ]

//-------------------------------------------$rename field operator------------------------------------------------------

// db.products.updateMany({}, {
//     $rename: {
//         nmea: "name"
//     }
// })
// o/p{
//   acknowledged: true,
//   insertedId: null,
//   matchedCount: NumberInt('5'),
//   modifiedCount: NumberInt('0'),
//   upsertedCount: NumberInt('0')
// }

// db.products.find({}, { name: 1 })
// o/p[
//   { _id: 1, name: 'xPhone' },
//   { _id: 2, name: 'xTablet' },
//   { _id: 3, name: 'SmartTablet' },
//   { _id: 4, name: 'SmartPad' },
//   { _id: 5, name: 'SmartPhone' }
// ]

// db.products.updateMany({}, {
//     $rename: {
//         "spec.screen": "spec.screenSize"
//     }
// })
// o/p{
//   acknowledged: true,
//   insertedId: null,
//   matchedCount: 5,
//   modifiedCount: 0,
//   upsertedCount: 0
// }

// db.products.find({}, {
//     spec: 1
// })
// o/p[
//   { _id: 1, spec: { ram: 4, cpu: 2.66, screenSize: 6.5 } },
//   { _id: 2, spec: { ram: 16, cpu: 3.66, screenSize: 9.5 } },
//   { _id: 3, spec: { ram: 12, cpu: 3.66, screenSize: 9.7 } },
//   { _id: 4, spec: { ram: 8, cpu: 1.66, screenSize: 9.7 } },
//   { _id: 5, spec: { ram: 4, cpu: 1.66, screenSize: 5.7 } }
// ]

// db.products.updateOne({
//  _id: 1
// }, 
// {
//     $rename: {
//         "spec.cpu": "cpu"
//     }
// })
// {
//   acknowledged: true,
//   insertedId: null,
//   matchedCount: NumberInt('1'),
//   modifiedCount: NumberInt('1'),
//   upsertedCount: NumberInt('0')
// }

// db.products.find({ _id: 1})
// o/p[
//   {
//     _id: 1,
//     price: 799,
//     releaseDate: ISODate("2011-05-14T00:00:00.000Z"),
//     spec: { ram: 4, screenSize: 6.5 },
//     color: [ 'white', 'black' ],
//     storage: [ 64, 128, 256 ],
//     name: 'xPhone',
//     cpu: 2.66
//   }
// ]

// db.products.updateOne({
//     _id: 2
// }, {
//     $rename: {
//         "color": "storage"
//     }
// })
// o/p{
//   acknowledged: true,
//   insertedId: null,
//   matchedCount: NumberInt('1'),
//   modifiedCount: NumberInt('1'),
//   upsertedCount: NumberInt('0')
// }

// db.products.find({ _id: 2 })
// o/p[
//   {
//     _id: 2,
//     price: 899,
//     releaseDate: ISODate("2011-09-01T00:00:00.000Z"),
//     spec: { ram: 16, cpu: 3.66, screenSize: 9.5 },
//     storage: [ 'white', 'black', 'purple' ],
//     name: 'xTablet'
//   }
// ]

// MongoDB Upsert
//--------------------------------------------------

// db.products.updateMany(
//     {_id: 6 },
//     { $set: {price: 999} }
// )
// o/p{
//   acknowledged: true,
//   insertedIds: {
//     '0': NumberInt('1'),
//     '1': NumberInt('2'),
//     '2': NumberInt('3'),
//     '3': NumberInt('4'),
//     '4': NumberInt('5')
//   }
// }

// db.products.updateMany(
//     { _id: 6 },
//     { $set: {price: 999} },
//     { upsert: true}
// )
// o/p{
//   acknowledged: true,
//   insertedId: NumberInt('6'),
//   matchedCount: NumberInt('0'),
//   modifiedCount: NumberInt('0'),
//   upsertedCount: NumberInt('1')
// }

// db.products.find({_id:6})
// o/p{  _id: NumberInt('6'),
//   price: NumberInt('999')}

//------------------------------------------------DeleteOne---------------------------------------------------------

// db.products.deleteOne({ _id: 1 })
// o/p{
//   acknowledged: true,
//   deletedCount: NumberInt('1')
// }

// db.products.deleteOne({})
// o/p{
//   acknowledged: true,
//   deletedCount: NumberInt('1')
// }

//------------------------------------------------Delete Many------------------------------------------------------
// db.products.deleteMany({ price: 899 })
// o/p{ "acknowledged" : true, "deletedCount" : 2 }
// db.products.deleteMany({})
// o/p{ acknowledged: true, deletedCount: 3 }

//