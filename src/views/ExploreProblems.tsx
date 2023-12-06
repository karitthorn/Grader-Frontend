import React from 'react'
import NavbarMenuLayout from '../layout/NavbarMenuLayout'
import PublicProblemCard from '../components/PublicProblemCard'
import CardContainer from '../components/CardContainer'

const ExploreProblems = () => {
  return (
    <NavbarMenuLayout>
        <h1 className='text-3xl font-bold'>Explore Public Problems</h1>
        <CardContainer>
            <PublicProblemCard/>
            <PublicProblemCard/>
            <PublicProblemCard/>
            <PublicProblemCard/>
            <PublicProblemCard/>
        </CardContainer>
    </NavbarMenuLayout>
  )
}

export default ExploreProblems