import { Module } from '@nestjs/common';
import { StudentConnectService } from './student-connect.service';

@Module({
  providers: [StudentConnectService]
})
export class StudentConnectModule {}
