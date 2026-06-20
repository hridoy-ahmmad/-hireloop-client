"use client";

import React, { useState } from "react";
import { Button, Input, Label, Modal, TextField } from "@heroui/react";
import { companyPost } from "@/lib/actions/company";

export function RegisterCompany({ user }) {
  // State management for form entries
  const [formData, setFormData] = useState({});
  const [logoFile, setLogoFile] = useState(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [error, setError] = useState('')

  // Generic input change handler
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  // File dropzone change handler
  const handleFileChange = (e) => {
    if (e.target.files && e.target.files[0]) {
      setLogoFile(e.target.files[0]);
    }
    const file = e.target.files?.[0];

    if (!file) return;

    if (file.size > 1 * 1024 * 1024) {
      setError("Logo image must be less than 1 MB");
      e.target.value = "";
      setLogoFile(null);
      return;
    }

    setLogoFile(file);
    setError('')
  }
  // Submit Handler
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (logoFile && logoFile.size > 1 * 1024 * 1024) {
      setError("Logo image must be less than 1 MB");
      return;
    }

    setIsSubmitting(true);

    try {
      let logoURl = ''
      const logoImage = new FormData()

      if (logoFile) {
        logoImage.append('image', logoFile)

      }

      const imageResponse = await fetch(`https://api.imgbb.com/1/upload?expiration=600&key=${process.env.NEXT_PUBLIC_IMAGE_API}`, {
        method: 'POST',
        body: logoImage
      })
      const imageResult = await imageResponse.json()
      logoURl = imageResult.data.url

      // Using FormData to handle text inputs mixed with files cleanly
      const companyData = {
        companyName: formData.companyName,
        industry: formData.industry,
        websiteUrl: formData.websiteUrl,
        location: formData.location,
        employeeCount: formData.employeeCount,
        description: formData.description,
        logoUrl: logoURl,
        userId: user?.id
      };

      // from lib
      const result = companyPost(companyData)
      console.log("Success:", result);

      // Reset Form & Close Modal on success
      setFormData({
        companyName: "",
        industry: "technology",
        websiteUrl: "",
        location: "",
        employeeCount: "1-10",
        description: "",
      });
      setLogoFile(null);
      setIsOpen(false);

    } catch (error) {
      console.error("Submission Error:", error);
      alert("Something went wrong while registering your company.");
    } finally {
      setIsSubmitting(false);
    }
    console.log(formData);

  };

  return (
    <Modal open={isOpen} onOpenChange={setIsOpen}>
      {/* Trigger Button */}
      <Button
        variant="secondary"
        onClick={() => setIsOpen(true)}
        className="self-start sm:self-auto inline-flex items-center justify-center bg-white text-black hover:bg-gray-200 font-medium text-sm px-5 py-2.5 rounded-full transition-colors duration-200 shadow-sm"
      >
        + Register a company
      </Button>

      <Modal.Backdrop>
        <Modal.Container placement="auto">
          <Modal.Dialog className="sm:max-w-2xl bg-[#141414] border border-[#222] rounded-xl text-white">
            <Modal.CloseTrigger className="text-gray-400 hover:text-white" />

            <Modal.Header className="border-b border-[#222] pb-4">
              <Modal.Heading className="text-xl font-semibold text-white">
                Register New Company
              </Modal.Heading>
              <p className="mt-1 text-xs text-gray-400">
                Enter your business details to start hiring on HireLoop.
              </p>
            </Modal.Header>

            <Modal.Body className="p-6">
              <form id="company-form" onSubmit={handleSubmit} className="flex flex-col gap-5">

                {/* Row 1: Company Name & Industry */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <TextField className="w-full" variant="secondary">
                    <Label className="text-xs font-medium text-gray-300 mb-1.5 block">Company Name</Label>
                    <Input
                      required
                      name="companyName"
                      value={formData.companyName}
                      onChange={handleInputChange}
                      placeholder="e.g. Acme Corp"
                      className="w-full bg-[#1c1c1e] border border-[#2c2c2e] text-white placeholder-gray-600 rounded-lg p-2.5 text-sm focus:outline-none focus:border-gray-500"
                    />
                  </TextField>

                  <TextField className="w-full" variant="secondary">
                    <Label className="text-xs font-medium text-gray-300 mb-1.5 block">Industry / Category</Label>
                    <div className="relative">
                      <select
                        name="industry"
                        value={formData.industry}
                        onChange={handleInputChange}
                        className="w-full bg-[#1c1c1e] border border-[#2c2c2e] text-white rounded-lg p-2.5 text-sm focus:outline-none focus:border-gray-500 appearance-none pr-10"
                      >
                        <option value="technology">Technology</option>
                        <option value="design">Design</option>
                        <option value="marketing">Marketing</option>
                      </select>
                      <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none text-gray-400">
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                        </svg>
                      </div>
                    </div>
                  </TextField>
                </div>

                {/* Row 2: Website URL & Location */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <TextField className="w-full" variant="secondary">
                    <Label className="text-xs font-medium text-gray-300 mb-1.5 block">Website URL</Label>
                    <div className="flex rounded-lg overflow-hidden border border-[#2c2c2e] text-sm focus-within:border-gray-500">
                      <span className="bg-[#262626] text-gray-400 px-3 py-2.5 flex items-center border-r border-[#2c2c2e] select-none">
                        https://
                      </span>
                      <Input
                        required
                        name="websiteUrl"
                        value={formData.websiteUrl}
                        onChange={handleInputChange}
                        placeholder="www.company.com"
                        className="w-full bg-[#1c1c1e] text-white placeholder-gray-600 p-2.5 focus:outline-none"
                      />
                    </div>
                  </TextField>

                  <TextField className="w-full" variant="secondary">
                    <Label className="text-xs font-medium text-gray-300 mb-1.5 block">Location</Label>
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none text-gray-500">
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                        </svg>
                      </div>
                      <Input
                        required
                        name="location"
                        value={formData.location}
                        onChange={handleInputChange}
                        placeholder="City, Country"
                        className="w-full bg-[#1c1c1e] border border-[#2c2c2e] text-white placeholder-gray-600 rounded-lg pl-9 pr-3 p-2.5 text-sm focus:outline-none focus:border-gray-500"
                      />
                    </div>
                  </TextField>
                </div>

                {/* Row 3: Employee Count & Company Logo */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <TextField className="w-full" variant="secondary">
                    <Label className="text-xs font-medium text-gray-300 mb-1.5 block">Employee Count Range</Label>
                    <div className="relative">
                      <select
                        name="employeeCount"
                        value={formData.employeeCount}
                        onChange={handleInputChange}
                        className="w-full bg-[#1c1c1e] border border-[#2c2c2e] text-white rounded-lg p-2.5 text-sm focus:outline-none focus:border-gray-500 appearance-none pr-10"
                      >
                        <option value="1-10">1-10 employees</option>
                        <option value="11-50">11-50 employees</option>
                        <option value="51-200">51-200 employees</option>
                        <option value="201+">201+ employees</option>
                      </select>
                      <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none text-gray-400">
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                        </svg>
                      </div>
                    </div>
                  </TextField>

                  <div>
                    <Label className="text-xs font-medium text-gray-300 mb-1.5 block">Company Logo</Label>
                    <div className="flex items-center gap-3">
                      <label className={`w-12 h-12 flex flex-col items-center justify-center bg-[#1c1c1e] border border-dashed rounded-xl cursor-pointer transition-colors ${logoFile ? 'border-green-500' : 'border-[#444] hover:border-gray-500'}`}>
                        <svg className={`w-4 h-4 ${logoFile ? 'text-green-400' : 'text-gray-400'}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          {logoFile ? (
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                          ) : (
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-8l-4-4m0 0L8 8m4-4v12" />
                          )}
                        </svg>
                        <input type="file" className="hidden" accept="image/png, image/jpeg" onChange={handleFileChange} />
                      </label>
                      <div>
                        <p className="text-xs font-medium text-gray-300 truncate max-w-[180px]">
                          {logoFile ? logoFile.name : "Upload image"}
                        </p>
                        <p className="text-[10px] text-gray-500 mt-0.5">PNG, JPG up to 1MB</p>
                        <p className="text-red-500 text-[12px]">{
                          error
                        }</p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Row 4: Description TextArea */}
                <TextField className="w-full" variant="secondary">
                  <Label className="text-xs font-medium text-gray-300 mb-1.5 block">Brief Description</Label>
                  <textarea
                    rows={4}
                    name="description"
                    value={formData.description}
                    onChange={handleInputChange}
                    placeholder="Tell us about your company's mission and culture..."
                    className="w-full bg-[#1c1c1e] border border-[#2c2c2e] text-white placeholder-gray-600 rounded-lg p-3 text-sm focus:outline-none focus:border-gray-500 resize-none"
                  />
                </TextField>

              </form>
            </Modal.Body>

            <Modal.Footer className="border-t border-[#222] pt-4 flex justify-end gap-3">
              <Button
                type="button"
                onClick={() => setIsOpen(false)}
                variant="secondary"
                className="bg-transparent border border-[#2c2c2e] text-white hover:bg-[#1c1c1e] text-xs font-medium px-4 py-2 rounded-lg transition-colors"
              >
                Cancel
              </Button>
              <Button
                type="submit"
                form="company-form"
                disabled={isSubmitting}
                className="bg-white text-black hover:bg-gray-200 disabled:bg-gray-500 disabled:cursor-not-allowed text-xs font-semibold px-4 py-2 rounded-lg transition-colors"
              >
                {isSubmitting ? "Registering..." : "Register Company"}
              </Button>
            </Modal.Footer>
          </Modal.Dialog>
        </Modal.Container>
      </Modal.Backdrop>
    </Modal>
  );
}