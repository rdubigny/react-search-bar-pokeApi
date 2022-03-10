import { useEffect, useState } from "react";
import Form from "react-bootstrap/Form";

export default function Search(props) {
  const [search, setSearch] = useState("");

  useEffect(() => {
    props.getPokemon(search.toLocaleLowerCase());
  }, [search]);

  const handleChange = (e) => {
    setSearch(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault(); //prevent reload normal behavior from browser
    setSearch(e.target.value);
  };

  return (
    <>
      <Form onSubmit={handleSubmit}>
        <Form.Group controlId="searchPokemon">
          <Form.Control
            value={search}
            onChange={handleChange}
            type="text"
            placeholder="Search for a pokemon"
          />
        </Form.Group>
      </Form>
    </>
  );
}
