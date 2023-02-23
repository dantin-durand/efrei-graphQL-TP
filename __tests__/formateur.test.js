const axios = require("axios");


describe("Formateur", () => {
    it("Create a new formateur", async () => {
        const response = await axios.post("http://localhost:3000/gql", {
            query: `mutation {
                addFormateur(firstname: "Formateur", lastname: "3") {
                    id
                    firstname
                    lastname
                }
            }`
        });

        expect(response.data.data.addFormateur.firstname).toBe("Formateur");
    });

    it("Get all formateurs", async () => {
        const response = await axios.post("http://localhost:3000/gql", {
            query: `{
                getFormateurs {
                    id
                    firstname
                    lastname
                }
            }`
        });

        expect(response.data.data.getFormateurs.length).toBe(3);
    });

    it("Get a formateur by id", async () => {
        const response = await axios.post("http://localhost:3000/gql", {
            query: `{
                getFormateurById(id: 3) {
                    id
                    firstname
                    lastname
                }
            }`
        });

        expect(response.data.data.getFormateurById.firstname).toBe("Formateur");
    });

    it("Get all formateurs by matiere id", async () => {
        const response = await axios.post("http://localhost:3000/gql", {
            query: `{
                getFormateursByMatiereId(id: 1) {
                    id
                    firstname
                    lastname
                }
            }`
        });

        expect(response.data.data.getFormateursByMatiereId.length).toBe(2);
    });

    it("Get all formateurs by cours id", async () => {
        const response = await axios.post("http://localhost:3000/gql", {
            query: `{
                getFormateursByCoursId(id: 1) {
                    id
                    firstname
                    lastname
                }
            }`
        });

        expect(response.data.data.getFormateursByCoursId.length).toBe(1);
    });

    it("Update a formateur", async () => {
        const response = await axios.post("http://localhost:3000/gql", {
            query: `mutation {
                updateFormateur(id: 3, firstname: "Formateur", lastname: "3") {
                    id
                    firstname
                    lastname
                }
            }`
        });

        expect(response.data.data.updateFormateur.firstname).toBe("Formateur");
    });

    it("Delete a formateur", async () => {
        const response = await axios.post("http://localhost:3000/gql", {
            query: `mutation {
                deleteFormateur(id: 3) {
                    id
                    firstname
                    lastname
                }
            }`
        });

        expect(response.data.data.deleteFormateur.firstname).toBe("Formateur");
    });
});



