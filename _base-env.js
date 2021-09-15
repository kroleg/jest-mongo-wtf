const { MongoMemoryServer }=  require( 'mongodb-memory-server');
async function setupMongo(that, {MongoClient, ObjectId}) {
    that.mongo = await MongoMemoryServer.create();
    const mongoUri = `${that.mongo.getUri()}appserver`;
    // set this up so all repos will connect to mongoUri
    that.global.process.env.MONGO_DB = mongoUri;
    that.global.ObjectId = ObjectId;
    const client = new MongoClient(mongoUri);
    await client.connect();
    that.global.mongoDb = client.db();
}
module.exports = { setupMongo }