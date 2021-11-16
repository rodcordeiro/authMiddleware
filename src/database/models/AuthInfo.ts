import conn from '../..';
import { DataTypes, Model } from 'sequelize';

class UserInfo extends Model {}

UserInfo.init(
  {
    accessToken: DataTypes.STRING,
    codigoUsuario: DataTypes.INTEGER,
    login: DataTypes.STRING,
    nome: DataTypes.STRING,
    email: DataTypes.STRING,
    ativo: DataTypes.BOOLEAN,
    alterarSenha: DataTypes.BOOLEAN,
    codigoPerfil: DataTypes.INTEGER,
    descricaoPerfil: DataTypes.STRING,
    clientes: DataTypes.ARRAY(DataTypes.STRING),
    lider: DataTypes.BOOLEAN,
    usuInc: DataTypes.INTEGER,
    datInc: DataTypes.STRING,
    usuAlt: DataTypes.INTEGER,
    datAlt: DataTypes.STRING,
  },
  {
    sequelize: conn,
    timestamps: true,
  },
);
