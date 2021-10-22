import {
    IonCard,
    IonCardHeader,
    IonCardSubtitle,
    IonCardTitle,
    IonContent,
    IonHeader, IonLoading,
    IonPage,
    IonTitle,
    IonToolbar
} from "@ionic/react";
import {SocialEvent} from "../../data-access/interfaces/SocialEvent";
import {useEffect, useState} from "react";
import axios from "axios";
import {useSocialEvents} from "../../data-access/hooks/useSocialEvents";
import EventDetailPage from "./EventDetail";

export default function EventsPage() {
    const { data: socialEvents, loading, hasError } = useSocialEvents()

    return (
        <IonPage>
            <IonHeader>
                <IonToolbar>
                    <IonTitle>Social Events</IonTitle>
                </IonToolbar>
            </IonHeader>
            <IonContent fullscreen>
                <IonLoading isOpen={loading}/>
                {
                    socialEvents?.map(socialEvent => (<EventCard socialEvent={socialEvent} key={socialEvent.id} />))
                }
            </IonContent>
        </IonPage>
    )
}

interface EventCardProps {
    socialEvent: SocialEvent
}

function EventCard({ socialEvent }: EventCardProps) {
    return (
        <IonCard button href={`event/${socialEvent.id}`}>
            <IonCardHeader>
                <IonCardTitle>{ socialEvent.name }</IonCardTitle>
                <IonCardSubtitle>
                    Organizer: {socialEvent.organizer.lastName} { socialEvent.organizer.firstName }
                </IonCardSubtitle>
            </IonCardHeader>
        </IonCard>
    )
}