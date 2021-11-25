import React, { useState, useContext, useEffect } from "react";
import { LangContext } from "@context/lang";
import "./index.scoped.scss";
import StatusBanner from "@components/organisms/statusBanner";
import Table from "@components/molecules/table";
import PowerChart from "@components/organisms/powerChart";
import langs from "./langs";
import axios from "axios";

const HomePage = () => {
  const { lang } = useContext(LangContext);
  const [powerData, setPowerData] = useState();
  const [minersList, setMinersList] = useState([]);
  const [recentBlocks, setRecentBlocks] = useState([]);

  useEffect(() => {
    async function getPowerData() {
      let response = await axios.get(`${__config.apiPrefix}/power-table`);
      setPowerData(response.data);
    }

    getPowerData();

    async function getMinersList() {
      let response = await axios.get(`${__config.apiPrefix}/miners`);
      setMinersList(response.data);
    }

    async function getRecentBlocks() {
      let response = await axios.get(`${__config.apiPrefix}/blocks`);
      setRecentBlocks(renderBlocks(response.data));
    }

    getRecentBlocks();
    getMinersList();
  }, []);

  const renderBlocks = (data) => {
    return data.map((item) => {
      item[3] = langs[lang].lucks[item[3]];
      return item;
    });
  };
  return (
    <div className="home-page">
      <div className="home-page__banner">
        <StatusBanner />
      </div>
      <div className="home-page__chart">
        <PowerChart heading={langs[lang].chart.heading} powerData={powerData} />
      </div>
      <div className="home-page__inner">
        <div className="home-page__tables">
          <div className="home-page__table">
            <Table
              cols={langs[lang].table1.cols}
              data={recentBlocks}
              heading={langs[lang].table1.heading}
              emptyText={langs[lang].table1.emptyText}
            />
          </div>
          <div className="home-page__table">
            <Table
              cols={langs[lang].table2.cols}
              data={minersList}
              heading={langs[lang].table2.heading}
              rankCol
              emptyText="No miners joined yet"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
