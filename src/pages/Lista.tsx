import {
  IonButtons,
  IonContent,
  IonHeader,
  IonMenuButton,
  IonPage,
  IonTitle,
  IonToolbar,
} from "@ionic/react";

export default function Lista() {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar color="primary">
          <IonButtons slot="start">
            <IonMenuButton /> {/* 👈 Botão que abre o menu */}
          </IonButtons>
          <IonTitle>Lista de Pacientes</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent className="ion-padding">
        <h2>Bem-vindo a Lista de Pacientes!</h2>
      </IonContent>
    </IonPage>
  );
}
