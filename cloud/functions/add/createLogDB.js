module.exports = async (db, params) => {
  const collection = db.collection('number')
  const res = await collection.add(params)
  return res.data
}
