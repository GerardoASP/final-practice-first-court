import React from "react";
import "./Services.scss";
import { ServicesList } from "../components/ServicesList/ServicesList";
import { images } from "../assets";

export const Services = () => {
    const services = [
      {
        _id: "1",
        nameService: "Servicio 1",
        serviceDescription: "Descripción del servicio 1",
        avatar: images.service1,
      },
      {
        _id: "2",
        nameService: "Servicio 2",
        serviceDescription: "Descripción del servicio 2",
        avatar: images.service2,
      },
      {
        _id: "3",
        nameService: "Servicio 3",
        serviceDescription: "Descripción del servicio 3",
        avatar: images.service3,
      },
    ];
    return (
      <div className="services-page-content">
        <ServicesList servicesParam={services}></ServicesList>
      </div>
    );
};