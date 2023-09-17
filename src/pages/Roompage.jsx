import React from 'react'
import { useParams } from 'react-router-dom'
import { ZegoUIKitPrebuilt } from '@zegocloud/zego-uikit-prebuilt';

const Roompage = () => {
    const { code } = useParams();

    let myMeeting = async (element) => {
        // generate Kit Token
         const appID = 717251793;
         const serverSecret = "4f2263abee55c0aa7d23f8412a15d642";
         const kitToken =  ZegoUIKitPrebuilt.generateKitTokenForTest(appID, serverSecret, code, Date.now().toString(), "Meet");
   
   
        // Create instance object from Kit Token.
         const zp = ZegoUIKitPrebuilt.create(kitToken);
         // start the call
         zp.joinRoom({
           container: element,
           sharedLinks: [
             {
               name: 'Personal link',
               url:
                window.location.protocol + '//' + 
                window.location.host + window.location.pathname +
                 '?roomID=' +
                 code,
             },
           ],
           scenario: {
             mode: ZegoUIKitPrebuilt.GroupCall, // To implement 1-on-1 calls, modify the parameter here to [ZegoUIKitPrebuilt.OneONoneCall].
           },
         });
   
   
     };


  return (
    <div className='Roompage'>
      <div ref={myMeeting} />
    </div>
  )
}

export default Roompage
