import React, { useEffect } from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import NavHeader from '../components/navigation/NavHeader';
import NavMenu from '../components/navigation/NavMenu';
import Loading from '../components/common/Loading';
import { asyncUnsetAuthUser } from '../states/authUser/action';
import { asyncPreloadProcess } from '../states/isPreload/action';

const RequireAuth = () => {
  const { authUser = null, isPreload = false } = useSelector((states) => states);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(asyncPreloadProcess());
  }, [dispatch]);

  const logOut = () => {
    dispatch(asyncUnsetAuthUser());
  };

  if (isPreload) return null;

  if (!authUser) return <Navigate to="/login" />;

  return (
    <>
      <Loading />
      <NavHeader authUser={authUser} logOut={logOut} />
      <Outlet />
      <NavMenu />
    </>
  );
};

export default RequireAuth;
