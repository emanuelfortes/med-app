import { IonContent, IonHeader, IonItem, IonList, IonMenu, IonPage, IonTitle, IonToolbar } from "@ionic/react";

export default function Menu(){
  return(
    <IonMenu contentId="main-content"> {/* deve coincidir com o id do IonPage */}
      <IonHeader>
        <IonToolbar color="primary">
          <IonTitle>Menu</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <IonList>
          <IonItem routerLink="/home">Início</IonItem>
          <IonItem routerLink="/paciente">Paciente</IonItem>
          <IonItem routerLink="/lista">Lista</IonItem>
          <IonItem routerLink="/detalhes">Detalhes</IonItem>
        </IonList>
      </IonContent>
    </IonMenu>
  )
}