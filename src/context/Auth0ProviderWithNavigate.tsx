import { Auth0Provider } from "@auth0/auth0-react";
import { useNavigate } from "react-router-dom";

export const Auth0ProviderWithNavigate = ({ children }) => {
  const navigate = useNavigate();

  const domain ='dev-7g7shvra8f741e5q.us.auth0.com';
  const clientId = 'JcmP4Ld6GIzHBNA7MAxixwMEcSb1Y2FD';
  const redirectUri ='http://localhost:5176/' ;

  const onRedirectCallback = (appState:any) => {
    navigate(appState?.returnTo || window.location.pathname);
  };

  if (!(domain && clientId && redirectUri)) {
    return null;
  }

  return (
    <Auth0Provider
      domain={domain}
      clientId={clientId}
      authorizationParams={{
        redirect_uri: redirectUri,
      }}
      onRedirectCallback={onRedirectCallback}
    >
      {children}
    </Auth0Provider>
  );
};