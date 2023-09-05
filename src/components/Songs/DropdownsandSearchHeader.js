import React, { useEffect } from "react";
import Select from "react-select";
import eth from "../../assets/Icons/eth.png";

export default function DropdownsandSearchHeader({
  data,
  data2,
  selectedOption,
  selectedOptionforTime,
  setSelectedOption,
  setSelectedOptionforTime,
  searchInput,
  setSearchInput,
}) {
  const handleChange = (e) => {
    setSelectedOption(e);
  };

  const handleChangeforTime = (e) => {
    setSelectedOptionforTime(e);
  };
  return (
    <div className="row mx-1 my-3">
      <div className="col-4 col-xl-2 col-lg-4 col-md-4 col-sm-4 mx-0">
        <Select
          styles={{
            //change background color of dropdown
            menu: (provided, state) => ({
              ...provided,
              background: "rgba(5, 24, 57, 255)",
              color: "white",
            }),

            //change background of selected option
            option: (provided, state) => ({
              ...provided,
              background: state.isSelected
                ? "rgba(5, 24, 57, 255)"
                : "rgba(5, 24, 57, 255)",
              color: "white",
            }),

            //change background of whole dropdown
            control: (provided, state) => ({
              ...provided,

              color: "white",
              borderRadius: "15px",
              background: "#202c46",
            }),

            //change color of placeholder

            placeholder: (provided, state) => ({
              ...provided,
              color: "white",
            }),

            //change color of dropdown indicator
            dropdownIndicator: (provided, state) => ({
              ...provided,
              color: "white",
            }),

            //change color of selected option
            singleValue: (provided, state) => ({
              ...provided,
              color: "white",
            }),

            //remove border of indicator
            indicatorSeparator: (provided, state) => ({
              ...provided,
              display: "none",
            }),

            //set font size of selected option
            valueContainer: (provided, state) => ({
              ...provided,
              fontSize: "18px",
            }),
          }}
          placeholder="Select Option"
          value={selectedOption}
          options={data}
          onChange={handleChange}
          getOptionLabel={(e) => (
            <div style={{ display: "flex", alignItems: "center" }}>
              {e.icon}
              <span style={{ marginLeft: 5 }}>{e.text}</span>
            </div>
          )}
        />
      </div>
      <div className="col-3 col-xl-1 col-lg-3 col-md-3 col-sm-3 mx-0">
        <Select
          styles={{
            //change background color of dropdown
            menu: (provided, state) => ({
              ...provided,
              background: "rgba(5, 24, 57, 255)",
              color: "white",
            }),

            //change background of selected option
            option: (provided, state) => ({
              ...provided,
              background: state.isSelected
                ? "rgba(5, 24, 57, 255)"
                : "rgba(5, 24, 57, 255)",
              color: "white",
            }),

            //change background of whole dropdown
            control: (provided, state) => ({
              ...provided,
              background: "#202c46",
              color: "white",
              borderRadius: "15px",
              width: "110%",
            }),

            //change color of placeholder

            placeholder: (provided, state) => ({
              ...provided,
              color: "white",
            }),

            //change color of dropdown indicator
            dropdownIndicator: (provided, state) => ({
              ...provided,
              color: "white",
            }),

            //change color of selected option
            singleValue: (provided, state) => ({
              ...provided,
              color: "white",
            }),

            //remove border of indicator
            indicatorSeparator: (provided, state) => ({
              ...provided,
              display: "none",
            }),

            //set font size of selected option
          }}
          placeholder="Select Option"
          value={selectedOptionforTime}
          options={data2}
          onChange={handleChangeforTime}
          getOptionLabel={(e) => (
            <div style={{ display: "flex", alignItems: "center" }}>
              <span style={{ marginLeft: 5 }}>{e.text}</span>
            </div>
          )}
        />
      </div>
      <div className="col-3 my-1">
        <input
          icon={eth}
          value={searchInput}
          onChange={(e) => {
            setSearchInput(e.target.value);
          }}
          className="col-5"
          type="text"
          placeholder="Search for Tokens"
          style={{
            background: "transparent",
            color: "white",
            border: "none",
            borderBottom: "none",
            outline: "none",
            width: "100%",
            height: "100%",
            fontSize: "18px",
          }}
        />
      </div>
    </div>
  );
}
