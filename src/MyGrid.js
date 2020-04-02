import React from "react";
import * as _ from "lodash";
import faker from "faker";
import MaterialTable from "material-table";

// let data = [];

// for (var i = 0; i < 100; i++) {
//     data.push({
//         _id: i,
//         name: faker.name.findName(),
//         email: faker.internet.email(),
//         city: faker.address.city(),
//         state: faker.address.state(),
//         country: faker.address.country()
//     });
// }

// console.log(data);

// const columnData = [
//     { title: "Id", field: "_id" },
//     { title: "Name", field: "name" },
//     { title: "Email", field: "email" },
//     { title: "City", field: "city" },
//     { title: "State", field: "state" },
//     { title: "Country", field: "country" }
// ];

const MyGrid = () => {
    return (
        <div>
            <MaterialTable
                title="Basic Filtering Preview"
                columns={[
                    { title: "Name", field: "name" },
                    { title: "Surname", field: "surname" },
                    {
                        title: "Birth Year",
                        field: "birthYear",
                        type: "numeric"
                    },
                    {
                        title: "Birth Place",
                        field: "birthCity",
                        lookup: { 34: "İstanbul", 63: "Şanlıurfa" }
                    }
                ]}
                data={[
                    {
                        name: "Mehmet",
                        surname: "Baran",
                        birthYear: 1987,
                        birthCity: 63
                    },
                    {
                        name: "Zerya Betül",
                        surname: "Baran",
                        birthYear: 2017,
                        birthCity: 34
                    }
                ]}
                options={{
                    grouping: true
                }}
            />
        </div>
    );
};

export default MyGrid;
