import styled from "styled-components";


function StyledComponent() {
  const Title = styled.h1`
    font-size: 1.5em;
    text-align: center;
    color: palevioletred;
  `;

  const Wrapper = styled.section`
    padding: 4em;
    background: papayawhip;
  `;

  return (
    <Wrapper>
      <Title>Hello World!</Title>
    </Wrapper>
  );
}

export default StyledComponent;
