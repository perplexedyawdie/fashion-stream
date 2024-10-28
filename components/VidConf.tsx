import React from 'react'
import {
    SuperVizRoomProvider,
    VideoConference
} from "@superviz/react-sdk";

function VidConf() {
    const collaborationMode = {
        enabled: false,
    };
    return (
        <div>
            <SuperVizRoomProvider
                developerKey={"jszpg1xs00dr0xzbwf1whvhqxe4ou8"}
                group={{
                    id: "GROUP_ID",
                    name: "GROUP_NAME",
                }}
                participant={{
                    id: "USER_ID",
                    name: "USER_NAME",
                }}
                roomId="ROOM_ID"
            >
                <VideoConference
                    participantType="host"
                    collaborationMode={collaborationMode}
                />
            </SuperVizRoomProvider>
        </div>
    )
}

export default VidConf