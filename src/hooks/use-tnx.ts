import { useQuery } from '@tanstack/react-query';
import type { UseQueryOptions } from '@tanstack/react-query';
import { tnxApi, type Transaction } from '../api';

type UseTransactionOptions = Omit<UseQueryOptions<Transaction>, 'queryKey' | 'queryFn' | 'enabled' | 'refetchInterval'>;

export function useTransaction(tnxId?: string, options?: UseTransactionOptions) {
  return useQuery<Transaction>({
    queryKey: ['transaction', tnxId],
    queryFn: () => tnxApi.getTransactionDetails(tnxId!),
    enabled: Boolean(tnxId),
    refetchInterval: (data) => (data.state.data?.status === 'processing' ? 3000 : false),
    ...options,
  });
}
