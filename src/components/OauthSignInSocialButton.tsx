import React, { useState } from "react";
import { OAuthStrategy } from "@clerk/types";
import { useSignIn } from "@clerk/clerk-react";

interface OauthSignInProps {
  providerName: string;
  strategy: OAuthStrategy;
  logo: string;
  redirectUrl?: string;
  redirectUrlComplete?: string;
}

const OauthSignIn: React.FC<OauthSignInProps> = ({
  providerName,
  strategy,
  logo,
  redirectUrl = `${window.location.origin}/kanban-project-online/sso-callback`,
  redirectUrlComplete = `${window.location.origin}/kanban-project-online/kanban`,
}) => {
  const { signIn, isLoaded } = useSignIn();
  const [isLoading, setIsLoading] = useState(false);

  const handleSignIn = async () => {
    if (isLoading) return;
    
    try {
      setIsLoading(true);
      console.log('Attempting Google sign in...', { isLoaded, signIn: !!signIn });
      
      if (!signIn) {
        console.error('signIn not available');
        setIsLoading(false);
        return;
      }
      
      await signIn.authenticateWithRedirect({
        strategy,
        redirectUrl,
        redirectUrlComplete,
      });
    } catch (error) {
      console.error(`Error signing in with ${providerName}:`, error);
      setIsLoading(false);
    }
  };

  return (
    <button
      onClick={handleSignIn}
      type="button"
      className="cursor-pointer hover:opacity-80 transition-opacity"
    >
      <img
        src={logo}
        alt={`Sign in with ${providerName}`}
        className=""
      />
    </button>
  );
};

export default OauthSignIn;