import React from "react";
import Header from "./components/Header";
import StoreTable from "./components/StoreTable";
import MultiStoreComp from './components/MultiStoreComp'

function MultiStore() {
  return (
    <div>
      <Header />,
      <MultiStoreComp />,
    </div>
  );
}

export default MultiStore;