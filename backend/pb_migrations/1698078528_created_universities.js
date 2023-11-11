/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const collection = new Collection({
    "id": "dzpobfkqukmwi8r",
    "created": "2023-10-23 16:28:48.124Z",
    "updated": "2023-10-23 16:28:48.124Z",
    "name": "universities",
    "type": "base",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "3otzobbl",
        "name": "name",
        "type": "text",
        "required": true,
        "presentable": true,
        "unique": false,
        "options": {
          "min": 2,
          "max": 150,
          "pattern": ""
        }
      },
      {
        "system": false,
        "id": "ob1lpzrs",
        "name": "state",
        "type": "relation",
        "required": true,
        "presentable": false,
        "unique": false,
        "options": {
          "collectionId": "ef1zs78ak4htu6s",
          "cascadeDelete": true,
          "minSelect": null,
          "maxSelect": 1,
          "displayFields": null
        }
      },
      {
        "system": false,
        "id": "lgnds8u6",
        "name": "city",
        "type": "text",
        "required": true,
        "presentable": false,
        "unique": false,
        "options": {
          "min": 2,
          "max": 100,
          "pattern": ""
        }
      },
      {
        "system": false,
        "id": "s4qxkhmy",
        "name": "website",
        "type": "url",
        "required": true,
        "presentable": false,
        "unique": false,
        "options": {
          "exceptDomains": [],
          "onlyDomains": []
        }
      }
    ],
    "indexes": [],
    "listRule": null,
    "viewRule": null,
    "createRule": null,
    "updateRule": null,
    "deleteRule": null,
    "options": {}
  });

  return Dao(db).saveCollection(collection);
}, (db) => {
  const dao = new Dao(db);
  const collection = dao.findCollectionByNameOrId("dzpobfkqukmwi8r");

  return dao.deleteCollection(collection);
})
