import { useQuery } from '@tanstack/react-query';
import type { UseQueryOptions } from '@tanstack/react-query';
import { userApi, type UserProfile } from '../api';

type UseProfileOptions = Omit<UseQueryOptions<UserProfile>, 'queryKey' | 'queryFn'>;

export function useProfile(options?: UseProfileOptions) {
  return useQuery<UserProfile>({
    queryKey: ['profile'],
    queryFn: () => userApi.getProfile(),
    ...options,
  });
}
