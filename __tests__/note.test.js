const axios = require("axios");


describe("Note", () => {
    it("Create a new note", async () => {
        const response = await axios.post("http://localhost:3000/gql", {
            query: `mutation {
                addNote(note: 10, eleveId: 1, matiereId: 1) {
                    id
                    note
                }
            }`
        });

        expect(response.data.data.addNote.note).toBe(10);
    });

    it("Get all notes", async () => {
        const response = await axios.post("http://localhost:3000/gql", {
            query: `{
                getNotes {
                    id
                    note
                }
            }`
        });

        expect(response.data.data.getNotes.length).toBe(6);
    });

    it("Get a note by id", async () => {
        const response = await axios.post("http://localhost:3000/gql", {
            query: `{
                getNoteById(id: 6) {
                    id
                    note
                }
            }`
        });

        expect(response.data.data.getNoteById.note).toBe(10);
    });

    it("Get all notes by eleve id", async () => {
        const response = await axios.post("http://localhost:3000/gql", {
            query: `{
                getNotesByEleveId(id: 1) {
                    id
                    note
                }
            }`
        });

        expect(response.data.data.getNotesByEleveId.length).toBe(4);
    });

    it("Update a note", async () => {
        const response = await axios.post("http://localhost:3000/gql", {
            query: `mutation {
                updateNote(id: 6, note: 15, eleveId: 1, matiereId: 1) {
                    id
                    note
                }
            }`
        });

        expect(response.data.data.updateNote.note).toBe(15);
    });

    it("Delete a note", async () => {
        const response = await axios.post("http://localhost:3000/gql", {
            query: `mutation {
                deleteNote(id: 6) {
                    id
                    note
                }
            }`
        });

        expect(response.data.data.deleteNote.note).toBe(15);
    });
});



