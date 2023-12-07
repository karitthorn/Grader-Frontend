import React, { useEffect, useState } from 'react'
import NavbarMenuLayout from '../layout/NavbarMenuLayout'
import PublicProblemCard from '../components/PublicProblemCard'
import CardContainer from '../components/CardContainer'
import { ProblemPopulateAccountAndSubmissionPopulateSubmissionTestcasesSecureModel } from '../types/models/Problem.model'
import { ProblemService } from '../services/Problem.service'

const ExploreProblems = () => {

  const [problems, setProblems] = useState<ProblemPopulateAccountAndSubmissionPopulateSubmissionTestcasesSecureModel[]>([])

  useEffect(() => {
    ProblemService.getAll().then(response => {
      setProblems(response.data.problems)
    })
  },[])

  return (
    <NavbarMenuLayout>
        <h1 className='text-3xl font-bold'>Explore Public Problems</h1>
        <CardContainer>
            {
              problems.map(problem => (
                <PublicProblemCard problem={problem}/>
              ))
            }
            
        </CardContainer>
    </NavbarMenuLayout>
  )
}

export default ExploreProblems