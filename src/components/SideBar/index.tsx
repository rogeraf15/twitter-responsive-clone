import React from 'react';

import List from '../List';
import FollowSuggestion from '../FollowSuggestion';
import News from '../News';

import { Container, SearchWrapper, SearchInput, SearchIcon, Body } from './styles';

const SideBar: React.FC = () => {
    return(
        <Container>
            <SearchWrapper>
                <SearchInput placeholder='Buscar no Twitter'/>
                <SearchIcon/>
            </SearchWrapper>

            <Body>
                <List
                    title="Talvez você curta"
                    elements={[
                        <FollowSuggestion name="Siclano" nickname="@siclanotest"/>,
                        <FollowSuggestion name="Beltrano" nickname="@beltranotest"/>,
                        <FollowSuggestion name="Fulano" nickname="@fulanotest"/>
                    ]}
                />
                <List
                    title="Oque está acontecendo"
                    elements={[
                        <News/>,
                        <News/>,
                        <News/>,
                    ]}
                />
                 <List
                    title="Oque está acontecendo"
                    elements={[
                        <News/>,
                        <News/>,
                        <News/>,
                    ]}
                />
                 <List
                    title="Oque está acontecendo"
                    elements={[
                        <News/>,
                        <News/>,
                        <News/>,
                    ]}
                />
            </Body>
        </Container>
    );
}

export default SideBar;