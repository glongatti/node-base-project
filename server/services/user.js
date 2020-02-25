import UserRepository from '../database/dao/user';

export default class UserService {
  static async getUsername(userId) {
    let name = null;
    try {
      name = await UserRepository.findUser({ userId }, {
        attributes: ['name'],
      });
    } catch (err) {
      throw err;
    }
    name = name.toJSON();
    return name;
  }

  static async getProfile(userId) {
    let profileId = null;
    profileId = await UserRepository.findUser({ userId }, { attributes: ['profileId'] });
    profileId = profileId.toJSON();
    return profileId;
  }

  static async getAdvertiser(userId) {
    let advertiserId = null;
    try {
      advertiserId = await UserRepository.findUser({ userId }, {
        attributes: ['advertiserId'],
      });
    } catch (err) {
      throw err;
    }
    advertiserId = advertiserId.toJSON();
    return advertiserId;
  }
}
