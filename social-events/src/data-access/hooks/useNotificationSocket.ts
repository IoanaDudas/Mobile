import {useIonToast} from "@ionic/react";
import {useEffect} from "react";

interface NotificationInterface {
    event: 'notification'
    data: {
        message: string
    }
}

export function useNotificationSocket(){
    const [present, dismiss] = useIonToast()

    useEffect(() => {
        // Connect to websocket
        const ws = new WebSocket("ws://localhost:3000")

        ws.onopen = () => {
            console.log('web socket onopen');
        };
        ws.onclose = () => {
            console.log('web socket onclose');
        };
        ws.onerror = error => {
            console.log('web socket onerror', error);
        };
        ws.onmessage = messageEvent => {
            console.log('web socket onmessage');

            const message = JSON.parse(messageEvent.data) as NotificationInterface
            present({
                message: message.data.message,
                duration: 2000,
                buttons: [{
                    text: 'HIDE',
                    handler: () => dismiss()
                }]
            })
        };

        return () => {
            // Disconnect from websocket
            ws.close();
        }
    }, [])
}