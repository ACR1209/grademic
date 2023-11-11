/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const collection = new Collection({
    "id": "kr3logx9ln0dyhn",
    "created": "2023-11-02 18:09:50.698Z",
    "updated": "2023-11-02 18:09:50.698Z",
    "name": "professor_top_tags",
    "type": "view",
    "system": false,
    "schema": [
      {
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
      },
      {
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
      },
      {
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
      }
    ],
    "indexes": [],
    "listRule": null,
    "viewRule": null,
    "createRule": null,
    "updateRule": null,
    "deleteRule": null,
    "options": {
      "query": "SELECT\n    (ROW_NUMBER() OVER()) as id,\n    reviews.professor,\n    reviews.tags,\n    COUNT(reviews.tags) AS tag_count\nFROM\n    reviews\nGROUP BY\n    reviews.professor, reviews.tags\nORDER BY\n    reviews.professor, reviews.tags DESC;"
    }
  });

  return Dao(db).saveCollection(collection);
}, (db) => {
  const dao = new Dao(db);
  const collection = dao.findCollectionByNameOrId("kr3logx9ln0dyhn");

  return dao.deleteCollection(collection);
})
