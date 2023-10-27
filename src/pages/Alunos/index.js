import React, { useEffect, useState } from 'react';
import { get } from 'lodash';
import { FaUserCircle, FaEdit, FaWindowClose } from 'react-icons/fa';
import { Link } from 'react-router-dom/cjs/react-router-dom';
import { Container } from '../../styles/GlobalStyles';
import { AlunoContainer, ProfilePicture } from './styled';
import axios from '../../services/axios';
import Loading from '../../components/Loading';

export default function Alunos() {
  const [alunos, setAlunos] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  useEffect(() => {
    async function getData() {
      setIsLoading(true);
      const response = await axios.get('/alunos');
      setAlunos(response.data);
      setIsLoading(false);
    }
    getData();
  }, []);

  return (
    <Container>
      <Loading isLoading={isLoading} />
      <h1>Alunos Page</h1>
      <AlunoContainer>
        {alunos.map((aluno) => (
          <div key={String(aluno.id)}>
            <ProfilePicture>
              {get(aluno, 'Photos[0].photoUrl', false) ? (
                <img width={200} src={aluno.Photos[0].photoUrl} alt="" />
              ) : (
                <FaUserCircle size="36px" />
              )}
            </ProfilePicture>
            <span>{aluno.nome}</span>
            <span>{aluno.email}</span>
            <Link to={`/aluno/${aluno.id}/edit`}>
              <FaEdit size="16px" />
            </Link>
            <Link to={`/aluno/${aluno.id}/delete`}>
              <FaWindowClose size="16px" />
            </Link>
          </div>
        ))}
      </AlunoContainer>
    </Container>
  );
}
