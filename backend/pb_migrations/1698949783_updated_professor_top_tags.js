/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("kr3logx9ln0dyhn")

  collection.options = {
    "query": "SELECT \n    (ROW_NUMBER() OVER()) as id,\n    reviews.professor,\n    json_group_array(DISTINCT t.value) as items\nFROM reviews\nLEFT JOIN json_each(reviews.tags) as t\nGROUP BY reviews.professor"
  }

  // remove
  collection.schema.removeField("kmhxvimg")

  // remove
  collection.schema.removeField("4uhu0rmg")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "wuunnocl",
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
    "id": "h1izbkdm",
    "name": "items",
    "type": "json",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {}
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("kr3logx9ln0dyhn")

  collection.options = {
    "query": "SELECT \n  (ROW_NUMBER() OVER()) as id,\n  reviews.professor,\n  COUNT(DISTINCT reviews.tags) as tags_occurence\nFROM\n  reviews\nGROUP BY\n  professor\n"
  }

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "kmhxvimg",
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
    "id": "4uhu0rmg",
    "name": "tags_occurence",
    "type": "number",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {
      "min": null,
      "max": null,
      "noDecimal": false
    }
  }))

  // remove
  collection.schema.removeField("wuunnocl")

  // remove
  collection.schema.removeField("h1izbkdm")

  return dao.saveCollection(collection)
})
