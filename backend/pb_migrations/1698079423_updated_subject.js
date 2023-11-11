/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("cijnqi0lk4olq9l")

  collection.name = "subjects"

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("cijnqi0lk4olq9l")

  collection.name = "subject"

  return dao.saveCollection(collection)
})
