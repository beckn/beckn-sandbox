import { MobilityRequestDto } from "src/mobility/dto/request.dto";

export class CancelRequestDto extends MobilityRequestDto {
    message: {
        order_id: string;
        cancellation_reason_id: string;
    };
}
