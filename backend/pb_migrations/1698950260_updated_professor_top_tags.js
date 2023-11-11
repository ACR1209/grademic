/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("kr3logx9ln0dyhn")

  collection.options = {
    "query": "SELECT \n        (ROW_NUMBER() OVER()) as id,\n        reviews.professor,\n        t.value as tag_id,\n        COUNT(t.value) as tag_count\nFROM reviews\nLEFT JOIN json_each(reviews.tags) as t\nLEFT JOIN tags ON t.value = tags.id\nGROUP BY reviews.professor, t.value\nORDER BY reviews.professor, tag_count DESC"
  }

  // remove
  collection.schema.removeField("iwjf0jco")

  // remove
  collection.schema.removeField("wicf02ec")

  // remove
  collection.schema.removeField("dpss60un")

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

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("kr3logx9ln0dyhn")

  collection.options = {
    "query": "SELECT \n        (ROW_NUMBER() OVER()) as id,\n        reviews.professor,\n        t.value as tag_id,\n        COUNT(t.value) as tag_count\n    FROM reviews\n    LEFT JOIN json_each(reviews.tags) as t\n    GROUP BY reviews.professor, t.value\n    ORDER BY reviews.professor, tag_count DESC"
  }

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "iwjf0jco",
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
    "id": "wicf02ec",
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
    "id": "dpss60un",
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
  collection.schema.removeField("m6uv8vut")

  // remove
  collection.schema.removeField("jixzzwym")

  // remove
  collection.schema.removeField("4phhqkk4")

  return dao.saveCollection(collection)
})
