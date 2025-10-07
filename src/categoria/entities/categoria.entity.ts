import { IsNotEmpty } from 'class-validator';
import {
  Column,
  CreateDateColumn,
  Entity,
  OneToMany,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';
import { Produto } from '../../produto/entities/produto.entity';

@Entity({ name: 'tb_categorias' })
export class Categoria {
  @PrimaryGeneratedColumn()
  id: number;

  @IsNotEmpty()
  @Column({ length: 100, nullable: false })
  nome: string;

  @IsNotEmpty()
  @Column({ length: 1000, nullable: false })
  descricao: string;

  //Relacionamento de um para muitos
  @OneToMany(() => Produto, (produto) => produto.categoria)
  produto: Produto[];

  //Campos Automáticos para data de criação de categoria
  @CreateDateColumn({ name: 'criado_em' })
  criadoEm: Date;

  //Campo automatico para data de atualização
  @UpdateDateColumn({ name: 'atualizado_em' })
  atualizadoEm: Date;
}
