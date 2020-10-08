import React from "react";
import { List } from "antd";

const Ammenities = ({ price, reference, yearBuilt, contact, status, subcategory, homeArea, dimension, material, location, rooms, bathrooms }) => {
    const ammenitiesData = [
        {
            title: "Price",
            description: price,
        },
        {
            title: "Reference",
            description: reference,
        },
        {
            title: "Year built",
            description: yearBuilt,
        },
        {
            title: "Contact",
            description: contact,
        },
        {
            title: "Status",
            description: status,
        },
        {
            title: "Type",
            description: subcategory,
        },
        {
            title: "Home Area",
            description: homeArea + "SqrFt",
        },
        {
            title: "Dimension",
            description: dimension,
        },
        {
            title: "Material",
            description: material,
        },
        {
            title: "Location",
            description: location,
        },
        {
            title: "Bed",
            description: "2",
        },
        {
            title: "Room",
            description: rooms,
        },
        {
            title: "Garadges",
            description: "2",
        },
        {
            title: "Bathroom",
            description: bathrooms,
        },
    ];
    return (
        <List
            grid={{ gutter: 8, column: 2 }}
            bordered
            dataSource={ammenitiesData}
            renderItem={(item) => (
                <List.Item
                    style={{
                        fontSize: "17px",
                        display: "flex",
                        borderBottom:
                            "0.957303px dashed #C1C1C1",
                        margin: "11px",
                        padding: "0",
                    }}
                    className="prop-item"
                >
                    <span
                        style={{
                            textTransform: "uppercase",
                            fontWeight: "bolder",
                        }}
                    >
                        {item.title}
                    </span>
                    <span>{item.description}</span>
                </List.Item>
            )}
        />
    )
}

export default Ammenities;