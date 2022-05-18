import styled from '@emotion/styled';
import React from 'react';
import ProjectCard from '../components/Card/ProjectCard';
import { H1 } from '../components/Typography/Typography';

function ProjectListScreen() {
    return (
        <StyledWrapper>
            <StyledContainer>
                <H1>Projects</H1>
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
                    <ProjectCard
                        title="Project 4"
                        type="Design"
                        targetURL="/project3"
                    />
                    <ProjectCard
                        title="Project 5"
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
    grid-template-columns: repeat(auto-fit, minmax(288px, 1fr));
    gap: 2.5rem;
`;

export default ProjectListScreen;
