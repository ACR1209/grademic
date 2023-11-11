/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("cmxltn2z4yyiyhc")

  collection.listRule = ""
  collection.viewRule = ""

  // remove
  collection.schema.removeField("vmld7tkq")

  // remove
  collection.schema.removeField("tao3jw6y")

  // remove
  collection.schema.removeField("ug5ukihr")

  // remove
  collection.schema.removeField("yigjckq0")

  // remove
  collection.schema.removeField("ggjynudm")

  // remove
  collection.schema.removeField("im0fkbh2")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "x4jjliou",
    "name": "firstNames",
    "type": "text",
    "required": true,
    "presentable": true,
    "unique": false,
    "options": {
      "min": 2,
      "max": 100,
      "pattern": ""
    }
  }))

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "jazrlnap",
    "name": "lastNames",
    "type": "text",
    "required": true,
    "presentable": true,
    "unique": false,
    "options": {
      "min": 1,
      "max": 100,
      "pattern": ""
    }
  }))

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "qd3zvykb",
    "name": "department",
    "type": "relation",
    "required": true,
    "presentable": false,
    "unique": false,
    "options": {
      "collectionId": "dixpaeki4z2h7gd",
      "cascadeDelete": true,
      "minSelect": null,
      "maxSelect": 1,
      "displayFields": null
    }
  }))

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "demsqmxb",
    "name": "subjects",
    "type": "relation",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {
      "collectionId": "cijnqi0lk4olq9l",
      "cascadeDelete": false,
      "minSelect": null,
      "maxSelect": null,
      "displayFields": null
    }
  }))

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "7fqngskg",
    "name": "average_quality_rating",
    "type": "json",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {}
  }))

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "s16ownk0",
    "name": "average_difficulty_rating",
    "type": "json",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {}
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("cmxltn2z4yyiyhc")

  collection.listRule = null
  collection.viewRule = null

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "vmld7tkq",
    "name": "firstNames",
    "type": "text",
    "required": true,
    "presentable": true,
    "unique": false,
    "options": {
      "min": 2,
      "max": 100,
      "pattern": ""
    }
  }))

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "tao3jw6y",
    "name": "lastNames",
    "type": "text",
    "required": true,
    "presentable": true,
    "unique": false,
    "options": {
      "min": 1,
      "max": 100,
      "pattern": ""
    }
  }))

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "ug5ukihr",
    "name": "department",
    "type": "relation",
    "required": true,
    "presentable": false,
    "unique": false,
    "options": {
      "collectionId": "dixpaeki4z2h7gd",
      "cascadeDelete": true,
      "minSelect": null,
      "maxSelect": 1,
      "displayFields": null
    }
  }))

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "yigjckq0",
    "name": "subjects",
    "type": "relation",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {
      "collectionId": "cijnqi0lk4olq9l",
      "cascadeDelete": false,
      "minSelect": null,
      "maxSelect": null,
      "displayFields": null
    }
  }))

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "ggjynudm",
    "name": "average_quality_rating",
    "type": "json",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {}
  }))

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "im0fkbh2",
    "name": "average_difficulty_rating",
    "type": "json",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {}
  }))

  // remove
  collection.schema.removeField("x4jjliou")

  // remove
  collection.schema.removeField("jazrlnap")

  // remove
  collection.schema.removeField("qd3zvykb")

  // remove
  collection.schema.removeField("demsqmxb")

  // remove
  collection.schema.removeField("7fqngskg")

  // remove
  collection.schema.removeField("s16ownk0")

  return dao.saveCollection(collection)
})
