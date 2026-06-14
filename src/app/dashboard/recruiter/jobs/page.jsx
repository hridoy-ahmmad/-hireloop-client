import { GetNewJobs } from "@/lib/api/jobs";
import { Checkbox, Table } from "@heroui/react";
import { Eye, Pencil, TrashBin } from "@gravity-ui/icons";

const Jobs = async () => {
    const companyId = "company_123";
    const jobs = await GetNewJobs(companyId);

    return (
        <div className="flex flex-col gap-3 p-5">
            <Table>
                <Table.ScrollContainer>
                    <Table.Content
                        aria-label="Jobs Table"
                        className="w-full"
                    >
                        <Table.Header>
                            <Table.Column className="pr-0">
                                <Checkbox
                                    aria-label="Select all jobs"
                                    slot="selection"
                                />
                            </Table.Column>

                            <Table.Column isRowHeader>
                                Job Title
                            </Table.Column>

                            <Table.Column>
                                Job Type
                            </Table.Column>

                            <Table.Column>
                                Status
                            </Table.Column>

                            <Table.Column>
                                Location
                            </Table.Column>

                            <Table.Column>
                                Actions
                            </Table.Column>
                        </Table.Header>

                        <Table.Body>
                            {jobs?.map((job, index) => (
                                <Table.Row
                                    key={job._id || index}
                                >
                                    <Table.Cell className="pr-0">
                                        <Checkbox
                                            aria-label={`Select ${job.jobTitle}`}
                                            slot="selection"
                                            variant="secondary"
                                        />
                                    </Table.Cell>

                                    <Table.Cell>
                                        {job.jobTitle}
                                    </Table.Cell>

                                    <Table.Cell>
                                        {job.jobType}
                                    </Table.Cell>

                                    <Table.Cell>
                                        {job.status}
                                    </Table.Cell>

                                    <Table.Cell>
                                        {job.location}
                                    </Table.Cell>

                                    <Table.Cell>
                                        <div className="flex items-center gap-3">
                                            {/* View */}
                                            <button
                                                type="button"
                                                aria-label="View Job"
                                                className="cursor-pointer transition-opacity hover:opacity-70"
                                            >
                                                <Eye className="size-4" />
                                            </button>

                                            {/* Edit */}
                                            <button
                                                type="button"
                                                aria-label="Edit Job"
                                                className="cursor-pointer transition-opacity hover:opacity-70"
                                            >
                                                <Pencil className="size-4" />
                                            </button>

                                            {/* Delete */}
                                            <button
                                                type="button"
                                                aria-label="Delete Job"
                                                className="cursor-pointer text-red-500 transition-opacity hover:opacity-70"
                                            >
                                                <TrashBin className="size-4" />
                                            </button>
                                        </div>
                                    </Table.Cell>
                                </Table.Row>
                            ))}
                        </Table.Body>
                    </Table.Content>
                </Table.ScrollContainer>
            </Table>
        </div>
    );
};

export default Jobs;