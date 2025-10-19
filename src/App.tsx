import { Redirect, Route } from "react-router-dom";
import {
  IonApp,
  IonIcon,
  IonLabel,
  IonPage,
  IonRouterOutlet,
  IonTabBar,
  IonTabButton,
  IonTabs,
  setupIonicReact,
} from "@ionic/react";
import { IonReactRouter } from "@ionic/react-router";
import {
  homeOutline,
  peopleCircleOutline,
  personCircleOutline,
  statsChartOutline,
} from "ionicons/icons";
import Home from "./pages/Home";

/* Core CSS required for Ionic components to work properly */
import "@ionic/react/css/core.css";

/* Basic CSS for apps built with Ionic */
import "@ionic/react/css/normalize.css";
import "@ionic/react/css/structure.css";
import "@ionic/react/css/typography.css";

/* Optional CSS utils that can be commented out */
import "@ionic/react/css/padding.css";
import "@ionic/react/css/float-elements.css";
import "@ionic/react/css/text-alignment.css";
import "@ionic/react/css/text-transformation.css";
import "@ionic/react/css/flex-utils.css";
import "@ionic/react/css/display.css";

import "@ionic/react/css/palettes/dark.system.css";
import "./theme/variables.css";
import Pacientes from "./pages/Paciente";
import Lista from "./pages/Lista";
import Detalhes from "./pages/Detalhes";
import Menu from "./pages/Menu";

setupIonicReact();
export default function App() {
  return (
    <IonApp>
      <IonReactRouter>
        <Menu />
        <IonPage id="main-content">
          <IonTabs>
            <IonRouterOutlet>
              <Route path="/home" render={() => <Home />} exact={true} />
              <Route
                path="/paciente"
                render={() => <Pacientes />}
                exact={true}
              />
              <Route path="/lista" render={() => <Lista />} exact={true} />
              <Route path="/detalhes" render={() => <Detalhes />} />
            </IonRouterOutlet>

            <IonTabBar slot="bottom">
              <IonTabButton tab="home" href="/home">
                <IonIcon icon={homeOutline} />
                <IonLabel>home</IonLabel>
              </IonTabButton>
              <IonTabButton tab="paciente" href="/paciente">
                <IonIcon icon={personCircleOutline} />
                <IonLabel>Paciente</IonLabel>
              </IonTabButton>
              <IonTabButton tab="lista" href="/lista">
                <IonIcon icon={peopleCircleOutline} />
                <IonLabel>Lista de Pacientes</IonLabel>
              </IonTabButton>
              <IonTabButton tab="detalhes" href="/detalhes">
                <IonIcon icon={statsChartOutline} />
                <IonLabel>Detalhes</IonLabel>
              </IonTabButton>
            </IonTabBar>
          </IonTabs>
        </IonPage>
      </IonReactRouter>
    </IonApp>
  );
}
