class Author < ApplicationRecord
  has_many :books
  validates :fullName, :email, presence: true
  validates :email, format: /@/
  validates :email, uniqueness: { message: "Email has been taken,please try with another email"}
end
