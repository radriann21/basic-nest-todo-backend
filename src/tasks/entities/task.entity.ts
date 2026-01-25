import {
  Table,
  Column,
  DataType,
  Model,
  BelongsTo,
  ForeignKey,
} from 'sequelize-typescript';
import { User } from 'src/users/entities/user.entity';

@Table({
  tableName: 'tasks',
  timestamps: false,
})
export class Task extends Model {
  @Column({
    type: DataType.UUIDV4,
    defaultValue: DataType.UUIDV4,
    primaryKey: true,
  })
  declare id: string;

  @Column({ type: DataType.STRING, allowNull: false })
  declare title: string;

  @Column({ type: DataType.TEXT })
  declare description: string;

  @Column({ type: DataType.BOOLEAN, defaultValue: false })
  declare completed: boolean;

  @Column({ type: DataType.DATE, allowNull: false, defaultValue: DataType.NOW })
  declare created_at: Date;

  @Column({ type: DataType.DATE, allowNull: false, defaultValue: DataType.NOW })
  declare updated_at: Date;

  @ForeignKey(() => User)
  @Column({ type: DataType.UUID, allowNull: false })
  declare user_id: string;

  @BelongsTo(() => User)
  declare user: User;
}
