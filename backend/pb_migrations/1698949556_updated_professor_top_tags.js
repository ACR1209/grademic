/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("kr3logx9ln0dyhn")

  collection.options = {
    "query": "SELECT \n  (ROW_NUMBER() OVER()) as id,\n  reviews.professor,\n  reviews.tags\nFROM\n  reviews\nGROUP BY\n  professor\n"
  }

  // remove
  collection.schema.removeField("oxf2hf7k")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "dj9mjj4v",
    "name": "professor",
    "type": "relation",
    "required": true,
    "presentable": false,
    "unique": false,
    "options": {
      "collectionId": "jpgjop3mtnxm3d4",
      "cascadeDelete": true,
      "minSelect": null,
      "maxSelect": 1,
      "displayFields": null
    }
  }))

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "ldhxlize",
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
  const collection = dao.findCollectionByNameOrId("kr3logx9ln0dyhn")

  collection.options = {
    "query": "SELECT \n  (ROW_NUMBER() OVER()) as id,\n  reviews.professor \nFROM\n  reviews\n"
  }

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "oxf2hf7k",
    "name": "professor",
    "type": "relation",
    "required": true,
    "presentable": false,
    "unique": false,
    "options": {
      "collectionId": "jpgjop3mtnxm3d4",
      "cascadeDelete": true,
      "minSelect": null,
      "maxSelect": 1,
      "displayFields": null
    }
  }))

  // remove
  collection.schema.removeField("dj9mjj4v")

  // remove
  collection.schema.removeField("ldhxlize")

  return dao.saveCollection(collection)
})
