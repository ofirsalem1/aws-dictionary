import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const Word = () => {
  const [wordDefinition, setWordDefinition] = useState<[Object] | null>(null);
  const { word } = useParams();
  useEffect(() => {
    getWord();
  }, []);

  const getWord = async () => {
    const response = await axios.get(`http://localhost:3000/${word}`);
    setWordDefinition(response.data);
  };
  console.log(wordDefinition);
  return (
    <div>
      <h2>Search By Word</h2>
      <input type="text" />
      {wordDefinition &&
        wordDefinition.map((word: any, i: number) => {
          return (
            <div className="definition-div" key={i}>
              <h3>
                {word.word}, {word.pos}{' '}
              </h3>
              {word.definitions.map((definition: string, i: number) => {
                const definitionArr = definition.split(' ');
                return (
                  <p>
                    {i + 1}:
                    {definitionArr.map((definitionWord: string) => {
                      return <span>{definitionWord} </span>;
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
