class PersonSerializer < ActiveModel::Serializer
  attributes :id, :name, :nickname, :date_of_birth, :email, :zipcode, :spouse
end
