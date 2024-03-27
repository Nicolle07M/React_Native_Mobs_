import { UserLocalRepositoryImp } from '../../../Data/repositories/UserLocalrepository';

const userLocalRepository = new UserLocalRepositoryImp();
const { getUser } = userLocalRepository;

export const GetUserLocalUseCase = async () => {
  return await getUser();
}
