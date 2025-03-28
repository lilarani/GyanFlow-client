import { signOut } from 'firebase/auth';
import { baseQuery } from './../fetchApiQuery/fetchQuery';
import { auth } from '../../../firebase.config';
import { setUser } from '@/redux/authSlice';
export const interceptorQuery = async (args, api, extraOparations) => {
  try {
    const myApiResut = await baseQuery(args, api, extraOparations);
    console.log('respons ', myApiResut);

    if (myApiResut.status === 401 || myApiResut.status === 404) {
      await signOut(auth);
      api.dispatch(setUser(null))
    }
    return myApiResut;
  } catch (e) {
    return e.message;
  }
};
