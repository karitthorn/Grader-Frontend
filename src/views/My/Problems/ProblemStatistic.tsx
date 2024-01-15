import React, { useEffect, useState } from 'react'
import NavbarSidebarLayout from '../../../layout/NavbarSidebarLayout'
import { useParams } from 'react-router-dom'
import { ProblemService } from './../../../services/Problem.service';
import { ProblemPopulateAccountAndTestcasesAndProblemGroupPermissionsPopulateGroupModel } from '../../../types/models/Problem.model';
import { SubmissionService } from '../../../services/Submission.service';
import { SubmissionPopulateSubmissionTestcaseAndAccountModel } from '../../../types/models/Submission.model';
import MyProblemSubmissionsTable from '../../../components/Tables/MyProblemSubmissionsTable';

const ProblemStatistic = () => {

    const {problemId} = useParams()
    const accountId = String(localStorage.getItem("account_id"));

    const [problem,setProblem] = useState<ProblemPopulateAccountAndTestcasesAndProblemGroupPermissionsPopulateGroupModel>()
    const [submissions,setSubmissions] = useState<SubmissionPopulateSubmissionTestcaseAndAccountModel[]>()

    useEffect(() => {

        if (!problemId) return

        ProblemService.get(accountId,problemId).then((response) => {
            console.log('problem',response.data)
            setProblem(response.data)
            return SubmissionService.getByCreatorProblem(accountId,problemId)
        }).then((response) => {
            setSubmissions(response.data.submissions)
        })
    },[accountId,problemId])

  return (
    <NavbarSidebarLayout>
        <div className='mt-10 w-[96%] mx-auto'>
            <div className='font-bold text-3xl'>{problem?.title}</div>
            <div className='mt-5'>
            {problem && <MyProblemSubmissionsTable
                submissions={submissions}
                problem={problem}
            />}
            </div>
        </div>
    </NavbarSidebarLayout>
  )
}

export default ProblemStatistic