import { Test, TestingModule } from "@nestjs/testing";

import { MobilityController } from "./mobility.controller";

describe("MobilityController", () => {
    let controller: MobilityController;

    beforeEach(async () => {
        const module: TestingModule = await Test.createTestingModule({
            controllers: [MobilityController],
        }).compile();

        controller = module.get<MobilityController>(MobilityController);
    });

    it("should be defined", () => {
        expect(controller).toBeDefined();
    });
});
