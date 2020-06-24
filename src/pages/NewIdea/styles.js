import styled from 'styled-components';

export const Container = styled.div`
  
  width: 100%;
  height: 100vh;
  
  display: flex;
  align-items: center;
  justify-content: center;

  form {
      display: flex;
      align-items: center;
      justify-content: center;
      flex-direction: column;

      width: 637px;
      height: 768px;
      padding: 30px;

      border-radius: 6px;

      background-color: #3D54B9;
      color: #FFFFFF;
  };

  .new-idea{
      display: flex;
      justify-content: space-between;
      width: 100%;
      margin-bottom: 18px;

      .enter-idea{
          display: flex;
          flex-direction: column;

          input{
              background-color: #E5E5E5;
              width: 254px;
              height: 41px;
              border-radius: 6px;
              border: none;
          }
      }
  };

  .link-img{
        display: flex;
        flex-direction: column;
        width: 100%;
        margin-bottom: 18px;
        
        input{
            background-color: #E5E5E5;
            height: 41px;
            border-radius: 6px;
            border: none;
        } 
};

    .description{
        display: flex;
        flex-direction: column;
        width: 100%;
        margin-bottom: 18px;

        textarea{
            background-color: #E5E5E5;
            height: 227px;
            border-radius: 6px;
            border: none;
        }
    };

    .link-idea{
        display: flex;
        flex-direction: column;
        width: 100%;
        margin-bottom: 18px;
        input{
            background-color: #E5E5E5;
            height: 41px;
            border-radius: 6px;
            border: none;
        }
    }

`;