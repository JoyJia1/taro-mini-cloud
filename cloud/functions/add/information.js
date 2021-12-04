module.exports = async db => {
  console.log('information')
  const collection = db.collection('Information')
  console.log('collection', collection);
  const res = await collection.add({
            data: {
              number: 222,
              date: 222,
              openid: 222
            }
          })
  return res
}
