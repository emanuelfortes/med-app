import {
  IonButtons,
  IonContent,
  IonHeader,
  IonMenuButton,
  IonPage,
  IonTitle,
  IonToolbar,
} from "@ionic/react";

export default function Detalhes() {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar color="primary">
          <IonButtons slot="start">
            <IonMenuButton /> {/* 👈 Botão que abre o menu */}
          </IonButtons>
          <IonTitle>Detalhes</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent className="ion-padding">
        <h2>Bem-vindo à os detalhes do seu plano</h2>
      </IonContent>
    </IonPage>
  );
}
