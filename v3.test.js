/**
 * @jest-environment ./v3-env.js
 */

const { ObjectId } = require('mongodb3');
const { doTest } = require('./_base-test');

doTest('using ObjectId from current node context', ObjectId, globalThis.mongoDb);

// so test is basically this:
// it('', async () => {
//     const db = globalThis.mongoDb
//     const userIdObject = new ObjectId();
//     await insert(db, {user: userIdObject} )
//     const u = await findOne(db, { user: userIdObject })
//     expect(u.user).toEqual(userIdObject)
// })
