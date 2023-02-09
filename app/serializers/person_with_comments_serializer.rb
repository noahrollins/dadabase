class PersonWithCommentssSerializer < ActiveModel::Serializer
    attributes :id, :name, :nickname, :date_of_birth, :email, :zipcode, :spouse
    has_many :comments
  end
  