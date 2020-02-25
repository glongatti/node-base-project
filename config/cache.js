import asyncRedis from 'async-redis';
import config from './config';

class Cache {
  constructor() {
    this.connect();
    this.online = false;
  }

  connect() {
    this.client = asyncRedis.createClient(config.redisPort, config.redisHost);
    this.client.on('ready', () => {
      this.online = true;
    });
    this.client.on('error', () => {
      this.online = false;
    });
  }

  set(key, value, ttl = null) {
    if (!this.online) return null;
    return this.client.set(key, value, 'EX', ttl || config.defaultTTLcache);
  }

  get(key) {
    if (!this.online) return null;
    return this.client.get(key);
  }
}
const cache = new Cache();
export default cache;
