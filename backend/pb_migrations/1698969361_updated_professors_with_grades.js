/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("cmxltn2z4yyiyhc")

  collection.options = {
    "query": "SELECT\n    p.id,\n    p.firstNames,\n    p.lastNames,\n    p.department,\n    p.subjects,\n    p.created,\n    p.updated,\n    p.isVerified,\n    AVG(r.quality_rating) AS average_quality_rating,\n    AVG(r.difficulty_rating) AS average_difficulty_rating,\n    COUNT(r.id) AS n_reviews,\n    SUM(CASE WHEN r.would_take_again = 1 THEN 1 ELSE 0 END) AS \n    would_take_again_count\nFROM professors p\nLEFT JOIN reviews r ON p.id = r.professor\nGROUP BY p.id;"
  }

  // remove
  collection.schema.removeField("jwwipoyz")

  // remove
  collection.schema.removeField("cq8yrans")

  // remove
  collection.schema.removeField("ckumwitj")

  // remove
  collection.schema.removeField("mqlcnpsi")

  // remove
  collection.schema.removeField("soodgmi9")

  // remove
  collection.schema.removeField("z18nsks5")

  // remove
  collection.schema.removeField("udlbhxr0")

  // remove
  collection.schema.removeField("v0ze3kws")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "ixmo9jy2",
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
    "id": "nffi0apf",
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
    "id": "drb4utsa",
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
    "id": "vpibsfjx",
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
    "id": "oayf6lfo",
    "name": "isVerified",
    "type": "bool",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {}
  }))

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "lrbsqu9b",
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
    "id": "y4la7kzc",
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
    "id": "unjeyuyz",
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
    "id": "npqgofa0",
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
    "query": "SELECT\n    p.id,\n    p.firstNames,\n    p.lastNames,\n    p.department,\n    p.subjects,\n    p.created,\n    p.updated,\n    AVG(r.quality_rating) AS average_quality_rating,\n    AVG(r.difficulty_rating) AS average_difficulty_rating,\n    COUNT(r.id) AS n_reviews,\n    SUM(CASE WHEN r.would_take_again = 1 THEN 1 ELSE 0 END) AS \n    would_take_again_count\nFROM professors p\nLEFT JOIN reviews r ON p.id = r.professor\nGROUP BY p.id;"
  }

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "jwwipoyz",
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
    "id": "cq8yrans",
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
    "id": "ckumwitj",
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
    "id": "mqlcnpsi",
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
    "id": "soodgmi9",
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
    "id": "z18nsks5",
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
    "id": "udlbhxr0",
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
    "id": "v0ze3kws",
    "name": "would_take_again_count",
    "type": "json",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {}
  }))

  // remove
  collection.schema.removeField("ixmo9jy2")

  // remove
  collection.schema.removeField("nffi0apf")

  // remove
  collection.schema.removeField("drb4utsa")

  // remove
  collection.schema.removeField("vpibsfjx")

  // remove
  collection.schema.removeField("oayf6lfo")

  // remove
  collection.schema.removeField("lrbsqu9b")

  // remove
  collection.schema.removeField("y4la7kzc")

  // remove
  collection.schema.removeField("unjeyuyz")

  // remove
  collection.schema.removeField("npqgofa0")

  return dao.saveCollection(collection)
})
