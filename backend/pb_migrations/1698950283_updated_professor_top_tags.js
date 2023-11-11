/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("kr3logx9ln0dyhn")

  collection.options = {
    "query": "SELECT \n        (ROW_NUMBER() OVER()) as id,\n        reviews.professor,\n        t.value as tag_id,\n        tags.name as tag_name,\n        COUNT(t.value) as tag_count\nFROM reviews\nLEFT JOIN json_each(reviews.tags) as t\nLEFT JOIN tags ON t.value = tags.id\nGROUP BY reviews.professor, t.value\nORDER BY reviews.professor, tag_count DESC"
  }

  // remove
  collection.schema.removeField("m6uv8vut")

  // remove
  collection.schema.removeField("jixzzwym")

  // remove
  collection.schema.removeField("4phhqkk4")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "g5fvnxgy",
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
    "id": "m2kh5h3w",
    "name": "tag_id",
    "type": "json",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {}
  }))

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "t8wna4ry",
    "name": "tag_name",
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
    "id": "zs6v95sb",
    "name": "tag_count",
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
  const collection = dao.findCollectionByNameOrId("kr3logx9ln0dyhn")

  collection.options = {
    "query": "SELECT \n        (ROW_NUMBER() OVER()) as id,\n        reviews.professor,\n        t.value as tag_id,\n        COUNT(t.value) as tag_count\nFROM reviews\nLEFT JOIN json_each(reviews.tags) as t\nLEFT JOIN tags ON t.value = tags.id\nGROUP BY reviews.professor, t.value\nORDER BY reviews.professor, tag_count DESC"
  }

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "m6uv8vut",
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
    "id": "jixzzwym",
    "name": "tag_id",
    "type": "json",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {}
  }))

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "4phhqkk4",
    "name": "tag_count",
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
  collection.schema.removeField("g5fvnxgy")

  // remove
  collection.schema.removeField("m2kh5h3w")

  // remove
  collection.schema.removeField("t8wna4ry")

  // remove
  collection.schema.removeField("zs6v95sb")

  return dao.saveCollection(collection)
})
