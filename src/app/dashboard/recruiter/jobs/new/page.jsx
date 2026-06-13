"use client";

import React, { useState } from 'react';
import {
    Form,
    Fieldset,
    TextField,
    Label,
    Input,
    Select,
    ListBox,
    TextArea,
    Button,
    FieldError,
    toast
} from '@heroui/react';
import { Xmark } from '@gravity-ui/icons';
import { postJobs } from '@/lib/actions/jobs';

export default function CreateJobForm({ onClose }) {
    // Local state tracking for the "Remote" configuration toggle
    const [isRemote, setIsRemote] = useState(false);
    // State to catch and display custom validation errors
    const [errors, setErrors] = useState({});

    const handleSubmit = async (e) => {
        e.preventDefault();

        // Clear previous validation errors
        setErrors({});
        const form = e.currentTarget
        const formData = new FormData(form);
        const data = Object.fromEntries(formData);
        data.isRemote = isRemote;

        // Custom validation check: Ensure max salary is greater than min salary
        const minSalary = Number(data.salaryMin);
        const maxSalary = Number(data.salaryMax);

        if (minSalary && maxSalary && maxSalary < minSalary) {
            setErrors({
                salaryMax: "Maximum salary cannot be less than the minimum salary."
            });
            return;
        }
        const newJobData = {
            ...data
        }
        console.log(newJobData);

        const res = await postJobs(newJobData);
        if (res?.insertedId) {
            form.reset()
            setIsRemote(false)
          toast.success('success')
        } else {
            toast.error('err')
        }

    };

    return (
        <div className="w-full max-w-2xl mx-auto rounded-xl bg-[#121212] border border-[#262626] text-white shadow-2xl overflow-hidden font-sans">

            {/* Top Header Panel */}
            <div className="flex items-start justify-between p-6 pb-4 border-b border-[#1f1f1f]">
                <div>
                    <h2 className="text-xl font-semibold tracking-tight text-white">Post a New Job Opening</h2>
                    <p className="text-xs text-[#a3a3a3] mt-1">
                        Specify the role, requirements, and structural specifics to find your match. All fields are required.
                    </p>
                </div>
                <button
                    onClick={onClose}
                    type="button"
                    className="text-[#a3a3a3] hover:text-white transition-colors duration-150 p-1"
                >
                    <Xmark className="w-4 h-4" />
                </button>
            </div>

            {/* Main Form Elements */}
            <Form onSubmit={handleSubmit} validationBehavior="native" className="p-6 space-y-8">

                {/* =======================================================
                    SECTION 1: JOB INFO 
                ======================================================= */}
                <Fieldset className="w-full space-y-5">
                    <div className="border-b border-[#1f1f1f] pb-1.5">
                        <h3 className="text-sm font-semibold text-[#e5e5e5] uppercase tracking-wider">Job Info</h3>
                    </div>

                    <Fieldset.Group className="grid grid-cols-1 md:grid-cols-2 gap-5 w-full">

                        {/* Job Title */}
                        <TextField name="jobTitle" isRequired className="flex flex-col gap-1.5">
                            <Label className="text-xs font-medium text-[#e5e5e5]">Job Title</Label>
                            <Input
                                variant="secondary"
                                placeholder="e.g. Lead Software Engineer"
                                className="w-full bg-[#1c1c1c] border border-[#2f2f2f] text-sm text-white rounded-lg px-3 py-2.5 placeholder-[#525252] focus:outline-none focus:border-[#404040]"
                            />
                            <FieldError className="text-xs text-red-500 mt-1" />
                        </TextField>

                        {/* Job Category Select Dropdown */}
                        <div className="flex flex-col gap-1.5">
                            <Label className="text-xs font-medium text-[#e5e5e5]">Job Category</Label>
                            <Select
                                name="jobCategory"
                                isRequired
                                variant="secondary"
                                placeholder="Select Category"
                                className="w-full text-sm rounded-lg"
                            >
                                <Select.Trigger className="rounded-lg border bg-[#1c1c1c] border-[#2f2f2f] p-2.5 w-full text-left flex justify-between items-center">
                                    <Select.Value />
                                </Select.Trigger>
                                <Select.Popover>
                                    <ListBox className="bg-[#1c1c1c] text-white border border-[#2f2f2f]">
                                        <ListBox.Item id="engineering">Engineering</ListBox.Item>
                                        <ListBox.Item id="design">Product Design</ListBox.Item>
                                        <ListBox.Item id="marketing">Marketing</ListBox.Item>
                                        <ListBox.Item id="sales">Sales & Growth</ListBox.Item>
                                    </ListBox>
                                </Select.Popover>
                            </Select>
                        </div>

                        {/* Job Type Select Dropdown */}
                        <div className="flex flex-col gap-1.5">
                            <Label className="text-xs font-medium text-[#e5e5e5]">Job Type</Label>
                            <Select
                                name="jobType"
                                isRequired
                                variant="secondary"
                                placeholder="Select Type"
                                className="w-full text-sm rounded-lg"
                            >
                                <Select.Trigger className="rounded-lg border bg-[#1c1c1c] border-[#2f2f2f] p-2.5 w-full text-left flex justify-between items-center">
                                    <Select.Value />
                                </Select.Trigger>
                                <Select.Popover>
                                    <ListBox className="bg-[#1c1c1c] text-white border border-[#2f2f2f]">
                                        <ListBox.Item id="full-time">Full-time</ListBox.Item>
                                        <ListBox.Item id="part-time">Part-time</ListBox.Item>
                                        <ListBox.Item id="contract">Contract</ListBox.Item>
                                        <ListBox.Item id="internship">Internship</ListBox.Item>
                                        <ListBox.Item id="entry-lavel">Entry Level</ListBox.Item>
                                    </ListBox>
                                </Select.Popover>
                            </Select>
                        </div>

                        {/* Application Deadline Date Selector */}
                        <TextField name="deadline" isRequired className="flex flex-col gap-1.5">
                            <Label className="text-xs font-medium text-[#e5e5e5]">Application Deadline</Label>
                            <Input
                                type="date"
                                variant="secondary"
                                className="w-full bg-[#1c1c1c] border border-[#2f2f2f] text-sm text-white rounded-lg px-3 py-2.5 focus:outline-none focus:border-[#404040]"
                            />
                            <FieldError className="text-xs text-red-500 mt-1" />
                        </TextField>

                        {/* Salary Range & Currency Flex Block */}
                        <div className="flex flex-col gap-1.5 md:col-span-2">
                            <Label className="text-xs font-medium text-[#e5e5e5]">Salary Range & Currency</Label>
                            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                                <TextField name="salaryMin" isRequired className="flex flex-col">
                                    <Input
                                        type="number"
                                        min="0"
                                        variant="secondary"
                                        placeholder="Min (e.g. 80000)"
                                        className="w-full bg-[#1c1c1c] border border-[#2f2f2f] text-sm text-white rounded-lg px-3 py-2.5 placeholder-[#525252] focus:outline-none"
                                    />
                                    <FieldError className="text-xs text-red-500 mt-1" />
                                </TextField>

                                <TextField name="salaryMax" isRequired isInvalid={!!errors.salaryMax} className="flex flex-col">
                                    <Input
                                        type="number"
                                        min="0"
                                        variant="secondary"
                                        placeholder="Max (e.g. 120000)"
                                        className="w-full bg-[#1c1c1c] border border-[#2f2f2f] text-sm text-white rounded-lg px-3 py-2.5 placeholder-[#525252] focus:outline-none"
                                    />
                                    {errors.salaryMax ? (
                                        <span className="text-xs text-red-500 mt-1">{errors.salaryMax}</span>
                                    ) : (
                                        <FieldError className="text-xs text-red-500 mt-1" />
                                    )}
                                </TextField>

                                <Select
                                    name="currency"
                                    isRequired
                                    variant="secondary"
                                    placeholder="USD ($)"
                                    className="w-full text-sm rounded-lg"
                                >
                                    <Select.Trigger className="rounded-lg border bg-[#1c1c1c] border-[#2f2f2f] p-2.5 w-full text-left flex justify-between items-center">
                                        <Select.Value />
                                    </Select.Trigger>
                                    <Select.Popover>
                                        <ListBox className="bg-[#1c1c1c] text-white border border-[#2f2f2f]">
                                            <ListBox.Item id="usd">USD ($)</ListBox.Item>
                                            <ListBox.Item id="eur">EUR (€)</ListBox.Item>
                                            <ListBox.Item id="gbp">GBP (£)</ListBox.Item>
                                            <ListBox.Item id="cad">CAD ($)</ListBox.Item>
                                        </ListBox>
                                    </Select.Popover>
                                </Select>
                            </div>
                        </div>

                        {/* Location Inputs with Interactive Remote Toggle Option */}
                        <div className="flex flex-col gap-2.5 md:col-span-2 bg-[#171717] p-4 rounded-lg border border-[#262626]">
                            <div className="flex items-center justify-between">
                                <div className="flex flex-col">
                                    <span className="text-xs font-medium text-[#e5e5e5]">Remote-Only Setting</span>
                                    <span className="text-[11px] text-[#737373]">Enable if this position does not require geographic residency</span>
                                </div>
                                {/* Switch Toggle Container */}
                                <button
                                    type="button"
                                    onClick={() => setIsRemote(!isRemote)}
                                    className={`w-10 h-5 flex items-center rounded-full p-0.5 duration-300 cursor-pointer ${isRemote ? 'bg-white' : 'bg-[#2f2f2f]'}`}
                                >
                                    <div className={`bg-[#121212] w-4 h-4 rounded-full shadow-md transform duration-300 ${isRemote ? 'translate-x-5 bg-black' : ''}`} />
                                </button>
                            </div>

                            {!isRemote && (
                                <TextField name="location" isRequired={!isRemote} className="flex flex-col gap-1.5 mt-2 transition-all">
                                    <Label className="text-xs font-medium text-[#e5e5e5]">Office Location</Label>
                                    <div className="relative flex items-center rounded-lg border border-[#2f2f2f] bg-[#1c1c1c]">
                                        <span className="absolute left-3 text-[#737373]">
                                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-4 h-4">
                                                <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                                                <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z" />
                                            </svg>
                                        </span>
                                        <Input
                                            variant="secondary"
                                            placeholder="City, Country (e.g. San Francisco, CA)"
                                            className="w-full bg-transparent text-sm text-white pl-9 pr-3 py-2.5 placeholder-[#525252] focus:outline-none"
                                        />
                                    </div>
                                    <FieldError className="text-xs text-red-500 mt-1" />
                                </TextField>
                            )}
                        </div>

                    </Fieldset.Group>
                </Fieldset>

                {/* =======================================================
                    SECTION 2: JOB DESCRIPTION
                ======================================================= */}
                <Fieldset className="w-full space-y-5">
                    <div className="border-b border-[#1f1f1f] pb-1.5">
                        <h3 className="text-sm font-semibold text-[#e5e5e5] uppercase tracking-wider">Job Description</h3>
                    </div>

                    {/* Responsibilities Field */}
                    <div className="flex flex-col gap-1.5 w-full">
                        <TextField name="responsibilities" isRequired className="flex flex-col gap-1.5">
                            <Label className="text-xs font-medium text-[#e5e5e5]">Responsibilities</Label>
                            <TextArea
                                variant="secondary"
                                placeholder="Outline the core duties, targets, and expected daily operations..."
                                className="w-full min-h-[110px] bg-[#1c1c1c] border border-[#2f2f2f] text-sm text-white rounded-lg p-3 placeholder-[#525252] focus:outline-none focus:border-[#404040] resize-none"
                            />
                            <FieldError className="text-xs text-red-500 mt-1" />
                        </TextField>
                    </div>

                    {/* Requirements Field */}
                    <div className="flex flex-col gap-1.5 w-full">
                        <TextField name="requirements" isRequired className="flex flex-col gap-1.5">
                            <Label className="text-xs font-medium text-[#e5e5e5]">Requirements</Label>
                            <TextArea
                                variant="secondary"
                                placeholder="List required skills, education levels, years of experience, or technical certs..."
                                className="w-full min-h-[110px] bg-[#1c1c1c] border border-[#2f2f2f] text-sm text-white rounded-lg p-3 placeholder-[#525252] focus:outline-none focus:border-[#404040] resize-none"
                            />
                            <FieldError className="text-xs text-red-500 mt-1" />
                        </TextField>
                    </div>

                    {/* Benefits Field (Now explicitly Required) */}
                    <div className="flex flex-col gap-1.5 w-full">
                        <TextField name="benefits" isRequired className="flex flex-col gap-1.5">
                            <Label className="text-xs font-medium text-[#e5e5e5]">Benefits</Label>
                            <TextArea
                                variant="secondary"
                                placeholder="What makes your workplace great? Healthcare, stock options, PTO, flexible working styles..."
                                className="w-full min-h-[90px] bg-[#1c1c1c] border border-[#2f2f2f] text-sm text-white rounded-lg p-3 placeholder-[#525252] focus:outline-none focus:border-[#404040] resize-none"
                            />
                            <FieldError className="text-xs text-red-500 mt-1" />
                        </TextField>
                    </div>

                    {/* Combined Action Bar */}
                    <Fieldset.Actions className="flex items-center justify-end gap-3 pt-5 border-t border-[#1f1f1f] mt-4">
                        <Button
                            type="button"
                            onClick={onClose}
                            className="px-5 py-2 text-xs font-medium text-[#e5e5e5] hover:text-white border border-[#2f2f2f] bg-transparent rounded-lg transition-all duration-150"
                        >
                            Cancel
                        </Button>
                        <Button
                            type="submit"
                            className="px-5 py-2 text-xs font-semibold text-black bg-white hover:bg-[#e5e5e5] rounded-lg transition-all duration-150 shadow-sm"
                        >
                            Publish Job Opening
                        </Button>
                    </Fieldset.Actions>

                </Fieldset>
            </Form>
        </div>
    );
}