import { Test, TestingModule } from "@nestjs/testing";
import { Industry40Controller } from "./industry-4.0.controller";

describe("Industry40Controller", () => {
    let controller: Industry40Controller;

    beforeEach(async () => {
        const module: TestingModule = await Test.createTestingModule({
            controllers: [Industry40Controller],
        }).compile();

        controller = module.get<Industry40Controller>(Industry40Controller);
    });

    it("should be defined", () => {
        expect(controller).toBeDefined();
    });
});
