/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("jkc9qr32bsd5qfv")

  collection.name = "countries"

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("jkc9qr32bsd5qfv")

  collection.name = "country"

  return dao.saveCollection(collection)
})
