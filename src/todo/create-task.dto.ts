import { IsNotEmpty } from "class-validator";

export class CreateTaskDto {
    @IsNotEmpty()
    title: string; // String　ではなく stringであることに注意
}