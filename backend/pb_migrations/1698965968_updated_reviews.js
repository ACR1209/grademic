/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("6bmt8f52xuvqfys")

  // update
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "qqtw9ttf",
    "name": "body",
    "type": "text",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {
      "min": 1,
      "max": 500,
      "pattern": ""
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("6bmt8f52xuvqfys")

  // update
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "qqtw9ttf",
    "name": "body",
    "type": "text",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {
      "min": 1,
      "max": 250,
      "pattern": ""
    }
  }))

  return dao.saveCollection(collection)
})
