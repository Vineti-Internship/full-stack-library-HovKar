class Book < ApplicationRecord
  belongs_to :author
  validates :title, :author_id, :description, presence: true #description and rating are optional
  validates :rating, :inclusion => { :in => 0..10 }
  validates :title, length: {in: 1..60}
end
