/**
 * @jest-environment ./v4-env.js
 */

const { ObjectId } = require('mongodb4');
const { doTest } = require('./_base-test');

doTest('using ObjectId from current node context', ObjectId, globalThis.mongoDb);
doTest('using ObjectId passed from our custom jest env context', globalThis.ObjectId, globalThis.mongoDb);

// tests:
// it('using ObjectId from current node context', async () => {
//     const db = globalThis.mongoDb
//     const userIdObject = new ObjectId();
//     await insert(db, {user: userIdObject} )
//     const u = await findOne(db, { user: userIdObject })
//     // console.log(u.user.inspect(), userIdObject.inspect())
//     expect(u.user).toEqual(userIdObject)
// })
// it('using ObjectId passed from our custom jest env context', async () => {
//     const db = globalThis.mongoDb
//     // const db = globalThis.ObjectId
//     // const userIdObject = new globalThis.ObjectId();
//     const userIdObject = new ObjectId();
//     await insert(db, {user: userIdObject} )
//     const u = await findOne(db, { user: userIdObject })
//     // console.log(u.user.inspect(), userIdObject.inspect())
//     expect(u.user).toEqual(userIdObject)
// })

