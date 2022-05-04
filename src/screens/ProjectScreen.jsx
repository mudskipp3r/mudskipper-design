import styled from '@emotion/styled';
import React from 'react';
import ProjectCard from '../components/Card/ProjectCard';

function ProjectScreen() {
    return (
        <StyledWrapper>
            <StyledContainer>
                Projects
                <StyledGrid>
                    <ProjectCard title="Project 1" type="Design" />
                    <ProjectCard title="Project 2" type="Design" />
                    <ProjectCard title="Project 3" type="Design" />
                    <ProjectCard title="Project 4" type="Design" />
                    <ProjectCard title="Project 5" type="Design" />
                    <ProjectCard title="Project 6" type="Design" />
                </StyledGrid>
            </StyledContainer>
        </StyledWrapper>
    );
}

const StyledWrapper = styled.div`
    height: 100vh;
`;

const StyledContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap: 2rem;
    background-color: #f0f1f3;
    padding: 4rem;
    height: 100%;
    overflow: scroll;
    box-sizing: border-box;
`;

const StyledGrid = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
    gap: 2.5rem;
`;

export default ProjectScreen;
