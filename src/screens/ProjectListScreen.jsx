import styled from '@emotion/styled';
import React from 'react';
import ProjectCard from '../components/Card/ProjectCard';

function ProjectListScreen() {
    return (
        <StyledWrapper>
            <StyledContainer>
                <h2>Projects</h2>
                <StyledGrid>
                    <ProjectCard
                        title="Project 1"
                        type="Design"
                        targetURL="/project1"
                    />
                    <ProjectCard
                        title="Project 2"
                        type="Design"
                        targetURL="/project2"
                    />
                    <ProjectCard
                        title="Project 3"
                        type="Design"
                        targetURL="/project3"
                    />
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
    gap: 1rem;
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

export default ProjectListScreen;
