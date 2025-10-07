import { IsNotEmpty, IsOptional } from 'class-validator';
import {
  Column,
  Entity,
  ManyToOne,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';
import { Categoria } from '../../categoria/entities/categoria.entity';

@Entity({ name: 'tb_produtos' })
export class Produto {
  @PrimaryGeneratedColumn()
  id: number;

  @IsNotEmpty()
  @Column({ length: 100, nullable: false })
  nome: string;

  @IsOptional()
  @Column({ length: 255, nullable: true })
  descricao: string;

  @IsNotEmpty()
  @Column({ type: 'decimal', precision: 10, scale: 2, nullable: false })
  preco: number;

  @IsOptional()
  @Column({ type: 'int', nullable: true })
  estoque: number;

  @IsNotEmpty()
  @Column({ type: 'date', nullable: false })
  validade: Date;

  //Relacionamento muitos para um
  @ManyToOne(() => Categoria, (categoria) => categoria.produto, {
    onDelete: 'RESTRICT',
    onUpdate: 'CASCADE',
  })
  categoria: Categoria;

  //Campo automatico para data de atualização
  @IsNotEmpty()
  @UpdateDateColumn({ name: 'atualizado_em' })
  atualizadoEm: Date;
}
