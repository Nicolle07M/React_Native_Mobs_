import { UserLocalRepositoryImp } from '../../../Data/repositories/UserLocalrepository';
import { User } from '../../entities/User';

const userLocalRepository = new UserLocalRepositoryImp();
const { save } = userLocalRepository;

export const SaveUserLocalUseCase = async (user: User) => {
  return await save(user);
}
