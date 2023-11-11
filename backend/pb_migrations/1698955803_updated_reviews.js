/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("6bmt8f52xuvqfys")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "w1oesr2o",
    "name": "likes",
    "type": "number",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {
      "min": 0,
      "max": null,
      "noDecimal": true
    }
  }))

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "jait1nbw",
    "name": "disklikes",
    "type": "number",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {
      "min": 0,
      "max": null,
      "noDecimal": true
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("6bmt8f52xuvqfys")

  // remove
  collection.schema.removeField("w1oesr2o")

  // remove
  collection.schema.removeField("jait1nbw")

  return dao.saveCollection(collection)
})
