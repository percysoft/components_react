import styled from 'styled-components';

export const Shimmer = styled.div`
  width: ${ (props:any) => props['data-width'] ? props['data-width']: '500px' };
  height: ${ (props:any) => props['data-heigth'] ? props['data-heigth']: '40px' };
  border-radius: ${(props:any) => (props['data-radius']) ? props['data-radius'] : 'none'};
  margin: 10px;
  animation: pulse 1s infinite ease-in-out;
  -webkit-animation:pulse 1s infinite ease-in-out;
  @keyframes pulse
  {
    0%{
      background-color: rgba(165,165,165,.1);
    }
    50%{
      background-color: rgba(165,165,165,.3);
    }
    100%{
      background-color: rgba(165,165,165,.1);
    }
  }
@-webkit-keyframes pulse
{
  0%{
    background-color: rgba(165,165,165,.1);
  }
  50%{
    background-color: rgba(165,165,165,.3);
  }
  100%{
    background-color: rgba(165,165,165,.1);
  }
}

`;
