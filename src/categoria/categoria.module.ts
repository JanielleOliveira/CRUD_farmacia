import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ProdutoModule } from '../produto/produto.module';
import { CategoriaController } from './controllers/categoria.controller';
import { Categoria } from './entities/categoria.entity';
import { CategoriaService } from './service/categoria.service';

@Module({
  imports: [TypeOrmModule.forFeature([Categoria]), ProdutoModule],
  providers: [CategoriaService],
  controllers: [CategoriaController],
  exports: [],
})
export class CategoriaModule {}
