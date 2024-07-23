import { MobilityRequestDto } from "src/mobility/dto/request.dto";

export class RatingRequestDto extends MobilityRequestDto {
    message: {
        rating_category: string;
        id: string;
        value: string;
        feedback_form: [
            {
                id: string;
                parent_id: string;
                question: string;
                answer: string;
                answer_type: string;
            },
        ];
        feedback_id: string;
    };
}
