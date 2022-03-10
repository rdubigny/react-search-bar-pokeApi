import React from "react";
import { Col, Row } from "react-bootstrap";

export default function PokemonData(props) {
  return (
    <>
      <Row>
        <Col>
          <h5>{props.name}</h5>
          <img src={props.sprites} alt={props.name} width={500} height={500} />
          <h5>Abilities</h5>
          {props.abilities.map((ability, key) => (
            <div key={key}>
              <span>{ability.ability.name}</span>
            </div>
          ))}
          <h5>Types</h5>
          {props.types.map((type, key) => (
            <div key={key}>
              <span>{type.type.name}</span>
            </div>
          ))}
        </Col>
        <Col>
          <h5>Base Stats</h5>
          {props.stats.map((stat, key) => (
            <div key={key}>
              <strong>{stat.stat.name} </strong>
              <strong>{stat.base_stat}</strong>
            </div>
          ))}
        </Col>
      </Row>
    </>
  );
}
