export default (sequelize, type) => {
  const User = sequelize.define('User', {
    userId: {
      type: type.INTEGER,
      primaryKey: true,
      unique: true,
      field: 'id',
    },
    advertiserId: {
      type: type.INTEGER,
      field: 'id_anunciante',
    },
    active: {
      type: type.STRING,
      field: 'Ativo',
    },
    personType: {
      type: type.STRING,
      field: 'tipo_pessoa_funcionario',
    },
    cpfCnpj: {
      type: type.STRING,
      field: 'cnpj_cpf_funcionario',
    },
    rgIe: {
      type: type.STRING,
      field: 'rg_ie_funcionario',
    },
    name: {
      type: type.STRING,
      field: 'nome_funcionario',
    },
    birthday: {
      type: type.DATE,
      field: 'dataaniversario_funcionario',
    },
    createdAt: {
      type: type.DATE,
      field: 'datacadastro_funcionario',
    },
    address: {
      type: type.STRING,
      field: 'endereco_funcionario',
    },
    addressNumber: {
      type: type.STRING,
      field: 'nro_end_funcionario',
    },
    addressComplement: {
      type: type.STRING,
      field: 'cpl_end_funcionario',
    },
    addressNeighboorhood: {
      type: type.STRING,
      field: 'bairro_end_funcionario',
    },
    addressCity: {
      type: type.STRING,
      field: 'cidedade_end_funcionario',
    },
    addressState: {
      type: type.STRING,
      field: 'uf_end_funcionario',
    },
    addressZipcode: {
      type: type.STRING,
      field: 'cep_funcionario',
    },
    phone1RegionCode: {
      type: type.STRING,
      field: 'ddd_fone_01_funcionario',
    },
    phone1number: {
      type: type.STRING,
      field: 'nro_fone_01_funcionario',
    },
    phone2RegionCode: {
      type: type.STRING,
      field: 'ddd_fone_02_funcionario',
    },
    phone2number: {
      type: type.STRING,
      field: 'nro_fone_02_funcionario',
    },
    phone3RegionCode: {
      type: type.STRING,
      field: 'ddd_fone_03_funcionario',
    },
    phone3number: {
      type: type.STRING,
      field: 'nro_fone_03_participante',
    },
    email: {
      type: type.STRING,
      field: 'email_participante',
    },
    password: {
      type: type.STRING,
      field: 'senha_participante',
    },
    profileId: {
      type: type.INTEGER,
      field: 'id_perfil',
    },
  }, {
    tableName: 'tb_anunciantes_funcionarios',
    freezeTableName: true,
    timestamps: false,
  });
  User.associate = () => {
    // User.belongsTo(models.Advertiser,
    //   { as: 'userAdvertiser', foreingKey: 'advertiserId' });
  };
  return User;
};
