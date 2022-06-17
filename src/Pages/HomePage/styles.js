import styled from 'styled-components';


export const Container = styled.div`
    max-width: 1366px;
    margin: auto;
    color: black;
    height: 1300px;

    @media screen and (max-width: 414px) {
        height: 100%;
    }

    iframe {
        padding: 50px 375px;

        @media screen and (max-width: 414px) {
            width: 360px;
            height: 250px;
            padding: 20px 26px;
        }
    }

    .cards {
        display: grid;
        grid-template-columns: repeat(4, 1fr);
        grid-gap: 30px;
        margin: 40px 70px;

        @media screen and (max-width: 414px) {
            grid-template-columns: repeat(2, 1fr);
            grid-gap: 20px;
            margin: 0px 10px;
        }
    }

    .card {
        height: 370px;
        width: 230px;
        background-color: white;
        border-radius: 15px;
        border: 2px solid #ff2800;
        cursor: pointer;

        @media screen and (max-width: 414px) {
            height: 270px;
            width: 180px;
        }

        &:hover {
            transition: all ease .2s;
            border: 4px solid #ff2800;
            box-shadow: 20px;
        }
    }

    .text-div {
        display: none;

        p {
            margin-left: 10px;
            margin-right: 10px;
        }
    }
    
    .image-div {
        display: flex;

        img {
            height: 370px;
            width: 100%;
            border-radius: 12.50px;

            @media screen and (max-width: 414px) {
                height: 270px;
            }

            &:hover {
                transition: all ease .2s;
                border-radius: 10px;
            }
        }
    }
`;