import React, { useEffect, useState } from "react";
import { Admin, DataProvider, Resource } from "react-admin";
import buildGraphQLProvider from "./data-provider/graphqlDataProvider";
import { theme } from "./theme/theme";
import Login from "./Login";
import "./App.scss";
import Dashboard from "./pages/Dashboard";
import { EngineerList } from "./engineer/EngineerList";
import { EngineerCreate } from "./engineer/EngineerCreate";
import { EngineerEdit } from "./engineer/EngineerEdit";
import { EngineerShow } from "./engineer/EngineerShow";
import { FactoryList } from "./factory/FactoryList";
import { FactoryCreate } from "./factory/FactoryCreate";
import { FactoryEdit } from "./factory/FactoryEdit";
import { FactoryShow } from "./factory/FactoryShow";
import { UserProfileList } from "./userProfile/UserProfileList";
import { UserProfileCreate } from "./userProfile/UserProfileCreate";
import { UserProfileEdit } from "./userProfile/UserProfileEdit";
import { UserProfileShow } from "./userProfile/UserProfileShow";
import { MaintenanceRequestList } from "./maintenanceRequest/MaintenanceRequestList";
import { MaintenanceRequestCreate } from "./maintenanceRequest/MaintenanceRequestCreate";
import { MaintenanceRequestEdit } from "./maintenanceRequest/MaintenanceRequestEdit";
import { MaintenanceRequestShow } from "./maintenanceRequest/MaintenanceRequestShow";
import { MaintenanceReportList } from "./maintenanceReport/MaintenanceReportList";
import { MaintenanceReportCreate } from "./maintenanceReport/MaintenanceReportCreate";
import { MaintenanceReportEdit } from "./maintenanceReport/MaintenanceReportEdit";
import { MaintenanceReportShow } from "./maintenanceReport/MaintenanceReportShow";
import { jwtAuthProvider } from "./auth-provider/ra-auth-jwt";

const App = (): React.ReactElement => {
  const [dataProvider, setDataProvider] = useState<DataProvider | null>(null);
  useEffect(() => {
    buildGraphQLProvider
      .then((provider: any) => {
        setDataProvider(() => provider);
      })
      .catch((error: any) => {
        console.log(error);
      });
  }, []);
  if (!dataProvider) {
    return <div>Loading</div>;
  }
  return (
    <div className="App">
      <Admin
        title={"Engineer-Factory Platform"}
        dataProvider={dataProvider}
        authProvider={jwtAuthProvider}
        theme={theme}
        dashboard={Dashboard}
        loginPage={Login}
      >
        <Resource
          name="Engineer"
          list={EngineerList}
          edit={EngineerEdit}
          create={EngineerCreate}
          show={EngineerShow}
        />
        <Resource
          name="Factory"
          list={FactoryList}
          edit={FactoryEdit}
          create={FactoryCreate}
          show={FactoryShow}
        />
        <Resource
          name="UserProfile"
          list={UserProfileList}
          edit={UserProfileEdit}
          create={UserProfileCreate}
          show={UserProfileShow}
        />
        <Resource
          name="MaintenanceRequest"
          list={MaintenanceRequestList}
          edit={MaintenanceRequestEdit}
          create={MaintenanceRequestCreate}
          show={MaintenanceRequestShow}
        />
        <Resource
          name="MaintenanceReport"
          list={MaintenanceReportList}
          edit={MaintenanceReportEdit}
          create={MaintenanceReportCreate}
          show={MaintenanceReportShow}
        />
      </Admin>
    </div>
  );
};

export default App;
