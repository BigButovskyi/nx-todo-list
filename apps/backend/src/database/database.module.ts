import { Module } from '@nestjs/common';
import { TypeOrmConnectionModule } from './typeOrm/typeorm-connection.module';

@Module({
	imports: [TypeOrmConnectionModule],
})
export class DatabaseModule {}
