import React from 'react';
import api from '../../services/api';

const useAxios = () => {
  const [buffer, setBuffer] = React.useState(null);
  const [error, setError] = React.useState(false);
  const [loading, setLoading] = React.useState(false);

  const request = React.useCallback(async (options) => {
    setError(false)
    setLoading(true)
  const resp = await api(options).then(r=>{
     setBuffer(r.data)
     setLoading(false)
     return r
   }).catch(e=>{
     setLoading(false)
     setError(e.message)
     return e
    })
    return resp
  }, []);

  return {
    buffer,
    loading,
    error,
    request,
  };
};

export default useAxios;
