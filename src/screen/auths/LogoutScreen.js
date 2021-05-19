import React, { useEffect } from 'react';
import { useHistory, Redirect } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { logoutAction } from '../../store/actions/AuthAction';

const LogoutScreen = () => {
  const history = useHistory();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(logoutAction());
  }, []);
  return <Redirect to="/" />;
};

export default LogoutScreen;
