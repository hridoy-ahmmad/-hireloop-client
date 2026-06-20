'use server'

import { serverMutations } from "../core/postServer"

export const postJobs = async (newJobData) => {
    return serverMutations('/api/jobs', newJobData)
}