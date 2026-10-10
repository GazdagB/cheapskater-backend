import {describe, it, expect} from "vitest";
import request from "supertest";
import { app } from "../../src/app";

describe("GET /health", () => {
    it("/health/hello should return 200 OK with 'Hello,World!", async () => {
        const response = await request(app).get("/health/hello");
        expect(response.status).toBe(200);
        expect(response.body).toEqual({ message: 'Hello, World!' });
    })

    it("/health/healthy should return 200 OK with 'I'm healthy!", async () => {
        const response = await request(app).get("/health/healthy"); 
        expect(response.status).toBe(200); 
        expect(response.body).toEqual({status: "ok", message:"I'm Healthy!"})
    })

    it("/health/db should return 200 OK with a DB Timestamp", async ()=>{
        const response = await request(app).get("/health/db");
        expect(response.status).toBe(200); 
        expect(response.body).toHaveProperty("timestamp")
    })
})