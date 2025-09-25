import React, { useState, useEffect } from "react";
import { createRoot } from "react-dom/client";
import SalesSection from "./salesSection";

// Icons from Lucide React
const HomeIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className="lucide lucide-home"
  >
    <path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
    <polyline points="9 22 9 12 15 12 15 22" />
  </svg>
);
const Package2Icon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className="lucide lucide-package-2"
  >
    <path d="M3 9h18v10a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V9Z" />
    <path d="m3 9 2.45-4.9A2 2 0 0 1 7.24 3h9.52a2 2 0 0 1 1.79 1.1L21 9" />
    <line x1="12" x2="12" y1="12" y2="17" />
    <path d="M12 18h.01" />
  </svg>
);
const PlusIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className="lucide lucide-plus"
  >
    <path d="M5 12h14" />
    <path d="M12 5v14" />
  </svg>
);
const SearchIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className="lucide lucide-search"
  >
    <circle cx="11" cy="11" r="8" />
    <path d="m21 21-4.3-4.3" />
  </svg>
);
const LogOutIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className="lucide lucide-log-out"
  >
    <path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4" />
    <polyline points="16 17 21 12 16 7" />
    <line x1="21" x2="9" y1="12" y2="12" />
  </svg>
);
const EditIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="16"
    height="16"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className="lucide lucide-edit"
  >
    <path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7" />
    <path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z" />
  </svg>
);
const TrashIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="16"
    height="16"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className="lucide lucide-trash-2"
  >
    <path d="M3 6h18" />
    <path d="M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6" />
    <path d="M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2" />
    <line x1="10" x2="10" y1="11" y2="17" />
    <line x1="14" x2="14" y1="11" y2="17" />
  </svg>
);
const ChevronLeftIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className="lucide lucide-chevron-left"
  >
    <path d="m15 18-6-6 6-6" />
  </svg>
);
const ChevronRightIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className="lucide lucude-chevron-right"
  >
    <path d="m9 18 6-6-6-6" />
  </svg>
);
const DollarSignIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className="lucide lucide-dollar-sign"
  >
    <line x1="12" x2="12" y1="2" y2="22" />
    <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
  </svg>
);
const FileTextIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className="lucide lucide-file-text"
  >
    <path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z" />
    <polyline points="14 2 14 8 20 8" />
    <line x1="16" x2="8" y1="13" y2="13" />
    <line x1="16" x2="8" y1="17" y2="17" />
    <line x1="10" x2="8" y1="9" y2="9" />
  </svg>
);
const SettingsIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className="lucide lucide-settings"
  >
    <path d="M12.22 2h-.44a2 2 0 0 0-2 2v.122a2 2 0 0 1-1.583 1.939l-1.6.32a2 2 0 0 0-1.742 2.373l-.066.265a2 2 0 0 1-1.637 1.838l-.265.066a2 2 0 0 0-2.373 1.742l-.32 1.6A2 2 0 0 1 2 12.22v.44a2 2 0 0 0 2 2h.122a2 2 0 0 1 1.939 1.583l.32 1.6a2 2 0 0 0 2.373 1.742l.265-.066a2 2 0 0 1 1.838-1.637l.066-.265a2 2 0 0 0 1.742-2.373l1.6-.32A2 2 0 0 1 22 12.22v-.44a2 2 0 0 0-2-2h-.122a2 2 0 0 1-1.939-1.583l-.32-1.6a2 2 0 0 0-2.373-1.742l-.265.066a2 2 0 0 1-1.838 1.637l-.066.265A2 2 0 0 0 12.22 2z" />
    <circle cx="12" cy="12" r="3" />
  </svg>
);
const LayoutDashboardIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className="lucide lucide-layout-dashboard"
  >
    <rect width="7" height="9" x="3" y="3" rx="1" />
    <rect width="7" height="5" x="14" y="3" rx="1" />
    <rect width="7" height="9" x="14" y="12" rx="1" />
    <rect width="7" height="5" x="3" y="16" rx="1" />
  </svg>
);

const Dashboard = () => {
  const [activeTab, setActiveTab] = useState("services");
  const [services, setServices] = useState(() => {
    const saved = localStorage.getItem("services");
    return saved
      ? JSON.parse(saved)
      : [
        {
          id: 1,
          ServiceName: "AC",
          data: [
            {
              vendorId: 1,
              vendorName: "MagicCool Aircon",
              vendorImage: "https://placehold.co/400x400/212A3E/FFFFFF?text=AC",
              rating: 4.9,
              reviews: "245+",
              location: "Bengaluru, Karnataka",
              services: [
                {
                  id: 101,
                  title: "AC Service Repair",
                  location: "Bengaluru, Karnataka",
                  price: 749,
                  originalPrice: 999,
                  description: "Power Jet AC Service (1 AC)",
                  serviceImage:
                    "https://placehold.co/400x400/212A3E/FFFFFF?text=AC+Service",
                  rating: 4.8,
                  reviews: "120+",
                  duration: "45 mins",
                  inclusions: [
                    "Applicable for Window & Split AC Service",
                    "Jet-pump service of AC filters, cooling coil & drain tray",
                    "Pre-service and Post-service checks",
                    "Additional spare part cost and gas charges not included",
                    "Adjusting any loose parts or wires to ensure proper functioning",
                  ],
                  exclusions: ["No exclusions"],
                },
              ],
            },
          ],
        },
        {
          id: 2,
          ServiceName: "Deep cleaning",
          data: [
            {
              vendorId: 2,
              vendorName: "Sparkle Clean",
              vendorImage:
                "https://placehold.co/400x400/5C8374/FFFFFF?text=Clean",
              rating: 4.8,
              reviews: "180+",
              location: "Bengaluru, Karnataka",
              services: [],
            },
          ],
        },
        { id: 3, ServiceName: "Plumbing", data: [] },
        { id: 4, ServiceName: "Electrical Repair", data: [] },
      ];
  });
  useEffect(() => {
  localStorage.setItem("services", JSON.stringify(services));
}, [services]);

  const [editingServiceId, setEditingServiceId] = useState(null);
  const [newServiceName, setNewServiceName] = useState("");
  const [selectedService, setSelectedService] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");

  const [showVendorForm, setShowVendorForm] = useState(false);
  const [vendorFormData, setVendorFormData] = useState({
    vendorName: "",
    vendorImage: "",
    rating: "",
    reviews: "",
    location: "",
  });
  const [editingVendorId, setEditingVendorId] = useState(null);

  const [selectedVendor, setSelectedVendor] = useState(null);
  const [showVendorServicesPanel, setShowVendorServicesPanel] = useState(false);
  const [showServiceForm, setShowServiceForm] = useState(false);
  const [serviceFormData, setServiceFormData] = useState({
    title: "",
    location: "",
    price: "",
    originalPrice: "",
    description: "",
    serviceImage: "",
    rating: "",
    reviews: "",
    duration: "",
    inclusions: "",
    exclusions: "",
  });
  const [editingServiceIdInVendor, setEditingServiceIdInVendor] =
    useState(null);

  const [selectedVendorService, setSelectedVendorService] = useState(null);
  const [showServiceDetailsPanel, setShowServiceDetailsPanel] = useState(false);

  // Handles adding a new top-level service.
  const handleCreateService = () => {
    if (newServiceName.trim() === "") return;
    const newService = {
      id: Date.now(),
      ServiceName: newServiceName.trim(),
      data: [],
    };
    setServices([...services, newService]);
    setNewServiceName("");
  };

  // Handles deleting a top-level service.
  const handleDeleteService = (id) => {
    setServices(services.filter((service) => service.id !== id));
  };

  // Handles saving an edited top-level service name.
  const handleSaveEdit = (id, newName) => {
    setServices(
      services.map((service) =>
        service.id === id ? { ...service, ServiceName: newName } : service
      )
    );
    setEditingServiceId(null);
  };

  // Handles opening the vendor details panel for a selected top-level service.
  const handleSelectService = (service) => {
    setSelectedService(service);
    setShowVendorServicesPanel(false);
    setEditingVendorId(null);
  };

  // Handles closing the vendor details panel.
  const handleClosePanel = () => {
    setSelectedService(null);
  };

  // Handles adding a new vendor to the selected top-level service.
  const handleAddVendor = (e) => {
    e.preventDefault();
    if (!vendorFormData.vendorName.trim()) return;

    const newVendor = {
      ...vendorFormData,
      vendorId: Date.now(),
      services: [],
      rating: parseFloat(vendorFormData.rating) || 0,
      reviews: vendorFormData.reviews.toString(),
    };

    const updatedServices = services.map((service) => {
      if (service.id === selectedService.id) {
        return { ...service, data: [...service.data, newVendor] };
      }
      return service;
    });

    setServices(updatedServices);
    const updatedSelectedService = updatedServices.find(
      (s) => s.id === selectedService.id
    );
    setSelectedService(updatedSelectedService);

    setShowVendorForm(false);
    setVendorFormData({
      vendorName: "",
      vendorImage: "",
      rating: "",
      reviews: "",
      location: "",
    });
  };

  // Handles editing an existing vendor.
  const handleEditVendor = (vendor) => {
    setEditingVendorId(vendor.vendorId);
    setVendorFormData({
      vendorName: vendor.vendorName,
      vendorImage: vendor.vendorImage,
      rating: vendor.rating,
      reviews: vendor.reviews,
      location: vendor.location,
    });
    setShowVendorForm(true);
  };

  // Handles updating a vendor's details.
  const handleUpdateVendor = (e) => {
    e.preventDefault();
    const updatedServices = services.map((service) => {
      if (service.id === selectedService.id) {
        const updatedData = service.data.map((vendor) => {
          if (vendor.vendorId === editingVendorId) {
            return {
              ...vendor,
              vendorName: vendorFormData.vendorName,
              vendorImage: vendorFormData.vendorImage,
              rating: parseFloat(vendorFormData.rating) || vendor.rating,
              reviews: vendorFormData.reviews,
              location: vendorFormData.location,
            };
          }
          return vendor;
        });
        return { ...service, data: updatedData };
      }
      return service;
    });
    setServices(updatedServices);
    const updatedSelectedService = updatedServices.find(
      (s) => s.id === selectedService.id
    );
    setSelectedService(updatedSelectedService);

    setEditingVendorId(null);
    setShowVendorForm(false);
    setVendorFormData({
      vendorName: "",
      vendorImage: "",
      rating: "",
      reviews: "",
      location: "",
    });
  };

  // Handles deleting a vendor from the selected top-level service.
  const handleDeleteVendor = (vendorId) => {
    const updatedServices = services.map((service) => {
      if (service.id === selectedService.id) {
        const filteredData = service.data.filter(
          (vendor) => vendor.vendorId !== vendorId
        );
        return { ...service, data: filteredData };
      }
      return service;
    });
    setServices(updatedServices);
    const updatedSelectedService = updatedServices.find(
      (s) => s.id === selectedService.id
    );
    setSelectedService(updatedSelectedService);
  };

  // ----- Functions for Vendor Services -----
  const handleSelectVendor = (vendor) => {
    setSelectedVendor(vendor);
    setShowVendorServicesPanel(true);
  };

  const handleCloseVendorServicesPanel = () => {
    setSelectedVendor(null);
    setShowVendorServicesPanel(false);
  };

  // Handles adding a new service to the selected vendor.
  const handleAddServiceToVendor = (e) => {
    e.preventDefault();
    if (!serviceFormData.title.trim()) return;

    const newService = {
      ...serviceFormData,
      id: Date.now(),
      price: parseFloat(serviceFormData.price) || 0,
      originalPrice: parseFloat(serviceFormData.originalPrice) || 0,
      rating: parseFloat(serviceFormData.rating) || 0,
      reviews: serviceFormData.reviews.toString(),
      inclusions: serviceFormData.inclusions
        .split(",")
        .map((item) => item.trim())
        .filter((item) => item),
      exclusions: serviceFormData.exclusions
        .split(",")
        .map((item) => item.trim())
        .filter((item) => item),
    };

    const updatedServices = services.map((service) => {
      if (service.id === selectedService.id) {
        const updatedData = service.data.map((vendor) => {
          if (vendor.vendorId === selectedVendor.vendorId) {
            return { ...vendor, services: [...vendor.services, newService] };
          }
          return vendor;
        });
        return { ...service, data: updatedData };
      }
      return service;
    });

    setServices(updatedServices);
    const updatedSelectedService = updatedServices.find(
      (s) => s.id === selectedService.id
    );
    setSelectedService(updatedSelectedService);
    const updatedSelectedVendor = updatedSelectedService.data.find(
      (v) => v.vendorId === selectedVendor.vendorId
    );
    setSelectedVendor(updatedSelectedVendor);

    setShowServiceForm(false);
    setServiceFormData({
      title: "",
      location: "",
      price: "",
      originalPrice: "",
      description: "",
      serviceImage: "",
      rating: "",
      reviews: "",
      duration: "",
      inclusions: "",
      exclusions: "",
    });
  };

  // Handles editing a service for a vendor.
  const handleEditVendorService = (service) => {
    setEditingServiceIdInVendor(service.id);
    setServiceFormData({
      ...service,
      inclusions: service.inclusions.join(", "),
      exclusions: service.exclusions.join(", "),
    });
    setShowServiceForm(true);
  };

  // Handles updating a service for a vendor.
  const handleUpdateVendorService = (e) => {
    e.preventDefault();

    const updatedServices = services.map((service) => {
      if (service.id === selectedService.id) {
        const updatedData = service.data.map((vendor) => {
          if (vendor.vendorId === selectedVendor.vendorId) {
            const updatedVendorServices = vendor.services.map((vService) => {
              if (vService.id === editingServiceIdInVendor) {
                return {
                  ...vService,
                  ...serviceFormData,
                  inclusions: serviceFormData.inclusions
                    .split(",")
                    .map((item) => item.trim())
                    .filter((item) => item),
                  exclusions: serviceFormData.exclusions
                    .split(",")
                    .map((item) => item.trim())
                    .filter((item) => item),
                };
              }
              return vService;
            });
            return { ...vendor, services: updatedVendorServices };
          }
          return vendor;
        });
        return { ...service, data: updatedData };
      }
      return service;
    });

    setServices(updatedServices);
    const updatedSelectedService = updatedServices.find(
      (s) => s.id === selectedService.id
    );
    setSelectedService(updatedSelectedService);
    const updatedSelectedVendor = updatedSelectedService.data.find(
      (v) => v.vendorId === selectedVendor.vendorId
    );
    setSelectedVendor(updatedSelectedVendor);

    setEditingServiceIdInVendor(null);
    setShowServiceForm(false);
    setServiceFormData({
      title: "",
      location: "",
      price: "",
      originalPrice: "",
      description: "",
      serviceImage: "",
      rating: "",
      reviews: "",
      duration: "",
      inclusions: "",
      exclusions: "",
    });
  };

  // Handles deleting a service from a vendor.
  const handleDeleteVendorService = (serviceId) => {
    const updatedServices = services.map((service) => {
      if (service.id === selectedService.id) {
        const updatedData = service.data.map((vendor) => {
          if (vendor.vendorId === selectedVendor.vendorId) {
            const filteredVendorServices = vendor.services.filter(
              (vService) => vService.id !== serviceId
            );
            return { ...vendor, services: filteredVendorServices };
          }
          return vendor;
        });
        return { ...service, data: updatedData };
      }
      return service;
    });
    setServices(updatedServices);
    const updatedSelectedService = updatedServices.find(
      (s) => s.id === selectedService.id
    );
    setSelectedService(updatedSelectedService);
    const updatedSelectedVendor = updatedSelectedService.data.find(
      (v) => v.vendorId === selectedVendor.vendorId
    );
    setSelectedVendor(updatedSelectedVendor);
  };

  // Handles showing the detailed view of a service.
  const handleShowServiceDetails = (service) => {
    setSelectedVendorService(service);
    setShowServiceDetailsPanel(true);
  };

  // Handles closing the detailed service view.
  const handleCloseServiceDetailsPanel = () => {
    setSelectedVendorService(null);
    setShowServiceDetailsPanel(false);
  };

  const filteredServices = services.filter((service) =>
    service.ServiceName.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleTabClick = (tabName) => {
    setActiveTab(tabName);
    setSelectedService(null);
    setShowVendorServicesPanel(false);
    setEditingVendorId(null);
    setSearchTerm("");
  };

  const renderContent = () => {
    switch (activeTab) {
      case "dashboard":
        return (
          <div className="flex flex-col items-center justify-center h-full p-8">
            <LayoutDashboardIcon className="w-24 h-24 text-gray-400 mb-6" />
            <h2 className="text-3xl font-bold text-gray-800 mb-4">
              User's Table
            </h2>
            <p className="text-gray-500 text-center max-w-lg">
              User Table is Empty
            </p>
          </div>
        );
      case "services":
        return (
          <>
            {!selectedService && (
              <div className="max-w-4xl mx-auto transition-opacity duration-500 ease-in-out">
                <h2 className="text-3xl font-bold text-gray-800 mb-6">
                  Service Categories
                </h2>
                <p className="text-gray-500 mb-6">
                  Select a category from the side menu to view and manage
                  vendors.
                </p>
                <div className="bg-white p-6 rounded-xl shadow-lg mb-8">
                  <div className="flex flex-col sm:flex-row items-center space-y-4 sm:space-y-0 sm:space-x-4">
                    <input
                      type="text"
                      className="flex-1 p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
                      placeholder="Enter new service name..."
                      value={newServiceName}
                      onChange={(e) => setNewServiceName(e.target.value)}
                      onKeyDown={(e) => {
                        if (e.key === "Enter") {
                          handleCreateService();
                        }
                      }}
                    />
                    <button
                      onClick={handleCreateService}
                      className="w-full sm:w-auto px-6 py-3 bg-indigo-600 text-white font-semibold rounded-lg shadow-md hover:bg-indigo-700 transition-colors duration-200"
                    >
                      <PlusIcon className="inline-block mr-2" />
                      Add New Service
                    </button>
                  </div>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                  {services.map((service) => (
                    <div
                      key={service.id}
                      className="bg-white p-6 rounded-xl shadow-md flex flex-col justify-between cursor-pointer transform hover:scale-105 transition-transform duration-200"
                      onClick={() => handleSelectService(service)}
                    >
                      {editingServiceId === service.id ? (
                        <input
                          type="text"
                          value={newServiceName}
                          onChange={(e) => setNewServiceName(e.target.value)}
                          onClick={(e) => e.stopPropagation()}
                          onKeyDown={(e) => {
                            if (e.key === "Enter") {
                              handleSaveEdit(service.id, newServiceName);
                            }
                          }}
                          className="w-full p-2 border rounded mb-4"
                          autoFocus
                        />
                      ) : (
                        <h3 className="text-xl font-semibold text-gray-700 mb-4 truncate">
                          {service.ServiceName}
                          {service.data.length === 0 && (
                            <span className="ml-2 text-xs bg-red-300 text-red-800 px-2 py-1 rounded-full">
                              Draft
                            </span>
                            )}
                        </h3>
                      )}

                      <div className="flex space-x-2 mt-auto">
                        {editingServiceId === service.id ? (
                          <button
                            onClick={(e) => {
                              e.stopPropagation();
                              handleSaveEdit(service.id, newServiceName);
                            }}
                            className="flex-1 px-4 py-2 bg-green-500 text-white rounded-lg shadow-sm hover:bg-green-600 transition-colors duration-200 flex items-center justify-center"
                          >
                            Save
                          </button>
                        ) : (
                          <button
                            onClick={(e) => {
                              e.stopPropagation();
                              setEditingServiceId(service.id);
                              setNewServiceName(service.ServiceName);
                            }}
                            className="flex-1 px-4 py-2 bg-yellow-400 text-gray-800 rounded-lg shadow-sm hover:bg-yellow-500 transition-colors duration-200 flex items-center justify-center"
                          >
                            <EditIcon className="mr-1" />
                            Edit
                          </button>
                        )}

                        <button
                          onClick={(e) => {
                            e.stopPropagation();
                            handleDeleteService(service.id);
                          }}
                          className="flex-1 px-4 py-2 bg-red-500 text-white rounded-lg shadow-sm hover:bg-red-600 transition-colors duration-200 flex items-center justify-center"
                        >
                          <TrashIcon className="mr-1" />
                          Delete
                        </button>
                      </div>
                    </div>
                  ))}

                  {/* {services.map((service) => (
                    <div
                      key={service.id}
                      className="bg-white p-6 rounded-xl shadow-md flex flex-col justify-between cursor-pointer transform hover:scale-105 transition-transform duration-200"
                      onClick={() => handleSelectService(service)}
                    >
                      <h3 className="text-xl font-semibold text-gray-700 mb-4 truncate">
                        {service.ServiceName}
                      </h3>
                      <div className="flex space-x-2 mt-auto">
                        <button
                          onClick={(e) => {
                            e.stopPropagation();
                            setEditingServiceId(service.id);
                            setNewServiceName(service.ServiceName);
                          }}
                          className="flex-1 px-4 py-2 bg-yellow-400 text-gray-800 rounded-lg shadow-sm hover:bg-yellow-500 transition-colors duration-200 flex items-center justify-center"
                        >
                          <EditIcon className="mr-1" />
                          Edit
                        </button>
                        <button
                          onClick={(e) => {
                            e.stopPropagation();
                            handleDeleteService(service.id);
                          }}
                          className="flex-1 px-4 py-2 bg-red-500 text-white rounded-lg shadow-sm hover:bg-red-600 transition-colors duration-200 flex items-center justify-center"
                        >
                          <TrashIcon className="mr-1" />
                          Delete
                        </button>
                      </div>
                    </div>
                  ))} */}
                </div>
              </div>
            )}

            {selectedService && (
              <div className="max-w-4xl mx-auto transition-opacity duration-500 ease-in-out">
                <button
                  onClick={handleClosePanel}  // this sets selectedService back to null
                  className="mb-4 px-4 py-2 bg-gray-300 text-gray-800 rounded-lg shadow hover:bg-gray-400 transition"
                >
                  ← Back
                </button>
                <h2 className="text-3xl font-bold text-gray-800 mb-6">
                  Vendors for {selectedService.ServiceName}
                </h2>
                {selectedService.data.length > 0 ? (
                  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                    {selectedService.data.map((vendor) => (
                      <div
                        key={vendor.vendorId}
                        className="bg-white p-6 rounded-xl shadow-md flex flex-col cursor-pointer transform hover:scale-105 transition-transform duration-200"
                        onClick={() => handleSelectVendor(vendor)}
                      >
                        <img
                          src={vendor.vendorImage}
                          alt={vendor.vendorName}
                          className="w-full h-40 object-cover rounded-lg mb-4"
                        />
                        <h3 className="text-xl font-semibold text-gray-700 truncate">
                          {vendor.vendorName}
                          {vendor.services.length === 0 && (
                            <span className="ml-2 text-xs bg-red-300 text-red-800 px-2 py-1 rounded-full">
                              Draft
                            </span>
                          )}
                        </h3>
                        <p className="text-sm text-gray-500 truncate">
                          {vendor.location}
                        </p>
                        <div className="flex items-center space-x-2 mt-2">
                          <span className="text-yellow-500 text-lg">★</span>
                          <span className="font-bold text-gray-700">
                            {vendor.rating}
                          </span>
                          <span className="text-gray-500">
                            ({vendor.reviews} reviews)
                          </span>
                        </div>
                        <div className="flex space-x-2 mt-4">
                          <button
                            onClick={(e) => {
                              e.stopPropagation();
                              handleEditVendor(vendor);
                            }}
                            className="flex-1 px-4 py-2 bg-yellow-400 text-gray-800 rounded-lg shadow-sm hover:bg-yellow-500 transition-colors duration-200 flex items-center justify-center"
                          >
                            <EditIcon className="mr-1" />
                            Edit
                          </button>
                          <button
                            onClick={(e) => {
                              e.stopPropagation();
                              handleDeleteVendor(vendor.vendorId);
                            }}
                            className="flex-1 px-4 py-2 bg-red-500 text-white rounded-lg shadow-sm hover:bg-red-600 transition-colors duration-200 flex items-center justify-center"
                          >
                            <TrashIcon className="mr-1" />
                            Delete
                          </button>
                        </div>
                      </div>
                    ))}
                  </div>
                ) : (
                  <p className="text-gray-500 text-center mt-10">
                    No vendors available for this service. Click the add button
                    below to get started!
                  </p>
                )}
              </div>
            )}
          </>
        );
      case "sales":
        return (
          <div className="flex flex-col items-center justify-center h-full p-8">
            <SalesSection />
            {/* <DollarSignIcon className="w-24 h-24 text-gray-400 mb-6" />
            <h2 className="text-3xl font-bold text-gray-800 mb-4">Sales</h2>
            <p className="text-gray-500 text-center max-w-lg">
              This section is for managing sales data and generating reports.
            </p> */}
          </div>
        );
      case "website-content":
        return (
          <div className="flex flex-col items-center justify-center h-full p-8">
            <FileTextIcon className="w-24 h-24 text-gray-400 mb-6" />
            <h2 className="text-3xl font-bold text-gray-800 mb-4">
              Website Content Update
            </h2>
            <p className="text-gray-500 text-center max-w-lg">
              Manage website content, blog posts, and landing pages here.
            </p>
          </div>
        );
      case "dashboard-controller":
        return (
          <div className="flex flex-col items-center justify-center h-full p-8">
            <SettingsIcon className="w-24 h-24 text-gray-400 mb-6" />
            <h2 className="text-3xl font-bold text-gray-800 mb-4">
              Dashboard Controller
            </h2>
            <p className="text-gray-500 text-center max-w-lg">
              Customize dashboard settings, themes, and layouts here.
            </p>
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <div className="flex bg-gray-100 min-h-screen font-sans">
      {/* Sidebar */}
      <aside className="w-64 bg-white shadow-xl p-6 flex flex-col justify-between">
        <div>
          <h1 className="text-2xl font-bold text-gray-900 mb-8 flex items-center">
            <Package2Icon className="w-8 h-8 mr-2 text-indigo-600" />
            Dashboard
          </h1>

          <nav>
            <ul>
              <li className="mb-2">
                <a
                  href="#"
                  onClick={() => handleTabClick("dashboard")}
                  className={`flex items-center p-3 rounded-lg transition-colors duration-200 ${activeTab === "dashboard"
                    ? "bg-indigo-100 text-indigo-700"
                    : "text-gray-600 hover:bg-gray-200"
                    }`}
                >
                  <LayoutDashboardIcon className="w-5 h-5 mr-3" />
                  Users
                </a>
              </li>
              <li className="mb-2">
                <a
                  href="#"
                  onClick={() => handleTabClick("services")}
                  className={`flex items-center p-3 rounded-lg transition-colors duration-200 ${activeTab === "services"
                    ? "bg-indigo-100 text-indigo-700"
                    : "text-gray-600 hover:bg-gray-200"
                    }`}
                >
                  <Package2Icon className="w-5 h-5 mr-3" />
                  Services
                </a>
              </li>
              <li className="mb-2">
                <a
                  href="#"
                  onClick={() => handleTabClick("sales")}
                  className={`flex items-center p-3 rounded-lg transition-colors duration-200 ${activeTab === "sales"
                    ? "bg-indigo-100 text-indigo-700"
                    : "text-gray-600 hover:bg-gray-200"
                    }`}
                >
                  <DollarSignIcon className="w-5 h-5 mr-3" />
                  Sales
                </a>
              </li>
              <li className="mb-2">
                <a
                  href="#"
                  onClick={() => handleTabClick("website-content")}
                  className={`flex items-center p-3 rounded-lg transition-colors duration-200 ${activeTab === "website-content"
                    ? "bg-indigo-100 text-indigo-700"
                    : "text-gray-600 hover:bg-gray-200"
                    }`}
                >
                  <FileTextIcon className="w-5 h-5 mr-3" />
                  Website Content
                </a>
              </li>
              <li className="mb-2">
                <a
                  href="#"
                  onClick={() => handleTabClick("dashboard-controller")}
                  className={`flex items-center p-3 rounded-lg transition-colors duration-200 ${activeTab === "dashboard-controller"
                    ? "bg-indigo-100 text-indigo-700"
                    : "text-gray-600 hover:bg-gray-200"
                    }`}
                >
                  <SettingsIcon className="w-5 h-5 mr-3" />
                  Dashboard Controller
                </a>
              </li>
            </ul>
          </nav>
        </div>
        <div className="mt-8">
          <button className="w-full flex items-center justify-center p-3 rounded-lg text-red-500 hover:bg-red-100 transition-colors duration-200">
            <LogOutIcon className="w-5 h-5 mr-2" />
            Logout
          </button>
        </div>
      </aside>

      {/* Main Content Area */}
      <main className="flex-1 p-8 overflow-y-auto">{renderContent()}</main>

      {/* Floating Action Button for adding a vendor */}
      {activeTab === "services" &&
        selectedService &&
        !showVendorServicesPanel && (
          <button
            onClick={() => {
              setShowVendorForm(true);
              setEditingVendorId(null);
              setVendorFormData({
                vendorName: "",
                vendorImage: "",
                rating: "",
                reviews: "",
                location: "",
              });
            }}
            className="fixed bottom-8 right-8 w-14 h-14 bg-green-500 text-white text-3xl font-bold rounded-full shadow-lg flex items-center justify-center hover:bg-green-600 transition-colors duration-200 z-50"
          >
            <PlusIcon className="w-6 h-6" />
          </button>
        )}

      {/* Modal Form for adding/editing a vendor */}
      {showVendorForm && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <form
            onSubmit={editingVendorId ? handleUpdateVendor : handleAddVendor}
            className="bg-white p-6 rounded-xl shadow-lg w-full max-w-lg"
          >
            <h3 className="text-xl font-semibold mb-4">
              {editingVendorId ? "Edit Vendor" : "Add New Vendor"}
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <input
                type="text"
                placeholder="Vendor Name"
                value={vendorFormData.vendorName}
                onChange={(e) =>
                  setVendorFormData({
                    ...vendorFormData,
                    vendorName: e.target.value,
                  })
                }
                className="p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
              />
              <input
                type="text"
                placeholder="Image URL"
                value={vendorFormData.vendorImage}
                onChange={(e) =>
                  setVendorFormData({
                    ...vendorFormData,
                    vendorImage: e.target.value,
                  })
                }
                className="p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
              />
              <input
                type="number"
                step="0.1"
                placeholder="Rating (e.g., 4.9)"
                value={vendorFormData.rating}
                onChange={(e) =>
                  setVendorFormData({
                    ...vendorFormData,
                    rating: e.target.value,
                  })
                }
                className="p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
              />
              <input
                type="text"
                placeholder="Reviews (e.g., 245+)"
                value={vendorFormData.reviews}
                onChange={(e) =>
                  setVendorFormData({
                    ...vendorFormData,
                    reviews: e.target.value,
                  })
                }
                className="p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
              />
              <input
                type="text"
                placeholder="Location (e.g., Bengaluru, Karnataka)"
                value={vendorFormData.location}
                onChange={(e) =>
                  setVendorFormData({
                    ...vendorFormData,
                    location: e.target.value,
                  })
                }
                className="p-3 border rounded-lg col-span-1 sm:col-span-2 focus:outline-none focus:ring-2 focus:ring-indigo-500"
              />
            </div>
            <div className="flex space-x-2 mt-4">
              <button
                type="submit"
                className="flex-1 px-6 py-3 bg-indigo-600 text-white font-semibold rounded-lg shadow-md hover:bg-indigo-700 transition-colors duration-200"
              >
                {editingVendorId ? "Save Vendor" : "Create Vendor"}
              </button>
              <button
                type="button"
                onClick={() => {
                  setShowVendorForm(false);
                  setEditingVendorId(null);
                  setVendorFormData({
                    vendorName: "",
                    vendorImage: "",
                    rating: "",
                    reviews: "",
                    location: "",
                  });
                }}
                className="flex-1 px-6 py-3 bg-gray-400 text-white font-semibold rounded-lg shadow-md hover:bg-gray-500 transition-colors duration-200"
              >
                Cancel
              </button>
            </div>
          </form>
        </div>
      )}

      {/* Vendor Services Panel (Slide-in) */}
      <div
        className={`fixed inset-0 bg-gray-100 shadow-2xl p-8 transform transition-transform duration-500 ease-in-out z-50 overflow-y-auto ${showVendorServicesPanel ? "translate-x-0" : "translate-x-full"
          }`}
      >
        <div className="flex justify-between items-center mb-6">
          <button
            onClick={handleCloseVendorServicesPanel}
            className="text-gray-500 hover:text-gray-800 text-2xl font-bold p-2 rounded-full hover:bg-gray-200 transition-colors duration-200 flex items-center"
          >
            <ChevronLeftIcon className="w-6 h-6 mr-2" />
            <span className="hidden sm:inline">Back</span>
          </button>
          <h2 className="text-2xl font-bold text-gray-800 ml-auto">
            Services by {selectedVendor?.vendorName}
          </h2>
          <button
            onClick={() => {
              setShowServiceForm(true);
              setEditingServiceIdInVendor(null);
              setServiceFormData({
                title: "",
                location: "",
                price: "",
                originalPrice: "",
                description: "",
                serviceImage: "",
                rating: "",
                reviews: "",
                duration: "",
                inclusions: "",
                exclusions: "",
              });
            }}
            className="w-14 h-14 bg-green-500 text-white text-3xl font-bold rounded-full shadow-lg flex items-center justify-center hover:bg-green-600 transition-colors duration-200 ml-4"
          >
            <PlusIcon className="w-6 h-6" />
          </button>
        </div>

        {selectedVendor && selectedVendor.services.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {selectedVendor.services.map((service) => (
              <div
                key={service.id}
                className="bg-white p-6 rounded-xl shadow-md flex flex-col cursor-pointer transform hover:scale-105 transition-transform duration-200"
                onClick={() => handleShowServiceDetails(service)}
              >
                <img
                  src={service.serviceImage}
                  alt={service.title}
                  className="w-full h-40 object-cover rounded-lg mb-4"
                />
                <h3 className="text-xl font-semibold text-gray-700 truncate">
                  {service.title}
                </h3>
                <p className="text-sm text-gray-500 truncate">
                  {service.location}
                </p>
                <div className="flex items-center space-x-2 mt-2">
                  <span className="text-yellow-500 text-lg">★</span>
                  <span className="font-bold text-gray-700">
                    {service.rating}
                  </span>
                  <span className="text-gray-500">({service.reviews})</span>
                </div>
                <div className="flex space-x-2 mt-4">
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      handleEditVendorService(service);
                    }}
                    className="flex-1 px-4 py-2 bg-yellow-400 text-gray-800 rounded-lg shadow-sm hover:bg-yellow-500 transition-colors duration-200 flex items-center justify-center"
                  >
                    <EditIcon className="mr-1" />
                    Edit
                  </button>
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      handleDeleteVendorService(service.id);
                    }}
                    className="flex-1 px-4 py-2 bg-red-500 text-white rounded-lg shadow-sm hover:bg-red-600 transition-colors duration-200 flex items-center justify-center"
                  >
                    <TrashIcon className="mr-1" />
                    Delete
                  </button>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <p className="text-gray-500 text-center mt-10">
            No services available for this vendor. Click the add button to get
            started!
          </p>
        )}
      </div>

      {/* Modal Form for adding/editing a vendor's service */}
      {showServiceForm && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <form
            onSubmit={
              editingServiceIdInVendor
                ? handleUpdateVendorService
                : handleAddServiceToVendor
            }
            className="bg-white p-6 rounded-xl shadow-lg w-full max-w-lg overflow-y-auto max-h-[90vh]"
          >
            <h3 className="text-xl font-semibold mb-4">
              {editingServiceIdInVendor ? "Edit Service" : "Add New Service"}
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <input
                type="text"
                placeholder="Title"
                value={serviceFormData.title}
                onChange={(e) =>
                  setServiceFormData({
                    ...serviceFormData,
                    title: e.target.value,
                  })
                }
                className="p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
              />
              <input
                type="text"
                placeholder="Location"
                value={serviceFormData.location}
                onChange={(e) =>
                  setServiceFormData({
                    ...serviceFormData,
                    location: e.target.value,
                  })
                }
                className="p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
              />
              <input
                type="number"
                step="1"
                placeholder="Price"
                value={serviceFormData.price}
                onChange={(e) =>
                  setServiceFormData({
                    ...serviceFormData,
                    price: e.target.value,
                  })
                }
                className="p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
              />
              <input
                type="number"
                step="1"
                placeholder="Original Price"
                value={serviceFormData.originalPrice}
                onChange={(e) =>
                  setServiceFormData({
                    ...serviceFormData,
                    originalPrice: e.target.value,
                  })
                }
                className="p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
              />
              <textarea
                placeholder="Description"
                value={serviceFormData.description}
                onChange={(e) =>
                  setServiceFormData({
                    ...serviceFormData,
                    description: e.target.value,
                  })
                }
                className="p-3 border rounded-lg col-span-1 sm:col-span-2 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                rows="3"
              ></textarea>
              <input
                type="text"
                placeholder="Image URL"
                value={serviceFormData.serviceImage}
                onChange={(e) =>
                  setServiceFormData({
                    ...serviceFormData,
                    serviceImage: e.target.value,
                  })
                }
                className="p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
              />
              <input
                type="number"
                step="0.1"
                placeholder="Rating"
                value={serviceFormData.rating}
                onChange={(e) =>
                  setServiceFormData({
                    ...serviceFormData,
                    rating: e.target.value,
                  })
                }
                className="p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
              />
              <input
                type="text"
                placeholder="Reviews"
                value={serviceFormData.reviews}
                onChange={(e) =>
                  setServiceFormData({
                    ...serviceFormData,
                    reviews: e.target.value,
                  })
                }
                className="p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
              />
              <input
                type="text"
                placeholder="Duration (e.g., 45 mins)"
                value={serviceFormData.duration}
                onChange={(e) =>
                  setServiceFormData({
                    ...serviceFormData,
                    duration: e.target.value,
                  })
                }
                className="p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
              />
              <textarea
                placeholder="Inclusions (comma separated)"
                value={serviceFormData.inclusions}
                onChange={(e) =>
                  setServiceFormData({
                    ...serviceFormData,
                    inclusions: e.target.value,
                  })
                }
                className="p-3 border rounded-lg col-span-1 sm:col-span-2 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                rows="2"
              ></textarea>
              <textarea
                placeholder="Exclusions (comma separated)"
                value={serviceFormData.exclusions}
                onChange={(e) =>
                  setServiceFormData({
                    ...serviceFormData,
                    exclusions: e.target.value,
                  })
                }
                className="p-3 border rounded-lg col-span-1 sm:col-span-2 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                rows="2"
              ></textarea>
            </div>
            <div className="flex space-x-2 mt-4">
              <button
                type="submit"
                className="flex-1 px-6 py-3 bg-indigo-600 text-white font-semibold rounded-lg shadow-md hover:bg-indigo-700 transition-colors duration-200"
              >
                {editingServiceIdInVendor ? "Save Service" : "Create Service"}
              </button>
              <button
                type="button"
                onClick={() => {
                  setShowServiceForm(false);
                  setEditingServiceIdInVendor(null);
                }}
                className="flex-1 px-6 py-3 bg-gray-400 text-white font-semibold rounded-lg shadow-md hover:bg-gray-500 transition-colors duration-200"
              >
                Cancel
              </button>
            </div>
          </form>
        </div>
      )}

      {/* Service Details Panel (Slide-in) */}
      {selectedVendorService && (
        <div
          className={`fixed inset-0 bg-gray-100 shadow-2xl p-8 transform transition-transform duration-500 ease-in-out z-50 overflow-y-auto ${showServiceDetailsPanel ? "translate-x-0" : "translate-x-full"
            }`}
        >
          <div className="max-w-4xl mx-auto">
            <div className="flex justify-between items-center mb-6">
              <button
                onClick={handleCloseServiceDetailsPanel}
                className="text-gray-500 hover:text-gray-800 text-3xl font-bold p-2 rounded-full hover:bg-gray-200 transition-colors duration-200 flex items-center"
              >
                <ChevronLeftIcon className="w-6 h-6 mr-2" />
                <span className="hidden sm:inline">Back</span>
              </button>
              <h2 className="text-3xl font-bold text-gray-800 ml-auto">
                Service Details
              </h2>
            </div>

            <div className="bg-white rounded-xl shadow-lg overflow-hidden">
              <img
                src={selectedVendorService.serviceImage}
                alt={selectedVendorService.title}
                className="w-full h-80 object-cover"
              />
              <div className="p-8">
                <h1 className="text-4xl font-extrabold text-gray-900 mb-2">
                  {selectedVendorService.title}
                </h1>
                <p className="text-gray-600 mb-4">
                  {selectedVendorService.location}
                </p>
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-baseline space-x-2">
                    <span className="text-3xl font-bold text-indigo-600">
                      ₹{selectedVendorService.price}
                    </span>
                    <span className="text-lg text-gray-400 line-through">
                      ₹{selectedVendorService.originalPrice}
                    </span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <span className="text-yellow-500 text-2xl">★</span>
                    <span className="font-bold text-gray-700 text-lg">
                      {selectedVendorService.rating}
                    </span>
                    <span className="text-gray-500">
                      ({selectedVendorService.reviews})
                    </span>
                  </div>
                </div>

                <p className="text-gray-700 leading-relaxed mb-6">
                  {selectedVendorService.description}
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <h3 className="text-xl font-semibold text-gray-800 mb-2">
                      Duration
                    </h3>
                    <p className="text-gray-600">
                      {selectedVendorService.duration}
                    </p>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-800 mb-2">
                      Inclusions
                    </h3>
                    <ul className="list-disc list-inside space-y-1 text-gray-600">
                      {selectedVendorService.inclusions.map((item, index) => (
                        <li key={index}>{item}</li>
                      ))}
                    </ul>
                  </div>
                  {selectedVendorService.exclusions &&
                    selectedVendorService.exclusions.length > 0 && (
                      <div>
                        <h3 className="text-xl font-semibold text-gray-800 mb-2">
                          Exclusions
                        </h3>
                        <ul className="list-disc list-inside space-y-1 text-gray-600">
                          {selectedVendorService.exclusions.map(
                            (item, index) => (
                              <li key={index}>{item}</li>
                            )
                          )}
                        </ul>
                      </div>
                    )}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Dashboard;
