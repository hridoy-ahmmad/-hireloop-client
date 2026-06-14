
const baseUrl = process.env.NEXT_PUBLIC_BASE_URL
export const GetNewJobs = async (companyId, status) => {
    const res = await fetch(`${baseUrl}/api/jobs?companyId=${companyId}&satus=${status}`)
    return res.json()
}