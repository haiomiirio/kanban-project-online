import React, { useState } from "react";
import { OAuthStrategy } from "@clerk/types";
import { useSignUp } from "@clerk/clerk-react";

interface OauthSignUpProps {
  providerName: string;
  strategy: OAuthStrategy;
  logo: string;
  redirectUrl?: string;
  redirectUrlComplete?: string;
}

const OauthSignUp: React.FC<OauthSignUpProps> = ({
  providerName,
  strategy,
  logo,
  redirectUrl = "http://localhost:5173/kanban-react/sso-callback",
  redirectUrlComplete = "http://localhost:5173/kanban-react/kanban",
}) => {
  const { signUp, isLoaded } = useSignUp();
  const [isLoading, setIsLoading] = useState(false);

  const handleSignUp = async () => {
    if (isLoading) return;
    
    try {
      setIsLoading(true);
      console.log('Attempting Google sign up...', { isLoaded, signUp: !!signUp });
      
      if (!signUp) {
        console.error('signUp not available');
        setIsLoading(false);
        return;
      }
      
      await signUp.authenticateWithRedirect({
        strategy,
        redirectUrl,
        redirectUrlComplete,
      });
    } catch (error) {
      console.error(`Error signing up with ${providerName}:`, error);
      setIsLoading(false);
    }
  };

  return (
    <button
      onClick={handleSignUp}
      type="button"
      className="cursor-pointer hover:opacity-80 transition-opacity"
    >
      <img
        src={logo}
        alt={`Sign up with ${providerName}`}
        className=""
      />
    </button>
  );
};

export default OauthSignUp;
