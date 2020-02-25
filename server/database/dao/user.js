import db from '../database';

const UserEntity = db.models.User;

export default class UserRepository {
  static async findUser(query, opts = {}) {
    return UserEntity.findOne({
      where: query,
      ...opts,
    });
  }

  static async findUsers(query, opts = {}) {
    return UserEntity.findAll({
      where: query,
      ...opts,
    });
  }

  static async findUsersAndCountAll(opts = {}) {
    return UserEntity.findAndCountAll({
      ...opts,
    });
  }

  static async updateUser(queryUpd, query, opts = {}) {
    return UserEntity.update(queryUpd, {
      where: query,
      ...opts,
    });
  }

  static async createUsers(users, opts = {}) {
    return UserEntity.bulkCreate(users, opts);
  }

  static async createUser(user, opts = {}) {
    return UserEntity.create(user, opts);
  }

  static async literal(query) {
    return db.sequelize.query(query);
  }
}
