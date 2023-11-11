/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("jpgjop3mtnxm3d4")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "yyaa0gjw",
    "name": "verified",
    "type": "bool",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {}
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("jpgjop3mtnxm3d4")

  // remove
  collection.schema.removeField("yyaa0gjw")

  return dao.saveCollection(collection)
})
