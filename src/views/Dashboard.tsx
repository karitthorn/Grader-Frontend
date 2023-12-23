import React, { useEffect, useState } from 'react'
import NavbarSidebarLayout from '../layout/NavbarSidebarLayout'
import NavbarMenuLayout from '../layout/NavbarMenuLayout'
import PublicProblemCard2 from '../components/PublicProblemCard2'
import { SubmissionService } from '../services/Submission.service'

const Dashboard = () => {

    const accountId = Number(localStorage.getItem("account_id"))
    const [previousAttemptedProblems, setPreviousAttemptedProblems] = useState<[]>([])

    // useEffect(()=>{
    //     SubmissionService.getByAccountProblem(accountId,96).then(response => {
    //         console.log(response.data)
    //         setPreviousAttemptedProblems([response.data.])
    //     })
    // },[])

  return (
    <NavbarMenuLayout>
        <div className='mt-10'>
        <p className='text-4xl font-bold'>Welcome back, <span className='text-green-600'>KanonKC</span></p>

        <p className='text-3xl font-bold'>Previous Attempted</p>
        {/* <PublicProblemCard2/> */}
        
        </div>
    </NavbarMenuLayout>
  )
}

export default Dashboard