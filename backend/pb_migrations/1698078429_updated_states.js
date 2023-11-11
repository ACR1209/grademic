/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("ef1zs78ak4htu6s")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "2hulthgw",
    "name": "country",
    "type": "relation",
    "required": true,
    "presentable": false,
    "unique": false,
    "options": {
      "collectionId": "jkc9qr32bsd5qfv",
      "cascadeDelete": false,
      "minSelect": null,
      "maxSelect": 1,
      "displayFields": null
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("ef1zs78ak4htu6s")

  // remove
  collection.schema.removeField("2hulthgw")

  return dao.saveCollection(collection)
})
