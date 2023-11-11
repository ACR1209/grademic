/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("cmxltn2z4yyiyhc")

  collection.options = {
    "query": "SELECT\n    p.id,\n    p.firstNames,\n    p.lastNames,\n    p.department,\n    p.subjects,\n    p.created,\n    p.updated,\n    AVG(r.quality_rating) AS average_quality_rating,\n    AVG(r.difficulty_rating) AS average_difficulty_rating,\n    COUNT(r.id) AS n_reviews,\n    SUM(CASE WHEN r.would_take_again = 1 THEN 1 ELSE 0 END) AS would_take_again_count\nFROM professors p\nLEFT JOIN reviews r ON p.id = r.professor\nGROUP BY p.id;"
  }

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

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "mvqw1vcb",
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
    "id": "w7squjgj",
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
    "id": "oax4uxrr",
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
    "id": "av1oob4e",
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
    "id": "my1odqbp",
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
    "id": "t95rbp0r",
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
    "id": "iezddjt7",
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

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "5ranqa5q",
    "name": "would_take_again_count",
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

  collection.options = {
    "query": "SELECT\n    p.id,\n    p.firstNames,\n    p.lastNames,\n    p.department,\n    p.subjects,\n    p.created,\n    p.updated,\n    AVG(r.quality_rating) AS average_quality_rating,\n    AVG(r.difficulty_rating) AS average_difficulty_rating,\n    COUNT(r.id) AS n_reviews\nFROM professors p\nLEFT JOIN reviews r ON p.id = r.professor\nGROUP BY p.id;"
  }

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

  // remove
  collection.schema.removeField("mvqw1vcb")

  // remove
  collection.schema.removeField("w7squjgj")

  // remove
  collection.schema.removeField("oax4uxrr")

  // remove
  collection.schema.removeField("av1oob4e")

  // remove
  collection.schema.removeField("my1odqbp")

  // remove
  collection.schema.removeField("t95rbp0r")

  // remove
  collection.schema.removeField("iezddjt7")

  // remove
  collection.schema.removeField("5ranqa5q")

  return dao.saveCollection(collection)
})
