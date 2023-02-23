const axios = require("axios");


describe("Cours", () => {
    it("Create a new cours", async () => {
        const response = await axios.post("http://localhost:3000/gql", {
            query: `mutation {
                addCours(start: "2020-01-01 00:00:00", end: "2020-01-01 00:00:00", room: "Room 4", matiereId: 2, formateurId: 2) {
                    id
                    start
                    end
                    room
                }
            }`
        });

        expect(response.data.data.addCours.room).toBe("Room 4");
    });

    it("Get all cours", async () => {
        const response = await axios.post("http://localhost:3000/gql", {
            query: `{
                getCours {
                    id
                    start
                    end
                    room
                }
            }`
        });

        expect(response.data.data.getCours.length).toBe(5);
    });

    it("Get a cours by id", async () => {
        const response = await axios.post("http://localhost:3000/gql", {
            query: `{
                getCoursById(id: 5) {
                    id
                    start
                    end
                    room
                }
            }`
        });

        expect(response.data.data.getCoursById.room).toBe("Room 4");
    });

    it("Update a cours", async () => {
        const response = await axios.post("http://localhost:3000/gql", {
            query: `mutation {
                updateCours(id: 5, start: "2020-01-01 00:00:00", end: "2020-01-01 00:00:00", room: "Room 4 updated", matiereId: 2, formateurId: 2) {
                    id
                    start
                    end
                    room
                }
            }`
        });

        expect(response.data.data.updateCours.room).toBe("Room 4 updated");
    });

    it("Delete a cours", async () => {
        const response = await axios.post("http://localhost:3000/gql", {
            query: `mutation {
                deleteCours(id: 5) {
                    id
                    start
                    end
                    room
                }
            }`
        });

        expect(response.data.data.deleteCours.room).toBe("Room 4 updated");
    });
});



