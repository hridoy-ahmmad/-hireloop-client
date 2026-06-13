'use server'

export const postJobs = async (newJobData) => {
    const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/jobs`, {
        method: 'POST',
        headers: {
            'content-type': 'application/json'
        },
        body: JSON.stringify(newJobData)
    })
    const data = await res.json()
    return data
}