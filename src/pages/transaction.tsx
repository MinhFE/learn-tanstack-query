import React from 'react';
import { useTransaction } from '../hooks';

const Transaction: React.FC = () => {
  const { isLoading, isError, error } = useTransaction('aqbbx1vj1lqrtv3zy');

  if (isLoading) return <div>Loading transactions...</div>;
  if (isError) return <div>Error: {error?.message || 'Failed to load transactions.'}</div>;

  return (
    <div>
      <h2>Transactions</h2>
    </div>
  );
};

export default Transaction;
