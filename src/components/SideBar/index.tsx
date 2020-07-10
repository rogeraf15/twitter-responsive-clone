import React from 'react';
import StickyBox from 'react-sticky-box';

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

            <StickyBox>
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
            </StickyBox>
        </Container>
    );
}

export default SideBar;