/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("cmxltn2z4yyiyhc")

  collection.options = {
    "query": "SELECT\n    p.id,\n    p.firstNames,\n    p.lastNames,\n    p.department,\n    p.subjects,\n    p.created,\n    p.updated,\n    AVG(r.quality_rating) AS average_quality_rating,\n    AVG(r.difficulty_rating) AS average_difficulty_rating,\n    COUNT(r.id) AS n_reviews\nFROM professors p\nLEFT JOIN reviews r ON p.id = r.professor\nGROUP BY p.id;"
  }

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

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "yy6sguiz",
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
    "id": "md8acclv",
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
    "id": "j3wwkxi4",
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
    "id": "pc5pusjn",
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
    "id": "z2p46t1e",
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
    "id": "skjhsy7x",
    "name": "average_difficulty_rating",
    "type": "json",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {}
  }))

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "ocdmfqnv",
    "name": "n_reviews",
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

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("cmxltn2z4yyiyhc")

  collection.options = {
    "query": "SELECT\n    p.id,\n    p.firstNames,\n    p.lastNames,\n    p.department,\n    p.subjects,\n    p.created,\n    p.updated,\n    AVG(r.quality_rating) AS average_quality_rating,\n    AVG(r.difficulty_rating) AS average_difficulty_rating\nFROM professors p\nLEFT JOIN reviews r ON p.id = r.professor\nGROUP BY p.id;"
  }

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

  // remove
  collection.schema.removeField("yy6sguiz")

  // remove
  collection.schema.removeField("md8acclv")

  // remove
  collection.schema.removeField("j3wwkxi4")

  // remove
  collection.schema.removeField("pc5pusjn")

  // remove
  collection.schema.removeField("z2p46t1e")

  // remove
  collection.schema.removeField("skjhsy7x")

  // remove
  collection.schema.removeField("ocdmfqnv")

  return dao.saveCollection(collection)
})
