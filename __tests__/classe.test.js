const axios = require("axios");

describe("Classe", () => {
    it("Create a new classe", async () => {
        const response = await axios.post("http://localhost:3000/gql", {
            query: `mutation {
                addClasse(name: "Classe 3", parcoursId: 2) {
                    id
                    name
                }
            }`
        });

        expect(response.data.data.addClasse.name).toBe("Classe 3");
    });

    it("Get all classes", async () => {
        const response = await axios.post("http://localhost:3000/gql", {
            query: `{
                getClasses {
                    id
                    name
                }
            }`
        });

        expect(response.data.data.getClasses.length).toBe(3);
    });

    it("Get a classe by id", async () => {
        const response = await axios.post("http://localhost:3000/gql", {
            query: `{
                getClasseById(id: 3) {
                    id
                    name
                }
            }`
        });

        expect(response.data.data.getClasseById.name).toBe("Classe 3");
    });

    it("Update a classe", async () => {
        const response = await axios.post("http://localhost:3000/gql", {
            query: `mutation {
                updateClasse(id: 3, name: "Classe 3 updated", parcoursId: 2) {
                    id
                    name
                }
            }`
        });

        expect(response.data.data.updateClasse.name).toBe("Classe 3 updated");
    });

    it("Delete a classe", async () => {
        const response = await axios.post("http://localhost:3000/gql", {
            query: `mutation {
                deleteClasse(id: 3) {
                    id
                    name
                }
            }`
        });

        expect(response.data.data.deleteClasse.name).toBe("Classe 3 updated");
    });
});



