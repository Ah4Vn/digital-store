'use client';
import PuffLoader from 'react-spinners/PuffLoader';

const LoadingPage = ({ loading }) => {
  const override = {
    display: 'block',
    margin: '15rem auto',
  };
  return (
    <PuffLoader
      color='#e11d48'
      loading={loading}
      cssOverride={override}
      size={100}
      // size={125}
      aria-label='Loading Spinner'
    />
  );
};

export default LoadingPage;
