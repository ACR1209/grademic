/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("jpgjop3mtnxm3d4")

  collection.listRule = "verified=true"

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("jpgjop3mtnxm3d4")

  collection.listRule = ""

  return dao.saveCollection(collection)
})
