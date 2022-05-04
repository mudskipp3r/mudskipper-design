import React from 'react';
import styled from '@emotion/styled';
import Badge from '../Badge/Badge';

function ProjectCard(props) {
    const { title, type } = props;
    return (
        <StyledCard>
            <StyledPlaceholder />
            <StyledCardBody>
                <div>
                    <div>
                        <strong>{title}</strong>
                    </div>
                    <div>{type}</div>
                </div>
                <Badge label="Badge" />
            </StyledCardBody>
        </StyledCard>
    );
}

const StyledCard = styled.div`
    display: flex;
    flex-direction: column;
    background-color: #ffffff;
    border-radius: 0.5rem;
    overflow: hidden;
    transition: 0.3s ease-out;

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
