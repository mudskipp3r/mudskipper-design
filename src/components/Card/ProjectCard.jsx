import React from 'react';
import styled from '@emotion/styled';
import Badge from '../Badge/Badge';
import { Link } from 'react-router-dom';
import { Caption, H5 } from '../Typography/Typography';

function ProjectCard(props) {
    const { title, type, targetURL } = props;
    return (
        <StyledCard to={targetURL}>
            <StyledPlaceholder />
            <StyledCardBody>
                <div>
                    <H5>{title}</H5>
                    <Caption>{type}</Caption>
                </div>
                <Badge label="Badge" />
            </StyledCardBody>
        </StyledCard>
    );
}

const StyledCard = styled(Link)`
    display: flex;
    flex-direction: column;
    background-color: #ffffff;
    border-radius: 0.5rem;
    overflow: hidden;
    transition: 0.3s ease-out;
    text-decoration: none;
    color: black;

    :hover {
        box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
        transform: translate(0, -0.25rem);
        transition: 0.3s ease-out;
    }
`;

const StyledPlaceholder = styled.div`
    height: 200px;
    background-color: #b8b8b8;
`;

const StyledCardBody = styled.div`
    padding: 1rem;
    display: flex;
    flex-direction: column;
    gap: 1.5rem;
`;

export default ProjectCard;
