/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("dzpobfkqukmwi8r")

  // update
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "ob1lpzrs",
    "name": "state",
    "type": "relation",
    "required": true,
    "presentable": false,
    "unique": false,
    "options": {
      "collectionId": "ef1zs78ak4htu6s",
      "cascadeDelete": true,
      "minSelect": null,
      "maxSelect": 1,
      "displayFields": null
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("dzpobfkqukmwi8r")

  // update
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "ob1lpzrs",
    "name": "state",
    "type": "relation",
    "required": true,
    "presentable": true,
    "unique": false,
    "options": {
      "collectionId": "ef1zs78ak4htu6s",
      "cascadeDelete": true,
      "minSelect": null,
      "maxSelect": 1,
      "displayFields": null
    }
  }))

  return dao.saveCollection(collection)
})
