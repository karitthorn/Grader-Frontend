import { ProblemHashedTable, ProblemModel, ProblemPopulateTestcases } from "../models/Problem.model";

export function transformProblemModel2ProblemHashedTable(problems: ProblemModel[] | ProblemPopulateTestcases[]): ProblemHashedTable {
    let result = []
    for (const problem of problems) {
        result[problem.problem_id] = problem
    }
    return result
}