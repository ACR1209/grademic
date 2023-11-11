/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const collection = new Collection({
    "id": "cmxltn2z4yyiyhc",
    "created": "2023-10-26 16:11:13.223Z",
    "updated": "2023-10-26 16:11:13.223Z",
    "name": "average_grades",
    "type": "view",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "it87472g",
        "name": "average_quality_rating",
        "type": "json",
        "required": false,
        "presentable": false,
        "unique": false,
        "options": {}
      },
      {
        "system": false,
        "id": "6y2fx9li",
        "name": "average_difficulty_rating",
        "type": "json",
        "required": false,
        "presentable": false,
        "unique": false,
        "options": {}
      }
    ],
    "indexes": [],
    "listRule": null,
    "viewRule": null,
    "createRule": null,
    "updateRule": null,
    "deleteRule": null,
    "options": {
      "query": "SELECT\n    p.id,\n    AVG(r.quality_rating) AS average_quality_rating,\n    AVG(r.difficulty_rating) AS average_difficulty_rating\nFROM professors p\nLEFT JOIN reviews r ON p.id = r.professor\nGROUP BY p.id;"
    }
  });

  return Dao(db).saveCollection(collection);
}, (db) => {
  const dao = new Dao(db);
  const collection = dao.findCollectionByNameOrId("cmxltn2z4yyiyhc");

  return dao.deleteCollection(collection);
})
