import React from 'react';

import { Container, Banner, Avatar, ProfileData, LocationIcon, CakeIcon, Followage, EditButton } from './styles';

const ProfilePage: React.FC = () => {
  return (
      <Container>
        <Banner>
            <Avatar/>
        </Banner>

        <ProfileData>
            <EditButton outlined>Editar Perfil</EditButton>

            <h1>Roger Fernandes</h1>
            <h2>@roger_fernandes</h2>

            <p>
                Software Engineering Student!
            </p>

            <ul>
                <li>
                    <LocationIcon />
                    Rio Grande do Sul, Brasil
                </li>
                <li>
                    <CakeIcon />
                    Nascido(a) em 15 de abril de 2001
                </li>
            </ul>

            <Followage>
                <span>
                    seguindo <strong>589</strong>
                </span>
                <span>
                    <strong>765 </strong> seguidores 
                </span>
            </Followage>
        </ProfileData>   
      </Container>
  )
}

export default ProfilePage;