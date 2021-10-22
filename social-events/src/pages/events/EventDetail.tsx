import {RouteComponentProps} from "react-router";
import {useSocialEvents} from "../../data-access/hooks/useSocialEvents";
import {useSocialEvent} from "../../data-access/hooks/useSocialEvent";
import {
    IonContent,
    IonHeader,
    IonItem,
    IonLabel,
    IonList,
    IonLoading,
    IonPage,
    IonTitle,
    IonToolbar
} from "@ionic/react";

interface EventDetailRouteParams {
    socialEventId: string
}

interface EventDetailPageProps extends RouteComponentProps<EventDetailRouteParams> {
}

export default function EventDetailPage(props: EventDetailPageProps){
    const { data: socialEvent, loading, hasError } = useSocialEvent(props.match.params.socialEventId)

    return(
        <IonPage>
            <IonHeader>
                <IonToolbar>
                    <IonTitle>{socialEvent?.name}</IonTitle>
                </IonToolbar>
            </IonHeader>
            <IonContent fullscreen>
                <IonLoading isOpen={loading}/>
                <IonList lines="inset">
                    <IonItem>
                        <IonLabel>
                            { "Type of event: " + socialEvent?.type }
                        </IonLabel>
                    </IonItem>
                    <IonItem>
                        <IonLabel>
                            { "Start date: " + socialEvent?.startDate }
                        </IonLabel>
                    </IonItem>
                    <IonItem>
                        <IonLabel>
                            { "End date: " + socialEvent?.endDate }
                        </IonLabel>
                    </IonItem>
                    <IonItem>
                        <IonLabel>
                            { "Location: " + socialEvent?.location.address + ", " + socialEvent?.location.city }
                        </IonLabel>
                    </IonItem>
                </IonList>
            </IonContent>
        </IonPage>
    )
}