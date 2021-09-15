// the only differend between v4 and v3
const { MongoClient, ObjectId } =  require( 'mongodb3');

const NodeEnvironment=  require( 'jest-environment-node');
const {setupMongo} = require('./_base-env')

class CustomEnvironment extends NodeEnvironment {
  async setup() {
    await super.setup();
    await setupMongo(this, {MongoClient,ObjectId})
  }
}

module.exports = CustomEnvironment;
