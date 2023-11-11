/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const collection = new Collection({
    "id": "cijnqi0lk4olq9l",
    "created": "2023-10-23 16:39:59.672Z",
    "updated": "2023-10-23 16:39:59.672Z",
    "name": "subject",
    "type": "base",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "4fs3rlmb",
        "name": "name",
        "type": "text",
        "required": true,
        "presentable": true,
        "unique": false,
        "options": {
          "min": 1,
          "max": 200,
          "pattern": ""
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
  const collection = dao.findCollectionByNameOrId("cijnqi0lk4olq9l");

  return dao.deleteCollection(collection);
})
