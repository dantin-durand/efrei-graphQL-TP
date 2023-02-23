const axios = require("axios");


describe("Eleve", () => {
    it("Create a new eleve", async () => {
        const response = await axios.post("http://localhost:3000/gql", {
            query: `mutation {
                addEleve(firstname: "Eleve", lastname: "3", classeId: 2) {
                    id
                    firstname
                    lastname
                }
            }`
        });

        expect(response.data.data.addEleve.firstname).toBe("Eleve");
    });

    it("Get all eleves", async () => {
        const response = await axios.post("http://localhost:3000/gql", {
            query: `{
                getEleves {
                    id
                    firstname
                    lastname
                }
            }`
        });

        expect(response.data.data.getEleves.length).toBe(4);
    });

    it("Get an eleve by id", async () => {
        const response = await axios.post("http://localhost:3000/gql", {
            query: `{
                getEleveById(id: 4) {
                    id
                    firstname
                    lastname
                }
            }`
        });

        expect(response.data.data.getEleveById.firstname).toBe("Eleve");
    });

    it("Get all eleves by classe id", async () => {
        const response = await axios.post("http://localhost:3000/gql", {
            query: `{
                getElevesByClasseId(id: 2) {
                    id
                    firstname
                    lastname
                }
            }`
        });

        expect(response.data.data.getElevesByClasseId.length).toBe(2);
    });

    it("Update an eleve", async () => {
        const response = await axios.post("http://localhost:3000/gql", {
            query: `mutation {
                updateEleve(id: 4, firstname: "Eleve", lastname: "4", classeId: 1) {
                    id
                    firstname
                    lastname
                }
            }`
        });

        expect(response.data.data.updateEleve.firstname).toBe("Eleve");
    });

    it("Delete an eleve", async () => {
        const response = await axios.post("http://localhost:3000/gql", {
            query: `mutation {
                deleteEleve(id: 4) {
                    id
                    firstname
                    lastname
                }
            }`
        });

        expect(response.data.data.deleteEleve.firstname).toBe("Eleve");
    });
});



