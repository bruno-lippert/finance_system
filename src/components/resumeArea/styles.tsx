import styled from 'styled-components';

export const Container = styled.div`
    box-shadow: 0px 0px 5px #CCC;
    padding: 5px;
    border-radius: 10px;
    display: flex;
    gap: 10px;
    min-height: 80px;
`;

export const MonthArea = styled.div`
    display: flex;
    gap: 15px;
    align-items: center;
    padding: 10px ;
    text-align: center;
`;

export const MonthArrow = styled.div`
    display: flex;
    align-items: center;
    cursor: pointer;
`;

export const MonthString = styled.div`
    min-width: 135px;
`;

export const ResumeArea = styled.div`
    display: flex;
    justify-content: space-around;
    align-items: center;
    width: 100%;
`;

export const Resume = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`

export const Value = styled.div<{ color?: string }>`
    display: flex;
    justify-content: center;
    align-items: center;
    color: ${props => props.color ?? '#fff'}
`;