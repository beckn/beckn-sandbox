import { Module } from '@nestjs/common';
import { LocalRetailController094 } from './local-retail.controller-0-9-4';
import { LocalRetailController110 } from './local-retail.controller-1-1-0';
import { LocalRetailService } from './local-retail.service';

@Module({
  controllers: [LocalRetailController094, LocalRetailController110],
  providers: [LocalRetailService]
})
export class LocalRetailModule {}
