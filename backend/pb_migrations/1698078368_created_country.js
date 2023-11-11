/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const collection = new Collection({
    "id": "jkc9qr32bsd5qfv",
    "created": "2023-10-23 16:26:08.873Z",
    "updated": "2023-10-23 16:26:08.873Z",
    "name": "country",
    "type": "base",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "qlzrk4no",
        "name": "name",
        "type": "text",
        "required": true,
        "presentable": true,
        "unique": false,
        "options": {
          "min": 2,
          "max": 100,
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
  const collection = dao.findCollectionByNameOrId("jkc9qr32bsd5qfv");

  return dao.deleteCollection(collection);
})
