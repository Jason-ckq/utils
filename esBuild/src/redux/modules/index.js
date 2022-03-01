import { combineReducers } from "redux";
import { connectRouter } from "connected-react-router";
import Auth from "./Auth";
import Loading from "./Loading";

export default (history, asyncReducers = {}) =>
  combineReducers({
    router: connectRouter(history),
    ...asyncReducers,
    Auth,
    Loading,
  });
