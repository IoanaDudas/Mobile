import { Redirect, Route } from 'react-router-dom';
import { IonApp, IonRouterOutlet } from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';

/* Core CSS required for Ionic components to work properly */
import '@ionic/react/css/core.css';

/* Basic CSS for apps built with Ionic */
import '@ionic/react/css/normalize.css';
import '@ionic/react/css/structure.css';
import '@ionic/react/css/typography.css';

/* Optional CSS utils that can be commented out */
import '@ionic/react/css/padding.css';
import '@ionic/react/css/float-elements.css';
import '@ionic/react/css/text-alignment.css';
import '@ionic/react/css/text-transformation.css';
import '@ionic/react/css/flex-utils.css';
import '@ionic/react/css/display.css';

/* Theme variables */
import './theme/variables.css';
import EventsPage from "./pages/events/Events";
import EventDetailPage from "./pages/events/EventDetail";
import {useNotificationSocket} from "./data-access/hooks/useNotificationSocket";

export default function App() {
    useNotificationSocket()

    return (
        <IonApp>
            <IonReactRouter>
                <IonRouterOutlet>
                    <Route exact path="/events" component={EventsPage}/>
                    <Route exact path="/event/:socialEventId" component={EventDetailPage}/>
                    <Route exact path="/">
                        <Redirect to="/events"/>
                    </Route>
                </IonRouterOutlet>
            </IonReactRouter>
        </IonApp>
    )
}
