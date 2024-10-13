import React, { useEffect, useState } from 'react';

const DialogflowMessenger = () => {
  const [scriptLoaded, setScriptLoaded] = useState(false);

  useEffect(() => {
    const existingScript = document.getElementById('dialogflow-messenger-script');

    if (!existingScript) {
      const script = document.createElement('script');
      script.src = 'https://www.gstatic.com/dialogflow-console/fast/df-messenger/prod/v1/df-messenger.js';
      script.id = 'dialogflow-messenger-script'; // Unique ID to prevent duplicates
      script.async = true;
      script.onload = () => setScriptLoaded(true);
      document.body.appendChild(script);
    } else {
      setScriptLoaded(true); // Script is already loaded
    }

    return () => {
      if (existingScript) {
        document.body.removeChild(existingScript); // Cleanup
      }
    };
  }, []);

  return (
    <>
      {scriptLoaded && (
        <df-messenger
          project-id="YOUR_PROJECT_ID"
          agent-id="YOUR_AGENT_ID"
          language-code="en"
          max-query-length="-1">
          <df-messenger-chat chat-title="My Agent"></df-messenger-chat>
        </df-messenger>
      )}
      <link rel="stylesheet" href="https://www.gstatic.com/dialogflow-console/fast/df-messenger/prod/v1/themes/df-messenger-default.css" />
      <style>
        {`
          df-messenger {
            z-index: 999;
            position: fixed;
            --df-messenger-font-color: #000;
            --df-messenger-font-family: Google Sans;
            --df-messenger-chat-background: #f3f6fc;
            --df-messenger-message-user-background: #d3e3fd;
            --df-messenger-message-bot-background: #fff;
            bottom: 0;
            right: 0;
            top: auto; // Adjusted
            width: 350px;
          }
        `}
      </style>
    </>
  );
};

export default DialogflowMessenger;
