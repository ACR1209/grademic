/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("6bmt8f52xuvqfys")

  // update
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "jait1nbw",
    "name": "dislikes",
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

  // update
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
})
