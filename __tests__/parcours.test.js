const axios = require("axios");


describe("Parcours", () => {
    it("Create a new parcours", async () => {
        const response = await axios.post("http://localhost:3000/gql", {
            query: `mutation {
                addParcours(name: "Parcours 3") {
                    id
                    name
                }
            }`
        });

        expect(response.data.data.addParcours.name).toBe("Parcours 3");
    });

    it("Get all parcours", async () => {
        const response = await axios.post("http://localhost:3000/gql", {
            query: `{
                getParcours {
                    id
                    name
                }
            }`
        });

        expect(response.data.data.getParcours.length).toBe(3);
    });

    it("Get a parcours by id", async () => {
        const response = await axios.post("http://localhost:3000/gql", {
            query: `{
                getParcoursById(id: 3) {
                    id
                    name
                }
            }`
        });

        expect(response.data.data.getParcoursById.name).toBe("Parcours 3");
    });

    it("Update a parcours", async () => {
        const response = await axios.post("http://localhost:3000/gql", {
            query: `mutation {
                updateParcours(id: 3, name: "Parcours 3 updated") {
                    id
                    name
                }
            }`
        });

        expect(response.data.data.updateParcours.name).toBe("Parcours 3 updated");
    });

    it("Delete a parcours", async () => {
        const response = await axios.post("http://localhost:3000/gql", {
            query: `mutation {
                deleteParcours(id: 3) {
                    id
                    name
                }
            }`
        });

        expect(response.data.data.deleteParcours.name).toBe("Parcours 3 updated");
    });
});
