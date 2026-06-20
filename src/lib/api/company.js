import { serverFetch } from "../core/serverFetch"
import { getUser } from "../core/session"





export const getRecruiterCompany = async (userId) => {
    return serverFetch(`/api/my/companies?userId=${userId}`)
}

export const loginRecruiterCompany = async () => {
    const user = await getUser()
    return getRecruiterCompany(user?.id)

}