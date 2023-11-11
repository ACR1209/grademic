/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("kr3logx9ln0dyhn")

  collection.options = {
    "query": "SELECT\n  (ROW_NUMBER() OVER()) as id,\n    professor_id,\n    tag,\n    COUNT(tag) AS tag_count\nFROM (\n    SELECT\n        reviews.professor as professor_id,\n        trim(reviews.tags, ',') AS tag\n    FROM\n        reviews\n) AS split_tags\nGROUP BY\n    professor_id, tag\nORDER BY\n    professor_id, tag_count DESC;"
  }

  // remove
  collection.schema.removeField("5ep9sbwq")

  // remove
  collection.schema.removeField("v5eypdzc")

  // remove
  collection.schema.removeField("1exvg5st")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "9jddho8c",
    "name": "professor_id",
    "type": "json",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {}
  }))

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "3snvgnff",
    "name": "tag",
    "type": "json",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {}
  }))

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "jp1ja0cz",
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
    "query": "SELECT\n    (ROW_NUMBER() OVER()) as id,\n    reviews.professor,\n    reviews.tags,\n    COUNT(reviews.tags) AS tag_count\nFROM\n    reviews\nGROUP BY\n    reviews.professor, reviews.tags\nORDER BY\n    reviews.professor, reviews.tags DESC;"
  }

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "5ep9sbwq",
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
    "id": "v5eypdzc",
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

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "1exvg5st",
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
  collection.schema.removeField("9jddho8c")

  // remove
  collection.schema.removeField("3snvgnff")

  // remove
  collection.schema.removeField("jp1ja0cz")

  return dao.saveCollection(collection)
})
