import styled from '@emotion/styled';
export const Profile = styled.div`
  margin: auto;
  border: 5px solid blue;
  width: 350px;
  height: 450px;
  background-color: #f0e3bc;
`;
export const Description = styled.div`
  margin: auto;
`;
export const Avatar = styled.img`
  display: block;
  width: 250px;
  margin: auto;
  padding: 10px;
`;
export const HeadText = styled.p`
  margin: auto;
  width: 150px;
  height: 20px;
  text-align: center;
`;
export const StatList = styled.ul`
  list-style: none;
  display: flex;
  padding: 0px;
  justify-content: center;
`;
export const StatData = styled.li`
  display: flex;
  flex-direction: column;
  padding: 10px;
  width: 75px;
  border: 1px dashed gray;
`;
export const StatName = styled.span`
  padding: 5px;
  text-align: center;
`;
export const StatInfo = styled.span`
  padding: 5px;
  text-align: center;
`;
