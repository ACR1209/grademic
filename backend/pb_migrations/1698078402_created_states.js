/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const collection = new Collection({
    "id": "ef1zs78ak4htu6s",
    "created": "2023-10-23 16:26:42.321Z",
    "updated": "2023-10-23 16:26:42.321Z",
    "name": "states",
    "type": "base",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "0phdglcj",
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
  const collection = dao.findCollectionByNameOrId("ef1zs78ak4htu6s");

  return dao.deleteCollection(collection);
})
