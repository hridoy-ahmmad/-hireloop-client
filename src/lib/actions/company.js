import { serverMutations } from "../core/postServer"


export const companyPost = async (companyData) => {
    return serverMutations('/api/companies', companyData)
}

