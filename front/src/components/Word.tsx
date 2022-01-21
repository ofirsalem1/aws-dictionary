import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

const Word = () => {
  const navigate = useNavigate();
  const [wordDefinition, setWordDefinition] = useState<[Object] | null>(null);
  const { word } = useParams();
  const [searchInput, setSearchInput] = useState<string>('');
  useEffect(() => {
    if (word) {
      getWord(word);
    }
  }, []);

  const getWord = async (searchWord: string) => {
    const response = await axios.get(`http://localhost:3000/${searchWord}`);
    navigate(`/word/${searchWord}`);
    setWordDefinition(response.data);
  };
  return (
    <div>
      <h2>Search By Word</h2>
      <input
        type="text"
        placeholder="Search Word..."
        onChange={e => setSearchInput(e.target.value)}
      />
      <button onClick={() => getWord(searchInput)}>Search</button>
      {wordDefinition &&
        wordDefinition.map((word: any, i: number) => {
          return (
            <div className="definition-div" key={i}>
              <h3>
                {word.word}, {word.pos}
              </h3>
              {word.definitions.map((definition: string, i: number) => {
                const definitionArr = definition.split(' ');
                return (
                  <p key={i}>
                    {i + 1}:
                    {definitionArr.map((definitionWord: string, i: number) => {
                      return <span key={i}>{definitionWord} </span>;
                    })}
                  </p>
                );
              })}
            </div>
          );
        })}
    </div>
  );
};

export default Word;
