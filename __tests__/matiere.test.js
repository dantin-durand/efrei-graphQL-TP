const axios = require("axios");


describe("Matiere", () => {
    it("Create a new matiere", async () => {
        const response = await axios.post("http://localhost:3000/gql", {
            query: `mutation {
                addMatiere(name: "Matiere 4", parcoursId: 2) {
                    id
                    name
                }
            }`
        });

        expect(response.data.data.addMatiere.name).toBe("Matiere 4");
    });

    it("Get all matieres", async () => {
        const response = await axios.post("http://localhost:3000/gql", {
            query: `{
                getMatieres {
                    id
                    name
                }
            }`
        });

        expect(response.data.data.getMatieres.length).toBe(4);
    });

    it("Get a matiere by id", async () => {
        const response = await axios.post("http://localhost:3000/gql", {
            query: `{
                getMatiereById(id: 4) {
                    id
                    name
                }
            }`
        });

        expect(response.data.data.getMatiereById.name).toBe("Matiere 4");
    });

    it("Update a matiere", async () => {
        const response = await axios.post("http://localhost:3000/gql", {
            query: `mutation {
                updateMatiere(id: 4, name: "Matiere 4 updated", parcoursId: 2) {
                    id
                    name
                }
            }`
        });

        expect(response.data.data.updateMatiere.name).toBe("Matiere 4 updated");
    });

    it("Delete a matiere", async () => {
        const response = await axios.post("http://localhost:3000/gql", {
            query: `mutation {
                deleteMatiere(id: 4) {
                    id
                    name
                }
            }`
        });

        expect(response.data.data.deleteMatiere.name).toBe("Matiere 4 updated");
    });
});
