
function insert(db, record) {
    return db.collection('any').insert(record);
}

function findOne(db, record) {
    return db.collection('any').findOne(record);
}

async function doTest (desc, ObjectId, db) {
    it(desc, async() => {
        const userIdObject = new ObjectId();
        await insert(db, {user: userIdObject} )
        const u = await findOne(db, { user: userIdObject })
        // console.log(u.user.inspect(), userIdObject.inspect())
        expect(u.user).toEqual(userIdObject)
    })

}
module.exports = { doTest }