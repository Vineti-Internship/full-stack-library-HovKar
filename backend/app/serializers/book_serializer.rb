class BookSerializer < ActiveModel::Serializer
  attributes :title, :description, :rating
  has_one :author
end
