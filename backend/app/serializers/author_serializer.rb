class AuthorSerializer < ActiveModel::Serializer
  attributes :id, :fullName, :email
end
