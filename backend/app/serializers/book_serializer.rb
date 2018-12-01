class BookSerializer < ActiveModel::Serializer
  attributes :title, :description, :rating, author_id
  has_one :author
end
