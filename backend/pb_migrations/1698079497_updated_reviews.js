/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("6bmt8f52xuvqfys")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "nm5w9mqn",
    "name": "tags",
    "type": "relation",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {
      "collectionId": "fl378eo46ih6e5p",
      "cascadeDelete": false,
      "minSelect": null,
      "maxSelect": 3,
      "displayFields": null
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("6bmt8f52xuvqfys")

  // remove
  collection.schema.removeField("nm5w9mqn")

  return dao.saveCollection(collection)
})
