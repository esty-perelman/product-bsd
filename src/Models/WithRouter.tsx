import {NavigateFunction, Params, useLocation, useNavigate, useParams} from 'react-router-dom';
import type {Location} from "history"
import React from 'react';

function WithRouter<T extends object>(Component: React.ComponentType<IWithRouter & T>) {
  function ComponentWithRouterProp(props: T) {
    const location = useLocation();
    const navigate = useNavigate();
    const params = useParams();
    const allProps: IWithRouter = {
      location, navigate, params
    }
    return <Component {...props} {...allProps} />;
  }

  return ComponentWithRouterProp;
}

export default WithRouter;

export interface IWithRouter{
  location: Location;
  navigate: NavigateFunction;
  params: Params<string>;
}

