import React, { useState, useEffect } from "react";
import millify from "millify";
import { Link } from "react-router-dom";
import { Card, Row, Col, Input, Typography, Button } from "antd";

import { useGetCryptosQuery } from "../services/cryptoApi";

import Loader from "./Loader";
import { StarOutlined, FilterOutlined } from "@ant-design/icons";

const { Title } = Typography;

const Cryptocurrencies = ({ simplified }) => {
  const count = simplified ? 10 : 100;
  const { data: cryptosList, isFetching } = useGetCryptosQuery(count);

  const [cryptos, setCryptos] = useState([]);
  //console.log(cryptos)

  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    const filteredData = cryptosList?.data?.coins.filter((coin) =>
      coin.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setCryptos(filteredData);
  }, [cryptosList, searchTerm]);

  if (isFetching) return <Loader />;
  return (
    <>
      {!simplified && (
        <Title level={2} style={{ textAlign: "center", color: "blue black" }}>
          {" "}
          List of Cryptocurrencies
        </Title>
      )}
      {!simplified && (
        <div className="search-crypto" style={{ textAlign: "left" }}>
          <Input
            placeholder="Search Cryptocurrency"
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
      )}
      <div className="filters">
        <Button style={{ borderRadius: "8px" }}>
          <FilterOutlined />
          Filters
        </Button>
      </div>

      <Row gutter={[32, 32]} className="crypto-card-container">
        {cryptos?.map((currency) => (
          <Col
            xs={24}
            sm={12}
            lg={6}
            className="crypto-card"
            key={currency.uuid}
          >
            <p className="addto_mainwatchlist">
              <StarOutlined />
              Add to Main Watchlist
            </p>
            <Link to={`/crypto/${currency.uuid} `}>
              <Card
                title={`${currency.rank}. ${currency.name}`}
                extra={<img src={currency.iconUrl} className="crypto-image" />}
                hoverable
              >
                <p>Price: {millify(currency.price)}</p>
                <p>Market Cap: {millify(currency.marketCap)}</p>
                <p>Daily Change: {millify(currency.change)}%</p>
              </Card>
            </Link>
          </Col>
        ))}
      </Row>
    </>
  );
};

export default Cryptocurrencies;
