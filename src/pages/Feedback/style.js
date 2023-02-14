import styled from 'styled-components';

export const ContainerBlur = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 5rem;

  background: rgba(255, 255, 255, 0.1);
  box-shadow: 0 0px 32px 0 var(--color-pink);
  backdrop-filter: blur(5px);
  -webkit-backdrop-filter: blur(5px);
  border-radius: 10px;
  border: 1px solid rgba(255, 255, 255, 0.18);

  width: 500px;
  height: 400px;
`

export const StyledHeaderGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
  

  img {
    width: 6.75rem;
  }
`

export const StyledSection = styled.section`

`

export const StyledFeedbackMessage = styled.div`

`

export const StyledFeedbackButtons = styled.div`

`