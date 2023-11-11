/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("kr3logx9ln0dyhn")

  collection.options = {
    "query": "SELECT \n        (ROW_NUMBER() OVER()) as id,\n        reviews.professor,\n        json_group_array(t.value) as items,\n        COUNT(t.value) as tag_count\n    FROM reviews\n    LEFT JOIN json_each(reviews.tags) as t\n    GROUP BY reviews.professor, t.value\n    ORDER BY reviews.professor, tag_count DESC"
  }

  // remove
  collection.schema.removeField("wuunnocl")

  // remove
  collection.schema.removeField("h1izbkdm")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "5qou7st1",
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
    "id": "0vb0b7hk",
    "name": "items",
    "type": "json",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {}
  }))

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "uqjymwwg",
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
    "query": "SELECT \n    (ROW_NUMBER() OVER()) as id,\n    reviews.professor,\n    json_group_array(DISTINCT t.value) as items\nFROM reviews\nLEFT JOIN json_each(reviews.tags) as t\nGROUP BY reviews.professor"
  }

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

  // remove
  collection.schema.removeField("5qou7st1")

  // remove
  collection.schema.removeField("0vb0b7hk")

  // remove
  collection.schema.removeField("uqjymwwg")

  return dao.saveCollection(collection)
})
