import { MobilityRequestDto } from "src/mobility/dto/request.dto";

export class StatusRequestDto extends MobilityRequestDto {
    message: {
        order_id: string;
    };
}
