import React from 'react';

import { Container, Retweeted, Body, Avatar, Content, Header, Dot, Description, ImageContent, Icons, Status , CommentIcon, RetweetIcon, LikeIcons} from './styles';

const Tweet: React.FC = () => {
  return (
      <Container>
          <Retweeted>
            Você retweetou
          </Retweeted>

          <Body>
            <Avatar />
            
            <Content >
              <Header>
                <strong>Roger Fernandes</strong>
                <span>@roger_fernandes</span>
                <Dot />
                <time>09 de julho</time>
              </Header>

              <Description>Descrição do Twitter</Description>

              <ImageContent />

              <Icons>
                <Status>
                  <CommentIcon />
                  87
                </Status>
                <Status>
                  <RetweetIcon />
                  123
                </Status>
                <Status>
                  <LikeIcons />
                  876
                </Status>
              </Icons>
            </Content>
          </Body>
      </Container>
  );
}

export default Tweet;